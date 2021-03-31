import { notification } from "antd";
import api from "../config/api";
import isMappedError from "../utils/isMappedError";
import hasErrorArray from "../utils/hasErrorArray";

export async function authentication({ email, password }) {
  try {
    const {
      data: user,
      headers: { token },
    } = await api.post("/users/auth", {
      email,
      password,
    });

    const data = { user, token };

    return data;
  } catch (error) {
    if (isMappedError(error)) {
      notification.warn({
        message: "Ops...",
        description: "Email e/ou senha inválido(s).",
      });
    } else {
      notification.error({
        message: "Atenção",
        description: "Ocorreu algum problema.",
      });
    }

    return false;
  }
}

export async function create({ name, email, password }) {
  try {
    const { data: user } = await api.post("/users/", {
      name,
      email,
      password,
    });

    notification.success({
      message: "Parabéns",
      description: "Sua conta foi criada com sucesso!",
    });

    return user;
  } catch (error) {
    if (isMappedError(error)) {
      const { message } = error.response.data.error;

      if (message === "The some data don't was send correctly") {
        const { details } = error.response.data.error;

        if (hasErrorArray("E-mail must be a valid email", details)) {
          notification.warn({
            message: "Ops...",
            description: "Email inválido.",
          });
        } else if (
          hasErrorArray("password must be at least 8 characters", details)
        ) {
          notification.warn({
            message: "Ops...",
            description: "Senha precisa ter no mínimo 8 caracteres.",
          });
        } else {
          notification.warn({
            message: "Ops...",
            description:
              "Verifique se todos os campos foram preenchidos corretamente.",
          });
        }
      }
    } else {
      notification.error({
        message: "Atenção",
        description: "Ocorreu algum problema.",
      });
    }

    return false;
  }
}

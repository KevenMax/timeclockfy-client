import { notification } from "antd";
import api from "../config/api";
import isMappedError from "../utils/isMappedError";

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

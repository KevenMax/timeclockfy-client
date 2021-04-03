import { notification } from "antd";
import api from "../config/api";
import isMappedError from "../utils/isMappedError";

export async function create({ location, picture }) {
  try {
    const { data: record } = await api.post("/records/", {
      location,
      picture,
    });

    notification.success({
      message: "Ponto registrado com sucesso!",
    });

    return record;
  } catch (error) {
    if (isMappedError(error)) {
      notification.warn({
        message: "Ops...",
        description: "Algum dado não foi enviado corretamente.",
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

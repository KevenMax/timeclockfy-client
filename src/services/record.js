import { notification } from "antd";
import { format } from "date-fns";

import api from "../config/api";
import isMappedError from "../utils/isMappedError";

export async function getAllDay({ page = 1, offset = 999 }) {
  try {
    const { data: records } = await api.get(
      `/records?page=${page}&offset=${offset}`
    );

    const recordsDay = records.filter((record) => {
      const currentDate = format(new Date(), "yyyy-MM-dd");
      const recordDate = format(new Date(record.date), "yyyy-MM-dd");

      return currentDate === recordDate;
    });

    return recordsDay;
  } catch (error) {
    if (isMappedError(error)) {
      notification.warn({
        message: "Ops...",
        description:
          "Algum dado não foi enviado corretamente ao carregar os registros dos pontos",
      });
    } else {
      notification.error({
        message: "Atenção",
        description:
          "Ocorreu algum problema ao carregar os registros dos pontos.",
      });
    }

    return false;
  }
}

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

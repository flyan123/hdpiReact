import React, { useEffect } from "react";
import { notification } from "antd";

export default function MyNotification({ notiMsy }) {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (notiMsy.type) {
      api[type]({
        message: "系统提示",
        description: notiMsy.description,
      });
    }
  }, [notiMsy]);
  return <>{contextHolder}</>;
}

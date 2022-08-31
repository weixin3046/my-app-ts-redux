import { ConfigProvider } from "antd";
import antdEnUS from "antd/lib/locale/en_US";
import antdZhCN from "antd/lib/locale/zh_CN";
import { useState } from "react";

interface WebConfigProviderProps {
  children: React.ReactNode;
}

export default function WebConfigProvider({
  children,
}: WebConfigProviderProps) {
  const [color] = useState({});
  const [darkColor] = useState({});
  const [dark] = useState(false);
  const [language] = useState(true);
  ConfigProvider.config({
    theme: dark ? darkColor : color,
  });

  return (
    <ConfigProvider locale={language ? antdZhCN : antdEnUS}>
      {children}
    </ConfigProvider>
  );
}

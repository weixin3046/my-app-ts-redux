import { Layout } from "antd";
import Header from "components/Header";
import React from "react";

const { Content, Footer } = Layout;
interface WebLayoutProps {
  children: React.ReactNode;
}

const WebLayout = ({ children }: WebLayoutProps) => {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ minHeight: "800px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default WebLayout;

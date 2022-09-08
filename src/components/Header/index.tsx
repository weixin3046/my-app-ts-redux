import "./index.less";

import { BellOutlined, GlobalOutlined } from "@ant-design/icons";
import { Layout, Menu, Space } from "antd";
import Logo from "assets/images/logo.svg";
import User from "components/User";
import { AlignJustify } from "react-feather";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const { Header } = Layout;

const AppIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }

  position: relative;
`;

const HeaderPage = () => {
  const navigate = useNavigate();
  const selectChange = (value: any) => {
    switch (value) {
      case "home":
        navigate("/");
        break;
      case "/Explore":
        navigate("/Explore");
        break;
      case "/Rankings":
        navigate("/Rankings");
        break;
      case "/Rewards":
        navigate("/Rewards");
        break;
    }
  };
  const items = [
    { label: "Explore", key: "/Explore" },
    { label: "Rankings", key: "/Rankings" },
    { label: "Create", key: "/Create" },
  ];
  return (
    // <Header>
    //   <HeaderFrame>
    //     <Title>
    //       <AppIcon>
    //         <img
    //           src={Logo}
    //           alt="Hitall"
    //           className="logo"
    //           onClick={() => {
    //             selectChange("home");
    //           }}
    //         />
    //       </AppIcon>
    //     </Title>
    //     <HeaderLinks>

    //     </HeaderLinks>

    //     <HeaderControls>
    //       <HeaderElement>
    //         {/* <SwitchLanguage /> */}
    //         {/* <SwitchThemes /> */}
    //         {/* <SwitchNetWork chainInfoKey={chainInfoKey} onClick={handleClick} /> */}
    //         {/* <ConnectWallet /> */}
    //         <User />
    //       </HeaderElement>
    //     </HeaderControls>
    //   </HeaderFrame>
    // </Header>
    <Header>
      <div className="header">
        <AppIcon>
          <img
            src={Logo}
            alt="Hitall"
            className="logo"
            onClick={() => {
              selectChange("home");
            }}
          />
        </AppIcon>
        <Menu
          overflowedIndicator={<AlignJustify size={24} />}
          items={items}
          style={{ border: "none" }}
          mode="horizontal"
          onClick={function ({ key }) {
            selectChange(key);
          }}
        />
        <div className="header-controls">
          <Space size={65} align="center">
            {/* <Dribbble size={16} /> */}
            <GlobalOutlined />
            {/* <Moon size={16} /> */}
            {/* <Bell size={18} /> */}
            <BellOutlined />
            <User />
          </Space>
        </div>
      </div>
    </Header>
  );
};

export default HeaderPage;

import { Menu } from "antd";
import { AlignJustify } from "react-feather";
import Logo from "assets/images/logo.svg";
import styled from "styled-components";
import User from "components/User";

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 120px auto 1fr;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light; //背景混合模式
  max-width: 1440px;
`;

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  :hover {
    cursor: pointer;
  }
`;
const AppIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }

  position: relative;
`;

const HeaderLinks = styled.div`
  justify-self: start;
  width: fit-content;
  align-items: center;
`;

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`;
const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 0.5em;
  }
`;

const HeaderPage = () => {
  const selectChange = (value: any) => {
    switch (value) {
      case "home":
        window.location.href = "/";
        break;
      case "/Explore":
        window.location.href = "/Explore";
        break;
      case "/Rankings":
        window.location.href = "/Rankings";
        break;
      case "/Rewards":
        window.location.href = "/Rewards";
        break;
    }
  };
  const items = [
    { label: "Explore", key: "/Explore" },
    { label: "Rankings", key: "/Rankings" },
  ];
  return (
    <Header>
      <HeaderFrame>
        <Title>
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
        </Title>
        <HeaderLinks>
          <Menu
            overflowedIndicator={<AlignJustify size={24} />}
            items={items}
            style={{ border: "none" }}
            mode="horizontal"
            onClick={function ({ item, key, keyPath, domEvent }) {
              selectChange(key);
            }}
          />
        </HeaderLinks>

        <HeaderControls>
          <HeaderElement>
            {/* <SwitchLanguage /> */}
            {/* <SwitchThemes /> */}
            {/* <SwitchNetWork chainInfoKey={chainInfoKey} onClick={handleClick} /> */}
            {/* <ConnectWallet /> */}
            <User />
          </HeaderElement>
        </HeaderControls>
      </HeaderFrame>
    </Header>
  );
};

export default HeaderPage;

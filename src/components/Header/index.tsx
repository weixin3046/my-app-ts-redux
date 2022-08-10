import Web3Status from "../Web3Status";
import { Moon, Sun, Globe } from "react-feather";
import { useDarkModeManager } from "state/user/hooks";
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import useTheme from "hooks/useTheme";
import Row from "components/Row";
import { NavLink } from "react-router-dom";
import { darken } from "polished";

//一个 React 钩子，用于在 y 轴上窗口的滚动位置发生变化时更新组件
const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
  background-position: ${({ showBackground }) =>
    showBackground ? "0 -100%" : "0 0"};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px
    ${({ theme, showBackground }) =>
      showBackground ? theme.bg2 : "transparent;"};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light; //背景混合模式
`;
// 设置三种窗口下的样式
// ${({ theme }) => theme.mediaWidth.upToLarge`
//     grid-template-columns: 48px 1fr 1fr;
//   `};

//   ${({ theme }) => theme.mediaWidth.upToMedium`
//     padding:  1rem;
//     grid-template-columns: 1fr 1fr;
//   `};

//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     padding:  1rem;
//     grid-template-columns: 36px 1fr;
//   `};
const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
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
const HeaderLinks = styled(Row)`
  justify-self: center;
  /* background-color: ${({ theme }) => theme.bg0}; */
  width: fit-content;
  padding: 2px;
  border-radius: 16px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  overflow: auto;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    justify-self: start;  
    `};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    z-index: 99;
    position: fixed;
    bottom: 0; right: 50%;
    transform: translate(50%,-50%);
    margin: 0 auto;
    background-color: ${({ theme }) => theme.bg0};
    border: 1px solid ${({ theme }) => theme.bg2};
    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);
  `};
`;
const activeclassname = "ACTIVE";
const StyledNavLink = styled(NavLink).attrs({
  activeclassname,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 12px;
  word-break: break-word;
  overflow: hidden;
  white-space: nowrap;
  &.${activeclassname} {
    font-weight: 600;
    justify-content: center;
    color: ${({ theme }) => theme.text1};
  }
  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
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

  /* addresses safaris lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`;
const ToggleMenuItem = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
`;

export default function Header() {
  const [darkMode, toggleDarkMode] = useDarkModeManager();
  const { white, black } = useTheme();
  return (
    <HeaderFrame showBackground={false}>
      <Title href=".">
        <AppIcon>
          <Logo
            fill={darkMode ? white : black}
            width="100px"
            height="100%"
            title="logo"
          />
        </AppIcon>
      </Title>
      <HeaderLinks>
        <StyledNavLink to={"/Explore"}>
          <span>Explore</span>
        </StyledNavLink>
        <StyledNavLink to={"/Rankings"}>
          <span>Rankings</span>
        </StyledNavLink>
        <StyledNavLink to={"/Rewards"}>
          <span>Rewards</span>
        </StyledNavLink>
      </HeaderLinks>
      <HeaderControls>
        <HeaderElement>
          <ToggleMenuItem onClick={() => console.log("切换语言")}>
            <Globe />
          </ToggleMenuItem>
          <ToggleMenuItem onClick={() => toggleDarkMode()}>
            <div>
              {/* {darkMode ? <span>Light Theme</span> : <span>Dark Theme</span>} */}
            </div>
            {darkMode ? (
              <Sun opacity={0.6} size={16} />
            ) : (
              <Moon opacity={0.6} size={16} />
            )}
          </ToggleMenuItem>
          <Web3Status />
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  );
}

import { Button, ButtonProps } from "antd";
import { Check, ChevronDown } from "react-feather";
import styled, { useTheme } from "styled-components/macro";

export const ButtonBase = styled(Button)`
  font-weight: 600;
  border-radius: 8px;
  height: 76px;
  font-size: 24px;
  min-width: 240px;
`;

export const ButtonPrimary = styled(ButtonBase)`
  background-image: linear-gradient(
    90deg,
    rgb(0, 224, 135) 0.18%,
    rgb(0, 170, 255) 100.18%
  );
  color: #fff;
`;

export const ButtonDefault = styled(ButtonBase)`
  background-image: linear-gradient(90deg, #00e087 0.18%, #00aaff 100.18%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  border: 1px #00e087 solid;
  /* border-image: linear-gradient(90deg, #00e087 0.18%, #00aaff 100.18%) 1; */
`;

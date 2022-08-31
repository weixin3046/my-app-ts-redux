import "./inddex.less";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Image, Space } from "antd";
import NoImage from "assets/images/no-image.svg";
import styled from "styled-components";
const { Meta } = Card;

const MetaTitle = styled.div`
  text-align: center;
`;
const ContractName = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const AvatarName = styled.div`
  font-weight: 300;
  font-size: 14px;
`;

const MyAvatar = styled.div`
  float: 1;
`;

const BuyButton = styled(Button)``;
const Time = styled.div`
  text-align: left;
  padding: 16px;
`;

interface DefauldCardPageProps {
  item: any;
  AvatarSize?: number;
}

export default function DefauldCardPage({
  item,
  AvatarSize,
}: DefauldCardPageProps) {
  return (
    <>
      <Card
        className="nft-card"
        hoverable
        cover={<Image preview={false} src={NoImage} fallback={"NoImage"} />}
        actions={[
          <div key="buynow">
            <Time>3 days left</Time>
            <BuyButton block className="buy-button">
              Buy Now
            </BuyButton>
          </div>,
        ]}
      >
        <Meta
          avatar={
            <MyAvatar>
              <Avatar
                size={AvatarSize || 50}
                src={item.avatar}
                icon={<UserOutlined />}
              />
            </MyAvatar>
          }
          title={
            <MetaTitle>
              <ContractName>{item.title}</ContractName>
              <AvatarName>
                <Space>
                  <span>By</span>
                  <span style={{ color: "#00E087" }}>BAYC</span>
                </Space>
              </AvatarName>
            </MetaTitle>
          }
          description={item.description}
        ></Meta>
      </Card>
    </>
  );
}

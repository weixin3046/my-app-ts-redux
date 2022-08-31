import "./inddex.less";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Image, Space, Spin, Typography } from "antd";
import NoImage from "assets/images/no-image.svg";
import useGetNftUri from "hooks/useGetNftUri";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { Meta } = Card;
const { Paragraph } = Typography;

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

interface DefauldCardPageProps {
  item: any;
  AvatarSize?: number;
  ImageSize?: number;
  height?: number;
}

export default function DefauldCardPage({
  item,
  AvatarSize,
  ImageSize,
  height,
}: DefauldCardPageProps) {
  const { data, loading } = useGetNftUri(item.uri);
  return (
    <>
      <Link to={"/Explore/" + item.address} key={item.id}>
        <Card
          style={{ height: height + "px" }}
          className="contract-card"
          hoverable
          cover={
            <Spin spinning={loading}>
              <div style={{ height: ImageSize + "px", overflow: "hidden" }}>
                <Image
                  width={"100%"}
                  preview={false}
                  src={data?.image || NoImage}
                  fallback={NoImage}
                  placeholder={true}
                />
              </div>
            </Spin>
          }
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
                <ContractName>{item?.name}</ContractName>
                <AvatarName>
                  <Space>
                    <span>By</span>
                    <span style={{ color: "#00E087" }}>{data?.compiler}</span>
                  </Space>
                </AvatarName>
              </MetaTitle>
            }
            description={
              <Paragraph ellipsis={{ rows: 4 }}>{data?.description}</Paragraph>
            }
          ></Meta>
        </Card>
      </Link>
    </>
  );
}

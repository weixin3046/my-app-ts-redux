import { Avatar, Button, Card, List, Space, Image } from "antd";
import { AvatarSize } from "antd/lib/avatar/SizeContext";
import {
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import NoImage from "assets/images/no-image.svg";
import "./inddex.less";
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

interface ContractCardPageProps {
  loading?: boolean;
  data: any[];
  gutter?: number;
  column?: number;
  AvatarSize?: AvatarSize;
  title?: string;
}

export default function ContractCardPage({
  loading,
  data,
  gutter,
  column,
  AvatarSize,
  title,
}: ContractCardPageProps) {
  return (
    <>
      <List
        loading={loading}
        grid={{ gutter: gutter || 24, column: column || 4 }}
        dataSource={data}
        rowKey={(item) => item.id}
        renderItem={(item: any) => (
          <List.Item>
            <Card
              className="contract-card"
              hoverable
              cover={
                <Image preview={false} src={NoImage} fallback={"NoImage"} />
              }
              // actions={[<Button block>buy</Button>]}
              actions={[<Button block>buy</Button>]}
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
          </List.Item>
        )}
      />
    </>
  );
}

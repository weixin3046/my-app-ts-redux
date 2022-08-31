import { Avatar, List, Space } from "antd";
import { ButtonDefault } from "components/Button";
import { Content } from "components/Content";
import styled from "styled-components";

const Title = styled.div`
  padding: 50px 0;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
`;
const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rank = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const ThickText = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const ThinText = styled.div`
  font-size: 14px;
  opacity: ${(props) => (props.color ? 1 : 0.6)};
  color: ${(props) => (props.color ? props.color : "#000")};
`;

const HandleButton = styled.div`
  text-align: center;
  padding: 70px 0;
`;

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];

export default function TopCollectionsPage() {
  // const { data } = useQuery(FeaturedGql);
  return (
    <Content>
      <Title>Top Collections Today</Title>
      <List
        style={{ padding: "37.5px" }}
        dataSource={data || []}
        grid={{
          gutter: 75,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                <Space size={20}>
                  <Rank>1</Rank>
                  <Avatar size={54} src={"item"} />
                </Space>
              }
              title={
                <RowBetween>
                  <ThickText>{"item"}</ThickText>
                  <ThickText>{"item"}</ThickText>
                </RowBetween>
              }
              description={
                <RowBetween>
                  <ThinText>dd</ThinText>
                  <ThinText color="red">cc</ThinText>
                </RowBetween>
              }
            />
          </List.Item>
        )}
      />
      <HandleButton>
        <ButtonDefault>Rankings</ButtonDefault>
      </HandleButton>
    </Content>
  );
}

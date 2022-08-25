import ContractCardPage from "components/ContractCard";
import styled from "styled-components";

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function FeaturedPage() {
  return (
    <Content>
      <ContractCardPage
        data={[
          {
            id: 1,
            title: "ds",
            description:
              "Subscapes by Matt DesLauriers - Art Blocks CuratedSubscapes by Matt DesLauriers ...",
          },
          {
            id: 2,
            title: "ds",
            description:
              "Subscapes by Matt DesLauriers - Art Blocks CuratedSubscapes by Matt DesLauriers ...",
          },
          {
            id: 3,
            title: "ds",
            description:
              "Subscapes by Matt DesLauriers - Art Blocks CuratedSubscapes by Matt DesLauriers ...",
          },
          {
            id: 4,
            title: "ds",
            description:
              "Subscapes by Matt DesLauriers - Art Blocks CuratedSubscapes by Matt DesLauriers ...",
          },
          {
            id: 5,
            title: "ds",
            description:
              "Subscapes by Matt DesLauriers - Art Blocks CuratedSubscapes by Matt DesLauriers ...",
          },
        ]}
      />
    </Content>
  );
}

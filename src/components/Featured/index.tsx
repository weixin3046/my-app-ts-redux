import { Carousel, Col, Row } from "antd";
import styled from "styled-components";
import DefauldCardPage from "components/ContractCard/DefaultCard";
import ArrowLeftCircle from "assets/images/arrow-left-circle.svg";
import ArrowRightCircle from "assets/images/arrow-right-circle.svg";
import "./index.less";
import { ButtonDefault } from "components/Button";
import { useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import { FeaturedGql } from "apollographql/home";

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const LaunchpadWrap = styled.div`
  padding-top: 105px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  padding: 50px 0;
`;

export default function FeaturedPage() {
  const [list, setList] = useState<any[]>();
  const { data } = useQuery(FeaturedGql);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  useMemo(() => {
    if (!data) return;
    var result = [];
    for (var i = 0, len = data.nftcontracts.length; i < len; i += 3) {
      result.push(data.nftcontracts.slice(i, i + 3));
    }
    setList(result);
  }, [data]);

  return (
    <Content>
      <Title>Featured Projects</Title>
      <Carousel
        afterChange={onChange}
        arrows={true}
        nextArrow={<img src={ArrowLeftCircle} alt="prev" />}
        prevArrow={<img src={ArrowRightCircle} alt="next" />}
        dots={{ className: "carousel-dots" }}
      >
        {list?.map((arr, index) => (
          <div key={index}>
            <Row gutter={[26, 0]}>
              {arr.map((item: any) => (
                <Col span={8} key={item.id}>
                  <DefauldCardPage
                    item={item}
                    ImageSize={290}
                    height={461}
                  ></DefauldCardPage>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
      <LaunchpadWrap>
        <ButtonDefault onClick={() => {}}>Launchpad</ButtonDefault>
      </LaunchpadWrap>
    </Content>
  );
}

import SaylaniGuide from "Components/SalyaniGuide/SaylaniGuide";
import React from "react";
import styled from "styled-components";

const Service = () => {
  return (
    <Container>
      <AboutSection>
        <Aboutimg></Aboutimg>
        <Overlay>
          <LeftSide>
            <Text>Services - Education - Technical Education - SMIT</Text>
            <Heading>Saylani Mass IT Training</Heading>
            <Text>
              {" "}
              Today is the age of information technology and we aim to equip our
              youth with computer programming skills and prepare them for the
              development of the country. In this regard, our Saylani Mass IT
              Training Program providing vocational training to more than 75,000
              students in Web and Mobile Application Development, CCNA, Graphics
              Designing, Computer Based Accounting in Karachi, Hyderabad,
              Faisalabad, Islamabad. Our goal is to develop more than 1 million
              software developers across the country, which will add about $100
              billion annually to Pakistan's economy.
            </Text>
          </LeftSide>
          <RightSide>
            <RightSideImg src="https://res.cloudinary.com/saylani-welfare/image/upload/v1646497311/website-images/static/24.jpg" />
          </RightSide>
        </Overlay>
      </AboutSection>
      <SaylaniGuide />
    </Container>
  );
};

export default Service;

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;
const Aboutimg = styled.div`
  width: 100%;
  height: 60vh;
  z-index: 0;
  background-image: url("https://mail.saylaniwelfare.com/static/media/page_header.ee6c9895d66d7d7cce3a.png");
  position: relative;
  border-radius: 25px;
`;

const AboutSection = styled.div`
  width: 80%;
  padding-bottom: 1rem;
`;
const Overlay = styled.div`
  position: absolute;
  top: 5rem;
  width: 80%;
  height: 60vh;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-around;

  border-radius: 25px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;
const LeftSide = styled.div`
  width: 45%;
  padding-top: 5rem;
`;
const RightSide = styled.div`
  width: 45%;
  padding-top: 4.5rem;
`;
const Text = styled.p`
  font-family: "inter-medium";
  margin: 0;
  color: ${({ theme }) => theme.dark};
  font-size: 1.2rem;
  line-height: 2rem;
`;
const Heading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.dark};
`;
const RightSideImg = styled.img`
  width: 100%;
  border-radius: 25px;
`;

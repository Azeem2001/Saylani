import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <Footerimg src="./Assets/footer_bg.png" alt="" />
      {/* <FooterContainer> */}
      <FooterItem>
        <ItemOne>
          <ImageDiv>
            <Image src="./Assets/saylani_logo.png" />
          </ImageDiv>
          <LogoDiv>
            <ImageLogo src="./Assets/facebook_logo.png" />
            <ImageLogo src="./Assets/twitter_logo.png" />
            <ImageLogo src="./Assets/youtube_logo.png" />
          </LogoDiv>
        </ItemOne>
        <ItemTwo>
          <Heading>About</Heading>
          <Text>Chairman</Text>
          <Text>Message</Text>
          <Text>Annual Report</Text>
          <Text>Bank Detail</Text>
        </ItemTwo>
        <ItemTwo>
          <Heading>Explore</Heading>
          <Text>News</Text>
          <Text>Media</Text>
          <Text>Contact</Text>
          <Text>Donation</Text>
        </ItemTwo>
        <ItemTwo>
          <Heading>Contact</Heading>
          <Paragraphr>
            A-25, Bahadurabad Chowrangi Karachi, Pakistan UAN: 111-729-526
            (+0092-213)4130786-90 CELL: 92-311-1729526 USA NO +1(716)941 7792 UK
            NO (+44)115 970 6256
          </Paragraphr>
        </ItemTwo>
        <ItemOne>
          <Image src="./Assets/stamp.png" />
        </ItemOne>
      </FooterItem>
      {/* </FooterContainer> */}
    </FooterWrapper>
  );
};

export default Footer;
const FooterWrapper = styled.div`
  width: calc(100% - 4rem);
  height: 100%;
  background-color: ${({ theme }) => theme.dark};
  position: relative;
  padding: 2rem;
`;
const Footerimg = styled.img`
  width: 100%;
  height: fit-content;
`;
const FooterContainer = styled.div`
  width: calc(100% - 4rem);
  padding: 2rem;
  border-top: 2px solid ${({ theme }) => theme.textLight};
`;
const FooterItem = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  position: absolute;
  top: 0;
  left: 0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 90%;
    margin: 0;
  }
`;
const ItemOne = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Image = styled.img`
  width: 90%;
`;
const ImageDiv = styled.div``;
const LogoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    gap: 3rem;
  }
`;
const ImageLogo = styled.img`
  margin-left: 1rem;
  border-radius: 10px;
`;
const ItemTwo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Heading = styled.h3`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.white};
  font-family: "inter-medium";
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.white};
  font-family: "inter-medium";
`;
const Paragraphr = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.white};
  font-family: "inter-medium";
  width: 60%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    line-height: 2rem;
  }
`;

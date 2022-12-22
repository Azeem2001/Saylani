import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 35vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundDark};
  border-top: 2px solid ${({ theme }) => theme.textLight};
`;
const FooterItem = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemOne = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: flex-start;
  align-items: flex-start;
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
`;
const Heading = styled.h3`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textLight};
  font-family: "inter-medium";
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.textLight};
  font-family: "inter-medium";
`;
const Paragraphr = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.textLight};
  font-family: "inter-medium";
  width: 60%;
`;

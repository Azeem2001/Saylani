import React from "react";
import styled from "styled-components";

const SaylaniGuide = () => {
  return (
    <Container>
      <GuideContainer>
        <Item1></Item1>
        <Item2>
          <Heading>Saylani Guide</Heading>
          <InputSection>
            <Input type="email" placeholder="Enter E-Mail Address" />
            <Button>Subscribe</Button>
          </InputSection>
        </Item2>
      </GuideContainer>
    </Container>
  );
};

export default SaylaniGuide;
const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    transform: translateY(120px);
  }
`;
const GuideContainer = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`;
const Item1 = styled.div`
  background-image: url("https://mail.saylaniwelfare.com/static/media/guide_back.3a5127e910c15a49f875.png");
  height: 30vh;
  width: 100%;
  border-radius: 20px;
  @media only screen and (max-width: 767px) {
    height: 60vh;
  }
`;
const Item2 = styled.div`
  height: 30vh;
  width: 100%;
  background-color: rgba(79, 168, 23, 0.45);
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 20px;
  @media only screen and (max-width: 767px) {
    height: 60vh;
  }
`;
const Heading = styled.h1`
  font-size: 3rem;
  font-family: "inter-medium";
  color: ${({ theme }) => theme.textDark};
  @media only screen and (max-width: 767px) {
    font-size: 1.4rem;
  }
`;
const InputSection = styled.div`
  display: flex;
  gap: 1.5rem;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  padding: 1.2rem;
  font-size: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  background: transparent;
  border-radius: 8px;
  color: ${({ theme }) => theme.textDark};
  @media only screen and (max-width: 767px) {
    width: calc(100% - 2.5rem);
  }
  ::placeholder {
    color: ${({ theme }) => theme.textDark};
  }
  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  font-size: 1.5rem;
  padding: 0 1.5rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textDark};

  @media only screen and (max-width: 767px) {
    width: 200px;
    height: 50px;
    margin: 0 auto;
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

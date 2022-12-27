import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoCard = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <>
      <Container>
        <Card>
          <ImgWrapper>
            <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1672035495/website-images/dynamic/65d5721e-c6a6-41c6-aac0-66a78f852ab3.jpg"
              alt="film_logo"
            />
          </ImgWrapper>
          <IconWrapper onClick={() => setIsTrue(true)}>
            <img
              src="data:image/png;base64,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"
              alt="vedio-player"
            />
          </IconWrapper>
          <Heading>BECOME AN INFLUENCER</Heading>
          <Text>#Organisation #Charity</Text>
        </Card>
      </Container>
      {isTrue && (
        <ModalContainer>
          <CustomModal>
            <CrossIconWrapper onClick={() => setIsTrue(false)}>
              <CrossImage src="/Assets/cross_icon.svg" alt="cross icon" />
            </CrossIconWrapper>
            <Wrapper>
              <PlayerWrapper>
                <ReactPlayer
                  width={"100%"}
                  height="100%"
                  url="https://www.youtube.com/watch?v=gdx7gN1UyX0"
                  playing={true}
                  muted={true}
                  controls={true}
                />
              </PlayerWrapper>
              <btnWrapper>
                <Button onClick={() => setIsTrue(false)}>Click Me..</Button>
              </btnWrapper>
            </Wrapper>
          </CustomModal>
        </ModalContainer>
      )}
    </>
  );
};

export default VideoCard;
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.textDark};
`;
const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 8px;
    height: 22vh;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 20%;
  left: 40%;

  /* bottom: 0; */
  img {
    width: 100%;
    height: 70px;
  }
`;
const Heading = styled.h1`
  font-size: 1.2rem;
  line-height: 1rem;
  font-family: "inter-medium";
  color: ${({ theme }) => theme.textDark};
`;
const Text = styled.p`
  color: ${({ theme }) => theme.textDark};
  padding: 0;
  font-family: "inter-light";
`;
const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;
const CustomModal = styled.div`
  padding: 1rem;
  width: 60%;
  height: 70vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
  background: ${({ theme }) => theme.backgroundDark};
  border-radius: 8px;
`;
const CrossIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const CrossImage = styled.img`
  cursor: pointer;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const btnWrapper = styled.div`
  width: 80%;
`;
const Button = styled.button`
  width: 500px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: "inter-medium";
  border-radius: 8px;
  font-size: 1.5rem;
  border: none;
  height: 5vh;
  margin-top: 2.5rem;
`;
const PlayerWrapper = styled.div`
  height: 55vh;
  width: 100%;
`;

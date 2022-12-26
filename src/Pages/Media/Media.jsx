import React from "react";
import styled from "styled-components";
import VideoCard from "Components/VideoCard/VideoCard";
import SaylaniGuide from "Components/SalyaniGuide/SaylaniGuide";

const Media = () => {
  return (
    <Container>
      <MediaContainer>
        <Item></Item>
        <ItemOne>
          <Div>
            <Heading>Media</Heading>
          </Div>
        </ItemOne>
        <VideoWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
        </VideoWrapper>
        <VideoWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
        </VideoWrapper>
        <VideoWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
          <CardWrapper>
            <VideoCard />
          </CardWrapper>
        </VideoWrapper>
      </MediaContainer>
      <SaylaniGuide />
    </Container>
  );
};

export default Media;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundDark};
`;
const MediaContainer = styled.div`
  width: 80%;
  margin-top: 5rem;
  margin-bottom: 1rem;
`;
const Item = styled.div`
  background-position: bottom;
  height: 30vh;
  background-image: url("https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80");
  background-repeat: no-repeat;
  border-radius: 10px;

  zoom: 80%;
  position: relative;
`;
const ItemOne = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  height: 32.6vh;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  transform: translateY(50px);
  background-color: ${({ theme }) => theme.backgroundDark};
  border-radius: 8px;
`;
const Heading = styled.h1`
  padding: 0;
  margin: 1rem 0;
  transform: translateY(-2px);
  color: ${({ theme }) => theme.textDark};
`;
const VideoWrapper = styled.div`
  display: flex;
  width: calc(100% - 4rem);
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;
const CardWrapper = styled.div`
  width: 30%;
  height: 30vh;
`;

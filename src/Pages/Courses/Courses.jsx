import CustomCard from "Components/Card/Card";
import SaylaniGuide from "Components/SalyaniGuide/SaylaniGuide";
import React from "react";
import styled from "styled-components";

const Courses = () => {
  return (
    <Container>
      <MediaContainer>
        <Item></Item>
        <ItemOne>
          <Div>
            <Heading>Courses</Heading>
          </Div>
        </ItemOne>
        <CardWrapper>
          <CustomCard image={"./Assets/card_1.jpg"} heading={"Techno Kids"} />
          <CustomCard image={"./Assets/card_2.png"} heading={"CCNP"} />
          <CustomCard
            image={"./Assets/card_3.jpg"}
            heading={"Mobile Repairing"}
          />
          <CustomCard
            image={"./Assets/card_4.jpg"}
            heading={"Web and Mobile"}
          />
          <CustomCard image={"./Assets/card_1.jpg"} heading={"Techno Kids"} />
          <CustomCard image={"./Assets/card_2.png"} heading={"CCNP"} />
          <CustomCard
            image={"./Assets/card_3.jpg"}
            heading={"Mobile Repairing"}
          />
          <CustomCard
            image={"./Assets/card_4.jpg"}
            heading={"Web and Mobile"}
          />
          <CustomCard
            image={"./Assets/card_3.jpg"}
            heading={"Mobile Repairing"}
          />
        </CardWrapper>
      </MediaContainer>
      <SaylaniGuide />
    </Container>
  );
};

export default Courses;
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
const CardWrapper = styled.div`
  width: 100%;
  transition: 3s ease-in-out;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

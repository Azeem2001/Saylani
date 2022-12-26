import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import CustomCard from "Components/Card/Card";
const Home = ({ image, heading }) => {
  var items = [
    {
      image: "./Assets/carosal_image4.jpg",
      id: "1",
    },
    {
      image: "./Assets/carosal_image5.jpg",
      id: "2",
    },
    {
      image: "./Assets/carosal_image3.jpg",
      id: "",
    },
  ];
  var testmonial = [
    {
      avatar: "./Assets/avatar1.jpg",
      name: "Asif Ismail",
      post: "(C.O.O. & Director, Premier Cables Pvt. Ltd)",
      text: "When we talk about serving humanity, no second thought occurs other than Saylani Welfare Trust. Saylani is doing a tremendous job in terms of everything they do for a troubled humanity. From offering food to the hungry to arranging jobs for jobless people, arranging marriages and dowry for orphaned girls, offering free medical facilities, and much more. We sincerely wish them success in their future endeavors and in raising their standards of serving mankind in a better and more professional way.",
    },
    {
      avatar: "./Assets/avatar2.jpg",
      name: "Arshad Wali Muhammad",
      post: "(Group Director, Gerry’s Group)",
      text: "Saylani Welfare Trust is a name that needs no introduction today. The journey this team embarked upon was made possible owing to their zeal, enthusiasm & commitment to the society and by the grace of Allah (SWT), it has become a name that we need and not just the one we want. I wish Saylani’s team all the success and blessing that they deserve for future, May God bless Saylani and ensure prosperity and happiness for our people, Ameen!",
    },
  ];
  return (
    <HomeContainer>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i}>
            <Image src={item?.image} alt="" />
          </Item>
        ))}
      </Carousel>

      <Wrapper>
        <Heading>Courses</Heading>
        <Cards>
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
        </Cards>
      </Wrapper>
      <CarosalWrapper>
        <CustomCarosal>
          <Carosalcontainer>
            <Subheading>Our Testimonials</Subheading>
            <MainHeading>What They Say?</MainHeading>
          </Carosalcontainer>
          <CarouselItem>
            {testmonial.map((items, i) => (
              <CarosalItem>
                <Avatar src={items?.avatar} alt="avatar" />
                <Name>{items?.name}</Name>
                <Post>{items?.post}</Post>
                <Para>{items?.text}</Para>
              </CarosalItem>
            ))}
          </CarouselItem>
        </CustomCarosal>
      </CarosalWrapper>
    </HomeContainer>
  );
};

export default Home;
const HomeContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundDark};
  padding-bottom: 2rem;
  margin-top: 5rem;
`;
const Item = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 85vh;

  @media only screen and (max-width: 768px) {
    height: 30vh;
  }
`;
const Wrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 1.5rem;
`;
const Cards = styled.div`
  width: 90%;
  margin: 0 auto;
  transition: 3s ease-in-out;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Heading = styled.h2`
  font-family: "inter-Bold";
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textLight};
`;
const CarosalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;
const CustomCarosal = styled.div`
  width: 80%;
`;
const Carosalcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Subheading = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.secondary};
  font-family: "inter-Light";
  letter-spacing: 1.5px;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    word-spacing: 1px;
    letter-spacing: 1;
  }
`;
const MainHeading = styled.h1`
  color: ${({ theme }) => theme.textLight};
  font-family: "inter-medium";
  word-spacing: 10px;
  letter-spacing: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    word-spacing: 5px;
    letter-spacing: 1;
  }
`;
const CarosalItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const Name = styled.h2`
  margin: 0;
  font-family: "inter-medium";
  color: ${({ theme }) => theme.textLight};
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
const Post = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.textLight};
  font-family: "inter-light";
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;
const Para = styled.p`
  font-size: 1.2rem;
  font-family: "inter-light";
  text-align: center;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.textLight};
  font-family: "inter-light";

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const CarouselItem = styled(Carousel)`
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 1.5rem;
  border-radius: 20px;
  z-index: 0;
`;

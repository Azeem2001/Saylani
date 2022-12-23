import SaylaniGuide from "Components/SalyaniGuide/SaylaniGuide";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <AboutSection>
        <Aboutimg></Aboutimg>
        <Overlay>
          <LeftSide>
            <Text1>About - Introduction</Text1>
            <Heading1>Introduction</Heading1>
            <Text1>
              {" "}
              Saylani Welfare International Trust has been serving humanity for
              22 years. Saylani has spent around 7 billion rupees in the service
              of humanity in 2021 and our plan is to spend about 11 billion
              rupees for this cause in 2022.
            </Text1>
          </LeftSide>
          <RightSide>
            <RightSideImg src="https://res.cloudinary.com/saylani-welfare/image/upload/v1647252901/website-images/static/58.jpg" />
          </RightSide>
        </Overlay>
        <MoreSection>
          <Heading>More</Heading>
          <Text>
            Saylani Welfare International Trust has been working for the last 22
            years to improve the conditions of the less privileged, helpless,
            and handicapped individuals. The organization is working day and
            night to make life happier, especially for the middle class, lower
            middle class and even lower class. At time of establishing the
            organization, the founder of Saylani Welfare International Trust and
            a few of his associates had made a commitment to serve the
            distressed people living in Pakistan and abroad in all stages of
            life. It is a blessing in disguise that today the organization is
            serving humanity in more than 63 areas of life without any
            discrimination.
          </Text>
          <Text>
            The soul, founder and patron of this organization is Hazrat Allama
            Maulana Muhammad Bashir Farooqi. He is also a well-known spiritual
            person and Islamic scholar in the Islamic world. It is the result of
            his efforts that today Saylani Welfare International Trust is
            serving humanity all over the world.
          </Text>
          <Text>
            The organization started out as a rented house and today has at
            least 630 branches worldwide. The organization also has more than
            630 Dastarkhwan, where thousands of employees are employed. Today,
            the organization spends more than 7 billion annually on the service
            and welfare of humanity. Not only this, but more than 63 spheres of
            life from birth to death (including food, health, education, social
            welfare, clean water, marriage, mass I.T training, vocational
            training, assistance to Syrian and Burmese refugees, pilgrim
            services, school services fees, easy loans, easy employment,
            hairdressing, medical & diagnostic center, laboratory tests, x-ray,
            ultrasound, ECG, consultant clinic, mobile dining, mobile clinic,
            mobile air care clinic & operation theater, and in case of natural
            disasters aid) our organization is serving humanity.
          </Text>
          <Text>
            More than 300,000 people are benefited daily by the Saylani. The
            organization provides vocational training to unskilled people in
            various fields, renting of poor people houses, school fees and
            annual expenses of their children, assistance in marriage of their
            daughters, loan facility for running small scale business, rickshaws
            and motorbikes for employment, stalls, shop delivery, finger chips
            machine, sewing machines for women and other items are provided.
          </Text>
        </MoreSection>
        <SaylaniEducation>
          <EducationHeading>Saylani Education</EducationHeading>
          <List>
            <ListItem>
              <Span>★</Span> Saylani Schooling System
            </ListItem>
            <ListItem>
              <Span>★</Span> Textile Training Program
            </ListItem>
            <ListItem>
              <Span>★</Span> R.O. Plant Technician
            </ListItem>
            <ListItem>
              <Span>★</Span> SMIT program
            </ListItem>
            <ListItem>
              <Span>★</Span> Motor Bike Mechanic Training
            </ListItem>
            <ListItem>
              <Span>★</Span> Mobile Repairing
            </ListItem>
            <ListItem>
              <Span>★</Span> SBIL
            </ListItem>
            <ListItem>
              <Span>★</Span> PIAIC
            </ListItem>
            <ListItem>
              <Span>★</Span> Saylani Online Quran Academy
            </ListItem>
            <ListItem>
              <Span>★</Span> Madarsa-e-Faizan-e-Mustafa
            </ListItem>
          </List>
        </SaylaniEducation>
      </AboutSection>

      <SaylaniGuide />
    </Container>
  );
};

export default About;

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const RightSide = styled.div`
  width: 45%;
  padding-top: 4.5rem;
`;
const Text = styled.p`
  font-family: "inter-medium";
  margin: 0;
  color: ${({ theme }) => theme.textLight};
  font-size: 1.2rem;
  line-height: 2rem;
`;
const Heading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.primary};
`;
const RightSideImg = styled.img`
  width: 100%;
  border-radius: 25px;
`;
const MoreSection = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SaylaniEducation = styled.div`
  margin-top: 1rem;
`;
const EducationHeading = styled.li`
  list-style-type: circle;
  list-style-type: circle;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};

  font-family: "inter-bold";
  ::marker {
    color: ${({ theme }) => theme.grey};
  }
`;
const Text1 = styled.p`
  font-family: "inter-medium";
  margin: 0;
  color: ${({ theme }) => theme.dark};
  font-size: 1.2rem;
  line-height: 2rem;
`;
const Heading1 = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.dark};
`;
const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;
const ListItem = styled.p`
  display: flex;
  width: 30%;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.2rem;
  gap: 1rem;
  vertical-align: top;
  font-family: "inter-medium";
  color: ${({ theme }) => theme.textLight};
`;
const Span = styled.div`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;

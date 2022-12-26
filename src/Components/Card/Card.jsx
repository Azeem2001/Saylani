import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import Form from "Components/Form/Form";

const CustomCard = ({ image, heading }) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <>
      <Container>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250px"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                fontWeight="bold"
                fontFamily="inter-medium"
              >
                {heading}
              </Typography>
              <Typography
                variant="body2"
                fontFamily="inter-medium"
                color="text.secondary"
              >
                Dear Pakistani Kids (Both Girls & Boys), Here Comes Another
                Opportunity for all of you in this winter vacations!! <br /> We
                are offering this online course to school-going kids to educate
                them about upcoming worldwide technologies.
              </Typography>

              <Custombutton onClick={() => setIsTrue(true)}>
                Fill the Form
              </Custombutton>
              <Typography
                fontWeight="700"
                fontFamily="inter-medium"
                fontSize="0.7rem"
              >
                If Your are Interested this Course please fill the form.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      {isTrue && (
        <ModalContainer>
          <CustomModal>
            <CrossIconWrapper onClick={() => setIsTrue(false)}>
              <CrossImage src="/Assets/cross_icon.svg" alt="cross icon" />
            </CrossIconWrapper>
            <Wrapper>
              <Icon src="./Assets/saylani_logo.png" alt="logo" />
              <ErrHeading>Course Rigestration Form</ErrHeading>
              <Form />
              <Content>
                <Ol>
                  <LI>
                    I hereby, solemnly declare that the data and facts mentioned
                    herein are true and correct to the best of my knowledge.
                    Further, I will abide by all the established and future
                    regulations and policies of SWIT
                  </LI>
                  <LI>
                    I hereby accept the responsibilities of good conduct and
                    guarantee that I will not be involved in any other activity,
                    political or ethical, but learning during my stay in the
                    program.
                  </LI>
                  <LI>
                    Defiance will render my admission canceled at any point in
                    time.
                  </LI>
                  <LI>
                    Upon completion, of the course, I will complete the required
                    project by SWIT.
                  </LI>
                  <LI>
                    It's mandatory for female students to wear abaya/hijab in
                    the class
                  </LI>
                </Ol>
              </Content>

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

export default CustomCard;

const Container = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
const CrossIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const CrossImage = styled.img`
  cursor: pointer;
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
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ErrHeading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  line-height: 2rem;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Inter-Semi-Bold";
  color: ${({ theme }) => theme.grey};
`;
const btnWrapper = styled.div`
  width: 80%;
`;

const Icon = styled.img`
  width: 30%;
  margin-bottom: 0.5rem;
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
`;
const Custombutton = styled.button`
  margin: 1rem 0;
  width: 40%;
  margin-bottom: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-family: "inter-medium";
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;
const Ol = styled.ol`
  padding: 0 1rem;
`;
const LI = styled.li`
  font-size: 1rem;
  padding-top: 0.5rem;
  font-family: "inter-medium";
  color: ${({ theme }) => theme.textDark};
`;

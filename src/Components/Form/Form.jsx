import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FileUpload from "react-mui-fileuploader";

const Form = () => {
  const handleFileUploadError = (error) => {
    // Do something...
  };

  const handleFilesChange = (files) => {
    // Do something...
  };
  const cities = [
    {
      value: "USD",
      label: "Karachi",
    },
    {
      value: "EUR",
      label: "Islamabad",
    },
    {
      value: "BTC",
      label: "Hydrabad",
    },
    {
      value: "JPY",
      label: "Lahore",
    },
  ];
  const course = [
    {
      value: "USD",
      label: "Selected",
    },
  ];
  const Qualification = [
    {
      value: "LastQualification",
      label: "Last Qualification",
    },
    {
      value: "Grades",
      label: "Grades 5-8",
    },
    {
      value: "Matric",
      label: "Matric",
    },
    {
      value: "Intdermiadiate",
      label: "Intdermiadiate",
    },
    {
      value: "UnderGraduate",
      label: "UnderGraduate",
    },
  ];
  return (
    <Container>
      <CustomForm>
        <Item>
          <TextField
            id="outlined-select-currency"
            select
            label="City"
            defaultValue="EUR"
            fullWidth
          >
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Item>
        <Item>
          <TextField
            id="outlined-select-currency"
            select
            label="Courses"
            fullWidth
          >
            {course.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Item>
        <Item>
          <TextField
            id="outlined-select-currency"
            label="Full Name"
            placeholder="Full Name"
            fullWidth
          />
        </Item>
        <Item>
          <TextField
            id="outlined-select-currency"
            label="Father Name"
            placeholder="Father Name"
            fullWidth
          />
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            label="Email"
            fullWidth
            placeholder="Email"
          />
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            type="number"
            label="Phone"
            fullWidth
            placeholder="Phone"
          />
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            type="number"
            label="CNIC"
            fullWidth
            placeholder="CNIC"
          />
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            type="number"
            label="Father CNIC (Optional)"
            fullWidth
            placeholder="Father CNIC"
          />
        </Item>
        <Item>
          <TextField id="outlined-helperText" type="date" fullWidth />
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            type="text"
            label="Gender"
            fullWidth
            placeholder="Gender"
          />
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            type="text"
            label="Address"
            fullWidth
            placeholder="Address"
          />
        </Item>
        <Item>
          <TextField
            id="outlined-select-currency"
            select
            label="Last Qualification"
            defaultValue="EUR"
            fullWidth
          >
            {Qualification.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Item>
        <Item>
          <TextField
            id="outlined-helperText"
            type="text"
            label="Do you have a laptop"
            fullWidth
            placeholder="Address"
            iSfullWidth
          />
        </Item>
        <Item>
          {/* <FileUpload
            multiFile={false}
            title=""
            buttonLabel="Upload Image"
            buttonRemoveLabel="Remove all"
            leftLabel=""
            rightLabel=""
            maxUploadFiles={1}
            maxFilesContainerHeight={357}
            errorSizeMessage={
              "fill it or remove it to use the default error message"
            }
            allowedExtensions={["jpg", "jpeg", "png", "pdf", "wbeg"]}
            onFilesChange={handleFilesChange}
            onError={handleFileUploadError}
            imageSrc={""}
            bannerProps={{ elevation: 0, variant: "outlined" }}
            containerProps={{ elevation: 0, variant: "outlined" }}
            placeholderImageDimension={{
              xs: { width: 128, height: 128 },
              sm: { width: 128, height: 128 },
              md: { width: 164, height: 164 },
              lg: { width: 256, height: 256 },
            }} */}
        </Item>
      </CustomForm>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  z-index: 10000;
  width: 100%;

  margin-top: 2rem;
`;
const CustomForm = styled.form`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: flex-start;
`;
const Item = styled.div`
  width: 100%;
  .css-ibczwg-MuiPaper-root {
    background-color: transparent;
    padding: 0;
  }
  .css-p171ze-MuiPaper-root {
    background-color: transparent;
    color: ${({ theme }) => theme.textDark};
    margin: 0;
    border: none;
  }
  .MuiTypography-body1 {
    /* display: none; */
  }
  .MuiGrid-root .MuiGrid-item {
    background-color: transparent !important;
    width: 100%;
    display: flex;
    img {
      display: none;
    }
    .MuiTypography-h5 {
      display: none;
    }
    button {
      color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }
`;

import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const Form = () => {
  const currencies = [
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

  return (
    <Container>
      <CustomForm>
        <Item>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your City"
            fullWidth
          >
            {currencies.map((option) => (
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
            label="Select"
            defaultValue="EUR"
            helperText="Please select your City"
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Item>
      </CustomForm>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  z-index: 10000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;
const CustomForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;
const Item = styled.div`
  width: 100%;
`;

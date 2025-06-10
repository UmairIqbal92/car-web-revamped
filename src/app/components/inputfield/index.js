'use client';

import { TextField, styled } from "@mui/material";
import Colors from "@/app/assets/styles";
import "@fontsource/poppins";

const CustomTextField = styled(TextField)({
  background: Colors.white,
  "& .MuiOutlinedInput-root": {
    fontFamily: "Poppins",
  }
});

function InputField(props) {
  return (
    <CustomTextField
      {...props}
    />
  );
};

export default InputField;
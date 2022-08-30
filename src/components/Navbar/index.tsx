import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";

type NavbarProps = {
  children?: React.ReactNode;
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        p={2}
        sx={{
          position: "stick",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      ></Stack>
    </>
  );
};

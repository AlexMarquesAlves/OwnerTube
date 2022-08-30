import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

type ChannelDetailProps = {
  children?: React.ReactNode;
};

export const ChannelDetail = ({ children }: ChannelDetailProps) => {
  return (
    <>
      <h1>
        ChannelDetail
        {children}
      </h1>
    </>
  );
};

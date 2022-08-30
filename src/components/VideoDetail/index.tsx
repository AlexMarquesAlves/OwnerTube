import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

type VideoDetailProps = {
  children?: React.ReactNode;
};

export const VideoDetail = ({ children }: VideoDetailProps) => {
  return (
    <>
      <h1>
        VideoDetail
        {children}
      </h1>
    </>
  );
};

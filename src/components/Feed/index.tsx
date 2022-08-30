import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

type FeedProps = {
  children?: React.ReactNode;
};

export const Feed = ({ children }: FeedProps) => {
  return (
    <>
      <h1>
        Feed
        {children}
      </h1>
    </>
  );
};

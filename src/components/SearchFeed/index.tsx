import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

type SearchFeedProps = {
  children?: React.ReactNode;
};

export const SearchFeed = ({ children }: SearchFeedProps) => {
  return (
    <>
      <h1>
        SearchFeed
        {children}
      </h1>
    </>
  );
};

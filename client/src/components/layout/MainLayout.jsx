import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <>
      {/* Global loading */}
      <GlobalLoading />
      {/* Global loading */}

      {/* Login modal */}
      {/* Login modal */}
      <Box display="flex" minHeight="100vh">
        {/* HEADER */}
        <Topbar />
        {/* HEADER */}

        {/* MAIN */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* MAIN */}
      </Box>
      {/* FOOTER */}
      <Footer />
      {/* FOOTER */}
    </>
  );
};

export default MainLayout;

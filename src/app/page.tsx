"use client";

import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import BlogPost from "../components/BlogPost";

function TabOne() {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Great North Run</Typography>
      <BlogPost />
    </Box>
  );
}

function TabTwo() {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">.NET 10</Typography>
      <BlogPost />
    </Box>
  );
}

function TabThree() {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">Learning The Bass</Typography>
      <BlogPost />
    </Box>
  );
}

export default function StaticTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab label="Great North Run" />
        <Tab label=".NET 10" />
        <Tab label="Learning The Bass" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <TabOne />}
        {activeTab === 1 && <TabTwo />}
        {activeTab === 2 && <TabThree />}
      </Box>
    </Box>
  );
}

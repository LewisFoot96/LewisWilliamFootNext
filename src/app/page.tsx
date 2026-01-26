"use client";

import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import BlogPost from "../components/BlogPost";

function TabOne() {
  return (
    <Box p={2}>
      <Typography variant="h6">Tab One</Typography>
      <BlogPost />
    </Box>
  );
}

function TabTwo() {
  return (
    <Box p={2}>
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
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <TabOne />}
        {activeTab === 1 && <TabTwo />}
      </Box>
    </Box>
  );
}

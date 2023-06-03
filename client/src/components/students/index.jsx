import React from "react";
import { Box } from "@mui/material";
import StudentSidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Student=()=>{
    return(
        <div>
            <Box display="flex">
                <StudentSidebar/>
                <Outlet/>
            </Box>
        </div>
    )
}

export default Student;
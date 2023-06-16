import { Box, useMediaQuery } from "@mui/material";
import React from "react";

const Footer = () => {
    const isMobile = useMediaQuery("(max-width:  600px)");

    const footerStyle = {
        backgroundColor: "#20313e",
        width: isMobile ? "115%" : "auto",
        margin: 0,
        padding: "20px",
        boxSizing: "border-box",
        marginRight:"0",
    };

    return (
        <footer className="py-5" style={footerStyle}>
            <Box className="row">
                <Box className="col-md-4 ml-5">
                    <h5 style={{ color: "white" }}>About</h5>
                    <p style={{ color: "white" }}>
                        Welcome to our Placement Management System.
                        <br /> Streamlining the placement process
                    </p>
                </Box>

                <Box className="col-md-4 ml-5">
                    <h5 style={{ color: "white" }}>Contact Us</h5>
                    <p style={{ color: "white" }}>
                        Career Guidance and Placement Unit(CGPU)
                    </p>
                    <p style={{ color: "white" }}>College of Engineering,</p>
                    <p style={{ color: "white" }}>
                        Thiruvananthapuram - 695016
                    </p>
                    <p style={{ color: "white" }}>Kerala, South India</p>
                    <p style={{ color: "white" }}>Email: placement@cet.ac.in</p>
                    <p style={{ color: "white" }}>Phone: 0471-2595152</p>
                </Box>

                <Box className="col-md-2 ml-5">
                    <h5 style={{ color: "white" }}>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/student/login">Student Portal</a>
                        </li>
                        <li>
                            <a href="/recruiter/login">Recruiter Portal</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
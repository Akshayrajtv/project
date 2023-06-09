import React from "react";
import { Box } from "@mui/material";

const Contact=()=>{
    return(
        <Box>
            <Box margin="30px">
                <img 
                    src={`../../../assets/contactpage.jpg`} 
                    alt="contact" 
                    style={{
                        background:"cover",
                        width:"100%",
                        height:"100%"
                    }}
                />
            </Box>
            <Box 
                position="absolute"
                top="30%"
                left="50%"
                textAlign="center"
                color="white"
                sx={{transform:"translate(-50%,-50%)"}}
            >
                <h1 className="text-center">CONTACT US</h1>
                <p>Home/Contact</p>
            </Box>
            <Box>
                <Box textAlign="center" marginTop="80px">
                    <h1>GET IN TOUCH</h1>
                </Box>
                <hr
                    style={{
                        borderTop: "1px solid #000",
                        margin: "60px auto",
                        width: "50%",
                    }}
                />
            </Box>

            <Box margin="30px">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5435155344594!2d76.90342787472107!3d8.543618141499643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05beb808396e3f%3A0xbdb296f9c4101374!2sCGPU!5e0!3m2!1sen!2sin!4v1685858611286!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    // loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            <Box className="row" display="flex" justifyContent="space-around" margin="30px">
                <Box className="col-lg-6 col-md-6 col-sm-12"  padding="0px">
                    <img
                        src={`../../../assets/contactaddress.jpg`}
                        alt="address"
                        style={{ width:"100%", height:"15rem", background:"cover"}}
                    />
                </Box>
                <Box className="col-lg-6 col-md-6 col-sm-12" style={{ backgroundColor: "#20313e" }} padding="10px">
                    <h1 style={{ color: "white" }}>
                        ADDRESS
                    </h1>
                    <p style={{ color: "white" }}>
                        Career Guidance and Placement Unit (CGPU) <br />
                        College of Engineering, <br />
                        Thiruvananthapuram - 695016 <br />
                        KERALA, South India. <br />
                        Phone: 0471 - 2595152, 2515682
                    </p>
                </Box>
            </Box>

            {/* <Box display="flex" justifyContent="space-around" margin="30px">        
                <Box style={{ backgroundColor: "#20313e" }} padding="10px">
                    <h1 style={{ color: "white" }}>
                    ADDRESS
                    </h1>
                    <p style={{ color: "white" }}>
                    Career Guidance and Placement Unit (CGPU) <br />
                    College of Engineering, <br />
                    Thiruvananthapuram - 695016 <br />
                    KERALA, South India. <br />
                    Phone: 0471 - 2595152, 2515682
                    </p>
                </Box>
                <Box>
                    <img
                        src={`../../../assets/contactaddress.jpg`}
                        alt="address"
                        style={{ width: "100%", height: "15rem", borderRadius:"50%", overflow:"hidden"}}
                    />
                </Box>
            </Box> */}
        </Box>
    )
}
export default Contact;



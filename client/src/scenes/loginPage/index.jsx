import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        boxShadow= '0 2px 4px rgba(0, 0, 0, 0.2)'
      >
        <Typography fontWeight="bold" fontSize="2.5rem" color="primary">
          TechSocial
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        boxShadow= '0 2px 4px rgba(0, 0, 0, 0.2)'
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Hey geek! Welcome to TechSocial, the Social Media for Technology lovers!❤
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

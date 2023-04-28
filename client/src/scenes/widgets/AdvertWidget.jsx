import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper boxShadow='0 6px 8px rgba(154, 81, 183, 0.3)'>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info3.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Flower</Typography>
        <Typography color={medium}>FlowerDesign.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        This sponser describes the wide range collection of beauty products made with love and all natural ingredients. 
        All &copy; copyrights reserved 2023. 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

import { styled } from "@mui/material/styles";

// Create a styled button component
export const StyledButton = styled("button")(({ theme, isActive }) => ({
  backgroundColor: isActive ? "#3d3d3d" : "#202121", // Active and non-active background colors
  color: "#FFF", // White text color
  padding: "0px 20px", // Horizontal padding
  height: "30px", // Fixed height
  width: "230px", // Fixed width
  borderRadius: "5px 5px 0px 0px",
  fontSize: "12px", // Font size
  border: isActive ? "1px solid #3A3A3A" : "none",
  borderBottom: "none", // Subtle border
  textAlign: "left",
  boxShadow: "none", // No shadow for flat design
  textTransform: "none", // Keep text as typed
  cursor: "pointer", // Pointer cursor on hover
  "&:hover": {
    backgroundColor: isActive ? "#3d3d3d" : "#2e2e2e", // Hover background color
    color: "#FFF", // White text on hover
  },
  "&:disabled": {
    backgroundColor: "#3d3d3d", // Background color when disabled
    color: "#fff", // Text color when disabled
    cursor: "not-allowed", // Change cursor to indicate disabled state
  },
}));

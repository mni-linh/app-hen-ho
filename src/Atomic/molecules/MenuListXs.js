import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenuIcon from "../atoms/AtomMenuIcon";

const MenuListXs = () => {
  const [open, setOpen] = React.useState(false);
  // Mở Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <AtomBox
      sx={{
        flexGrow: 1,
        display: {
          xs: "flex",
          md: "none",
        },
      }}
    >
      <AtomIconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={(theme) => ({
          position: "absolute",
          right: theme.spacing(3),
          top: theme.spacing(0),
          alignSelf: "center",
          ...(open && { display: "none" }),
        })}
        size="large"
        // aria-controls="menu-appbar"
        // aria-haspopup="true"
      >
        <AtomMenuIcon fontSize="large" />
      </AtomIconButton>
    </AtomBox>
  );
};

export default MenuListXs;

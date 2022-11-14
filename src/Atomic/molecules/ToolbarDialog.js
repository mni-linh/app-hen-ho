import React from "react";
import AtomGrid from "../atoms/AtomGrid";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";

const ToolbarDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <>
      <AtomGrid container justifyContent="center">
        <AtomGrid item>
          <AtomWhatshotIcon
            fontSize="large"
            sx={(theme) => ({ color: theme.palette.primary.main })}
          />
        </AtomGrid>
      </AtomGrid>

      <AtomStyleIconHover size="large" edge="end" onClick={handleClose}>
        <AtomHighlightOffIcon fontSize="large" />
      </AtomStyleIconHover>
    </>
  );
};

export default ToolbarDialog;

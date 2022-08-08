import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function OnHoverContainedOutlinedButton({
  ButtonText,
  OnClickHandler,
  Color,
  DefaultVariant,
  HoverVariant,
}) {
  const [variant, setVariant] = useState("");

  useEffect(() => {
    setVariant(DefaultVariant);
  }, [DefaultVariant, HoverVariant]);

  return (
    <div>
      <Button
        fullWidth
        variant={variant}
        color={Color}
        onMouseOver={() => {
          setVariant(HoverVariant);
        }}
        onMouseOut={() => {
          setVariant(DefaultVariant);
        }}
      >
        {ButtonText}
      </Button>
    </div>
  );
}

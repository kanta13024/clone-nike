import { IconButton } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Accordion({ title, children }) {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <>
      <div className="text-xl flex items-center justify-between w-4/5">
        <p>{title}</p>
        <IconButton onClick={() => setShowAccordion(!showAccordion)}>
          {showAccordion ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </div>
      {showAccordion && children}
    </>
  );
}

export default Accordion;

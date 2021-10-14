import { useState } from "react";
import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

function BodyHeader({ setShowSidebar }) {
  const [showFilter, setShowFilter] = useState(true);

  const toggleSidebar = () => {
    setShowFilter(!showFilter);
    setShowSidebar(showFilter);
  };

  return (
    <div className="flex justify-between sticky top-0 z-40 bg-white px-10 py-4">
      <h2 className="hidden sm:flex text-lg space-x-4">
        新着情報 <span>(396)</span>
      </h2>
      <div className="hidden sm:flex text-lg space-x-4">
        <Button onClick={() => toggleSidebar()} endIcon={<CompareArrowsIcon />}>
          フィルターを隠す
        </Button>
        <Button endIcon={<ExpandMoreIcon />}>　並び替え</Button>
      </div>
    </div>
  );
}

export default BodyHeader;

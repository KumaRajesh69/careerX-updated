import React from "react";
import ToolsAccoedion from "./ToolsAccoedion";
import Templates from "./Templates";
import FormattingTools from "./ReviewComponents/FormattingTools";
import SpellCheck from "./ReviewComponents/SpellCheck";
import PopupMenu from "./ReviewComponents/SpellCheck";
import AddSection from "./ReviewComponents/AddSection";
const accordionData = [
  {
    img: "/img2/ab.svg",
    title: "Spell check",
    component: <PopupMenu />,
  },

  {
    img: "/img2/temcol.svg",
    title: "Templates & Color",
    component: <Templates />,
  },
  {
    img: "/img2/formating.svg",
    title: "Formatting tools",
    component: <FormattingTools />,
  },
  {
    img: "/img2/addselect.svg",
    title: "Add section",
    component: <AddSection />,
  },
];

function ResumeTools() {
  return (
    <div>
      <div className="mt-5 border rounded-2xl">
        <div className="py-3">
          <ToolsAccoedion data={accordionData} />
        </div>
      </div>
    </div>
  );
}

export default ResumeTools;

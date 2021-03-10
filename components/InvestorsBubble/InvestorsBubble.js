import React, { useState } from "react";
// import styles from "./InvestorsBubble.module.css";
import InvestorsBubbleItem from "./InvestorsBubbleItem";
import IsoTopeGrid from "react-isotope";

const filtersDefault = [{ label: "all", isChecked: true }];

export default function InvestorBubble({ investors }) {
  // Local state for managing filtering logic
  const [filters, updateFilters] = useState(filtersDefault);

  investors = investors.map((card) => {
    card.filter = [];
    card.id = card.ID;
    return card;
  });

  return (
    <div>
      <IsoTopeGrid
        gridLayout={investors} // gridlayout of cards
        noOfCols={6} // number of columns show in one row
        unitWidth={200} // card width of 1 unit
        unitHeight={250} // card height of 1 unit
        filters={filters}
      >
        {investors.map((card) => (
          <div
            key={card.ID}
            className="text-center rounded-full border-none p-2"
          >
            <img src={card.PREVIEW_PICTURE} className="rounded-full" />
            <div className="pt-2">{card.NAME}</div>
          </div>
        ))}
      </IsoTopeGrid>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./InvestorsBubble.module.css";

export default function InvestorBubble({ investors }) {
  return (
    <div>
      <div className={styles.masonry}>
        {investors.map((card) => (
          <div key={card.ID} className={styles.brick}>
            <div
              style={{
                backgroundImage: `url(${card.PREVIEW_PICTURE})`,
              }}
              className={`${styles.investor} bg-cover bg-no-repeat border-none h-full p-2 relative rounded-3xl shadow-2xl text-center w-full cursor-pointer`}
            >
              <div
                className={`${styles.investorTitle} absolute bg-black bg-opacity-50 bottom-0 font-bold left-0 p-2 rounded-b-3xl text-white uppercase w-full`}
              >
                {card.NAME}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import BubbleUI, { defaultOptions } from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import React from "react";
import styles from "./InvestorsBubble.module.css"
import InvestorsBubbleItem from "./InvestorsBubbleItem";

export default function InvestorBubble({investors}) {
    const options = {
        size: 180,
        minSize: 20,
        gutter: 8,
        provideProps: true,
        numCols: 6,
        fringeWidth: 160,
        yRadius: 130,
        xRadius: 220,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 5,
    }
    return (
        <div>
            {
                typeof window !== 'undefined' &&
                (
                    <BubbleUI options={options} className={styles.myBubbleUI}>
                        {investors && investors.map((item, key) => (
                            <InvestorsBubbleItem {...item} key={key} />
                        ))}
                    </BubbleUI>
                )
            }

        </div>
    )
}
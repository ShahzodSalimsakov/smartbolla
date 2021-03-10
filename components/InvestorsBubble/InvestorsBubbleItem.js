import React from "react";
import styles from './InvestorsBubble.module.css'

export default function InvestorsBubbleItem(props) {
    // console.log(props);
    return (
        <div
            style={{
                backgroundImage: `url('${props.PREVIEW_PICTURE}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}
            className={styles.companyBubble}
        >
        {(
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    transition: "opacity 0.1s ease",
                    opacity: props.bubbleSize > 50 ? 1 : 0,
                    pointerEvents: "none",
                }}
            >
                <p
                    style={{
                        color: props.textColor,
                        fontSize: 14,
                        marginBottom: 6,
                        fontWeight: 1000,
                        maxWidth: 150,
                        textAlign: "center",
                    }}
                >
                    {props.name}
                </p>
                <p
                    style={{
                        color: props.textColor,
                        fontSize: 14,
                        marginBottom: 5,
                        maxWidth: 100,
                        opacity: 0.5,
                    }}
                >
                    {props.symbol}
                </p>
            </div>
        )}
        </div>
    );
}

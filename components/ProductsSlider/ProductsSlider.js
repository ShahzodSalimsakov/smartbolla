import CircularSlider from "@fseehawer/react-circular-slider";
import { useState } from "react";
import ProductsSliderItem from "./ProductsSliderItem";
import CircleIcon from "../../public/img/circleDragIcon.svg";
import styles from "./ProductsSlider.module.css";
import { motion } from "framer-motion";

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return num_parts.join(".");
}

export default function ProductsSlider({ products }) {
  const idsByPrice = {};
  products.map((product) => {
    idsByPrice[thousands_separators(+product.PRICE)] = product;
  });
  const sliderValues = products.map((product) =>
    thousands_separators(+product.PRICE)
  );

  const [currentSliderValue, setcurrentSliderValue] = useState(100);

  const currentProduct = idsByPrice[currentSliderValue];

  const [isLoadingBasket, setisLoadingBasket] = useState(false);

  const addBasket = async () => {
    setisLoadingBasket(true);
    const resCounter = await fetch("/api/basket", {
      method: "POST",
      body: JSON.stringify({
        method: "add.basket.product",
        data: {
          id: currentProduct.ID,
        },
      }),
      headers: {
        ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
      },
    });
    setisLoadingBasket(false);
  };

  return (
    <motion.div
      animate={{ scale: [0, 1, 1.1, 1] }}
      transition={{ ease: "easeInOut" }}
    >
      <div className={`${styles.roundSlider} flex flex-col m-auto`}>
        <CircularSlider
          label=" &nbsp;&nbsp;"
          prependToValue="$"
          labelColor="#005a58"
          valueFontSize="4rem"
          knobColor="#c4c4c4"
          knobPosition="bottom"
          progressColorFrom="#ff8500"
          progressColorTo="#a15400"
          verticalOffset="1rem"
          progressSize={8}
          trackColor="#eeeeee"
          trackSize={20}
          data={sliderValues} //...
          dataIndex={0}
          onChange={(value) => {
            setcurrentSliderValue(value);
          }}
        >
          <CircleIcon x="22" y="22" width="28px" height="28px" />
        </CircularSlider>
        <button
          style={{
            backgroundColor: currentProduct.COLOR,
          }}
          className="uppercase text-black font-bold mt-5 py-2 px-4 rounded"
          onClick={() => {
            addBasket();
          }}
        >
          Invest
        </button>
      </div>
    </motion.div>
  );
}

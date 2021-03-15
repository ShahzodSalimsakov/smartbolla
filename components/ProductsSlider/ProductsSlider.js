import CircularSlider from "@fseehawer/react-circular-slider";
import { useState } from "react";
import ProductsSliderItem from "./ProductsSliderItem";
import CircleIcon from "../../public/img/circleDragIcon.svg";
import styles from "./ProductsSlider.module.css";

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
  console.log(currentProduct);
  return (
    <div className={styles.roundSlider}>
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
        trackSize={8}
        data={sliderValues} //...
        dataIndex={0}
        onChange={(value) => {
          setcurrentSliderValue(value);
        }}
      >
        <CircleIcon x="22" y="22" width="28px" height="28px" />
      </CircularSlider>
      <button className="text-white font-bold py-2 px-4 rounded">Invest</button>
    </div>
  );
}

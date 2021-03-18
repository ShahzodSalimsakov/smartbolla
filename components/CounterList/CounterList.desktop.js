import FullPageSectionTitle from "../FullPageSectionTitle/FullPageSectionTitle";
import NeonText from "../NeonText/NeonText";

export default function CounterList({ counter }) {
  return (
    <div className="">
      <div className="flex justify-content-around">
        {counter.map((c) => (
          <div className="" key={c.ID}>
            <NeonText text={c.PROPERTY_COUNT_VALUE} />
            <div className="font-extralight uppercase">{c.NAME}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

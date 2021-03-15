import FullPageSectionTitle from "../FullPageSectionTitle/FullPageSectionTitle";
import NeonText from "../NeonText/NeonText";

export default function CounterList({ counter }) {
  return (
    <div className="">
      <FullPageSectionTitle title="Наши показатели" />
      <div className="flex justify-content-around">
        {counter.map((c) => (
          <div className="" key={c.ID}>
            <NeonText text={c.PROPERTY_COUNT_VALUE} />
            <h1 className="font-extralight uppercase">{c.NAME}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

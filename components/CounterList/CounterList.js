import FullPageSectionTitle from "../FullPageSectionTitle/FullPageSectionTitle";
import NeonText from "../NeonText/NeonText";

export default function CounterList({ counter }) {
  return (
    <div className="h-full">
      <FullPageSectionTitle title="Наши показатели" />
      <div className="grid grid-cols-2">
        {counter.map((c) => (
          <div className="flex flex-col items-center">
            <NeonText text={c.PROPERTY_COUNT_VALUE} />
            <h1 className="font-extralight uppercase">{c.NAME}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

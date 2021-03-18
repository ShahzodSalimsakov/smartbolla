import FullPageSectionTitle from "../FullPageSectionTitle/FullPageSectionTitle";
import NeonText from "../NeonText/NeonText";

export default function CounterList({ counter, countLang }) {
  counter.map((c) => (
    c.CODE == 'developers' ? c.NAME = countLang.developers : c.NAME,
    c.CODE == 'investors' ? c.NAME = countLang.investors : c.NAME,
    c.CODE == 'applications' ? c.NAME = countLang.applications : c.NAME,
    c.CODE == 'co-founders' ? c.NAME = countLang.cofounders : c.NAME
  ))
  return (
    <div className="">
      <FullPageSectionTitle title={countLang.blockTitle} />
      <div className="flex justify-content-around">
        {counter.map((c) => (
          <>
          <div className="" key={c.ID}>
            <NeonText text={c.PROPERTY_COUNT_VALUE} />
            <h1 className="font-extralight uppercase">{c.NAME}</h1>
          </div>
          </>
        ))}
      </div>
    </div>
  );
}

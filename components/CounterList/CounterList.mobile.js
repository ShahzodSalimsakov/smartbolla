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
    <div className="text-center">
      <div className="gap-5 grid">
        <FullPageSectionTitle title={countLang.blockTitle} />
        {counter.map((c) => (
          <>
            <div className="" key={c.ID}>
              <NeonText text={c.PROPERTY_COUNT_VALUE} />
              <div className="font-extralight uppercase">{c.NAME}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import Image from "next/image";
import { MainLayout } from "../../components/MainLayout";
const InvestorPageItem = function ({ investorData }) {
  console.log(investorData);
  return (
    <>
      <MainLayout title={"Smartbolla"}>
        <div class="flex items-center h-full">
          <div></div>
          <div>
            <motion.figure layoutId="investorPhoto">
              <Image
                src={investorData.PREVIEW_PICTURE}
                width={200}
                height={400}
              />
            </motion.figure>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params.iniv);

  const res = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "find.investor.data",
      data: {
        id: params.iniv,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });
  let { data: investorData } = await res.json();

  investorData = investorData || {};
  console.log(investorData);
  return {
    props: {
      investorData,
    },
  };
}

export default InvestorPageItem;

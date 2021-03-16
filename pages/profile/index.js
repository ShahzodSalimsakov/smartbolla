import { MainLayout } from "../../components/MainLayout";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import styles from "./Profile.module.css";

function Profile({ mainLayoutSocial, balance }) {
  
  return (
    <MainLayout title={"Profile"} mainLayoutSocial={mainLayoutSocial}>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div>
            <div className="font-bold text-4xl py-5">Your balance</div>
            <div
              className={`${styles.tokenCount} bott flex-col items-center font-bold justify-center text-9xl`}
            >
              <span>{balance.TOKENS_COUNT}</span>
              <div className={`${styles.balanceColsText} font-bold text-4xl `}>
                cols
              </div>
            </div>
          </div>
          <div>
            <div className="py-5 font-bold text-4xl">Token orders</div>
            <table
              className={`${styles.profileTable} table-fixed border-collapse w-full`}
            >
              <thead>
                <tr>
                  <th className="w-1/12">№</th>
                  <th className="w-1/6">Date</th>
                  <th className="w-1/6">TOKENS</th>
                  <th className="w-1/6">PRICE</th>
                  <th className="w-1/6">STATUS</th>
                  <th className="w-1/6">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {balance.ORDERS &&
                  balance.ORDERS.map((order) => (
                    <tr>
                      <td>{order.ID}</td>
                      <td>{order.DATE_INSERT}</td>
                      <td>{order.PROPERTIES.TOKEN_COUNTS.VALUE} coins</td>
                      <td>${+order.PRICE}</td>
                      <td>
                        {order.PAYED == "Y" ? (
                          <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Payed
                          </div>
                        ) : (
                          <div className="bg-red-400 font-semibold inline-flex leading-5 px-2 rounded-full text-red-900 text-xs">
                            Unpaid
                          </div>
                        )}
                      </td>
                      <td></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <ProfileMenu />
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ locale }) {
  const profileBalance = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.profile.balance",
      data: {
        userId: 5,
        locale: locale
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });
  
  const socials = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "social.links",
      data: {
        locale: locale,
      },
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });

  let { data: balance } = await profileBalance.json();
  let { data: mainLayoutSocial } = await socials.json();
  return {
    props: {
      balance,
      mainLayoutSocial,
    },
  };
}

export default Profile;

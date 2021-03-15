import { MainLayout } from "../../components/MainLayout";
import styles from "./Profile.module.css"

function Profile( { mainLayoutSocial, balance } ) {
    return (
        <MainLayout title={"Profile"} mainLayoutSocial={mainLayoutSocial}>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div>
                        <div className='font-bold text-4xl py-5'>Your balance</div>
                        <div className={`${styles.tokenCount} bott flex-col items-center font-bold justify-center text-9xl`}>
                            <span>{balance.TOKENS_COUNT}</span>
                            <div className={`${styles.balanceColsText} font-bold text-4xl `}>cols</div>
                        </div>
                    </div>
                    <div>
                        <div className='py-5 font-bold text-4xl'>Token orders</div>
                        <table className={`${styles.profileTable} table-fixed border-collapse`}>
                            <thead>
                                <tr>
                                    <th className={`${styles.th} w-1/12`}>№</th>
                                    <th className={`${styles.th} w-1/6`}>Date</th>
                                    <th className={`${styles.th} w-1/6`}>TOKENS</th>
                                    <th className={`${styles.th} w-1/6`}>PRICE</th>
                                    <th className={`${styles.th} w-1/6`}>STATUS</th>
                                    <th className={`${styles.th} w-1/6`}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={`${styles.td}`}>1</td>
                                    <td className={`${styles.td}`}>01.03.2021</td>
                                    <td className={`${styles.td}`}>3 coins</td>
                                    <td className={`${styles.td}`}>$300</td>
                                    <td className={`${styles.td}`}>Paid</td>
                                    <td className={`${styles.td}`}>3 coins</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div>

                </div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ locale }) {
    
    const profileBalance = await fetch("https://smartbolla.com/api/", {
      method: "POST",
      body: JSON.stringify({
        method: "get.profile.balance",
        data: {
          locale: locale,
        }
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
        }
      }),
      headers: {
        ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
      },
    });
  
    let { data: balance} = await profileBalance.json();
    let { data: mainLayoutSocial } = await socials.json();
  
    return {
      props: {
        balance,
        mainLayoutSocial,
      },
    };
  }

export default Profile
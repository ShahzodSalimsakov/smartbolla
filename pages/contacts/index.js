import {MainLayout} from "../../components/MainLayout";
import './css/all.css';



function Contacts({contactAddress}) {
  return (
    <MainLayout>
      Contact
      <div>        
          <p>{contactAddress.ADDEESS}</p>
          <div dangerouslySetInnerHTML={{__html: contactAddress.PHONE }}/>
          {contactAddress.SOC_ICONS.map(soc => (
            console.log(soc)
          )) }          
      </div>
    </MainLayout>
  )
}


  export async function getServerSideProps({ locale }) {
  const res = await fetch("https://smartbolla.com/api/", {
    method: "POST",
    body: JSON.stringify({
      method: "get.contact.address",
      data: {
        locale: locale
      }
    }),
    headers: {
      ApiToken: "e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC",
    },
  });
  let { data: contactAddress, } = await res.json();
  return {
    props: {
      contactAddress,
    },
  };
}

export default Contacts

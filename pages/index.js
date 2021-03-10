import Link from 'next/link';
import Head from "next/head";
import ReactFullpage from '@fullpage/react-fullpage';
import {MainLayout} from "../components/MainLayout";
import InvestorsBubble from "../components/InvestorsBubble/InvestorsBubble";
import React from "react";

const pluginWrapper = () => {
    require('../public/js/scrolloverflow.min');
};

function Home({investors}) {
  return (
    <MainLayout title={'Smartbolla'}>
        {investors && <InvestorsBubble investors={investors} />}
    </MainLayout>
  )
}


export async function getServerSideProps() {
    console.log('davr');
    const res = await fetch('https://smartbolla.com/api/', {
        method: 'POST',
        body: JSON.stringify({
            method: 'get.investor.list'
        }),
        headers: {
            ApiToken: 'e7r8uGk5KcwrzT6CanBqRbPVag8ILXFC'
        }
    });
    let { data: investors } = await res.json();

    investors = investors || [];

    return {
        props: {
            investors
        }
    }
}

export default Home;
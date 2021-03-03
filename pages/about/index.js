import Link from 'next/Link';
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";

export default function About() {
  return (
      <MainLayout title={'About'}>
        <h1>About page</h1>
      </MainLayout>
  )
}
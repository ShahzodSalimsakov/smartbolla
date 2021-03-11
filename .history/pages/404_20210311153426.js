import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div className="h-screen  flex justify-center content-center flex-wrap">
        <p className="text-9xl">404</p>
        <div className="flex">
          Back to <Link href="/"><a> home </a></Link>
        </div>
      </div>
    </MainLayout>
  )
}
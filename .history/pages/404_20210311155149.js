import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div className="text-center">
        <div className="">404</div>
        <div className="">
          Back to <Link href="/"><a> home </a></Link>
        </div>
      </div>
    </MainLayout>
  )
}
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div className="">
        <div className="text-9xl">404</div>
        <div>
          Back to <Link href="/"><a> home </a></Link>
        </div>
      </div>
    </MainLayout>
  )
}
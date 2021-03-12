import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div className="justify-center content-center flex-wrap">
        <div className="text-9xl">404</div>
        <div className="text-center absolute">
          Back to <Link href="/"><a> home </a></Link>
        </div>
      </div>
    </MainLayout>
  )
}
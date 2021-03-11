import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div className="justify-center">
        <div className="text-9xl text-center">404</div>
        <div className="text-center absolute">
          Back to <Link href="/"><a> home </a></Link>
        </div>
      </div>
    </MainLayout>
  )
}
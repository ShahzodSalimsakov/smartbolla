import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div class="h-screen  flex justify-center content-center flex-wrap">
        <p class="text-9xl">404</p>
          Back to <Link href="/"><a> home </a></Link>
      </div>
    </MainLayout>
  )
}
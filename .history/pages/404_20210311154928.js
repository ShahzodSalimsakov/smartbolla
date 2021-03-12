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
      <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
  <p class="font-sans text-white error-text">404</p>
</div>

<div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
	<span class="opacity-50">Take me back to</span>
 	<a class="border-b" href="https://tailwindcomponents.com">tailwindcomponents.com</a>
</div>
    </MainLayout>
  )
}
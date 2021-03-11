import { MainLayout } from "../components/MainLayout";

export default function Custom404() {
  return (
    <MainLayout>
      <div class="h-screen  flex justify-center content-center flex-wrap">
        <p class="font-sans text-white error-text">404</p>
      </div>
    </MainLayout>
  )
}
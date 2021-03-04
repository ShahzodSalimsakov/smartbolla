import Image from 'next/image'
export default function MainLeftLogo() {
  return (
    <div>
      <Image src="/img/main-logo.png" width={50} height={50} />
    </div>
  );
}
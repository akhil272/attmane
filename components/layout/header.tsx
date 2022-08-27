import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
const Header = () => {
  return (
    <header className="flex w-full py-12 h-20 lg:px-36 px-10 ">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/Attmane_Logo.png"
            alt="attmane-logo"
            height={64}
            width={70}
          />
          <div className="flex-col">
            <h1 className="text-3xl uppercase font-medium">Attmane</h1>
            <p>Go beyond possibilities</p>
          </div>
        </div>
        <div className="lg:flex hidden space-x-24 text-2xl">
          <Link href="#">Home </Link>
          <Link href="#">About </Link>
          <Link href="#">Projects </Link>
          <Link href="#">Contact </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

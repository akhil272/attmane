import { useState } from "react";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

interface LinksProps {
  linkTitle: string;
  linkAddress: string;
}

const Links = ({ linkTitle, linkAddress }: LinksProps) => {
  return (
    <Link href={linkAddress}>
      <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-att_primary md:p-0  ">
        {linkTitle}
      </a>
    </Link>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleViewMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white border-gray-200 px-10 py-4 rounded ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center space-x-2">
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
          </a>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-4 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleViewMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            open
              ? " w-full md:block md:w-auto  my-4"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul
            onClick={toggleViewMenu}
            className="flex flex-col bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 text-2xl md:border-0 md:bg-white  "
          >
            <li>
              <Links linkTitle="Home" linkAddress="/" />
            </li>
            <li>
              <Links linkTitle="About" linkAddress="/about" />
            </li>
            <li>
              <Links linkTitle="Projects" linkAddress="/projects" />
            </li>

            <li>
              <Links linkTitle="Contact" linkAddress="/contact" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

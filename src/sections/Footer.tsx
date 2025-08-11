import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (<footer className=" absolute w-full h-[10vh] bottom-0 grid items-end text-white" id="contacts">
    <div className="bg-[#101E38] pt-10 pb-5 space-y-4">
      <ul className="flex justify-between container mx-auto lg:hidden">
        <li>
          About Me
        </li>
        <li>
          <Link href={"/selected-works"}>
            Selected works
          </Link>
        </li>
        <li>
          Experiments
        </li>
        <li>
          Writing
        </li>
      </ul>
    </div>
  </footer>);
};

export default Footer;

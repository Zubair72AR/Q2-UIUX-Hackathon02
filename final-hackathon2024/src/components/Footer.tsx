import Link from "next/link";
import { FaLinkedin, FaInstagram, FaSkype, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaPinterest } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="bg-foreground  text-background dark:bg-secondary  dark:text-secondary-foreground  px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-36">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 pb-4 sm:pb-10 pt-10 sm:pt-12">
        {/* Company Footer Info and Useful Links */}
        <div className="grid grid-cols-2 xs:grid-cols-3 gap-8 ">
          <div className="space-y-2">
            <h4>Menu</h4>
            <Link href="#" className="text-sm font-light block">
              New arrivals
            </Link>
            <Link href="#" className="text-sm font-light block">
              Best sellers
            </Link>
            <Link href="#" className="text-sm font-light block">
              Recently viewed
            </Link>
            <Link href="#" className="text-sm font-light block">
              Popular this week
            </Link>
            <Link href="#" className="text-sm font-light block">
              All products
            </Link>
          </div>
          <div className="space-y-2">
            <h4>Categories</h4>
            <Link href="#" className="text-sm font-light block">
              Crockery
            </Link>
            <Link href="#" className="text-sm font-light block">
              Furniture
            </Link>
            <Link href="#" className="text-sm font-light block">
              Homeware
            </Link>
            <Link href="#" className="text-sm font-light block">
              Plant pots
            </Link>
            <Link href="#" className="text-sm font-light block">
              Chairs
            </Link>
            <Link href="#" className="text-sm font-light block">
              Crockery
            </Link>
          </div>
          <div className="space-y-2">
            <h4>Our company</h4>
            <Link href="#" className="text-sm font-light block">
              About us
            </Link>
            <Link href="#" className="text-sm font-light block">
              Vacancies
            </Link>
            <Link href="#" className="text-sm font-light block">
              Contact us
            </Link>
            <Link href="#" className="text-sm font-light block">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-light block">
              Returns policy
            </Link>
          </div>
        </div>
        {/* Contact US Email Input */}
        <div className="w-full space-y-3">
          <h4>Join our mailing list</h4>
          <div className="flex justify-between items-center h-12">
            <input
              type="text"
              placeholder="your@email.com"
              className="w-full h-full px-6 text-sm font-light placeholder:text-white dark:placeholder:text-chart-1 bg-chart-2 dark:bg-chart-3 outline-none"
            />
            <Button variant={"outline"}>Sign up</Button>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <hr className="border-chart-5" />

      {/* Bottom Part of Footer */}
      <div className="flex flex-wrap-reverse justify-center xs:justify-between items-center gap-4 py-5">
        <p className="text-sm font-light">Copyright 2022 Avion LTD</p>

        {/* Social Icons */}
        <div className="hidden xs:flex justify-center items-center gap-4 md:gap-6">
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-2xl hover:text-[#cbc7db] hover:scale-110 transition-all duration-500"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className="text-2xl hover:text-[#cbc7db] hover:scale-110 transition-all duration-500"
          >
            <ImFacebook2 />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="text-2xl hover:text-[#cbc7db] hover:scale-110 transition-all duration-500"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.skype.com/"
            target="_blank"
            className="text-2xl hover:text-[#cbc7db] hover:scale-110 transition-all duration-500"
          >
            <FaSkype />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-2xl hover:text-[#cbc7db] hover:scale-110 transition-all duration-500"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.pinterest.com/"
            target="_blank"
            className="text-2xl hover:text-[#cbc7db] hover:scale-110 transition-all duration-500"
          >
            <FaPinterest />
          </Link>
        </div>
      </div>
    </div>
  );
}

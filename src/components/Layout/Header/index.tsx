"use client";

import { Fragment, useEffect, useState } from "react";
import {
  ArrowDownIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import ProfileDropdown from "../ProfileDropdown";

const navigation = [
  { name: "Resume", href: "/resume", current: true },
  { name: "Resume Score", href: "/resume-score", current: false },
  { name: "Cover Letters", href: "/cover-letters", current: false },
  { name: "Resume & JD Match", href: "/jd-match", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>({});
  const [scrolled, setScrolled] = useState(false);

  const getUser = () => {
    const _user = JSON.parse(localStorage.getItem("careerxUser") || "{}");
    setUser(_user);
  };

  useEffect(() => {
    getUser();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Disclosure
      as="nav"
      className={`${
        scrolled && "bg-white backdrop-blur-2xl bg-opacity-60"
      } fixed z-50 w-full`}
    >
      {({ open }: any) => (
        <>
          <div className="container">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-bluePrimary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center cursor-pointer"
                >
                  <Image
                    className="h-6 md:h-10 w-auto"
                    src="/logo.svg"
                    alt="CareerX"
                    width={"100"}
                    height={"100"}
                  />
                </Link>
                <div className="hidden sm:ml-6 md:block flex-1">
                  <div className="flex-1 flex justify-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "text-lightBlue "
                            : "text-bluePrimary hover:bg-bluePrimary hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-semibold"
                        )}
                        aria-current={item.href ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {Object.keys(user).length === 0 ? (
                <div className="hidden inset-y-0 right-0 md:flex items-center space-x-2">
                  <Link href={"/login"}>
                    <button className="py-2 px-4 rounded-2xl w-24 h-12 text-lightBlue font-semibold hover:border hover:border-lightBlue transition duration-100 ">
                      Login
                    </button>
                  </Link>
                  <Link href={"/signup"}>
                    <button className="py-2 px-4 rounded-2xl w-24 h-12 text-lightBlue font-semibold border border-lightBlue hover:bg-lightBlue hover:text-white transition duration-100 ">
                      Sign Up
                    </button>
                  </Link>
                </div>
              ) : (
                <div
                  className="text-bluePrimary flex items-center space-x-2 cursor-pointer"
                  // onClick={() => {
                  //   localStorage.removeItem("careerxUserToken");
                  //   localStorage.removeItem("careerxUser");
                  //   setUser({});
                  // }}
                >
                  <ProfileDropdown user={user} setUser={setUser} />
                  {/* <div>{"Logout"} </div>
                  <div>
                    <ChevronDownIcon className="w-5" />
                  </div> */}
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="absolute w-full bg-white shadow-xl md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === pathname
                      ? "bg-lightBlue text-white"
                      : "text-gray-700 hover:bg-bluePrimary hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button className="py-2 px-4 block w-full rounded-2xl h-12 text-lightBlue font-semibold hover:border hover:border-lightBlue transition duration-100 ">
                Login
              </button>
              <button className="py-2 px-4 rounded-2xl w-full h-12 text-lightBlue font-semibold border border-lightBlue hover:bg-lightBlue hover:text-white transition duration-100 ">
                Sign Up
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

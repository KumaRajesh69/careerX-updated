import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = [
  {
    title: "Resume",
    navs: [
      { link: "Create Resume", href: "/create-resume" },
      { link: "Resume Examples", href: "/resumes" },
      { link: "Resume templates", href: "/templates" },
    ],
  },
  {
    title: "Resources",
    navs: [
      { link: "Resume Help", href: "/help" },
      { link: "Job Interview", href: "/interview" },
      { link: "Career", href: "/career" },
    ],
  },
  {
    title: "Our Company",
    navs: [
      { link: "About Us", href: "/about" },
      { link: "Pricing", href: "/pricing" },
      { link: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Support",
    navs: [
      { link: "Help Center", href: "/help-center" },
      { link: "FAQ", href: "/faqs" },
      { link: "Contact us", href: "/contact" },
    ],
  },
];

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-20 w-full py-5 bg-white">
      <div className="container">
        <div>
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
        </div>
        <div className="h-px w-full bg-gray-200 my-5"></div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
          {navigation.map((item, index) => (
            <div key={index} className="text-sm">
              <div className="font-medium text-bluePrimary mb-4">
                {item?.title}
              </div>
              <div className="space-y-2">
                {item?.navs?.map((link, index) => (
                  <a
                    key={index}
                    className="text-bluePrimary block"
                    href={link?.href}
                  >
                    {link?.link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-gray-200 my-5"></div>
        <div className="md:flex text-sm justify-between">
          <div className="flex-1 text-bluePrimary">
            Copyright 2023 - CareerX
          </div>
          <div className="flex space-x-3">
            <a href="/" className="text-sm text-bluePrimary underline">
              Privacy Policy
            </a>
            <a href="/" className="text-sm text-bluePrimary underline">
              Terms of Service
            </a>
            <a href="/" className="text-sm text-bluePrimary underline">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

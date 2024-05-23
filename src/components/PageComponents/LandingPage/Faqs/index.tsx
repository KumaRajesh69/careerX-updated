"use client";
import SectionHeading from "@/components/Common/SectionHeading";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

const faqs = [];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Faqs() {
  const [tab, setTab] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const [faqsData, setFaqsData] = useState([
    {
      question: "Display me the best resume template?",
      answer:
        "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer.Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer ",
    },
    {
      question:
        "Should I use a resume template? Can I create my own resume template?",
      answer:
        "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer.Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer ",
    },
    {
      question: "Which is the best resume template?",
      answer:
        "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer.Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer ",
    },
  ]);

  const filteredFaqs = faqsData.filter((faq) =>
    faq.question.toLowerCase().includes(searchText.toLowerCase())
  );

  const onChangeHandler = (e: any) => {
    setSearchText(e.target.value);
  };
  const [openDisclosureIndex, setOpenDisclosureIndex] = useState(null);

  const handleDisclosureClick = (index: any) => {
    setOpenDisclosureIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="container mt-20">
      <div className="w-full mx-auto  ">
        <div className="max-w-3xl mx-auto  ">
          <SectionHeading title="Frequently asked questions" />
          <div className="text-gray-500 text-sm text-center md:w-7/12 mx-auto mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et dolore.
          </div>
          <div className="flex items-center bg-white rounded-md border border-[#D1E9FF] outline-none p-2 spaxe-x-2 my-5">
            <input
              className="flex-1 outline-none p-2  bg-white"
              placeholder="Search"
              value={searchText}
              onChange={(e) => onChangeHandler(e)}
            />
            {searchText.trim() === "" ? (
              <MagnifyingGlassIcon className="text-bluePrimary w-6" />
            ) : (
              <PlusIcon
                className="transform transition duration-100 rotate-45 text-bluePrimary w-6 cursor-pointer"
                onClick={() => setSearchText("")}
              />
            )}
          </div>
          <div className="my-12">
            {searchText?.trim() === "" && (
              <div className="grid grid-cols-5 gap-6 px-10">
                <button
                  onClick={() => setTab(1)}
                  className={` rounded-md py-2 px-5 w-max text-sm ${
                    tab === 1 ? "text-white bg-bluePrimary" : "text-gray-500"
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => setTab(2)}
                  className={` rounded-md py-2 px-5 w-max text-sm ${
                    tab === 2 ? "text-white bg-bluePrimary" : "text-gray-500"
                  }`}
                >
                  Payments
                </button>
                <button
                  onClick={() => setTab(3)}
                  className={` rounded-md py-2 px-5 w-max text-sm ${
                    tab === 3 ? "text-white bg-bluePrimary" : "text-gray-500"
                  }`}
                >
                  Resume
                </button>
                <button
                  onClick={() => setTab(4)}
                  className={` rounded-md py-2 px-5 w-max text-sm ${
                    tab === 4 ? "text-white bg-bluePrimary" : "text-gray-500"
                  }`}
                >
                  Cover Letter
                </button>
                <button
                  onClick={() => setTab(5)}
                  className={` rounded-md py-2 px-5 w-max text-sm ${
                    tab === 5 ? "text-white bg-bluePrimary" : "text-gray-500"
                  }`}
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </div>
        {filteredFaqs?.length > 0 ? (
          <dl className="max-w-5xl mx-auto mt-6 space-y-6  ">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="mt-6 bg-[#D2E2F9] px-3 rounded-md"
              >
                <>
                  <dt className="text-lg">
                    <div
                      onClick={() => handleDisclosureClick(index)}
                      className="text-left w-full flex justify-between items-start text-bluePrimary cursor-pointer py-3"
                    >
                      <span className="font-medium text-bluePrimary text-sm md:text-xl">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <PlusIcon
                          className={classNames(
                            openDisclosureIndex === index
                              ? "rotate-45 "
                              : "rotate-0",
                            "h-6 w-6 transform transition duration-200"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </dt>
                  {openDisclosureIndex === index && (
                    <div className="mt-2 pr-12">
                      <p className="text-base text-bluePrimary">{faq.answer}</p>
                    </div>
                  )}
                </>
              </div>
            ))}
          </dl>
        ) : (
          <div className="mx-auto text-center text-bluePrimary" >No Queries found for &quot;{searchText}&quot;</div>
        )}
        <div>
          {searchText?.trim() === "" && (
            <div className="text-bluePrimary text-center mt-4">See More</div>
          )}
        </div>
      </div>
    </div>
  );
}

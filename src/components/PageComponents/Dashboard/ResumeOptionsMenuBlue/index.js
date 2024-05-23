"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  PencilIcon,
  PencilSquareIcon,
  PrinterIcon,
  Squares2X2Icon,
  StarIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ResumeOptionsMenuBlue() {
  return (
    <div className="h-5 ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <EllipsisVerticalIcon
              className="h-5 w-5 text-bluePrimary"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 rounded-xl z-50 mt-2 w-max origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 space-y-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-bluePrimary text-white" : "text-bluePrimary"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EnvelopeIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EnvelopeIcon
                        className="mr-2 h-5 w-5 text-bluePrimary"
                        aria-hidden="true"
                      />
                    )}
                    Email
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-bluePrimary text-white" : "text-bluePrimary"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/profile")}
                  >
                    {active ? (
                      <PencilSquareIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <PencilSquareIcon
                        className="mr-2 h-5 w-5 text-bluePrimary"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-bluePrimary text-white" : "text-bluePrimary"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/support")}
                  >
                    {active ? (
                      <PrinterIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <PrinterIcon
                        className="mr-2 h-5 w-5 text-bluePrimary"
                        aria-hidden="true"
                      />
                    )}
                    Print
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-bluePrimary text-white" : "text-bluePrimary"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => router.push("/feedback")}
                  >
                    {active ? (
                      <DocumentDuplicateIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DocumentDuplicateIcon
                        className="mr-2 h-5 w-5 text-bluePrimary"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-bluePrimary text-white" : "text-bluePrimary"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <TrashIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <TrashIcon
                        className="mr-2 h-5 w-5 text-bluePrimary"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

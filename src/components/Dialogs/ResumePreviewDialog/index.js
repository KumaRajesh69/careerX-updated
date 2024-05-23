import ResumeOptionsMenu from "@/components/PageComponents/Dashboard/ResumeOptionsMenu";
import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function ResumePreviewDialog({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="z-10 group relative cursor-pointer shadow-xl rounded-2xl">
                  <Image
                    src={"/resume2.png"}
                    width={"600"}
                    height={"801"}
                    alt={""}
                    className=" rounded-xl mx-auto z-10"
                  />
                  <div className="absolute bottom-0 left-0 h-20 w-full rounded-b-xl bg-bluePrimary backdrop-blur-2xl bg-opacity-25 flex p-3">
                    <div className="flex-1">
                      <div className="text-white flex space-x-2 ">
                        <div className="text-white font-medium text-lg">
                          My Resume
                        </div>
                        <PencilIcon className="text-white w-4" />
                      </div>
                      <div className="text-white italic text-base font-light">
                        Modified On: 2 May, 2023
                      </div>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <Image
                        src={"/download.svg"}
                        width={50}
                        height={10}
                        alt="download"
                        className="w-5"
                      />
                      <ResumeOptionsMenu />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

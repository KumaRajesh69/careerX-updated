import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/16/solid";
import { Fragment, useState } from "react";

export default function RoleDialog({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="flex justify-end">
                  <XCircleIcon className="text-red-500 h-5 w-5" />
                </Dialog.Title>
                <div className="mt-2">
                  <div className="text-xl font-medium text-center">
                    Please share your desired job role
                  </div>
                  <p className="text-xs text-center">
                    We will recommend relevant skills and keywords for your job
                    role.
                  </p>

                  <input
                    className="p-2 rounded-md border w-full my-4 border-[#D2E2F9] outline-none placeholder:text-sm placeholder:text-gray-400"
                    placeholder="software Developer"
                  />
                  <div className="w-full flex justify-center">
                    <button className="bg-bluePrimary py-2 px-6 rounded-xl text-white hover:bg-lightBlue transition duration-100">
                      Continue
                    </button>
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

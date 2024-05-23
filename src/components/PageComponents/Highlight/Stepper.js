import React from "react";
import Link from "next/link";

function Stepper({ steps }) {
  return (
    <div className="mx-auto ">
      <div className="flex items-center w-full p-3 space-x-1 text-sm font-medium text-center text-gray-500 bg-white border-b-[1px] sm:text-base sm:p-4 sm:space-x-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-2">
            {step.active ? (
              <div className="flex items-center text-blue-600 font-normal text-sm space-x-2">
                <img
                  src={
                    index === steps.length - 1
                      ? "/img2/ok2.svg"
                      : "/img2/ok.svg"
                  }
                  alt="active"
                />
                {step.href ? (
                  <Link href={step.href}>{step.name}</Link>
                ) : (
                  <p>{step.name}</p>
                )}
                {index < steps.length - 1 && (
                  <div className="ml-4">
                    <img src="/img2/bar.svg" alt="bar" />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <img src="/img2/ok2.svg" alt="inactive" />
                {step.href ? (
                  <Link href={step.href}>{step.name}</Link>
                ) : (
                  <p>{step.name}</p>
                )}
                {index < steps.length - 1 && (
                  <div className="ml-4">
                    <img src="/img2/bar.svg" alt="disabled" />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stepper;

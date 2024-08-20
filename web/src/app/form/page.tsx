/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qOCEHjNx9eT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[100svh] bg-background font-body m-4 lg:m-0">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-md p-6 h-[70vh] flex flex-col relative ">
        {/* progress bar code */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          {/* 1 */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep >= 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep >= 1 && <CheckIcon className="w-4 h-4" />}
            </div>
            {currentStep >= 2 && (
              <div className="w-8 h-1 bg-muted-foreground/20" />
            )}
          </div>
          {/* 2 */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep >= 2
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep >= 2 && <CheckIcon className="w-4 h-4" />}
            </div>
            {currentStep >= 3 && (
              <div className="w-8 h-1 bg-muted-foreground/20" />
            )}
          </div>
          {/* 3 */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep >= 3
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep >= 3 && <CheckIcon className="w-4 h-4" />}
            </div>
            {currentStep >= 4 && (
              <div className="w-8 h-1 bg-muted-foreground/20" />
            )}
          </div>
          {/* 4 */}
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                currentStep >= 4
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {currentStep >= 4 && <CheckIcon className="w-4 h-4" />}
            </div>
          </div>
        </div>

        {/* form code */}
        {currentStep === 1 && (
          <div className="h-[60vh] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Step 1: Personal Information
              </h2>
              <p className="text-muted-foreground">
                Please enter your personal information.
              </p>
              <div className="space-y-2">
                <Input label="Name" placeholder="Enter your name" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="" onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="h-[60vh] flex flex-col justify-between">
            <div className="space-y-4 ">
              <h2 className="text-2xl font-bold">Step 2: Address</h2>
              <p className="text-muted-foreground">
                Please enter your address information.
              </p>
              <div className="space-y-2">
                <Input
                  label="Street Address"
                  placeholder="Enter your street address"
                />
                <Input label="City" placeholder="Enter your city" />
                <Input label="State" placeholder="Enter your state" />
                <Input label="Zip Code" placeholder="Enter your zip code" />
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="h-[60vh] flex flex-col justify-between">
            <div className="space-y-4 ">
              <h2 className="text-2xl font-bold">Step 3: Payment</h2>
              <p className="text-muted-foreground">
                Please enter your payment information.
              </p>
              <div className="space-y-2">
                <Input
                  label="Card Number"
                  placeholder="Enter your card number"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input label="Expiration Date" placeholder="MM/YY" />
                  <Input label="CVV" placeholder="CVV" />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div className="h-[60vh] flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Step 4: Review</h2>
              <p className="text-muted-foreground">
                Please review your information before submitting.
              </p>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Name:</span> John Doe
                </div>
                <div>
                  <span className="font-medium">Email:</span> john@example.com
                </div>
                <div>
                  <span className="font-medium">Address:</span> 123 Main St,
                  Anytown USA
                </div>
                <div>
                  <span className="font-medium">Payment:</span> Visa ending in
                  1234
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

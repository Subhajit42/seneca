"use client";

import AgreementCard from "@/components/component/AgreementCard";
import { toast } from "@/components/ui/use-toast";
import { authClient } from "@/lib/axios";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authClient.get("/@me");
      } catch (error) {
        console.log("User not found: ", error);
        toast({
          title: "An error occurred",
          description: "User not found.",
          variant: "destructive",
        });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] min-h-[100vh]">
        <header className="flex justify-between p-4 lg:px-10 lg:py-4">
          <h1 className="text-3xl  font-heading font-extrabold">Seneca</h1>
          <div className="w-10 h-10 dark:bg-white bg-black rounded-full"></div>
        </header>
        <section className=" mt-5 mb-10 lg:my-10 lg:w-[50%] m-auto">
          <p className="text-4xl lg:text-6xl font-extrabold text-center font-body leading-tight">
            Create Legal Agreements in Minutes with{" "}
            <span className="text-purple-400">AI Precision.</span>
          </p>
        </section>
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:w-[50%] m-auto justify-items-center items-center font-body gap-y-8 ">
          <AgreementCard title="Employment Agreement" />
          <AgreementCard title="Non-Disclosure Agreement" />
          <AgreementCard title="Service Agreement" />
          <AgreementCard title="Consulting Agreement" />
          <AgreementCard title="Partnership Agreement" />
          <AgreementCard title="Lease Agreement" />
        </section>
      </div>
    </>
  );
}

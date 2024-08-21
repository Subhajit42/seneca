"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AgreementCard({ title }: { title: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      router.push("/form");
    } catch {
    } finally {
      setIsLoading(true);
    }
  };
  return (
    <>
      <button onClick={handleClick}>
        <div className="w-32 h-24 p-4 rounded-2xl border-gray-400 custom-border flex items-center justify-center">
          <p className="">{title}</p>
        </div>
      </button>
    </>
  );
}

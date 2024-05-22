"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleClick = (newLocale) => {
    const nextLocale = newLocale;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <>
      <div
        className=" bg-AEGold-500 border-2 border-AEGold-600 px-3 py-2 rounded-lg cursor-pointer"
        onClick={() => {
          if (!isPending) {
            handleClick(localActive === "en" ? "ar" : "en");
          }
        }}
      >
        {localActive}
      </div>
    </>
  );
}

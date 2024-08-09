"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

function ViewAllButton() {
  const locale = useLocale();
  return (
    <Link href={`/${locale}/events`} className="text-lg font-medium">
      View All
    </Link>
  );
}

export default ViewAllButton;

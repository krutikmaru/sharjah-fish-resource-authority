"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import LocalSwitcher from "../global/locale-switcher";
import { useLocale } from "next-intl";

function Footer({ footerTranslations }) {
  const locale = useLocale();

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 relative z-20 bg-AEBlack-50 dark:bg-AEBlack-950">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo image"
                width={100}
                height={100}
                className="inline-block"
              />
            </div>
            <div className="mb-6 md:mb-8">
              <div>
                <p className="mb-5 md:mb-6 text-AE-Text-base font-semibold text-center lg:text-left text-orange">
                  {footerTranslations.title}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="mb-1 text-AE-Text-sm font-semibold  text-AEBlack-950 dark:text-blue-yonder">
                  {footerTranslations.address.title}:
                </p>
                <p className="mb-5 text-AE-Text-sm md:mb-6 text-AEBlack-900 dark:text-AEBlack-100">
                  {footerTranslations.address.value}
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="mb-1 text-AE-Text-sm font-semibold text-AEBlack-950 dark:text-blue-yonder">
                  {footerTranslations.contact.title}:
                </p>
                <p className="flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
                  <Link
                    href="tel:+(06) 511 5555"
                    className="focus-visible:outline-none text-AE-Text-sm text-AEBlack-900 dark:text-AEBlack-100"
                  >
                    {footerTranslations.contact.phone}
                  </Link>
                  <Link
                    href="mailto:info@dma.shj.ae"
                    className="focus-visible:outline-none AE-Text-sm text-AEBlack-900 dark:text-AEBlack-100"
                  >
                    {footerTranslations.contact.mail}
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 gap-y-0">
              <Link href="#" className="focus-visible:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  className="dark:fill-AEBlack-50"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </svg>
              </Link>
              <Link href="#" className="focus-visible:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  className="dark:fill-AEBlack-50"
                >
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                </svg>
              </Link>
              <Link href="#" className="focus-visible:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  className="dark:fill-AEBlack-50"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-center lg:text-left grid grid-cols-1 items-start gap-x-6 gap-y-10 lg:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li>
                <Link
                  href={`${locale}/about`}
                  className="focus-visible:outline-none AE-Text-sm text-AEBlack-950 dark:text-AEBlack-50 hover:text-AEGold-500"
                >
                  {footerTranslations.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${locale}/goals`}
                  className="focus-visible:outline-none AE-Text-sm text-AEBlack-950 dark:text-AEBlack-50 hover:text-AEGold-500"
                >
                  {footerTranslations.links.goals}
                </Link>
              </li>
              <li>
                <Link
                  href={`${locale}/partnership`}
                  className="focus-visible:outline-none AE-Text-sm text-AEBlack-950 dark:text-AEBlack-50 hover:text-AEGold-500"
                >
                  {footerTranslations.links.partnerships}
                </Link>
              </li>
            </ul>
            <ul>{/* Add list items for links */}</ul>
          </div>
        </div>
        <div className="h-px w-full bg-black dark:bg-AEBlack-800"></div>
        <div className="flex flex-col-reverse items-start justify-between pt-6 text-sm md:flex-row md:items-center md:pt-8">
          <p className="mt-8 md:mt-0 text-AEBlack-950 dark:text-AEBlack-50">
            © {new Date().getFullYear()} {footerTranslations.copyright}
          </p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <Link
                href="#"
                className="focus-visible:outline-none text-AEBlack-950 dark:text-AEBlack-50"
              >
                {footerTranslations.privacyPolicy}
              </Link>
            </li>
            <li className="underline">
              <Link
                href="#"
                className="focus-visible:outline-none text-AEBlack-950 dark:text-AEBlack-50"
              >
                {footerTranslations.termsOfService}
              </Link>
            </li>
            <li>
              <LocalSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

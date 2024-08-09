import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../../components/global/locale-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Government of Sharjah",
  description: "Sharjah Fish Resources Authority",
};

export default function RootLayout({ children, params: { locale } }) {
  const layout = useTranslations("Layout");
  const navigationTranslations = {
    about: layout("Navigation.Links.About"),
    goals: layout("Navigation.Links.Goals"),
    partnerships: layout("Navigation.Links.Partnerships"),
  };
  const footerTranslations = {
    title: layout("Footer.Title"),
    address: {
      title: layout("Footer.Address.Title"),
      value: layout("Footer.Address.Value"),
    },
    contact: {
      title: layout("Footer.Contact.Title"),
      phone: layout("Footer.Contact.Phone"),
      mail: layout("Footer.Contact.Mail"),
    },
    links: {
      about: layout("Footer.Links.About"),
      goals: layout("Footer.Links.Goals"),
      partnerships: layout("Footer.Links.Partnerships"),
    },
    copyright: layout("Footer.Copyright"),
    privacyPolicy: layout("Footer.PrivacyPolicy"),
    termsOfService: layout("Footer.TermsOfService"),
  };
  return (
    <html lang={locale} className="overflow-x-hidden">
      <body className={inter.className + " relative max-w-[1900px]"}>
        <div className="bg-white dark:bg-fra-black  dark:bg-dot-white/[0.1] bg-dot-black/[0.5] w-screen min-h-screen">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
          <Navigation navigationTranslations={navigationTranslations} />
          <div className="w-full min-h-screen relative z-20">{children}</div>
        </div>
        <Footer footerTranslations={footerTranslations} />
      </body>
    </html>
  );
}

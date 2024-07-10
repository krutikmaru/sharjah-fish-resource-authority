// components/Specializations.js
import { useTranslations } from "next-intl";

const Specializations = ({ specializationTranslations }) => {
  const home = useTranslations("Home");

  const specializations = specializationTranslations.specializations;

  return (
    <section
      id="about"
      className="relative px-[5%] pb-16 flex justify-center items-center"
    >
      <div className="container w-full ">
        <div className="mb-12 md:mb-18 lg:mb-20 text-left md:text-center">
          <h3 className="text-AE-Text-H4 mb-4 font-bold md:text-AE-Text-H3 lg:text-AE-Text-H1 tracking-tighter text-fra-black dark:text-AEBlack-50">
            {specializationTranslations.title}
          </h3>

          <p className="mb-3 font-semibold md:mb-4 text-AEGold-500 text-AE-Text-base">
            {specializationTranslations.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-x-12 gap-y-10 md:gap-y-12">
          {specializations.map((specialization) => {
            return (
              <div key={specialization.title}>
                <h3 className="mb-5 text-AE-Text-2xl font-bold md:mb-6 md:text-AE-Text-3xl md:leading-[1.3] lg:text-AE-Text-H3 tracking-tighter text-blue-navy dark:text-blue-yonder">
                  {specialization.title}
                </h3>
                <p className="AE-Text-base text-AEBlack-900 dark:text-AEBlack-100">
                  {specialization.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-AE-Text-2xl font-bold md:mb-4 md:text-AE-Text-3xl md:leading-[1.3] lg:text-4xl text-AEBlack-950 dark:text-AEBlack-50">
            {specializationTranslations.contact.title}
          </h4>
          <p className="text-AE-Text-base text-AEBlack-900 dark:text-AEBlack-100">
            {specializationTranslations.contact.description}
          </p>
          <div className="mt-6 md:mt-8">
            <a
              href="tel:(06) 511 5555"
              className="bg-AEGold-500 AE-Text-sm text-white px-6 py-3 rounded-md hover:bg-AEGold-400 transition-colors ease-in-out"
            >
              {specializationTranslations.contact.actionButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;

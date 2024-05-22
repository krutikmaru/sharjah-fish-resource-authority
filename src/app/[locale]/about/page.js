import { useTranslations } from "next-intl";
import Management from "../../../components/About/Management";
import Specializations from "../../../components/About/Specializations";

function Page() {
  const about = useTranslations("About");
  const managmentTranslations = {
    title: about("Management.Title"),
    subtitle: about("Management.Subtitle"),
    description: about("Management.Description"),
    actionButtonText: about("Management.ActionButtonText"),
  };

  const specializationTranslations = {
    title: about("Specializations.Title"),
    subtitle: about("Specializations.Subtitle"),
    specializations: [
      {
        title: about("Specializations.specialization1.Title"),
        description: about("Specializations.specialization1.Description"),
      },
      {
        title: about("Specializations.specialization2.Title"),
        description: about("Specializations.specialization2.Description"),
      },
      {
        title: about("Specializations.specialization3.Title"),
        description: about("Specializations.specialization3.Description"),
      },
      {
        title: about("Specializations.specialization4.Title"),
        description: about("Specializations.specialization4.Description"),
      },
      {
        title: about("Specializations.specialization5.Title"),
        description: about("Specializations.specialization5.Description"),
      },
      {
        title: about("Specializations.specialization6.Title"),
        description: about("Specializations.specialization6.Description"),
      },
      {
        title: about("Specializations.specialization7.Title"),
        description: about("Specializations.specialization7.Description"),
      },
      {
        title: about("Specializations.specialization8.Title"),
        description: about("Specializations.specialization8.Description"),
      },
      {
        title: about("Specializations.specialization9.Title"),
        description: about("Specializations.specialization9.Description"),
      },
      {
        title: about("Specializations.specialization10.Title"),
        description: about("Specializations.specialization10.Description"),
      },
      {
        title: about("Specializations.specialization11.Title"),
        description: about("Specializations.specialization11.Description"),
      },
    ],
    contact: {
      title: about("Specializations.Contact.Title"),
      description: about("Specializations.Contact.Description"),
      actionButtonText: about("Specializations.Contact.ActionButtonText"),
    },
  };

  return (
    <div>
      <Management managmentTranslations={managmentTranslations} />
      <Specializations
        specializationTranslations={specializationTranslations}
      />
    </div>
  );
}

export default Page;

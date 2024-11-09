import { ContactInfo } from "../../models/ContactInfo.ts";
import { whatsappMessage } from "../../utils/utilsFc.ts";

export interface FooterProps {
  data?: ContactInfo;
}

export const useFooter = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const defaultData: ContactInfo = {
    id: "1",
    location: "France",
    telephone: "+33 9 21 33 23 38",
    whatsapp: "+33 9 21 33 23 38",
    email: "chakeryb.work@hotmail.com",
    website: "https://github.com/ChakerYaakoub",
    contactDetails: "Feel free to reach out via any of the above platforms.",
    linkedin: "https://www.linkedin.com/in/chaker-yaakoub/",
  };

  return { ...props, currentYear, whatsappMessage, defaultData };
};

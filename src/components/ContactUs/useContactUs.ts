export type ContactUsProps = {
  contactUs: {
    location: string;
    telephone: string;
    email: string;
    whatsapp: string;
    website: string;
  };
};

export const useContactUs = (props: ContactUsProps) => {
  // Currently, there is no logic inside this hook.
  // You can add your state and effect logic here if needed.
  const contactUs = props.contactUs;

  return {
    ...props,
    contactUs,
  };
};

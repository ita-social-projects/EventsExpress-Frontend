import emailjs from "@emailjs/browser";
import isValidEmail from "../components/helpers/validators/email-address-validator";

const emailService = values => {
  const isValid = isValidEmail(values.email);
  if (isValid) {
    emailjs.send(
      "service_hxod138",
      "template_1k257d8",
      values,
      "hIa6EbQItOhL_Sxmg",
    );
  }
  return isValid;
};

export default emailService;

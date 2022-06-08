import emailjs from "@emailjs/browser";

const emailService = values => {
  if (values.email !== "") {
    emailjs.send(
      "service_hxod138",
      "template_1k257d8",
      values,
      "hIa6EbQItOhL_Sxmg",
    );
    return true;
    // eslint-disable-next-line no-else-return
  } else {
    return false;
  }
};

export default emailService;

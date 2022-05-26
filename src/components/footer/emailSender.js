import emailjs from "@emailjs/browser";

const emailSender = values => {
  emailjs.send(
    "service_hxod138",
    "template_1k257d8",
    values,
    "hIa6EbQItOhL_Sxmg",
  );
};

export default emailSender;

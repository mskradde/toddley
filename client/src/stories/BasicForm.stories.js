import React from "react";
import BasicForm from "../components/BasicForm";
import MailIcon from "../assets/mail-icon.svg";
import PasswortIcon from "../assets/lock-icon.svg";

export default {
  title: "BasicForm",
  component: BasicForm,
};

export const ModalInput = () => (
  <BasicForm
    label1="Channel Name"
    label2="Channel Bild"
    placeholder1="Channel Name"
    placeholder2="Channel Bild"
    btnLabel="Erstellen"
  />
);
export const LoginInput = () => (
  <BasicForm
    label1="Email"
    label2="Passwort"
    placeholder1="Email"
    placeholder2="Passwort"
    btnLabel="Login"
    imgSrc1={MailIcon}
    imgSrc2={PasswortIcon}
  />
);

import { ClientRequestEmail } from "@components/EmailTemplate";
import React from "react";

const EmailPage = () => {
  return (
    <ClientRequestEmail
      helpArea="Other"
      company="protocorp"
      email="victor2003@gmail.com"
      phone="9673693420"
      name="victor"
      designation="full stack engineer"
      message="need someone to build an application for ai code reviewer and deploy it on the cloud, scale in k8s using docker which uses the containerd runtime "
    />
  );
};

export default EmailPage;

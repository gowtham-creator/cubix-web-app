"use client";

import { FC } from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Hr,
  Text,
  Tailwind,
  Column,
  Row,
  Preview,
} from "@react-email/components";

export const ClientRequestEmail: FC<{
  helpArea: string;
  company: string;
  email: string;
  phone: string;
  name: string;
  designation: string;
  message: string;
}> = ({ helpArea, company, email, phone, name, designation, message }) => (
  <Html>
    <Head />
    <Tailwind>
      <Body style={main}>
        <Preview>got some request from a client</Preview>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="https://www.cubixso.com/logo-black.svg"
              width="100"
              height="60"
              alt="cubixso"
            />
            <Hr style={hr} />
            <Text style={title}>{`hey gowtham`} </Text>
            <Text>{`You got a new request from a client`} </Text>
            <>
              <Row>
                <Column className="font-bold text-lg w-1/2">field</Column>
                <Column className="font-bold text-lg w-1/2">value</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold"> name</Column>
                <Column className="w-1/2">{name}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold">company name</Column>
                <Column className="w-1/2">{company}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold">help area</Column>
                <Column className="w-1/2">{helpArea}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold">email</Column>
                <Column className="w-1/2">{email}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold">phone number</Column>
                <Column className="w-1/2">{phone}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold">designation</Column>
                <Column className="w-1/2">{designation}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column className="w-1/2 font-semibold">message</Column>
                <Column className="w-1/2">{message}</Column>
              </Row>
            </>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const title = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "600",
  textAlign: "left" as const,
};

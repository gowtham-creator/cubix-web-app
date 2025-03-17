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

export const VerifyEmailTemplate: FC<{
  helpArea: string;
  companyName: string;
  email: string;
  phone: string;
  name: string;
  designation: string;
  message: string;
}> = ({ helpArea, companyName, email, phone, name, designation, message }) => (
  <Html>
    <Head />
    <Tailwind>
      <Body style={main}>
        <Preview>got some request from a client</Preview>
        <Container style={container}>
          <Section style={box}>
            <Img
              src="https://www.cubixso.com/logo-black.svg"
              width="80"
              height="40"
              alt="cubixso"
            />
            <Hr style={hr} />
            <Text style={title}>{`hey gowtham`} </Text>
            <>
              <Row>
                <Column>field</Column>
                <Column>value</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column> name</Column>
                <Column>{name}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>company name</Column>
                <Column>{companyName}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>help area</Column>
                <Column>{helpArea}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>company name</Column>
                <Column>{companyName}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>email</Column>
                <Column>{email}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>phone number</Column>
                <Column>{phone}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>designation</Column>
                <Column>{designation}</Column>
              </Row>
              <Hr className="my-[16px] border-gray-300" />
              <Row>
                <Column>message</Column>
                <Column>{message}</Column>
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

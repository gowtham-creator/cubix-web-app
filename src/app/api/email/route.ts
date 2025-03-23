import { NextRequest, NextResponse } from "next/server";
import z from "zod";
// import { Resend } from "resend";
// import { ClientRequestEmail } from "@components/EmailTemplate";
// import { ReactElement } from "react";

const EmailSchema = z.object({
  helpArea: z.string(),
  company: z.string(),
  email: z.string(),
  phone: z.string(),
  name: z.string(),
  designation: z.string(),
  message: z.string(),
});

export type IEmail = z.infer<typeof EmailSchema>;

// const resend = new Resend(process.env.RESEND_API_KEY);
const POST = async (req: NextRequest) => {
  try {
    const userData = await req.json();
    const validate = EmailSchema.safeParse(userData);
    if (!validate.success) {
      return NextResponse.json(
        { error: "Bad Request!, Invalid Input parameters" },
        { status: 401 },
      );
    }

    const validData = validate.data;
    console.log(validData);
    // const { data, error } = await resend.emails.send({
    //   from: "cubixso <no-reply@cubixso.com>",
    //   to: [validData.email],
    //   subject: "Email Verification",
    //   react: ClientRequestEmail(validData) as ReactElement,
    // });
    //

    return NextResponse.json({ message: "email submitted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export { POST };

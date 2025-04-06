import mongoConnect from "db/mongoConnect";
import UserReqModel from "db/userRequestModel";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

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
    await mongoConnect();
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

    const createReq = await UserReqModel.create(validData);
    if (!createReq) {
      return NextResponse.json(
        { error: "some error occured, try again" },
        { status: 500 },
      );
    }

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

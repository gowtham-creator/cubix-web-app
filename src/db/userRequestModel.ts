import mongoose, { Model } from "mongoose";
import { z } from "zod";

export const IUserReqSchema = z.object({
  helpArea: z.string(),
  company: z.string(),
  email: z.string(),
  phone: z.string(),
  name: z.string(),
  designation: z.string(),
  message: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type IUserReq = z.infer<typeof IUserReqSchema>;

const UserReqSchema = new mongoose.Schema<IUserReq>(
  {
    helpArea: String,
    company: String,
    email: String,
    phone: String,
    name: String,
    designation: String,
    message: String,
  },
  { timestamps: true },
);

const UserReqModel: Model<IUserReq> =
  mongoose.models.UserReq || mongoose.model("UserReq", UserReqSchema);

export default UserReqModel;

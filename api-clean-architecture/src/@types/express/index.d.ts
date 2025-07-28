import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
     user ?: String | JwtPayload
    }
  }
}
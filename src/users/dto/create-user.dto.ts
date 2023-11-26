import { IsString, IsEmail, IsEnum } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum([("intern" | "staff" | "admin")[]], {
    message: "Valid role is required",
  })
  role: ("intern" | "staff" | "admin")[];
}

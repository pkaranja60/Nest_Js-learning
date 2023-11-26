import { IsString, IsEmail, IsNotEmpty, IsEnum } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: "At least one role is required" })
  @IsEnum(["intern", "staff", "admin"], {
    each: true,
    message: "Valid role is required",
  })
  role: ("intern" | "staff" | "admin")[];
}

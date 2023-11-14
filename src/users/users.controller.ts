import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query("role") role?: "intern" | "staff" | "admin") {
    return this.usersService.findAll(role);
  }

  @Get(":id") // GET /users:id
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //  POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: ("intern" | "staff" | "admin")[];
    }
  ) {
    return this.usersService.create(user);
  }

  @Patch(":id") // DELETE /users:id
  update(
    @Param("id") id: string,
    @Body()
    updatedUser: {
      name?: string;
      email?: string;
      role?: ("intern" | "staff" | "admin")[];
    }
  ) {
    return this.usersService.update(+id, updatedUser);
  }

  @Delete(":id") // DELETE /users:id
  delete(@Param("id") id: string) {
    return this.usersService.delete(+id);
  }
}

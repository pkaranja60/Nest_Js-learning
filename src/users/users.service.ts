import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: ["intern"],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: ["staff"],
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: ["admin"],
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice.williams@example.com",
      role: ["intern", "staff"],
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      role: ["staff", "admin"],
    },
  ];

  findAll(role?: "intern" | "admin" | "staff") {
    if (role) {
      return this.users.filter((user) => user.role.includes(role));
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: ("intern" | "staff" | "admin")[];
  }) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: ("intern" | "staff" | "admin")[];
    }
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}

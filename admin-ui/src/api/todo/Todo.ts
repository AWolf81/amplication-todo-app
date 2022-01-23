import { User } from "../user/User";

export type Todo = {
  createdAt: Date;
  done: boolean | null;
  id: string;
  text: string | null;
  updatedAt: Date;
  userTodos?: Array<User>;
};

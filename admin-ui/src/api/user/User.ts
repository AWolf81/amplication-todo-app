import { Todo } from "../todo/Todo";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  todoLists?: Array<Todo>;
  updatedAt: Date;
  username: string;
};

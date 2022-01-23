import { TodoWhereInput } from "./TodoWhereInput";
import { TodoOrderByInput } from "./TodoOrderByInput";

export type TodoFindManyArgs = {
  where?: TodoWhereInput;
  orderBy?: TodoOrderByInput;
  skip?: number;
  take?: number;
};

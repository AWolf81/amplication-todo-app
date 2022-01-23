import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  createdAt?: SortOrder;
  done?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};

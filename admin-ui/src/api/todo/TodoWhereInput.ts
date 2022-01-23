import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TodoWhereInput = {
  done?: BooleanNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};

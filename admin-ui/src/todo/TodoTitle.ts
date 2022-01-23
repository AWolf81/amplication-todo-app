import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "text";

export const TodoTitle = (record: TTodo): string => {
  return record.text || record.id;
};

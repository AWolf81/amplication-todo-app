import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TodoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Todos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="done" source="done" />
        <TextField label="ID" source="id" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

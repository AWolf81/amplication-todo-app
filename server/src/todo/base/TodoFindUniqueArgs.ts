import { ArgsType, Field } from "@nestjs/graphql";
import { TodoWhereUniqueInput } from "./TodoWhereUniqueInput";

@ArgsType()
class TodoFindUniqueArgs {
  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;
}

export { TodoFindUniqueArgs };

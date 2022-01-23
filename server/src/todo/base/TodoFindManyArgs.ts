import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TodoWhereInput } from "./TodoWhereInput";
import { Type } from "class-transformer";
import { TodoOrderByInput } from "./TodoOrderByInput";

@ArgsType()
class TodoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TodoWhereInput,
  })
  @Field(() => TodoWhereInput, { nullable: true })
  @Type(() => TodoWhereInput)
  where?: TodoWhereInput;

  @ApiProperty({
    required: false,
    type: TodoOrderByInput,
  })
  @Field(() => TodoOrderByInput, { nullable: true })
  @Type(() => TodoOrderByInput)
  orderBy?: TodoOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TodoFindManyArgs };

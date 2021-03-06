import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteTaskInput {
  @Field()
  @IsNotEmpty()
  id: number;
}

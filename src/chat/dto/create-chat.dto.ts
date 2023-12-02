import { IsString } from "class-validator";
export class CreateChatDto {
    @IsString()
    type: string;
    seen:boolean;
}

import {
    ApiProperty
} from "@nestjs/swagger";
import {
    IsNotEmpty
} from "class-validator";

export class CreateItemDto {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    quantity: number;

}


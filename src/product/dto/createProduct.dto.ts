import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import ImageDTO from './image.dto';
import CharacteristicDTO from './characteristic.dto';

export default class CreateProductDTO {
  @IsNotEmpty({ message: 'The field name cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'The field price cannot be empty' })
  @IsNumber(undefined, { message: 'The field price must be of type number' })
  price: number;

  @IsNotEmpty({ message: 'The field quantityAvailable cannot be empty' })
  @IsInt({ message: 'The field quantityAvailable must be of type number' })
  quantityAvailable: number;

  @IsNotEmpty({ message: 'The field description cannot be empty' })
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ImageDTO)
  images: ImageDTO[];

  @IsNotEmpty({ message: 'The field category cannot be empty' })
  category: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CharacteristicDTO)
  characteristics: CharacteristicDTO[];
}

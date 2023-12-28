import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import ImageDTO from './image.dto';
import CharacteristicDTO from './characteristic.dto';

export default class UpdateProductDTO {
  @IsOptional()
  name: string;

  @IsNumber(undefined, { message: 'The field price must be of type number' })
  @IsOptional()
  price: number;

  @IsInt({ message: 'The field quantityAvailable must be of type number' })
  @IsOptional()
  quantityAvailable: number;

  @IsOptional()
  description: string;

  @ValidateNested()
  @IsArray()
  @Type(() => ImageDTO)
  @IsOptional()
  images: ImageDTO[];

  @IsOptional()
  category: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CharacteristicDTO)
  @IsOptional()
  characteristics: CharacteristicDTO[];
}

import { IsNotEmpty } from 'class-validator';
import ProductEntity from '../entities/product.entity';

export default class CharacteristicDTO {
  id: string;
  product: ProductEntity;

  @IsNotEmpty({ message: 'The field name cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'The field description cannot be empty' })
  description: string;
}

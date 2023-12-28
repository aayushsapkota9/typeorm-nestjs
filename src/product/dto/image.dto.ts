import { IsNotEmpty } from 'class-validator';
import ProductEntity from '../entities/product.entity';

export default class ImageDTO {
  id: string;
  product: ProductEntity;

  @IsNotEmpty({ message: 'The field name cannot be empty' })
  url: string;

  @IsNotEmpty({ message: 'The field description cannot be empty' })
  description: string;
}

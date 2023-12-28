import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateProductDTO from './dto/createProduct.dto';
import { ProductService } from './product.service';
import ProductEntity from './entities/product.entity';
import UpdateProductDTO from './dto/updateProduct.dto';

@Controller('/product')
export default class ProductController {
  constructor(private productService: ProductService) {}

  // Create a new product
  @Post()
  async createProduct(@Body() data: CreateProductDTO) {
    const product = new ProductEntity();
    Object.assign(product, data);
    await this.productService.create(product);
    return { message: 'Product successfully registered', id: product.id };
  }

  // List all products
  @Get()
  async listProducts() {
    return this.productService.list();
  }

  // Update a product by ID
  @Put('/:id')
  async updateProduct(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    const product = new ProductEntity();
    Object.assign(product, data);
    await this.productService.update(id, product);
    return { message: 'Product successfully updated', id };
  }

  // Delete a product by ID
  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.delete(id);
    return { message: 'Product successfully deleted', id };
  }
}

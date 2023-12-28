import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ProductEntity from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  // all CRUD properties must be added here
  // Create a new product
  async create(product: ProductEntity) {
    await this.productRepository.save(product);
  }
  // List all products
  async list() {
    const result = await this.productRepository.find();
    return result;
  }
  // Find a product by ID
  async findById(id: string) {
    return this.productRepository.findOneBy({
      id,
    });
  }
  // Update a product
  async update(id: string, product: ProductEntity) {
    const hasProduct = await this.findById(id);
    if (!hasProduct) throw new Error('Product does not exist');
    await this.productRepository.update(id, product);
  }
  // Delete a product
  async delete(id: string) {
    const hasProduct = await this.findById(id);
    if (!hasProduct) throw new Error('Product does not exist');
    await this.productRepository.delete(id);
  }
}

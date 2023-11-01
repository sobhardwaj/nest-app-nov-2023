import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cat';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

  async create(catData: Cat): Promise<Cat> {
    const createdCat = new this.catModel(catData);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, catData: Cat): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, catData, { new: true }).exec();
  }

  async remove(id: string): Promise<Cat> {
    return this.catModel.findByIdAndRemove(id).exec();
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/my-nest-mongodb-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongooseModuleOptions),
  ],
})
export class AppModule { }

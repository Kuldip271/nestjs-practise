import { Module } from '@nestjs/common';
import { albumsController } from './albums.controller';
import { UserController } from './user.controller';
@Module({
  
  controllers: [UserController,albumsController],
  
})
export class AppModule {}

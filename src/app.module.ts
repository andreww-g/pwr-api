import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from '@modules/item/item.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

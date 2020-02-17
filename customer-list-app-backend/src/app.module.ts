import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/customerapp', {useNewUrlParser: true}),
    CustomerModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
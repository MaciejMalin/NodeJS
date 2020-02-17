import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './interfaces/invoice.interface';
import { CreateInvoiceDTO } from './dto/create-invoice.dto';

@Injectable()
export class InvoiceService {
    constructor(@InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>) { }
    // pobierz wszystkich uzytkownikow
    async getAllInvoice(): Promise<Invoice[]> {
        const invoices = await this.invoiceModel.find().exec();
        return invoices;
    }
    // pobierz jednego uzytkownika
    async getInvoice(invoiceID): Promise<Invoice> {
        const invoice = await this.invoiceModel.findById(invoiceID).exec();
        return invoice;
    }
    // dodaj uzytkownika
    async addInvoice(createInvoiceDTO: CreateInvoiceDTO): Promise<Invoice> {
        const newInvoice = await this.invoiceModel(createInvoiceDTO);
        return newInvoice.save();
    }
    // edytuj uzytkownika
    async updateInvoice(invoiceID, createInvoiceDTO: CreateInvoiceDTO): Promise<Invoice> {
        const updatedInvoice = await this.invoiceModel
            .findByIdAndUpdate(invoiceID, createInvoiceDTO, { new: true });
        return updatedInvoice;
    }
    // usun uzytkownika
    async deleteInvoice(invoiceID): Promise<any> {
        const deletedInvoice = await this.invoiceModel.findByIdAndRemove(invoiceID);
        return deletedInvoice;
    }
}

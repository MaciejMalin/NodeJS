import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDTO } from './dto/create-invoice.dto';

@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService) { }

    // dodaj uzytkownika
    @Post('/create')
    async addInvoice(@Res() res, @Body() createInvoiceDTO: CreateInvoiceDTO) {
        const invoice = await this.invoiceService.addInvoice(createInvoiceDTO);
        return res.status(HttpStatus.OK).json({
            message: "Invoice has been created successfully",
            invoice
        })
    }

    // uzyskaj liste uzytkownikow
    @Get('invoices')
    async getAllInvoice(@Res() res) {
        const invoices = await this.invoiceService.getAllInvoice();
        return res.status(HttpStatus.OK).json(invoices);
    }

    // znajdz uzytkownika po id
    @Get('invoice/:invoiceID')
    async getInvoice(@Res() res, @Param('invoiceID') invoiceID) {
        const invoice = await this.invoiceService.getInvoice(invoiceID);
        if (!invoice) throw new NotFoundException('Invoice does not exist!');
        return res.status(HttpStatus.OK).json(invoice);
    }

     // aktualizuj dane uzytkownika
     @Put('/update')
     async updateInvoice(@Res() res, @Query('invoiceID') invoiceID, @Body() createInvoiceDTO: CreateInvoiceDTO) {
         const invoice = await this.invoiceService.updateInvoice(invoiceID, createInvoiceDTO);
         if (!invoice) throw new NotFoundException('Invoice does not exist!');
         return res.status(HttpStatus.OK).json({
             message: 'Invoice has been successfully updated',
             invoice
         });
     }

     // usun uzytkownika
     @Delete('/delete')
     async deleteInvoice(@Res() res, @Query('invoiceID') invoiceID) {
         const invoice = await this.invoiceService.deleteInvoice(invoiceID);
         if (!invoice) throw new NotFoundException('Invoice does not exist');
         return res.status(HttpStatus.OK).json({
             message: 'Invoice has been deleted',
             invoice
         })
     }
 }

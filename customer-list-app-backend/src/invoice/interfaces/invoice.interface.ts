import { Document } from 'mongoose';

export interface Invoice extends Document {
    readonly first_name_invoice: string;
    readonly last_name_invoice: string;
    readonly email_invoice: string;
    readonly phone_invoice: string;
    readonly address_invoice: string;
    readonly description_invoice: string;
    readonly opis_invoice: string;
    readonly created_at_invoice: Date;
    readonly product01_invoice: string;
    readonly price01_invoice: string;
    readonly product02_invoice: string;
    readonly price02_invoice: string;
    readonly product03_invoice: string;
    readonly price03_invoice: string;
    readonly product04_invoice: string;
    readonly price04_invoice: string;
    readonly product05_invoice: string;
    readonly price05_invoice: string;
    readonly product06_invoice: string;
    readonly price06_invoice: string;
    readonly product07_invoice: string;
    readonly price07_invoice: string;
    readonly product08_invoice: string;
    readonly price08_invoice: string;
    readonly product09_invoice: string;
    readonly price09_invoice: string;
    readonly product10_invoice: string;
    readonly price10_invoice: string;
    readonly payment_method_invoice: string;
    readonly sum_invoice: string;
}
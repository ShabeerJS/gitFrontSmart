 import { RationAdmin } from "rationAdmin";
import { Address } from "./app/address";
import { RationCardMember } from 'src/rationcardmember';

export class RationCard{
    rationId!: number;
    rationCardNo!: number;
    password!: String;
    type!: CardType;
    addresses!:Address;
    rationCardMembers!:RationCardMember[];
    rationAdmin!:RationAdmin;
}

export enum CardType {
	NPHH, PHH
 }
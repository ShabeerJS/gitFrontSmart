import { RationAdmin } from "rationAdmin";

export class FixedProducts{
    productId!: number;
    productName!: String;
    productPrice!: number;
    productQuantity!: number;
    cardType!:CardType;
     rationAdmin!:RationAdmin;
constructor(){
    
}
}
 


export enum CardType {
	NPHH, PHH
}

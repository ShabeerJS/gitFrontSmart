import { RationAdmin } from "rationAdmin";
import { FixedProducts } from "./app/fixedproducts";

export class OrderDetails{
    orderId!: number;
    rationNo!: number;
    localDate!: Date;
    price!: number;
    orderStatus!:OrderStatus;
    fixedProduct!:FixedProducts[];
constructor(){
    
}

}

export enum OrderStatus {
	PRODUCT_ORDERED="PRODUCT_ORDERED", 
    PRODUCT_RECIEVED="PRODUCT_RECIEVED"
}

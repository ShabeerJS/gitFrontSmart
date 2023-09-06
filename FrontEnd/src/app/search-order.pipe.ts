import { Pipe, PipeTransform } from '@angular/core';
import { OrderDetails } from 'src/orderdetails';


@Pipe({
  name: 'searchOrder'
})
export class SearchOrderPipe implements PipeTransform {

  transform(orderDetails : OrderDetails[],searchName:String): OrderDetails[] {

    if(!orderDetails || !searchName){
      return orderDetails;
    }
    return orderDetails.filter(order => 
      order.rationNo.toString().includes(searchName.toLocaleLowerCase()) ||
      order.localDate.toDateString().includes(searchName.toLocaleLowerCase())  ||
      order.orderStatus.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())  
      );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { RationCard } from 'src/rationcard';
import { FixedProducts } from './fixedproducts';
import { Product } from './product';
import { Address } from './address';
import { OrderDetails, OrderStatus } from 'src/orderdetails';
import { RationAdmin } from 'rationAdmin';
import { RationCardMember } from 'src/rationcardmember';

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {
  isAdminLogin = new BehaviorSubject<boolean>(true);
  showSideMenu = new BehaviorSubject<boolean>(false);

  rationAdminId!:any;

  public setAdminType(isAdmine: boolean) {
    this.isAdminLogin.next(isAdmine);
  }

  public setSideMenuView(view: boolean) {
    this.showSideMenu.next(view);
  }


 setAdminId(rationAdminId: Number){
  this.rationAdminId=rationAdminId;
 }
//ForCartItems============================
 cartItems!:FixedProducts[];

  setCartItems(fixedProducts: FixedProducts[]){
    this.cartItems = fixedProducts;
  }
  
  getCartItems():FixedProducts[] {
    return this.cartItems;
  }
//===========================================================
 //=======================AdminApi==============================
  private baseURL = "http://localhost:8080/rationAdmin/";
  //=============================UserApi==================
  private baseURL1 = "http://localhost:8080/ration/";

  constructor(private httpClient: HttpClient) { }

  //UserSide===================GetDetails of card============
  getUserCardDetailswithCardNo(rationCardNo:number):Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL1}`+'userCardetailsWithCardNo/'+`${rationCardNo}`);
  
   }
   getUserCardDetailswithrationId(rationId:number):Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL1}`+'userCardetails/'+`${rationId}`);
  
   }
//UserSide==============GetAllfixedFixed=======================
  getAllfixedproductsUser(rationCardNo:number):Observable<FixedProducts[]> {
    return this.httpClient.get<FixedProducts[]>(`${this.baseURL1}`+'getFixedProducts/'+`${rationCardNo}`);
  
   }
  //USerSide==============Placeorder============================
  placeOrder(rationCardNo:number,fixedProducts:FixedProducts[]):Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL1}`+'placeOrder/'+`${rationCardNo}`,fixedProducts );
  
  }

  //UserSide===================================
  myProfile(rationCardNo:number,relation :String):Observable<any>{
    return this.httpClient.get<any>(
      `${this.baseURL1}` + 'members/' +  `${rationCardNo}/` +
      `${relation}/` ,
    );
  }

  updatePassword(
    rationCardNo: number,
    oldPassword:String,
    NewPassword:String
  ): Observable<Object> {
    return this.httpClient.put(
      `${this.baseURL1}` + 'updatePassword/' + `${rationCardNo}/` +
      `${oldPassword}/` + `${NewPassword}`,RationCard
      
    );
  }

  
//=====================MyOrderDetails==================
// getUserCardDetailswithCardNo(rationCardNo:number):Observable<any> {
//   return this.httpClient.get<any>(`${this.baseURL1}`+'userCardetailsWithCardNo/'+`${rationCardNo}`);

//  }
myorderDetails(rationCardNo:number,):Observable<any>{
  return this.httpClient.get<any>(`${this.baseURL1}`+'orderDetails/'+`${rationCardNo}`);
}
  // placeOrder(userId:Number,products:Product[]){
  //   return this.http.post<any>(`${this.baseUrl}`+'placeorder/'+`${userId}`,products);
  // }
//================================UserLogin & UserSide==================
getUserLogin(rationCardNo:number):Observable<any> {
  return this.httpClient.get<any>(`${this.baseURL1}`+'userLogin/'+`${rationCardNo}`);

 }

//=======================AdminLogin api===============================
 getAdminLogin(emailId:string):Observable<any> {
  return this.httpClient.get<any>(`${this.baseURL}`+'adminLogin/'+`${emailId}`);

 }

//   unsubscribe(studentId: number, subjectId: number, teacherId: number): Observable<object> {
//     return this.http.delete(`${this.baseUrl}/subscription/unsubscribe/${studentId}/${subjectId}/${teacherId}`)
//   }
//  getAdminByName(adminName: string): Observable<any> {
//   return this.http.get<any>(`${this.baseUrl}/admin/getadminbyname/${adminName}`);
// }

              //============= Products api==================

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}` +'readAllProducts');
  }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}`+'readByIdProduct/'+`${productId}`);
  }

  addProduct(rationAdminId:number,product: Product): Observable<Object>{
    return this.httpClient.post<Product>(`${this.baseURL}`+'addProducts/'+`${rationAdminId}`, product);
  }

  updateProduct(productId: number, product: Product): Observable<Object>{
    return this.httpClient.put<Product>(`${this.baseURL}`+'updateProduct/'+`${productId}`, product);
  }

  deleteProduct(productId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'deleteProducts/'+`${productId}`);
  }
//=============Fixed Products api==================

getFixedProductList(): Observable<FixedProducts[]>{
  return this.httpClient.get<FixedProducts[]>(`${this.baseURL}` +'readAllFixedProducts');
}

getFixedProductById(productId: number): Observable<FixedProducts>{
  return this.httpClient.get<FixedProducts>(`${this.baseURL}`+'readByIdFixedProduct/'+`${productId}`);
}



addFixedProduct(rationAdminId:number,fixedProducts: FixedProducts): Observable<Object>{
  return this.httpClient.post<Product>(`${this.baseURL}`+'addFixedProducts/'+`${rationAdminId}`, fixedProducts);
}

updateFixedProduct(productId: number, fixedProducts: FixedProducts): Observable<Object>{
  return this.httpClient.put<Product>(`${this.baseURL}`+'updateFixedProducts/'+`${productId}`, fixedProducts);
}

deleteFixedProduct(productId: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'deleteFixedProducts/'+`${productId}`);
}
// =============================RationCard====================
getRationCardList(): Observable<RationCard[]>{
  return this.httpClient.get<RationCard[]>(`${this.baseURL}` +'readAllRationCard');
}

getRationCardById(rationCardNo: number): Observable<RationCard>{
  return this.httpClient.get<RationCard>(`${this.baseURL}`+'rationCardUsers/'+`${rationCardNo}`);
}

addRationCard(rationAdminId:number,rationCard: RationCard,): Observable<Object>{
  return this.httpClient.post<RationCard>(`${this.baseURL}`+'addRationCard/'+`${rationAdminId}`, rationCard);
}

deleteRationCard(rationCardNo: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'deleteRationCard/'+`${rationCardNo}`);
}

adminsignup(rationAdmin:RationAdmin): Observable<Object>{
  return this.httpClient.post<RationAdmin>(`${this.baseURL}`+'addRationAdmin/', rationAdmin);
}

// updateFixedProduct(productId: Number, fixedProducts: FixedProducts): Observable<Object>{
//   return this.httpClient.put<Product>(`${this.baseURL}`+'updateFixedProducts/'+`${productId}`, fixedProducts);
// }

          // ==================RationCardMember Api=====================

addRationCardMember(rationId:number,rationCardMember: RationCardMember): Observable<Object>{
  return this.httpClient.post<RationCardMember>(`${this.baseURL}`+'addRationCardMember/'+`${rationId}`, rationCardMember);
}

addListRationCardMember(rationId:number,rationCardMember: RationCardMember[]): Observable<Object>{
  return this.httpClient.post<RationCardMember>(`${this.baseURL}`+'addRationCardMember/'+`${rationId}`, rationCardMember);
}

 // ==================Addresss Api=====================

 addAddress(rationId:number,address: Address): Observable<Object>{
  return this.httpClient.post<Address>(`${this.baseURL}`+'addAddress/'+`${rationId}`, address);
}

 // ==================Order Api=====================
 
 getOrderList(): Observable<OrderDetails[]>{
  return this.httpClient.get<OrderDetails[]>(`${this.baseURL}` +'readAllOrders');
}

getOrderById(orderId: number): Observable<OrderDetails>{
  return this.httpClient.get<OrderDetails>(`${this.baseURL}`+'readbyOrderId/'+`${orderId}`);
}

 updateOrderstatus(orderId: number,orderStatus:OrderStatus,OrderDetails:OrderDetails): Observable<Object>{
   return this.httpClient.put(`${this.baseURL}`+'UpdateOrder/'+`${orderId}/`+`${orderStatus}`,OrderDetails);
 }

//================================RationCardMember setting pk=================================
rationCard!: RationCard;
getrationCardmemberstore():RationCard{
return this.rationCard;

}

setrationCardmemberstore(rationCard:RationCard){
this.rationCard=rationCard;

}


// products!: Product[];
// getrationproducts():RationCard{
// return this.rationCard;

// }

// setrationCardmemberstore(rationCard:RationCard){
// this.rationCard=rationCard;

// }
//================================RationCard setting pk=================================
    rationAdmin!: RationAdmin;

    getrationAdmin():RationAdmin{
      return this.rationAdmin;
      
      }
      
      setrationAdmin(rationAdmin:RationAdmin){
      this.rationAdmin=rationAdmin;
      
      }


}


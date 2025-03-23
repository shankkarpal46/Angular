import {Component} from "@angular/core"

@Component({
    selector: 'product',
    imports:[],
    templateUrl:'product.component.html',
    styleUrl:'product.component.css'
})

export class ProductComponent{
    productId:number = 1;
    productName:string= "Laptop";
}
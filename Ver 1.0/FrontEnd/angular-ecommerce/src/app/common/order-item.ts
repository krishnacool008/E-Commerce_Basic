import { CartItem } from "./cart-item";

export class OrderItem {
    imageUrl: string;
    unitPrice: number;
    qunatity: number;
    productId: number;

    constructor(cartItem: CartItem){
        this.imageUrl = cartItem.imageUrl;
        this.qunatity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
    }
}

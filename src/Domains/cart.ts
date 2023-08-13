import { Item, UnmarshalledItem } from "./item";

export interface CartItem {
    item: Item;
    quantity: number;
}

export interface UnmarshalledCartItem {
    item: UnmarshalledItem;
    quantity: number;
}

export interface UnmarshalledCart {
    id: string;
    products: UnmarshalledCartItem[];
    totalPrice: number;
}

export interface CartProps {
    id?: string;
    rawProducts?: UnmarshalledCartItem[]
}
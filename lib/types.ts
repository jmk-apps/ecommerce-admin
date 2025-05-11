import {Image, Product } from "@prisma/client"

export type ProductPriceChange = {
    name: string;
    price: number;
    categoryId: string;
    colorId: string;
    sizeId: string;
    isFeatured: boolean;
    isArchived: boolean;
    id: string;
    storeId: string;
    createdAt: Date;
    updatedAt: Date;
}

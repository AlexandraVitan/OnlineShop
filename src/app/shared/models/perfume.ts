export class Perfume{
    id!:number;
    name!:string;
    price!:number;
    notes!: string;
    tags?:string[];
    favorite:boolean = false;
    imageUrl!:string;
    brand?: string;
}
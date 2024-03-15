export class Perfume{
    id!:number;
    name!:string;
    price!:number;
    description!: string;
    tags?:string[];
    favorite:boolean = false;
    imageUrl!:string;
}
import { ICarBase } from "./iCarBase";

export class Car implements ICarBase{
    Id!: number;
    Brand!: string;
    Model!: string;
    Year!: number;
    Km!: number;  
    Engine!: string;
    Power!: number;
    Fuel!: string;
    Type!: string;
    Price!: number;
    State!: number;
    Description!: string;
    Available!: string;
    Image?:string;
    PostedOn!: string;
    Photos?: string[];
}
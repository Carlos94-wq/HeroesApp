export class HeroeModel{
    public id:number;
    public nombre:string;
    public poder:string;
    public vivo:boolean;

    constructor(){
        this.vivo = true;
    }
}
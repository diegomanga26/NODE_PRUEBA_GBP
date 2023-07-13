import {Type, Transform, Expose} from "class-transformer";

export class user{
    @Expose ({name: "nombre"})
    @Transform(({value})=>{
        let data = /^[a-zA-Z\s]+$/.test(value);
        if(data && typeof data == "string"){
            return String(value);
        } else {
            throw {status: 401, mensaje: "Error en el ingreso del parametro 'nombre'"}
        }
    })
    NAME: string
    @Expose({name:"id_responsable"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number"){
            return Number(value);
        } else {
            throw {status: 402,mensaje:"Error en el ingreso del parametro 'id_responsable'"}
        }
    })
    ID_RES: number
    @Expose({name:"estado"})
    @Transform(({value})=>{
        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number"){
            return Number(value);
        } else {
            throw {status: 402,mensaje:"Error en el ingreso del parametro 'estado'"}
        }
    })
    ESTD: number
    constructor(p1:string, p2: number, p3: number){
        this.NAME = p1;
        this.ID_RES = p2;
        this.ESTD = p3;
    }
}
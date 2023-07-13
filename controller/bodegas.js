var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
export class user {
    constructor(p1, p2, p3) {
        this.NAME = p1;
        this.ID_RES = p2;
        this.ESTD = p3;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z\s]+$/g.test(value);
        if (data && typeof data == "string") {
            return String(value);
        }
        else {
            throw {
                status: 401, mensaje: "Error en el ingreso del parametro 'nombre'"
            };
        }
    }),
    __metadata("design:type", String)
], user.prototype, "NAME", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 402, mensaje: "Error en el ingreso del parametro 'id_responsable'" };
        }
    }),
    __metadata("design:type", Number)
], user.prototype, "ID_RES", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else {
            throw { status: 402, mensaje: "Error en el ingreso del parametro 'estado'" };
        }
    }),
    __metadata("design:type", Number)
], user.prototype, "ESTD", void 0);

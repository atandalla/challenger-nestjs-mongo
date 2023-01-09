// Ayuda a ts escribir el codigo 
import { Document } from "mongoose";

export interface User extends Document{ // Hereda de un objeto de mongose sus propiedades para añadir a las creadas
    readonly name: String;
    readonly user: String;
    readonly email: String;
    readonly psw: String;
    readonly createdAt: Date;

}
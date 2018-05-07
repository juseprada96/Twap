import { Grupo } from "./grupo";

export class Asignatura {
    idAsignatura: string;
    nombreAsignatura: string;
    NRC: string;
    creditos: number;
    grupos: Grupo[];
}

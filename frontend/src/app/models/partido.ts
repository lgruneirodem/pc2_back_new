// partido.model.ts
export class Partido {
    equipo1: string;
    equipo2: string;
    Resultado: string;

    constructor( Resultado: string = '', equipo1: string = '', equipo2: string = '')
    {
        this.equipo1 = equipo1;
        this.equipo2 = equipo2;
        this.Resultado = Resultado;
    } 

}

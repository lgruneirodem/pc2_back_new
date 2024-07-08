export class Jugador {
    id: number;
    equipo: string;
    idequipo: number;
    name: string;
    edad: number;
    posicion: string;
    altura: string;
    peso: string;
    valorActual: number;
    valorFuturo: number;
    estado: string;
    clas: string;

    constructor(id: number=0, equipo: string = '', clas: string = ''
        , name: string = ''
        , posicion: string = ''
        , altura: string = ''
        , peso: string = ''
        , estado: string = '',
        edad: number=0,
        idequipo: number=0,
        valorActual: number=0,
        valorFuturo: number=0
    )
    {
        this.id = id;
        this.equipo = equipo;
        this.name = name;
        this.posicion = posicion;
        this.altura = altura;
        this.peso = peso;
        this.estado = estado;
        this.edad = edad;
        this.idequipo = idequipo;
        this.clas = clas;
        this.valorActual = valorActual;
        this.valorFuturo = valorFuturo;
    } 
}

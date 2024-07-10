export class Jugador {
    jugador_id: number;
    equipo_id: number;
    Nombre: string;
    Foto: string;
    Edad: number;
    Posicion: string;
    Altura: string;
    Peso: string;
    valor: number;
    estado: string;
    puntos: number;
    mediaPuntos: number;
    partidos: number;
    goles: number;
    tarjetas: number;


    constructor(jugador_id: number=0, equipo_id: number = 0, Foto: string = '', Nombre: string = ''
        , Posicion: string = ''
        , Altura: string = ''
        , Peso: string = ''
        , estado: string = '',
        Edad: number=0,
        valor: number=0,
        puntos: number=0,
        mediaPuntos: number=0,
        partidos: number=0,
        goles: number=0,
        tarjetas: number=0
    )
    {
        this.jugador_id = jugador_id;
        this.equipo_id = equipo_id;
        this.Nombre = Nombre;
        this.Foto = Foto;
        this.Posicion = Posicion;
        this.Altura = Altura;
        this.Peso = Peso;
        this.estado = estado;
        this.Edad = Edad;
        this.valor = valor;
        this.puntos = puntos;
        this.mediaPuntos = mediaPuntos;
        this.partidos = partidos;
        this.goles = goles;
        this.tarjetas = tarjetas;
    } 
}

export class Equipos {
    id: number;
    name: string;
    nameCompacto: string;

        constructor(id: number=0, name: string = '', nameCompacto: string = '')
    {
        this.id = id;
        this.name = name;
        this.nameCompacto = nameCompacto;
    } 
}

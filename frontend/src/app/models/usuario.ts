export class Usuario {
    usuario_id: number;
    nombre: string;
    email: string;
    user: string;
    esAdmin: number; // Aquí asumo que esAdmin es un número (0 o 1)
    created_at: string;
    updated_at: string;

    constructor(usuario_id: number=0, nombre: string = '', email: string = '', user: string = '', esAdmin: number = 0, created_at: string = '', updated_at: string = '')
    {
        this.usuario_id = usuario_id;
        this.nombre = nombre;
        this.email = email;
        this.user = user;
        this.esAdmin = esAdmin;
        this.created_at = created_at;
        this.updated_at = updated_at;
    } 
  }
  
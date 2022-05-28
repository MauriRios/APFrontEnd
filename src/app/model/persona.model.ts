export class Persona {
    id?: number ;
    nombreApellido: String;
    paisCiudad: String;
    puesto: String;
    img: String;

    constructor(id: number,
                nombreApellido: String, 
                paisCiudad: String,
                puesto: String,
                img:String) {
        
        this.id = id;           
        this.nombreApellido = nombreApellido;
        this.paisCiudad = paisCiudad;
        this.puesto = puesto;
        this.img = img;
    }
}


export class persona {
    id?: number ;
    img?: String;
    nombreApellido: String;
    paisCiudad: String;
    puesto: String;

    constructor(nombreApellido: String, 
                paisCiudad: String,
                puesto: String,
                img:String) {
        
        this.nombreApellido = nombreApellido;
        this.paisCiudad = paisCiudad;
        this.puesto = puesto;
        this.img = img;
    }
}


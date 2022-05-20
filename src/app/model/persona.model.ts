export class persona {
    id?: number ;
    nombreApellido: String;
    paisCiudad: String;
    puesto: String;
    img: String;

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


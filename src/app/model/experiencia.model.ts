export class Experiencia {
    id: number ;
    empresa: String;
    puesto: String;
    periodoTrabajado: String;
    img: String;

    constructor(id: number,
                empresa: String, 
                puesto: String,
                periodoTrabajado: String,
                img: String){
                
this.id = id;
this.empresa = empresa;
this.puesto = puesto;
this.periodoTrabajado = periodoTrabajado;
this.img = img;
}
}
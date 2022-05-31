export class Educacion {
    id: number ;
    institucion: String;
    titulo: String;
    periodoEstudio: String;
    img: String;

    constructor(id: number,
        institucion: String, 
        titulo: String,
        periodoEstudio: String,
        img: String){
        
this.id = id;
this.institucion = institucion;
this.titulo = titulo;
this.periodoEstudio = periodoEstudio;
this.img = img;
}
}
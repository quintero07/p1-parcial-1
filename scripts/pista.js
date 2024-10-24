class Pista{
  constructor(nombrePista, duracionPista){
      this.nombre = nombrePista;
      this.duracion = duracionPista
  }

  formatearDuracion(){
    const minutos = Math.floor(this.duracion/60);
    const segundos = this.duracion%60;
    return `${minutos}:${segundos}`;
  }
}
class Disco {
  constructor(autorUsuario, nombreUsuario, portadaUsuario, codigoUsuario, pistasUsuario) {
    this.autor = autorUsuario;
    this.nombre = nombreUsuario;
    this.portada = portadaUsuario;
    this.codigo = codigoUsuario;
    this.pistas = pistasUsuario;
  }

  crearCard() {
    return `
      <div class="card" style="width: 18rem;">
              <img src=${this.portada} class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${this.autor}</h5>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${this.nombre}</li>
                  <li class="list-group-item">${this.codigo}</li>
                  ${this.pistas.map(pista => 
                    `
                      <li class="list-group-item${pista.duracion > 180 ? ' cancionLarga' : ''}">
                          ${pista.formatearDuracion()} | ${pista.nombre}
                      </li>
                    `).join('')}
              </ul>
          </div>
      `
  }
}
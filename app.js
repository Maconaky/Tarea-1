// Declarar una matriz para cada equipo
const equipos = [
  { nombre: 'Alianza Lima', anioFundacion: 1901, posicionActual: 1, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Escudo_Alianza_Lima.svg/1200px-Escudo_Alianza_Lima.svg.png' },
  { nombre: 'Cusco FC', anioFundacion: 2020, posicionActual: 2, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Cusco_FC.png' },
  { nombre: 'Universitario de Deportes', anioFundacion: 1924, posicionActual: 3, imagen: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Logo_oficial_de_Universitario.png' },
  { nombre: 'Carlos A. Mannucci', anioFundacion: 1959, posicionActual: 4, imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Carlos_Mannucci_Escudo.png' },
  { nombre: 'Sporting Cristal', anioFundacion: 1955, posicionActual: 5, imagen: 'http://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Escudo_del_Club_Sporting_Cristal.svg/1200px-Escudo_del_Clusb_Sporting_Cristal.svg.png'},
  { nombre: 'César Vallejo', anioFundacion: 1996, posicionActual: 6, imagen: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/ESCUDO_CLUB_DEPORTIVO_UCV.png' },
  { nombre: 'Deportivo Garcilaso', anioFundacion: 1957, posicionActual: 7, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Garcilasodelcusco.png/1200px-Garcilasodelcusco.png' },
  { nombre: 'ADT', anioFundacion: 1929, posicionActual: 8, imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/96/ADTarma.png' },
  { nombre: 'Alianza Atlético', anioFundacion: 1920, posicionActual: 9, imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Escudo_Alianza_Atl%C3%A9tico_de_Sullana.jpg' },
  { nombre: 'UTC Cajamarca', anioFundacion: 1964, posicionActual: 10, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/UTC_Cajamarca.svg/1200px-UTC_Cajamarca.svg.png' },
  { nombre: 'Sport Huancayo', anioFundacion: 2007, posicionActual: 11, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sport_Huancayo_2023.png/640px-Sport_Huancayo_2023.png' },
  { nombre: 'Deportivo Municipal', anioFundacion: 1935, posicionActual: 12, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Deportivo_Municipal.svg/1200px-Deportivo_Municipal.svg.png' },
  { nombre: 'Atlético Grau', anioFundacion: 1919, posicionActual: 13, imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Escudo_club_atletico_grau.png' },
  { nombre: 'Cienciano', anioFundacion: 1901, posicionActual: 14, imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Escudo_Cienciano.png' },
  { nombre: 'Unión Comercio', anioFundacion: 2002, posicionActual: 15, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Union_Comercio.svg/1200px-Union_Comercio.svg.png' },
  { nombre: 'FBC Melgar', anioFundacion: 1915, posicionActual: 16, imagen: 'https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/3871.png' },
  { nombre: 'Sport Boys', anioFundacion: 1927, posicionActual: 17, imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sport_Boys_As.svg/1200px-Sport_Boys_As.svg.png' },
  { nombre: 'Deportivo Binacional', anioFundacion: 2010, posicionActual: 18, imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Equipo_de_Juliaca_Oficial.png' },
  { nombre: 'AD Cantolao', anioFundacion: 1981, posicionActual: 19, imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Cantolao_FC.png' }
];

// Obtener elemento HTML de la tabla
const tabla = document.querySelector('#tabla');

// Agregar cada equipo a la tabla
equipos.forEach((equipo) => {
  const fila = tabla.insertRow();
  
  const posicionActual = fila.insertCell();
  const escudo = fila.insertCell();
  
  
  const nombre = fila.insertCell();
  const anioFundacion = fila.insertCell();
  

  const imagen = document.createElement('img');
  imagen.src = equipo.imagen;
  imagen.width = 30;
  escudo.appendChild(imagen);

  nombre.innerText = equipo.nombre;
  anioFundacion.innerText = equipo.anioFundacion;
  posicionActual.innerText = equipo.posicionActual;
});

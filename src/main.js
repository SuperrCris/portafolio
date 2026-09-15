import './assets/estilos.css';

// Datos de tecnologías

const tecs = {
    flutter: { nombre: 'Flutter', imagen: '/assets/flutter.svg' },
    go: { nombre: 'Go', imagen: '/assets/go.svg' },
    java: { nombre: 'Java', imagen: '/assets/java.svg' },
    csharp: { nombre: 'C#', imagen: '/assets/csharp.svg' },
    html: { nombre: 'HTML', imagen: '/assets/html.svg' },
    css: { nombre: 'CSS', imagen: '/assets/css.svg' },
    javascript: { nombre: 'JavaScript', imagen: '/assets/js.svg' },
    nosql: { nombre: 'NoSQL', imagen: '/assets/nosql.svg' },
    sql: { nombre: 'SQL', imagen: '/assets/sql.svg' },
    construct3: { nombre: 'Construct 3', imagen: '/assets/construct3.svg' },
    gcloud: { nombre: 'GCloud', imagen: '/assets/gcloud.svg' },
    unity: { nombre: 'Unity', imagen: '/assets/unity.svg' },
    gamemaker2: { nombre: 'Game Maker Studio 2', imagen: '/assets/gamemaker2.svg' },
    firebase: { nombre: 'Firebase', imagen: '/assets/firebase.svg' },
    admob: { nombre: 'Admob Ads', imagen: '/assets/admob.svg' },
    blender: { nombre: 'Blender', imagen: '/assets/blender.svg' },
    paintnet: { nombre: 'Paint.NET', imagen: '/assets/paintnet.png' },
    audacity: { nombre: 'Audacity', imagen: '/assets/audacity.svg' },
}; 

const tecnologias = {
  lenguajes: [
    tecs.flutter,
    tecs.go,
    tecs.java,
    tecs.csharp,
    tecs.html,
    tecs.css,
    tecs.javascript,
    tecs.nosql,
    tecs.sql,

  ],
  software: [
    tecs.construct3,
    tecs.gcloud,
    tecs.unity,
    tecs.gamemaker2,
    tecs.firebase,
    tecs.admob,
    tecs.blender,
    tecs.paintnet,
    tecs.audacity,

  ]
};

// Datos de proyectos y sus galerías
const proyectos = {
  pez: {
    titulo: 'Pez vs Anzuelos',
    descripcion: 'Un videojuego donde eres un pez que escapa de los anzuelos el mayor tiempo posible. Aqui aprendi a integrar sistemas de monetizacion tanto de anuncios como de compras dentro de la app. Arte propio con musica de artistas de Newgrounds. Un proyecto que estuvo en Play Store, pero que espera un relanzamiento próximamente.',
    descripcionbreve: 'Un juego casual donde controlas un pez y debes evitar los anzuelos para sobrevivir el mayor tiempo posible. Usa tus reflejos y objetos para ganar mas puntos',
    color: 'rgba(34, 167, 153, 0.692)',
    tecnologias: [tecs.flutter, tecs.paintnet, tecs.audacity, tecs.firebase, tecs.admob, tecs.gcloud],
    items: [{ tipo: 'video', src: '/assets/pva.mp4' },
      { tipo: 'imagen', src: '/assets/fondopva.webp' },
      { tipo: 'imagen', src: '/assets/pva2.webp' },
      { tipo: 'imagen', src: '/assets/pva3.webp' }

    ],
  },
  cmm: {
    titulo: 'Circulos Magicos Matematicos',
    descripcion: 'Un videojuego que adapta el material didactico Circulos Magicos Matematicos a las pantallas. Este videojuego es una propuesta en pos del aprendizaje matematico de los mas pequeños a traves del aprendizaje ludico-mnemotecnico. En colaboracion con mis compañeros y el creador del material original, creamos este MVP funcional que consta de 4 minijuegos principales',
    descripcionbreve: 'Un juego educativo que lleva el material didactico CMM a formato digital con juegos que facilitan el aprendizaje matematico.',
    color: 'rgba(167, 34, 34, 0.692)',
    tecnologias: [tecs.unity, tecs.paintnet, tecs.audacity],
    items: [{ tipo: 'video', src: '/assets/cmm.mp4' },
      { tipo: 'imagen', src: '/assets/cmm.webp' },
      { tipo: 'imagen', src: '/assets/cmm1.webp' },
       { tipo: 'imagen', src: '/assets/cmm2.webp' },
       { tipo: 'imagen', src: '/assets/cmm4.webp' }
    ]
  },
  vocacional: {
    titulo: 'Test Belarmino digital',
    descripcion: 'Este test ayuda a los alumnos de nuevo ingreso a elegir su carrera según sus habilidades y preferencias. Una version digital de un test ya existente que facilita el proceso de orientación vocacional. Cuenta con exportacion a Excel y guardado en la nube. Este proyecto fue creado como parte de una tesis universitaria con el unico fin de ayudar.',
    descripcionbreve: 'Un test vocacional digital que ayuda a los estudiantes a elegir su carrera según sus habilidades y preferencias.',
    color: 'rgba(34, 34, 167, 0.692)',
    tecnologias: [tecs.flutter, tecs.firebase, tecs.gcloud],
    items: [{ tipo: 'imagen', src: '/assets/vocacional1.webp' },
      { tipo: 'imagen', src: '/assets/vocacional2.webp'},
      { tipo: 'imagen', src: '/assets/vocacional3.webp' },
       { tipo: 'imagen', src: '/assets/vocacional4.webp' },
    ]
  },
  runfo: {
    titulo: 'RUNFO',
    descripcion: 'Escapa del OVNI mientras sorteas obstaculos. Un videojugo creado para participar en la Opera Game Jam 2020 cuyo tema era UFO y solo se contaba con 2 semanas para desarrollarlo. Arte propio y terreno generado proceduralmente',
    descripcionbreve: 'Un juego de acción donde debes escapar de un OVNI mientras evitas obstáculos.',
    color: 'rgba(48, 19, 214, 0.692)',
    tecnologias: [tecs.gamemaker2, tecs.paintnet, tecs.audacity],
    items: [
      { tipo: 'video', src: '/assets/runfo.mp4' },
      { tipo: 'imagen', src: '/assets/runfo1.webp' },
      { tipo: 'imagen', src: '/assets/runfospl.webp' }
    ]
  },
  intercambio: {
    titulo: 'Intercambios Gutierrada',
    descripcion: 'Organiza y participa en un intercambio navideño digital para el año 2025. Una plataforma que facilita la gestión y participación en eventos de intercambio de regalos durante la temporada navideña.',
    descripcionbreve: 'Una plataforma digital para organizar y participar en intercambios navideños.',
    color: 'rgba(34, 167, 167, 0.692)',
    tecnologias: [tecs.flutter, tecs.firebase],
    items: [
      { tipo: 'imagen', src: '/assets/intercambios.webp' },
       { tipo: 'imagen', src: '/assets/intercambios1.webp' },
        { tipo: 'imagen', src: '/assets/intercambios2.webp' }
    ]
  },
  pov: {
    titulo: 'Punto de venta para gimnasio',
    descripcion: 'Un sistema de punto de venta digital para gimnasios que optimiza la gestión de ventas e inventario. Un proyecto que aun se encuentra en desarrollo. Integra APIs creadas en Go que se comunican con las APIs de Mercado Pago para el uso de terminales de pago Point Smart 2 y otros servicios en Google Cloud como Firestore para alojar, sincronizar y compartir informacion entre las distintas sucursales.',
    descripcionbreve: 'Un sistema de punto de venta diseñado específicamente para gimnasios, facilitando la gestión de ventas, inventario y clientes de manera eficiente.',
    color: 'rgba(167, 34, 167, 0.692)',
    tecnologias: [tecs.flutter, tecs.gcloud, tecs.go],
    items: [   { tipo: 'imagen', src: '/assets/pov.webp' },
      { tipo: 'imagen', src: '/assets/pov2.webp' }]
  }
};

// Estado del modal
let estadoGaleria = {
  galeriaActual: null,
  indexActual: 0
};

// Elementos del DOM
const modal = document.getElementById('modal-galeria');
const modalImagen = document.getElementById('modal-imagen');
const modalVideo = document.getElementById('modal-video');
const modalVideoSource = document.getElementById('modal-video-source');
//const modalContador = document.getElementById('modal-contador');
const modalTitulo = document.getElementById('modal-titulo');
const modalThumbnails = document.getElementById('modal-thumbnails');
const btnAnterior = document.querySelector('.modal-anterior');
const btnSiguiente = document.querySelector('.modal-siguiente');
const btnCerrar = document.querySelector('.modal-cerrar');
const modalTecnologias = document.querySelector('.tecnologias-usadas');

const formularioContacto = document.getElementById('formulario-contacto');
const estadoFormulario = document.getElementById('estado-formulario');
const botonEnviar = formularioContacto.querySelector('.boton-enviar');
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAAE06T2jhBNboUcbu';
const urlContacto = import.meta.env.VITE_CONTACT_API_URL || (
  import.meta.env.DEV
    ? 'http://localhost:8080/enviar-correo'
    : 'https://us-central1-portafolio-de-cristian-gamez.cloudfunctions.net/enviarCorreo'
);
let turnstileWidgetId;

function mostrarEstadoFormulario(mensaje, tipo = '') {
  estadoFormulario.textContent = mensaje;
  estadoFormulario.dataset.tipo = tipo;
}

function inicializarTurnstile() {
  if (!turnstileSiteKey) {
    mostrarEstadoFormulario('Falta configurar VITE_TURNSTILE_SITE_KEY.', 'error');
    botonEnviar.disabled = true;
    return;
  }

  const contenedorTurnstile = formularioContacto.querySelector('.cf-turnstile');
  contenedorTurnstile.dataset.sitekey = turnstileSiteKey;

  if (window.turnstile) {
    turnstileWidgetId = window.turnstile.render(contenedorTurnstile, {
      sitekey: turnstileSiteKey,
      action: 'contact',
      callback: () => mostrarEstadoFormulario(''),
      'expired-callback': () => mostrarEstadoFormulario('La verificación expiró. Complétala de nuevo.', 'error'),
      'error-callback': () => mostrarEstadoFormulario('No se pudo cargar la verificación. Inténtalo de nuevo.', 'error'),
    });
    return;
  }

  window.addEventListener('load', inicializarTurnstile, { once: true });
}

formularioContacto.addEventListener('submit', (e) => {
  e.preventDefault();
  const tokenTurnstile = window.turnstile?.getResponse(turnstileWidgetId);

  if (!tokenTurnstile) {
    mostrarEstadoFormulario('Completa la verificación antes de enviar el mensaje.', 'error');
    return;
  }

  const formData = new FormData(formularioContacto);
  const data = {
    nombre: formData.get('nombre'),
    correo: formData.get('correo'),
    contenido: formData.get('contenido'),
    'cf-turnstile-response': tokenTurnstile,
  };
  enviarCorreo(data);
});

async function enviarCorreo(data) {
  botonEnviar.disabled = true;
  mostrarEstadoFormulario('Enviando mensaje...');

  try {
    const respuesta = await fetch(urlContacto, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data),
    });

    if (!respuesta.ok) {
      const mensaje = (await respuesta.text()).trim();
      throw new Error(mensaje || `Error del servidor (${respuesta.status}).`);
    }
    formularioContacto.reset();
    mostrarEstadoFormulario('Mensaje enviado correctamente.', 'exito');
  } catch (error) {
    mostrarEstadoFormulario(error.message, 'error');
  } finally {
    botonEnviar.disabled = false;
    window.turnstile?.reset(turnstileWidgetId);
  }
}

inicializarTurnstile();

function generarProyectos() {
  const contenedor = document.querySelector('.contenedorproyectos');
  contenedor.innerHTML = ''; // Limpiar contenedor
  
  Object.entries(proyectos).forEach(([id, proyecto]) => {
    const div = document.createElement('div');
    div.className = 'proyecto';
    div.id = id;
    div.style.backgroundColor = proyecto.color;
    div.setAttribute('data-galeria', id);
    
    let tecnologiasHTML = '';
    if (proyecto.tecnologias && proyecto.tecnologias.length > 0) {
      tecnologiasHTML = '<div class="detalles">';
      proyecto.tecnologias.forEach(tech => {
        const tecInfo = obtenerTecnologia(tech.nombre);
        if (tecInfo) {
          tecnologiasHTML += `
            <div class="tecnologia-tag" style="display: flex; align-items: center; gap: 6px; padding: 4px 8px; background: rgba(255,255,255,0.1); border-radius: 4px; font-size: 0.85rem;">
              <img src="${tecInfo.imagen}" alt="${tech}" style="width: 16px; height: 16px; object-fit: contain;">
              <span>${tech.nombre}</span>
            </div>
          `;
        }
      });
      tecnologiasHTML += '</div>';
    }
    
    div.innerHTML = `
      <div class="imagen"></div>
      <div class="descripcion">
        <h1>${proyecto.titulo}</h1>
        <p>${proyecto.descripcionbreve}</p>
        ${tecnologiasHTML}
      </div>
    `;
    
    contenedor.appendChild(div);
  });
}

function obtenerTecnologia(nombre) {
  for (let categoria in tecnologias) {
    const tech = tecnologias[categoria].find(t => t.nombre === nombre);
    if (tech) return tech;
  }
  return null;
}


function generarTecnologias() {
  const seccionLenguajes = document.querySelector('[data-seccion="lenguajes"]');
  if (seccionLenguajes) {
    seccionLenguajes.innerHTML = '';
    tecnologias.lenguajes.forEach(tech => {
      const div = document.createElement('div');
      div.className = 'tecnologia';
      div.innerHTML = `
        <img src="${tech.imagen}" alt="${tech.nombre}">
        <span>${tech.nombre}</span>
      `;
      seccionLenguajes.appendChild(div);
    });
  }

  const seccionSoftware = document.querySelector('[data-seccion="software"]');
  if (seccionSoftware) {
    seccionSoftware.innerHTML = '';
    tecnologias.software.forEach(tech => {
      const div = document.createElement('div');
      div.className = 'tecnologia';
      div.innerHTML = `
        <img src="${tech.imagen}" alt="${tech.nombre}">
        <span>${tech.nombre}</span>
      `;
      seccionSoftware.appendChild(div);
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  generarTecnologias();
  generarProyectos();
  inicializarGaleria();
});

function inicializarGaleria() {
  document.querySelectorAll('[data-galeria]').forEach(proyecto => {
    proyecto.addEventListener('click', () => abrirGaleria(proyecto.dataset.galeria));
    proyecto.style.cursor = 'pointer';
  });
}

btnAnterior.addEventListener('click', () => mostrarAnterior());
btnSiguiente.addEventListener('click', () => mostrarSiguiente());
btnCerrar.addEventListener('click', () => cerrarModal());


modal.addEventListener('click', (e) => {
  if (e.target === modal) cerrarModal();
});

document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('activo')) return;
  
  if (e.key === 'ArrowLeft') mostrarAnterior();
  if (e.key === 'ArrowRight') mostrarSiguiente();
  if (e.key === 'Escape') cerrarModal();
});

// Inicializar event listeners en proyectos (ahora movido a inicializarGaleria)
// document.querySelectorAll('[data-galeria]').forEach(proyecto => {
//   proyecto.addEventListener('click', () => abrirGaleria(proyecto.dataset.galeria));
//   proyecto.style.cursor = 'pointer';
// });

function abrirGaleria(galeriaId) {
  const galeria = proyectos[galeriaId];
  
  if (!galeria || galeria.items.length === 0) {
    alert('Esta galería aún no tiene imágenes o videos.\n\nPara agregar contenido, edita src/main.js y agrega los elementos en el array de la galería.');
    return;
  }

  if (galeria.items.length === 1) {
    btnAnterior.style.display = 'none';
    btnSiguiente.style.display = 'none';
  } else {
    btnAnterior.style.display = 'block';
    btnSiguiente.style.display = 'block';
  }

  estadoGaleria.galeriaActual = galeriaId;
  estadoGaleria.indexActual = 0;
  
  modal.classList.add('activo');
  document.body.style.overflow = 'hidden';
  
  mostrarItem();
}

function cerrarModal() {
  modal.classList.remove('activo');
  document.body.style.overflow = 'auto';
  modalImagen.style.display = 'none';
  modalVideo.style.display = 'none';
  modalVideo.pause();
}

function mostrarAnterior() {
  const galeria = proyectos[estadoGaleria.galeriaActual];
  estadoGaleria.indexActual = (estadoGaleria.indexActual - 1 + galeria.items.length) % galeria.items.length;
  mostrarItem();
}

function mostrarSiguiente() {
  const galeria = proyectos[estadoGaleria.galeriaActual];
  estadoGaleria.indexActual = (estadoGaleria.indexActual + 1) % galeria.items.length;
  mostrarItem();
}

function mostrarItem() {
  const galeria = proyectos[estadoGaleria.galeriaActual];
  const item = galeria.items[estadoGaleria.indexActual];
  

  modalTitulo.textContent = galeria.titulo;
  const modalDescripcion = document.getElementById('modal-descripcion');
  modalDescripcion.textContent = galeria.descripcion || '';
  //modalContador.textContent = `${estadoGaleria.indexActual + 1} / ${galeria.items.length}`;
  

  if (item.tipo === 'imagen') {
    modalImagen.src = item.src;
    modalImagen.style.display = 'block';
    modalVideo.style.display = 'none';
  } else if (item.tipo === 'video') {
    modalVideoSource.src = item.src;
    modalVideo.load();
    modalVideo.style.display = 'block';
    modalImagen.style.display = 'none';
  }
  
  // Actualizar thumbnails
  actualizarThumbnails();
  mostrarTecnologias();
}

function actualizarThumbnails() {
  const galeria = proyectos[estadoGaleria.galeriaActual];
  modalThumbnails.innerHTML = '';
  
  galeria.items.forEach((item, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'modal-thumbnail';
    
    if (item.tipo === 'imagen') {
      const img = document.createElement('img');
      img.src = item.src;
      thumb.appendChild(img);
    } else if (item.tipo === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      thumb.appendChild(video);
    }
    
    if (index === estadoGaleria.indexActual) {
      thumb.classList.add('activo');
    }
    
    thumb.addEventListener('click', () => {
      estadoGaleria.indexActual = index;
      mostrarItem();
    });
    
    modalThumbnails.appendChild(thumb);
  });
}

function mostrarTecnologias() {
  const tecnologiasusadas = proyectos[estadoGaleria.galeriaActual].tecnologias || [];
  modalTecnologias.innerHTML = '';
  console.log("tecnologiasusadas:", tecnologiasusadas);
  tecnologiasusadas.forEach(tecnologia => {
    const div = document.createElement('div');

    div.classList.add('tecnologia-tag');

    div.innerHTML = " <img src='" + tecnologia.imagen + "' alt='" + tecnologia.nombre + "'> " + tecnologia.nombre;

    modalTecnologias.appendChild(div);
  });
}



var persona = {
  nombre: "Tomas",
  apellido: "Neufel",
  foto: `/assets/IMG_20211014_133741_504 (4).jpg`,
  experienciaProfesional: [
    {
      puesto: "Desarrollador Full Stack",
      empresa: "Mercado libre",
      duracion: "2 años",
    },
    {
      puesto: "Desarrollador Front-End",
      empresa: "Microsoft",
      duracion: "1 año",
    }
  ],
  formacionAcademica: [
    {
      titulo: "Ingeniero en Sistemas Computacionales",
      institucion: "Universidad de Guadalajara",
      duracion: "4 años",
    },
    {
      titulo: "Curso Avanzado de JavaScript",
      institucion: "Platzi",
      duracion: "6 meses",
    }
  ],
  skills: [
    {
      nombre: "JavaScript",
      nivel: "Avanzado",
    },
    {
      nombre: "React",
      nivel: "Intermedio",
    },
    {
      nombre: "Node.js",
      nivel: "Avanzado",
    },
    {
      nombre: "HTML",
      nivel: "Avanzado",
    },
    {
      nombre: "CSS",
      nivel: "Avanzado",
    }
  ]
};



let contenedorExperiencia = document.querySelector(".container-experience");
let nombre = document.querySelector(".nombre")
let contenedorFormacion = document.querySelector(".container__formation-academic");
let contenedorSkills = document.querySelector(".container-skills")
let contenedorImg = document.querySelector(".container-img")

let nombrar = () =>{
  nombre.textContent= persona.nombre + " "+ persona.apellido;
}

let colocarFoto = () =>{
  let img = document.createElement("img");
  img.src = persona.foto;
  img.classList.add("perfil__img-round");

  contenedorImg.appendChild(img);
}

let rellenoContenedorExperiencia = () =>{

    for(let i=0; i<persona.experienciaProfesional.length;i++){
        let div = document.createElement("div");
        let h2 = document.createElement("h2")
        let h3 = document.createElement("h3")
    
        div.classList.add("flex-item")
        contenedorExperiencia.appendChild(div);
        div.appendChild(h2);
        div.appendChild(h3);

        h2.textContent = persona.experienciaProfesional[i].puesto
        h3.textContent = `Trabaje en ${persona.experienciaProfesional[i].empresa} durante ${persona.experienciaProfesional[i].duracion}.`

        contenedorExperiencia.appendChild(div)
    }
    
}

let rellenoContenedorFormacion= () =>{
  for(let i=0; i<persona.formacionAcademica.length;i++){
    let div = document.createElement("div");
    let h2 = document.createElement("h2")
    let h3 = document.createElement("h3")

    div.classList.add("flex-item")
    contenedorExperiencia.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);

    h2.textContent = persona.formacionAcademica[i].titulo
    h3.textContent = `Estudie en ${persona.formacionAcademica[i].institucion} durante ${persona.formacionAcademica[i].duracion}.`

    contenedorFormacion.appendChild(div)
  }
}

let rellenoContenedorSkills = () =>{
  for(let i=0; i<persona.skills.length;i++){
    let div = document.createElement("div");
    let h2 = document.createElement("h2")
    let h3 = document.createElement("h3")

    div.classList.add("flex-item")
    contenedorExperiencia.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3);

    h2.textContent = persona.skills[i].nombre;
    h3.textContent = `Nivel ${persona.skills[i].nivel}.`

    contenedorSkills.appendChild(div)
  }
  
}

rellenoContenedorExperiencia();
rellenoContenedorSkills();
colocarFoto();
nombrar();
rellenoContenedorFormacion();
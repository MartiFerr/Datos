// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZHn6Se1ApTB31radqTp0-hfyxiBX2RBA",
  authDomain: "proyecto-49af0.firebaseapp.com",
  projectId: "proyecto-49af0",
  storageBucket: "proyecto-49af0.firebasestorage.app",
  messagingSenderId: "540923423081",
  appId: "1:540923423081:web:8df488c2dee967cd71f5f8",
  measurementId: "G-4GB6ZXT352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Referenciamos el elemento del DOM donde mostraremos la lista de tareas
let tabla = document.querySelector(".tabla-estudiantes");

// 🔹 Creamos una referencia a la rama "estudiantes"
const refEstudiantes = ref(db, "estudiantes");

// 🔹 Escuchamos los cambios en tiempo real en la rama "estudiantes
// La función onValue se ejecuta cada vez que hay un cambio en los datos de la referencia especificada
onValue(refEstudiantes, (datos) => {
    console.log(datos)
    //Obtenemos la información de los estudiantes
    let estudiantes = datos.val();
    //Limpiamos la lista antes de actualizarla
    tabla.innerHTML = "";
    //Recorremos los datos obtenidos de los estudiantes
    for (let dni in estudiantes) {
        tabla.innerHTML += `
        <tr>
            <td>${dni}</td>
            <td>${estudiantes[dni].apellido}</td>
            <td>${estudiantes[dni].nombre}</td>
            <td>${estudiantes[dni].edad}</td>
        </tr>
        `;
        
    }

})


let botonAlmacenar = document.getElementById("btnAlmacenar");
let botonBorrar = document.getElementById("btnBorrar");

botonAlmacenar.addEventListener('click',()=>{

    sessionStorage.setItem('nombre','Julian');
    sessionStorage.setItem('apellido','Valencia');
    localStorage.setItem('Nombre','Julian');
    localStorage.setItem('Apellido','Valencia');


});
botonBorrar.addEventListener('click',function (){
    sessionStorage.clear();
    localStorage.clear();
});

function construirFila(){

    let fuentes = [localStorage, sessionStorage];

    for(let k=0;k<fuentes.length;k++){
        let miFuente = fuentes[k];
    for(i=0;i<miFuente.length;i++){
   
    //Con cadenas pre procesadas    
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let valor = miFuente.getItem(miFuente.key(i));
    let clave = miFuente.key(i);
    cuerpoTabla.innerHTML+=`<tr><td>${clave}</td><td>${valor}</td></tr>`; 
    /*let fila = document.createElement("tr");

    let celda = document.createElement("td");
    //Crear un nodo de texto
    let texto = document.createTextNode(miFuente.key(i));
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    let valor = miFuente.getItem(miFuente.key(i));
    texto = document.createTextNode(valor);
    celda.appendChild(texto);
    fila.appendChild(celda);

    cuerpoTabla.appendChild(fila);*/

}
}
}

construirFila();

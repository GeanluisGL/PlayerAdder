const para = document.getElementById('Edit');
const piri = document.createElement("p")
const pere = document.getElementById("tabp").insertRow(0);


para.addEventListener('click', updateName);
let save = []
let count = 0;


function updateName() {

  count++
  let name = prompt('Enter a new name');
  para.textContent = 'Player ' + (count) + ": "  + name;
  save.push(para.textContent)
 namesafe(); 
 
}

function namesafe(){
  
    let tblDatos = document.getElementById('tabp').insertRow(0);
    let col1 = tblDatos.insertCell(0);
    
    col1.innerHTML = save [count -1];

    // let poro = pere.insertCell(0);
    // poro.innerHTML  = capa
  
}






let namee = document.querySelector('.name');
let email = document.querySelector('.email');
let createBtn = document.getElementById('create');

let arrayData;
if(localStorage.User != null && Array.isArray(JSON.parse(localStorage.User))){
    arrayData = JSON.parse(localStorage.User);
}else{
    arrayData =[];
}



//create
createBtn.onclick = function ()
{
  let objData = {name:namee.value,email:email.value} ;
   arrayData.push(objData);
   localStorage.setItem('User',JSON.stringify(arrayData));
   readData();
}

//read
function readData(){
    let table = '';
    let tbody = document.querySelector('.body-data');
    for(let i=0; i<arrayData.length;i++)
    { 
        table +=` <tr> 
        <td>${i+1}</td>
        <td>${arrayData[i].name}</td>
        <td>${arrayData[i].email}</td>
        <td><button>update</button></td>
        <td><button onclick="delData(${i})">delete</button></td>
    </tr>`
    }    
    tbody.innerHTML = table;
}readData();




//delet
function delData(id)
{   
    arrayData.splice(id,1);
    localStorage.User = JSON.stringify(arrayData);
    readData();
}
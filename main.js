let namee = document.querySelector('.name');
let email = document.querySelector('.email');
let createBtn = document.getElementById('create');


let mood = 'create';
let tmp;
let arrayData;
if (localStorage.User != null && Array.isArray(JSON.parse(localStorage.User))) {
    arrayData = JSON.parse(localStorage.User);
} else {
    arrayData = [];
}



//create
createBtn.onclick = function () {
    let objData = { name: namee.value.toLowerCase(), email: email.value.toLowerCase() };
   
    
if(email.value != '' && namee.value != '')
{
   if (mood === 'create') {
        arrayData.push(objData);
        localStorage.setItem('User', JSON.stringify(arrayData));
    } else {
        arrayData[tmp] = objData;
        mood = 'create';
        createBtn.innerHTML = 'create';
    }
    namee.value = '';
    email.value = '';
    readData();
} 
}
    



//read
function readData() {
    let table = '';
    let tbody = document.querySelector('.body-data');
    for (let i = 0; i < arrayData.length; i++) {
        table += ` <tr> 
        <td>${i + 1}</td>
        <td>${arrayData[i].name}</td>
        <td>${arrayData[i].email}</td>
        <td><button onclick="upData(${i})">update</button></td>
        <td><button onclick="delData(${i})">delete</button></td>
    </tr>`
    }
    tbody.innerHTML = table;
} readData();




//delete
function delData(id) {
    arrayData.splice(id, 1);
    localStorage.User = JSON.stringify(arrayData);
    readData();
}


//update
function upData(id) {
    mood = 'update';
    createBtn.innerHTML = "update";
    namee.value = arrayData[id].name;
    email.value = arrayData[id].email;
    tmp = id;
}



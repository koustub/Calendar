var buttonOnePressed = document.getElementById('btn1');
var buttonSecondPressed = document.getElementById('btn2');
var buttonThirdPressed = document.getElementById('btn3');
var buttonFourthPressed = document.getElementById('btn4');
var buttonFifthPressed = document.getElementById('btn5');
var buttonSixthPressed = document.getElementById('btn6');
var buttonSeventhPressed = document.getElementById('btn7');
var buttonEigthPressed = document.getElementById('btn8');
var buttonNinthPressed = document.getElementById('btn9');

var UbuttonOnePressed = document.getElementById('btn21');
var UbuttonSecondPressed = document.getElementById('btn22');
var UbuttonThirdPressed = document.getElementById('btn23');
var UbuttonFourthPressed = document.getElementById('btn24');
var UbuttonFifthPressed = document.getElementById('btn25');
var UbuttonSixthPressed = document.getElementById('btn26');
var UbuttonSeventhPressed = document.getElementById('btn27');
var UbuttonEigthPressed = document.getElementById('btn28');
var UbuttonNinthPressed = document.getElementById('btn29');


var dt = moment().format('dddd, MMMM Do ');
document.getElementById('dayDate').innerHTML = `${dt}`;
console.log(`day and date${dt}`);
var time = moment().format('hh');
console.log(`${time}`);
var fhtd = [];
var todolist =[];



// Taking input values 
var fh = document.getElementById('1hour');
var sh = document.getElementById('2hour');
var th = document.getElementById('3hour');
var frh = document.getElementById('4hour');
var fih = document.getElementById('5hour');
var sih = document.getElementById('6hour');
var svh = document.getElementById('7hour');
var eh = document.getElementById('8hour');
var nh = document.getElementById('9hour');


var ms = moment().format("h");


for (i=1;i<=9;i++){
    console.log('i m entering loop');
    var timeToCheck = document.getElementById(`h${i}`);
    var inputByHour = document.getElementById(`${i}hour`);
    var timeOfDay =timeToCheck.innerText;
    var tod = timeOfDay.slice(0,2);
    console.log(`${tod}`);
    console.log(`${ms}`);
    if(tod < ms){
        inputByHour.style.backgroundColor='red';
        console.log('its less then');
    }else if(tod > ms){
        inputByHour.style.backgroundColor='green';
        console.log('its greather than');
    }else if(tod == ms){
        inputByHour.style.backgroundColor='grey';
        console.log('its equal ');
    }
}

var todo;
var valueId;


buttonOnePressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = fh.value;
     valueId = 'button1';
    if (localStorage.getItem('todolist') !== null){
    todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[0]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonSecondPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = sh.value;
     valueId = 'button2';
     if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonThirdPressed.addEventListener('click',function(){
    console.log('button is pressed');
    todo = th.value;
    valueId = 'button3';
    if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonFourthPressed.addEventListener('click',function(){
    console.log('button is pressed');
    todo = frh.value;
    valueId = 'button4';
    if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonFifthPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = fih.value;
     valueId = 'button5';
     if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonSixthPressed.addEventListener('click',function(){
    console.log('button is pressed');
    todo = sih.value;
    valueId = 'button6';
    if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonSeventhPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = svh.value;
     valueId = 'button7';
     if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonEigthPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = eh.value;
     valueId = 'button8';
     if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
buttonNinthPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = nh.value;
     valueId = 'button9';
     if ((localStorage.getItem('todolist') !== null)){
        todolist = JSON.parse(localStorage.getItem('todolist'));
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    console.log(`${todolist[1]}`);}
    else{
    todolist.push({valueId,todo});
    localStorage.setItem('todolist',JSON.stringify(todolist));
    }
});
UbuttonOnePressed.addEventListener('click', function () {
    console.log('button is pressed');
    fh.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
UbuttonSecondPressed.addEventListener('click', function () {
    console.log('button is pressed');
    sh.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
UbuttonThirdPressed.addEventListener('click', function () {
    console.log('button is pressed');
    th.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});

UbuttonFourthPressed.addEventListener('click', function () {
    console.log('button is pressed');
    frh.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
UbuttonFifthPressed.addEventListener('click', function () {
    console.log('button is pressed');
    fih.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
UbuttonSixthPressed.addEventListener('click', function () {
    console.log('button is pressed');
    sih.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});

UbuttonSeventhPressed.addEventListener('click', function () {
    console.log('button is pressed');
    svh.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
UbuttonEigthPressed.addEventListener('click', function () {
    console.log('button is pressed');
    eh.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
UbuttonNinthPressed.addEventListener('click', function () {
    console.log('button is pressed');
    nh.value = "";
    var todolist = JSON.parse(localStorage.getItem('todolist'));
    delete todolist[0];
    var rhtd = todolist.filter(Boolean);
    localStorage.setItem('todolist', JSON.stringify(rhtd));
    console.log(`key deleted`);
});
if(window.localStorage.length !== 0 )
{
    window.onload = showTodo1(); 
}

   
    
function showTodo1(){

    var fhtd = JSON.parse(localStorage.getItem('todolist'));    
    for(var i=0;i<fhtd.length;i++)
    {
       
        var check = fhtd[i].valueId;
        console.log(`${check}`);
        switch (check) {

            case 'button1':
                console.log('has a value');

                fh.value = fhtd[i].todo;
                break;
            case 'button2':
                sh.value = fhtd[i].todo;
                break;
            case 'button3':
                th.value = fhtd[i].todo;
                break;
            case 'button4':
                frh.value = fhtd[i].todo;
                break;
            case 'button5':
                fih.value = fhtd[i].todo;
                break;
            case 'button6':
                sih.value = fhtd[i].todo;
                break;
            case 'button7':
                svh.value = fhtd[i].todo;
                break;
            case 'button8':
                eh.value = fhtd[i].todo;
                break;
            case 'button9':
                nh.value = fhtd[i].todo;
                break;
            default:
                console.log('sorry something is wrong ');

        }
    }
}

 

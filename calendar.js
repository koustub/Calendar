var buttonOnePressed = document.getElementById('btn1');
var buttonSecondPressed = document.getElementById('btn2');
var buttonThirdPressed = document.getElementById('btn3');
var buttonFourthPressed = document.getElementById('btn4');
var buttonFifthPressed = document.getElementById('btn5');
var buttonSixthPressed = document.getElementById('btn6');
var buttonSeventhPressed = document.getElementById('btn7');
var buttonEigthPressed = document.getElementById('btn8');
var buttonNinthPressed = document.getElementById('btn9');
var dt = moment().format('dddd, MMMM Do ');
document.getElementById('dayDate').innerHTML = `${dt}`;
console.log(`day and date${dt}`);
var time = moment().format('h:mm');
console.log(`${time}`);
var fhtd = [];
var todolist =[];

    

// Taking input values 
var fh = document.getElementById('firsthour');
var sh = document.getElementById('secondhour');
var th = document.getElementById('thirdhour');
var frh = document.getElementById('fourthhour');
var fih = document.getElementById('fifthhour');
var sih = document.getElementById('sixthhour');
var svh = document.getElementById('seventhhour');
var eh = document.getElementById('eighthhour');
var nh = document.getElementById('ninthhour');


var then = "12:00";
var ms = moment(time,"HH:mm").diff(moment(then,"HH:mm"));
var d = moment.duration(ms).humanize();
var s = d.format;







var todo;
var valueId;
console.log(`${d}`);

buttonOnePressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = fh.value;
     valueId = 'button1';
    todolist.push({valueId,todo});
    console.log(`${todolist[0]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonSecondPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = sh.value;
     valueId = 'button2';
    todolist.push({valueId,todo});
    console.log(`${todolist[1]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonThirdPressed.addEventListener('click',function(){
    console.log('button is pressed');
    todo = th.value;
    valueId = 'button3';
    todolist.push({valueId,todo});
    console.log(`${todolist[2]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonFourthPressed.addEventListener('click',function(){
    console.log('button is pressed');
    todo = frh.value;
    valueId = 'button4';
    todolist.push({valueId,todo});
    console.log(`${todolist[3]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonFifthPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = fih.value;
     valueId = 'button5';
    todolist.push({valueId,todo});
    console.log(`${todolist[4]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonSixthPressed.addEventListener('click',function(){
    console.log('button is pressed');
    todo = sih.value;
    valueId = 'button6';
    todolist.push({valueId,todo});
    console.log(`${todolist[5]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonSeventhPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = svh.value;
     valueId = 'button7';
    todolist.push({valueId,todo});
    console.log(`${todolist[6]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonEigthPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = eh.value;
     valueId = 'button8';
    todolist.push({valueId,todo});
    console.log(`${todolist[7]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});
buttonNinthPressed.addEventListener('click',function(){
    console.log('button is pressed');
     todo = nh.value;
     valueId = 'button9';
    todolist.push({valueId,todo});
    console.log(`${todolist[8]}`);
    localStorage.setItem('todolist',JSON.stringify(todolist));
});

if(window.localStorage.length !== 0 ){
    debugger;
    window.onload = showTodo1(); 
    }
    
function showTodo1(){

    fhtd = JSON.parse(localStorage.getItem('todolist'));
    for(var i=0;i<fhtd.length;i++){
        //debugger;
        console.log(`${fhtd[0].valueId}`);
    var check = fhtd[i].valueId;
    switch (check){
        
        case 'button1':
            console.log('has a value');
            debugger;
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

if ('9:00' > time){
    fh.style.backgroundColor='grey';
}
else if('9:00' < time){
    fh.style.backgroundColor='grey';
}
else{
    fh.style.backgroundColor='green';
}

if ('10:00' > time){
    sh.style.backgroundColor='grey';
}
else if('10:00' < time){
    sh.style.backgroundColor='grey';
}
else{
    sh.style.backgroundColor='green';
}

if ('11:00' > time){
    th.style.backgroundColor='grey';
}
else if('11:00' < time){
    th.style.backgroundColor='grey';
}
else{
    th.style.backgroundColor='green';
}

if ('12:00' > time){
    frh.style.backgroundColor='grey';
}
else if('12:00' < time){
    frh.style.backgroundColor='grey';
}
else{
    frh.style.backgroundColor='green';
}

if ('13:00' > time){
    fih.style.backgroundColor='grey';
}
else if('13:00' < time){
    fih.style.backgroundColor='grey';
}
else{
    fih.style.backgroundColor='green';
}

if ('14:00' > time){
    sih.style.backgroundColor='grey';
}
else if('14:00' < time){
    sih.style.backgroundColor='grey';
}
else{
    sih.style.backgroundColor='green';
}

if ('15:00' > time){
    svh.style.backgroundColor='grey';
}
else if('15:00' < time){
    svh.style.backgroundColor='grey';
}
else{
    svh.style.backgroundColor='green';
}

if ('16:00' > time){
    eh.style.backgroundColor='grey';
}
else if('16:00' < time){
    eh.style.backgroundColor='grey';
}
else{
    eh.style.backgroundColor='green';
}

if ('17:00' > time){
    nh.style.backgroundColor='grey';
}
else if('17:00' < time){
    nh.style.backgroundColor='grey';
}
else{
    nh.style.backgroundColor='green';
}

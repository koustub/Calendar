var dt = moment().format('dddd, MMMM Do ');
document.getElementById('dayDate').innerHTML = `${dt}`;
console.log(`day and date${dt}`);
var time = moment().format('h:mm');
console.log(`${time}`);
document.getElementById('button1').addEventListener(onclick,function(){
    console.log('button is pressed');
    //style.backgroundColor = 'red';
});
var then = "9:24";
var ms = moment(time,"HH:mm").diff(moment(then,"HH:mm"));
var d = moment.duration(ms).humanize();
var s = d.format
console.log(`${d}`);
//1
let a = prompt("Введите температуру:")
const f = Number((a-32)/1.8)
alert(f)
//2 
let bilet = prompt("Введите номер билета");
let kupe = bilet / 9;
alert(kupe);
if(bilet > 37){
    alert("У вас бокoвое место ,так как места с 37 по 54 является боковыми")
}else{
    alert("у вас не боковое место")
}

if(bilet / 2){
    alert("у вас верхнее место")
}else{
    alert("место нижнее")
}


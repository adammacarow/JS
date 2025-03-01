const data = ["data1","data2","data3"]; 
let data2 = ["1","2","3","4"]
let data3 = [1,2,3,4]
document.writeln(data);
document.writeln("<br>");
document.writeln(data2);
document.writeln("<br>");
document.writeln(data3);
document.writeln("<br>");
document.writeln(data2 + data3);
document.writeln("<br>");
document.writeln(`${data2} ${data3}`);

// luas batok
let panjang = 20;
let lebar = 30;
let luas = panjang * lebar;

document.writeln("<br>");
document.writeln(`Diketahui panjang: 20cm, dan lebar sama dengan 30cm, maka luas sama dengan luas batok: ${luas}cm`);

let batok = document.getElementById("batok").innerHTML = "Luas Batok : " + luas;

document.getElementById("batok").style.color = "red";
document.getElementById("batok").style.fontSize = "30px";
const mobil = {
    warna: "Merah",
    tahun: 2020,
    merk: "Toyota",
    harga: 200000000
}           
document.writeln("<br>");
document.writeln(`warna: ${mobil.warna} dan juga tahun: ${mobil.tahun}  dan juga merk: ${mobil.merk} dan juga harga: ${mobil.harga}`);


let jam = document.getElementById("hours").innerHTML = "Jam Sekarang : " + new Date().toLocaleTimeString();
document.getElementById("hours").style.color = "black";
document.getElementById("hours").style.backgroundColor = "yellow";



let coffee = document.getElementById("coffee").innerHTML = "Coffee";
document.getElementById("coffee").style.color = "grey";
document.getElementById("coffee").style.fontSize = "30px";

let tea = document.getElementById("tea").innerHTML = "Tea";
document.getElementById("tea").style.color = "yellow";   
document.getElementById("tea").style.fontSize = "30px";

let milk = document.getElementById("milk").innerHTML = "Milk";
document.getElementById("milk").style.color = "#66e014";  


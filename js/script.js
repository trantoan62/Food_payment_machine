let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#shopping-cart-icon').onclick = () =>{
  document.querySelector('#shopping-cart-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#shopping-cart-form').classList.remove('active');
}

function cart(){
  document.querySelector('#shopping-cart-form').classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


//lazicode here ~~ deadline toi noi roiiiii, function no more
const thanhtien1 = document.querySelector("#thanhtien1"),
thanhtien2 = document.querySelector("#thanhtien2"),
thanhtien3 = document.querySelector("#thanhtien3"),
thanhtien4 = document.querySelector("#thanhtien4"),
thanhtien5 = document.querySelector("#thanhtien5"),
thanhtien6 = document.querySelector("#thanhtien6"),
thanhtienall = document.querySelector("#thanhtienall");

var temp;
var tempmax = 0;


//1
const plus1 = document.querySelector("#plus1"),
minus1 = document.querySelector("#minus1"),
num1 = document.querySelector("#num1");

let a1 = 0;

function plus11(){
  a1++;
  temp = a1*giacomtam + ".000 đồng";
  thanhtien1.innerText = temp;
  tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
    document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
  a1 = (a1 < 10) ? "0" + a1 : a1;
  num1.innerText = a1;
}

minus1.addEventListener("click", ()=>{
  if(a1 > 0){
    a1--;
    temp = a1*giacomtam + ".000 đồng";
    if (a1 == 0){temp = "";}
    thanhtien1.innerText = temp;
    tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
    a1 = (a1 < 10) ? "0" + a1 : a1;
    num1.innerText = a1;
  }
});

////2
const plus2 = document.querySelector("#plus2"),
minus2 = document.querySelector("#minus2"),
num2 = document.querySelector("#num2");

let a2 = 0;

function plus22(){
  a2++;
  temp = a2*giacomga + ".000 đồng";
  thanhtien2.innerText = temp;
  tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
  a2 = (a2 < 10) ? "0" + a2 : a2;
  num2.innerText = a2;
};

minus2.addEventListener("click", ()=>{
  if(a2 > 0){
    a2--;
    temp = a2*giacomga + ".000 đồng";
    if (a2 == 0){temp = "";}
    thanhtien2.innerText = temp;
    tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
    a2 = (a2 < 10) ? "0" + a2 : a2;
    num2.innerText = a2;
  }
});

///3
const plus3 = document.querySelector("#plus3"),
minus3 = document.querySelector("#minus3"),
num3 = document.querySelector("#num3");

let a3 = 0;

function plus33(){
  a3++;
  temp = a3*giaphobo + ".000 đồng";
  thanhtien3.innerText = temp;
  tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
  a3 = (a3 < 10) ? "0" + a3 : a3;
  num3.innerText = a3;
};

minus3.addEventListener("click", ()=>{
  if(a3 > 0){
    a3--;
    temp = a3*giaphobo + ".000 đồng";
    if (a3 == 0){temp = "";}
    thanhtien3.innerText = temp;
    tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
    a3 = (a3 < 10) ? "0" + a3 : a3;
    num3.innerText = a3;
  }
});

///4
const plus4 = document.querySelector("#plus4"),
minus4 = document.querySelector("#minus4"),
num4 = document.querySelector("#num4");

let a4 = 0;

function plus44(){
  a4++;
  temp = a4*giabunbohue + ".000 đồng";
  thanhtien4.innerText = temp;
  tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
  a4 = (a4 < 10) ? "0" + a4 : a4;
  num4.innerText = a4;
};

minus4.addEventListener("click", ()=>{
  if(a4 > 0){
    a4--;
    temp = a4*giabunbohue + ".000 đồng";
    if (a4 == 0){temp = "";}
    thanhtien4.innerText = temp;
    tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
    a4 = (a4 < 10) ? "0" + a4 : a4;
    num4.innerText = a4;
  }
});

///5
const plus5 = document.querySelector("#plus5"),
minus5 = document.querySelector("#minus5"),
num5 = document.querySelector("#num5");

let a5 = 0;

function plus55(){
  a5++;
  temp = a5*giabanhmi + ".000 đồng";
  thanhtien5.innerText = temp;
  tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
  a5 = (a5 < 10) ? "0" + a5 : a5;
  num5.innerText = a5;
};

minus5.addEventListener("click", ()=>{
  if(a5 > 0){
    a5--;
    temp = a5*giabanhmi + ".000 đồng";
    if (a5 == 0){temp = "";}
    thanhtien5.innerText = temp;
    tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
    a5 = (a5 < 10) ? "0" + a5 : a5;
    num5.innerText = a5;
  }
});

//6
const plus6 = document.querySelector("#plus6"),
minus6 = document.querySelector("#minus6"),
num6 = document.querySelector("#num6");

let a6 = 0;

function plus66(){
  a6++;
  temp = a6*giagoicuon + ".000 đồng";
  thanhtien6.innerText = temp;
  tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
  a6 = (a6 < 10) ? "0" + a6 : a6;
  num6.innerText = a6;
};

minus6.addEventListener("click", ()=>{
  if(a6 > 0){
    a6--;
    temp = a6*giagoicuon + ".000 đồng";
    if (a6 == 0){temp = "";}
    thanhtien6.innerText = temp;
    tempmax = (parseInt(a1)*giacomtam + parseInt(a2)*giacomga + parseInt(a3)*giaphobo + parseInt(a4)*giabunbohue + parseInt(a5)*giabanhmi + parseInt(a6)*giagoicuon);
  document.querySelector('#cart-num').innerText = parseInt(a1) + parseInt(a2) + parseInt(a3) + parseInt(a4) + parseInt(a5) + parseInt(a6);
if (tempmax == 0){ thanhtienall.innerText = ""; document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";} 
else {thanhtienall.innerText = tempmax.toString() + ".000 đồng"; document.getElementById("shopping-cart-icon").style = "background: var(--green); color:#fff;";}
    a6 = (a6 < 10) ? "0" + a6 : a6;
    num6.innerText = a6;
  }
});

function xoaluachon(){
  a1 = a2 = a3 = a4 = a5 = a6 = tempmax = 0;
  num1.innerText = num2.innerText = num3.innerText = num4.innerText = num5.innerText = num6.innerText = "00";
  thanhtien1.innerText = thanhtien2.innerText = thanhtien3.innerText = thanhtien4.innerText = thanhtien5.innerText = thanhtien6.innerText = thanhtienall.innerText = "";
  document.getElementById("shopping-cart-icon").style = "color:var(--black); background: #eee;";
  document.querySelector('#cart-num').innerText = 0;
}

var characters = "0123456789";
var lenString = 5;
var randomstring = '';
var rnum;
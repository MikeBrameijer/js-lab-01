"use strict";
let name1 = prompt("What is you first name you want compared?");
let name2 = prompt("What is you second name you want compared?");
let name3 = prompt("What is you Third name you want compared?");
// let name1 = "mike1"; I thought I would just comment this out so you can see my thought process
// let name2 = "dave";
// let name3 = "ed221";



if(name1.length > name2.length && name1.length > name3.length){
    console.log(`${name1} is the longest name`);
}else if(name2.length > name1.length && name2.length > name3.length){
    console.log(`${name2} is the longest name`);
}else if(name3.length > name1.length && name3.length > name2.length){
    console.log(`${name3} is the longest name`);
}else if(name1.length === name2.length && name1.length > name3.length){
    console.log(`${name1} and ${name2} are tied for the longest name`);
}else if(name1.length === name3.length && name1.length > name2.length){
    console.log(`${name1} and ${name3} are tied for the longest name`);
}else if(name2.length === name3.length && name2.length > name1.length){
    console.log(`${name2} and ${name3} are tied for the longest name`);
}else{
    console.log(`all three names ${name1}, ${name2}, and ${name3} are tied for the longest name`)
}//just commenting here so i can practice github
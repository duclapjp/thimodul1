//bài 1:

// function giaiPhuongTrinh1(){
//     let a = parseFloat(document.getElementById("numberA").value);
//     let b = parseFloat(document.getElementById("numberB").value);
//     let x = 0;
//     if (a == 0) {
//         if (b == 0) {
//             alert("phương trình vô nghiệm");
//         }else alert("phương trình có vô số nghiệm");
//     }
//     else{
//         x = -b/a;
//         alert("phương trình có nghiệm = "+x);
//     }
// }



// bài 2:

// let array = [1,2,3,4,5,6,7,8,9];
// let num = parseInt(prompt('nhập vào số cần tìm'));
// let check = false;
// function seachNumber(number,array) {
//     for(let i =0; i<array.length;i++){
//         if (number ===array[i]){
//             check = true;
//         }
//     }
//     if (check!==true){
//         alert(num+'không nằm trong mảng');
//     } else alert(num+'nằm trong mảng');
// }
// seachNumber(num,array);

//bài 3:

let vowels = ["a", "o", "e", "u", "i"];
let a = prompt('nhập vào mỗi chuỗi');
let sum = 0;
function checkVowels(a,arr){
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[j] === arr[i]){
            sum++
        }
    }
}
if (sum){
    return sum;
}else return false;
}
alert(checkVowels(a,vowels));
console.log(checkVowels(a,vowels));

//bài 4:

// class Animal{
//     constructor(_name,_weight) {
//         this.name = _name;
//         this.weight = _weight;
//     }
//     setName(newName){
//         this.name = newName;
//     }
//     setWeight(newWeight){
//         this.weight = newWeight;
//     }
//     getName(){
//         return this.name;
//     }
//     getWeight(){
//         return this.weight;
//     }
//     toString(){
//         return this.getName()+""+this.getWeight();
//     }
// }
//
// let objAnimal1 = new Animal('Element',45.6);
// objAnimal1.toString();
// let objAnimal2 = new Animal('Element2',64);
// objAnimal2.setName('Mouse');





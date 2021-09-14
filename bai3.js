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

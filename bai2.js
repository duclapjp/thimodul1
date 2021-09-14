let array = [1,2,3,4,5,6,7,8,9];
let num = parseInt(prompt('nhập vào số cần tìm'));
let check = false;
function seachNumber(number,array) {
    for(let i =0; i<array.length;i++){
        if (number ===array[i]){
            check = true;
        }
    }
    if (check!==true){
        alert(num+'không nằm trong mảng');
    } else alert(num+'nằm trong mảng');
}
seachNumber(num,array);
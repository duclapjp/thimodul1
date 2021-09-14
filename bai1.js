function giaiPhuongTrinh1(){
    let a = parseFloat(document.getElementById("numberA").value);
    let b = parseFloat(document.getElementById("numberB").value);
    let x = 0;
    if (a == 0) {
        if (b == 0) {
            alert("phương trình vô nghiệm");
        }else alert("phương trình có vô số nghiệm");
    }
    else{
        x = -b/a;
        alert("phương trình có nghiệm = "+x);
    }
}
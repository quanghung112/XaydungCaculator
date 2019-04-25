function Show(value) {
    document.getElementById('output').value += value;
}
function Ketqua() {
    let a=document.getElementById('output').value;
    Kq=eval(a);
    document.getElementById('output').value=Kq;
}
function Dele(){
    let a=document.getElementById('output').value;
    let b=a.substr(0,a.length-1);
    document.getElementById('output').value=b;
}
function Clear0() {
    document.getElementById('output').value="";
}

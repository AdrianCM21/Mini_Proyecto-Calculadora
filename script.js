var displayDiv = document.querySelector("#display");
displayDiv.innerText = "Some new value";
let datos='',calcular=[],numeroOp=0;
function press(n){
    datos+=n;
    displayDiv.innerHTML=datos;
}
function setOP(op){
    calcular.push(datos);
    datos='';
    numeroOp++;
    displayDiv.innerHTML=op;
    calcular.push(op);
}
function calculate(){
    let respuesta,aux=1;
    calcular.push(datos)
    respuesta=(Number(calcular[aux-1]))
    while(numeroOp){
        switch (calcular[aux]) {
            case '+':respuesta=respuesta+(Number(calcular[aux+1]));console.log(respuesta);
                break;
                case '-':respuesta-=(Number(calcular[aux+1]));;
                break;
            case '/':respuesta/=(Number(calcular[aux+1]));
                 break;
            case '*':respuesta*=(Number(calcular[aux+1]));   
                break;
            default:
            break;
        }
        aux+=2;
        numeroOp--;
    }
    datos='';calcular=[];numeroOp=0;
    displayDiv.innerHTML=respuesta;
}
function clr(){
    datos='';calcular=[];numeroOp=0;
    displayDiv.innerHTML=0;
}
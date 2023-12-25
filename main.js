document.write("41. to generate an array between two integers of 1 step length"+"<br>");
function test41(s,e){
    var x=[];
    for(let i=s;i<=e;i++){
        x.push(i);
    }
    return x;
}
document.write(test41(4,7)+"<br>");
document.write(test41(-4,7)+"<br><br>");
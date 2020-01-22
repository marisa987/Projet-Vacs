
// function setDate(){
//     const now = new Date();
//     $("#hours").css("transform","rotate("+30*d.getHours()+"deg)");
//     $("#minutes").css("transform","rotate("+6*d.getMinutes()+"deg)");
//     $("#seconds").css("transform","rotate("+6*d.getSeconds()+"deg)");
//     // setTimeout(horlog,1000);
//     console.log(now)
// }
// setInterval(setDate,1000);
horlog()

function horlog(){
    var d=new Date();
    $("#hours").css("transform","rotate("+30*d.getHours()+"deg)");
    $("#minutes").css("transform","rotate("+6*d.getMinutes()+"deg)");
    $("#seconds").css("transform","rotate("+6*d.getSeconds()+"deg)");
    // alert(d);
    setTimeout(horlog,1000);
}

function cacherAiguille(){
    if($("#seconds").css("display")=="block") {
        $("#seconds").hide();
    } else {
        $("#seconds").show();
    }
}
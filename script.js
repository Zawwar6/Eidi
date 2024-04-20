
function SendingEidi() {

    let ten = document.querySelector(".ten").value * (10)
    let twenty = document.querySelector(".twenty").value * (20)
    let fifty = document.querySelector(".fifty").value * (50)
    let hundread = document.querySelector(".hundread").value * (100)
    let fivHund = document.querySelector(".fivHund").value * (500)
    let Thous = document.querySelector(".Thous").value * (1000)
    let fivThous = document.querySelector(".fivThous").value * (5000)

    let userInp = document.querySelector(".UserInput").value
    const TotalAmount = ten + twenty + fifty + hundread + fivHund + Thous + fivThous;

    if(TotalAmount===0){
        alert("Kindly input some eidi")
    }
    else if( userInp===""){
        
        alert("Kindly enter a user name")
    }else{
        alert(`${TotalAmount}/- Rs Eidi Sucessfully send to ${userInp}`);

        document.querySelectorAll("input").forEach(inpVal => {
            inpVal.value=""
        });
    }

}




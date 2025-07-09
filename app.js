function generatRandom(){
    const firstnumber = parseInt(document.getElementById("fnumber").value);
    const lastnumber = parseInt(document.getElementById("lnumber").value);

    if(isNaN(firstnumber) || isNaN(lastnumber)){
        document.getElementById("result").innerText = "Please enter two valid numbers.";
        return;
    }
    /*
  else if(firstnumber > 6 || firstnumber < 0){
     document.getElementById("result").innerText = "Please enter a number greater than zero and less than six. ";
        return;
  }
  if(lastnumber < 0 || lastnumber >6){
    document.getElementById("result").innerText = "Please enter a number greater than zero and less than six. ";
        return;
  }*/

    const min = Math.min(firstnumber,lastnumber);
     const max = Math.max(firstnumber,lastnumber);

     const randomnumber = Math.floor(Math.random() * (max - min +1) + min);


  document.getElementById("result").innerText = "the randome number is:  " + randomnumber;
}
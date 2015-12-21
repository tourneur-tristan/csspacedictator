var upgrade2Func=function(){
  if(energyTotal-costUpgrade2<0){
    window.alert("You dont have enough energy!");
  }
  else{
    reactor2+=1;
    energyTotal=energyTotal-costUpgrade2;
    costUpgrade2=Math.floor(costUpgrade2*1.1);
    document.getElementById("costUpgrade2HTML").innerHTML=costUpgrade2;
  }
}

var upgrade1Func=function(){
  if(energyTotal-costUpgrade1<0){
    window.alert("You dont have enough energy!");
  }
  else{
    reactor1+=1;
    energyTotal=energyTotal-costUpgrade1;
    costUpgrade1=Math.floor(costUpgrade1*1.1);
    document.getElementById("costUpgrade1HTML").innerHTML=costUpgrade1;
  }
}

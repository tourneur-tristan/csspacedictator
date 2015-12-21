var upgradeClickFunc = function(){
  if(energyTotal-costUpgradeClick<0){
    window.alert("You dont have enough Energy!");
  }
  else{
    clickEnergy+=1;
    energyTotal=energyTotal-costUpgradeClick;
    costUpgradeClick=Math.floor(costUpgradeClick*1.1);
    document.getElementById("costUpgradeClickHTML").innerHTML=costUpgradeClick;
  }
}

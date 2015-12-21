var displayEnergyAuto = function(){
  setInterval(function(){document.getElementById("displayEnergy").innerHTML="<p>Energie : </p>"+energyTotal;},1000);
}

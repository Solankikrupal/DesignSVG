var path = document.querySelectorAll('#logo path');

for(var i = 0; i < path.length;i++){
  console.log('path number '+i+' length is '+path[i].getTotalLength());
}

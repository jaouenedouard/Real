
function updateLabel(inputId, outputId, labels){
  const el=document.getElementById(inputId); if(!el) return;
  const v=Number(el.value); let label=labels[0];
  if(v===50) label=labels[1];
  if(v===100) label=labels[2];
  document.getElementById(outputId).textContent=label;
}
function updateBedrooms(){
  const el=document.getElementById('bd'); if(!el) return;
  const v=Number(el.value); let label='Same (1)';
  if(v===0) label='-1 (studio)';
  else if(v===33) label='Same (1)';
  else if(v===66) label='+1 (2)';
  else label='+2 (3)';
  document.getElementById('bdVal').textContent=label;
}
function updateNeighborhood(){
  const el=document.getElementById('nb'); if(!el) return;
  const v=Number(el.value); let label='Same neighborhood';
  if(v===25) label='Nearby neighborhoods';
  else if(v===50) label='All Manhattan';
  else if(v===75) label='All NYC';
  else if(v===100) label='Specific neighborhood';
  document.getElementById('nbVal').textContent=label;
}
document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('bd')) updateBedrooms();
  if(document.getElementById('nb')) updateNeighborhood();
  ['lightRef','viewRef','interiorRef','commonRef','envRef'].forEach((id)=>{
    if(document.getElementById(id)) updateLabel(id,id+'Val',['Poor','Average','Great']);
  });
});

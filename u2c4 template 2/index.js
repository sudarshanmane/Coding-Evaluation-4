// write js code here corresponding to index.html
// You should add submit event on the form
 
 var form = document.querySelector("#masaiForm") 

 form.addEventListener("submit",collectData)

 var collectedData = JSON.parse(localStorage.getItem("schedule")) ||[];
 function collectData(){
     event.preventDefault();

   var data = {
    matchNum:form.matchNum.value,
    teamA:form.teamA.value,
    teamB:form.teamB.value,
    date:form.date.value,
    venue:form.venue.value,

   }

   collectedData.push(data);
   localStorage.setItem("schedule",JSON.stringify(collectedData));
   alert("Data stored");
   window.location.reload();

   
 }
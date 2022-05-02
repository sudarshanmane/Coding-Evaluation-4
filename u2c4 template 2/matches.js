// write js code here corresponding to matches.html

var matchesPage = document.querySelector("#matchesPage");

var favourites =  JSON.parse(localStorage.getItem("favourites")) || []
var collectedData = JSON.parse(localStorage.getItem("schedule")) ||[];


function display(data){
    matchesPage.innerHTML=null;
    

    data.forEach(function(el,i){

        var tr = document.createElement("tr") 

        var td1 = document.createElement("td") 
        td1.innerText=el.matchNum

        var td2 = document.createElement("td") 
        td2.innerText=el.teamA
        
        var td3 = document.createElement("td") 
        td3.innerText=el.teamB

        var td4 = document.createElement("td") 
        td4.innerText=el.date

        var td5 = document.createElement("td") 
        td5.innerText=el.venue

        var td6 = document.createElement("td") 
        td6.innerText="Add to Favourite"
        td6.style.color="green"
        td6.style.cursor="pointer"

        td6.addEventListener("click",function(){
            favousData(el)
        })



        tr.append(td1,td2,td3,td4,td5,td6);

        matchesPage.append(tr);


        
    })
}



  function favousData(el){

    favourites.push(el)
    localStorage.setItem("favourites",JSON.stringify(favourites))
    alert("Data Added to Favourites")


  }

  display(collectedData);

  var filterVenue = document.querySelector("#filterVenue")

  filterVenue.addEventListener("change",function(){

        if(filterVenue.value == "none"){
            display(collectedData)
        }

        else{
            var filtered = collectedData.filter(function(el){
 
                 return el.venue == filterVenue.value
            })
            display(filtered)
        }
  })



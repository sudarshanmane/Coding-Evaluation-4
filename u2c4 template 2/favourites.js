// write js code here corresponding to favourites.html

var data = JSON.parse(localStorage.getItem("favourites")) 

var matchesPage = document.querySelector("#matchesPage");


display(data)
function display(data){
    

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
        td6.innerText="Remove "
        td6.style.color="Red"
        td6.style.cursor="pointer"

        td6.addEventListener("click",function(){
              deleteFun(el,i)
        })

        tr.append(td1,td2,td3,td4,td5,td6);

        matchesPage.append(tr);


        
    })
}

function deleteFun(el){
    data.splice(el,1)
    localStorage.setItem("favourites",JSON.stringify(data))
    alert("Details Removed")
    window.location.reload();
}



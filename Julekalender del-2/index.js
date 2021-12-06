var countDownDate = new Date("Dec 24, 2021 00:00:01").getTime();
var JUL = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + ":"
    document.getElementById("hours").innerHTML = hours + ":" 
    document.getElementById("mins").innerHTML = minutes + ":" 
    document.getElementById("secs").innerHTML = seconds + ""

}, 1000)






fetch("./kalender.json")
.then( res => res.json())
.then(json => {
    console.log(json)
    json.days.map( door => {
        let div = document.createElement('div')
        div.id = door.date
        div.classList.add('door')
        div.setAttribute('onclick',"toggleDoor")
        div.style.width = door.width
        div.style.height = door.height
        div.innerHTML = door.date


       /* div.onclick = function(){
           document.getElementById(door.date).style.width="100vw"
           document.getElementById(door.date).style.height="100vh"
           
        } 
        */

        //en switch er et loop//
       /*
        switch(door.content){
            case 'image':
                setImage(div, door)
                break
            case 'Yt': 
                setYt(div, door)
                
                break
            default:
                break
        }
        */

     

        document.querySelector('main').append(div)
        var element = document.querySelectorAll(".door")[0];

        element.addEventListener("click", toggleDoor);
    })
})


function toggleDoor() {
    element.classList.toggle("doorOpen")
}

const setImage = (div, obj) => {
    div.style.backgroundImage = `url('${obj.url}')`
}

const setYt = (div, obj) => {
    div.innerhtml = obj.embed
    
}

const setSpecificApi = (div, obj) => {
    
}
 function DigitalClock(){

    var hours = document.getElementById('hours')
    var minutes = document.getElementById('minutes')
    var seconds = document.getElementById('seconds')
    
    var now = new Date()

    //am is undefine here
   
    var am
   
    if(hours >= 12){
        am = "AM"
    }
    else {
        am = "PM"
    }


    var ghours = now.getHours()
    var gminutes = now.getMinutes()
    var gseconds = now.getSeconds()

      hours.innerText = `${ghours}`
      minutes.innerText = `${gminutes}`
    seconds.innerText = `${gseconds}`
 }

 setInterval(DigitalClock, 1000);
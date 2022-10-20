
      
      let inputval = document.querySelector('#cityinput')
      let btn = document.querySelector('#add');
      let city = document.querySelector('#cityoutput')
      let descrip = document.querySelector('#description')
      let temp = document.querySelector('#temp')
      let wind = document.querySelector('#wind')
      
       
      apik = "8c951904bbca0c5c20997e281408d8e6"
      
      
      
      function convertion(val){
          return (val - 273).toFixed(2)
      }
    
          btn.addEventListener('click', function(){
      
      
              fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
              .then(res => res.json())
      
      
              .then(data => {
      
      
                  let nameval = data['name']
                  let descrip = data['weather']['0']['description']
                  let temperature = data['main']['temp']
                  let wndspd = data['wind']['speed']

      
                  city.innerHTML=`Weather of <span>${nameval}<span>`
                  temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span>`
                  description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
                  wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
      
              })
      
              .catch(err => alert('You entered Wrong city name'))
          })

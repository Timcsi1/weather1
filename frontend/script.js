let inputval = document.querySelector("#Countryinput")
let btn = document.querySelector("#add")
let country= document.querySelector("#Countryoutput")
let descrip = document.querySelector("#description")
let temp = document.querySelector("#temp")
let wind = document.querySelector("#wind")

apik = "o5p85oefcjQCyxabLFhNhPPKAx47arvcVYaBMefU"

function conversion(val){
    return (val - 273).toFixed(2)

}
btn.addEventListener("click", function(){
    fetch(`api.openweathermap.org/data/2.5/waether?q=`+inputval.value+`&appid=`+apik)
    .then(res=>res.json())
    .then(data=>{

        let nameval= data['name']
        let descrip= data['weather']['0']['description']
        let temperature= data['main'] ['temp']
        let wndspd= data['wind'] ['speed']

        country.innerHTML='Weather of<span>$(nameval)<span>'
        temp.innerHTML='Temperature:<span>$(convertion(temperature))<span>'
        description.innerHTML='Ski conditions:<span>$(descrip)<span>'
        wind.innerHTML='Wind Speed<span>$(wndspd)<span>'
    })
    .catch(err=> alert('You have entered wrong country name'))
})
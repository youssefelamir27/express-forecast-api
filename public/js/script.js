const weatherForm=document.getElementById("weatherForm")
const searchbtn=document.getElementById("searchbtn")
const submitbtn=document.getElementById("submitbtn")
const paragraphs = document.getElementsByTagName("p");
  
weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    showWeather()
})
const p=document.getElementsByTagName("p")
const locationf=document.getElementById("location")
const latitude=document.getElementById("latitude")
const longitude=document.getElementById("longitude")
const temp=document.getElementById("temp")
const errorf=document.getElementById("error")
const showWeather=async()=>{
    try {
         const address=searchbtn.value
    const data=await fetch(`http://localhost:3002/weather?address=${address}`)
    const dataToObject=await data.json()
    console.log(dataToObject)     
    if(data.error){
        errorf.style.display="block"
        errorf.innerText=dataToObject.error
    }
    else{
       
        function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "block";
    }
       const address1=dataToObject.address
       locationf.innerHTML = `Country <i class="fas fa-map-pin"></i>: ${capitalizeFirstLetter(address1)}` 
       latitude.innerHTML = `Latitude <i class="fas fa-globe"></i>: ${dataToObject.data.lat}`
       longitude.innerHTML = `Longitude <i class="fas fa-globe"></i>: ${dataToObject.data.long}`
       temp.innerHTML = `Temperature <i class="fas fa-thermometer-half"></i>: ${dataToObject.data.temp}`
        errorf.remove()
    }
    } catch (error) {
        console.log(error)
    }
   
}
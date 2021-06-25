// The following code prints all the countries and respective flags in the console 


var xhr = new XMLHttpRequest();
xhr.open('GET',"https://restcountries.eu/rest/v2/all")
xhr.onload=function(){
    var data=JSON.parse(this.response)
for(a of data){console.log("countryname:"+ a.name)
console.log("countryFlag:"+ a.flag)}

}
xhr.send()

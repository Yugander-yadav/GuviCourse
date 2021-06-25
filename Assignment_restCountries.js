// The following code prints all the countries, flags,region,subregion,Population in the console 

var xhr = new XMLHttpRequest();
xhr.open('GET',"https://restcountries.eu/rest/v2/all")
xhr.onload=function(){
    var data=JSON.parse(this.response)
for(a of data){console.log("Countryname:"+ a.name)
console.log("Flag:"+ a.flag)
console.log("Region:"+a.region)
console.log("SubRegion:"+a.subregion)
console.log("Population:"+a.population)
}

}
xhr.send()

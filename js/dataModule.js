let data = [];
let baseUrl = 'https://github.com/HusseinElAshry/countries/blob/main/';
const fetchData = async(e)=>{
    const response = await fetch(`${baseUrl}data.json`,{
        headers:{
            'Access-Control-Allow-Origin':'https://husseinelashry.github.io/*'
        }
    });
    data = await response.json();
}

export {
    data,
    fetchData,
}
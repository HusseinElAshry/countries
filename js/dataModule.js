let data = [];
let baseUrl = 'https://github.com/HusseinElAshry/countries/blob/main/';
const fetchData = async(e)=>{
    const response = await fetch(`${baseUrl}data.json`,{
        headers:{
            'Access-Control-Allow-Origin':'[http://127.0.0.1:3800/,https://husseinelashry.github.io/countries/]'
        }
    });
    data = await response.json();
}

export {
    data,
    fetchData,
}
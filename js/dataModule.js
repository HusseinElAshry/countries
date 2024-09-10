let data = [];
const fetchData = async(e)=>{
    const response = await fetch(`https://github.com/HusseinElAshry/countries/blob/main/data.json`);
    data = await response.json();
}

export {
    data,
    fetchData,
}
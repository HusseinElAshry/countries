let data = [];
const fetchData = async(e)=>{
    const response = await fetch(`./data.json`);
    data = await response.json();
}

export {
    data,
    fetchData,
}
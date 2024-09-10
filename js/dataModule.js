let data = [];
const fetchData = async(e)=>{
    const response = await fetch(`../data.json`,{
        mode:'no-cors'
    });
    data = await response.json();
    
}

export {
    data,
    fetchData,
}
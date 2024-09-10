const handleLoad = (loaderId)=>{
    window.addEventListener('load',()=>{
        document.getElementById(loaderId).classList.add('d-none');
    }); 
}
export{
    handleLoad
}
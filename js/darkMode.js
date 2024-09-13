const setModeHandler= ()=>{
    const styleSheetModeTag = document.getElementById('mode');
    const path = styleSheetModeTag.getAttribute('href');
    const defaultPath = `./css/dark.mode.css`;
    if (path == defaultPath){
        sessionStorage.setItem('mode','light');
        styleSheetModeTag.setAttribute('href',defaultPath.replace('dark','light'));
    }else{
        sessionStorage.setItem('mode','dark');
        styleSheetModeTag.setAttribute('href',defaultPath);
    }
}
const setMode = ()=>{
    const styleSheetModeTag = document.getElementById('mode');
    const mode = sessionStorage.getItem('mode');
    if(mode == 'light'){
        styleSheetModeTag.setAttribute('href','./css/light.mode.css');
    }else{
        styleSheetModeTag.setAttribute('href','./css/dark.mode.css');
    }
}
const changeMode = ()=>{
    document.getElementById('darkModeBtn').addEventListener('click',setModeHandler);
}

export default changeMode;
export{
    setMode,
}
const setModeHandler= ()=>{
    const styleSheetModeTag = document.getElementById('mode');
    const path = styleSheetModeTag.getAttribute('href');
    const defaultPath = `./css/dark.mode.css`;
    styleSheetModeTag.setAttribute('href',path == defaultPath? defaultPath.replace('dark','light'): defaultPath);
}
const setMode = ()=>{
    const styleSheetModeTag = document.getElementById('mode');
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if(mode == 'light'){
        styleSheetModeTag.setAttribute('href','./css/light.mode.css');
    }else{
        styleSheetModeTag.setAttribute('href','./css/dark.mode.css');
    }
}
const getCurrentMode = ()=>{
    const styleSheetModeTag = document.getElementById('mode');
    let path = styleSheetModeTag.getAttribute('href').substring(2);
    const mode = path.slice(path.indexOf('/')+1,path.indexOf('.'));
    return mode;
}
const changeMode = ()=>{
    document.getElementById('darkModeBtn').addEventListener('click',setModeHandler);
}

export default changeMode;
export{
    setMode,
    getCurrentMode
}
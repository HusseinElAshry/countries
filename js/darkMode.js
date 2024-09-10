const setModeHandler= ()=>{
    const styleSheetModeTag = document.getElementById('mode');
    const path = styleSheetModeTag.getAttribute('href');
    const defaultPath = `./css/dark.mode.css`;
    styleSheetModeTag.setAttribute('href',path == defaultPath? defaultPath.replace('dark','light'): defaultPath);
}
const changeMode = ()=>{
    document.getElementById('darkModeBtn').addEventListener('click',setModeHandler);
}
export default changeMode;
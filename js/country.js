import {data,fetchData} from './dataModule.js';
import changeMode, { setMode } from "./darkMode.js";
import { handleLoad } from './loader.js';
import { addCardInfo,createElement, repoURL } from './utilies.js';
let countryInfo = {};
const spanMapHandler = (el)=>{
    return createElement({
        tagName:'span',
        classList:['mx-2', 'px-2','badge-span','mb-4','ms-0'],
        children:[el.name]
    });
}
const displayInfo = (objToDisplay)=>{
    const nativeName = addCardInfo('Native Name',objToDisplay.nativeName);
    const population = addCardInfo('Population',objToDisplay.population?.toLocaleString());
    const region = addCardInfo('Region',objToDisplay.region);
    const subRegion = addCardInfo('Sub Region',objToDisplay.subregion);
    const capital = addCardInfo('Capital',objToDisplay.capital);
    const tlds = addCardInfo('Top Level Domain',objToDisplay.topLevelDomain.join(', '));
    const currencies = addCardInfo('Currencies',objToDisplay.currencies?.map(el=>el.name).join(', '));
    const laguages = addCardInfo('Languages',objToDisplay.languages?.map(el=>el.name).join(', '));
    const leftSideDivison = createElement({
        tagName:'div',
        classList:["left-side-caption", "col-xxl-4",  "col-lg-5", "col-12", "pb-3"],
        children:[nativeName, population, region, subRegion, capital]
    });
    const rightSideDivison = createElement({
        tagName:'div',
        classList:["right-side-caption", "col-xxl-5",  "col-lg-6", "col-12", "pb-3"],
        children:[tlds, currencies, laguages]
    });
    const countries = objToDisplay.borders?.map(cEl=>data.filter(dEl=>dEl.alpha3Code===cEl)[0]).map(spanMapHandler);
    const bordersHeader = createElement({
        tagName:'span',
        classList:['fw-800','mb-2','col-lg-4','col-12'],
        children:['Border Countries: ']
    })
    const bordersInfo = createElement({
        tagName:'p',
        classList:['col-lg-8','col-12','d-flex','flex-wrap'],
        children:countries?[...countries]:['']
    });
    const borders = createElement({
        tagName:'div',
        classList:['py-3','d-flex', 'justify-content-start','align-item-center','flex-wrap','col-12'],
        children:[bordersHeader,bordersInfo]
    })
    const captionItemInfo =createElement({
        tagName:'div',
        classList:['item-caption-info', 'd-flex',  'align-items-start', 'flex-wrap'],
        children:[leftSideDivison, rightSideDivison,borders]
    });
    const countryName = createElement({
        tagName:'p',
        classList:['country-name', 'fs-3', 'fw-800', 'pb-2'],
        children:[objToDisplay.name]
    });
    const captionItem = createElement({
        tagName:'div',
        classList:['item-caption', 'col-lg-7', 'offset-xl-1', 'offset-sm-0',  'col-lg-6'],
        children:[countryName, captionItemInfo]
    });
    const img = createElement({
        tagName:'img',
        classList:['w-100']
    });
    img.setAttribute('src',objToDisplay.flags.png);
    img.setAttribute('alt',`${objToDisplay.name} flag`);
    const imgItemDivision = createElement({
        tagName:'div',
        classList:['item-img', 'col-xl-4',  'col-lg-5', 'mb-3'],
        children:[img]
    });
    document.getElementById('countryInfoContainer').querySelector('.row').append(imgItemDivision,captionItem);

}
const getInfoAndDisplay = ()=> {
    const countryParam = new URLSearchParams(window.location.search).get('country');
    const country = countryParam?countryParam:"EGY";    
    fetchData().then(()=>{
        countryInfo = {...data.filter(el=>el.alpha3Code===country)[0]}
        displayInfo(countryInfo);
    });
}
const handleNavigate= ()=>{
    document.getElementById('backBtn').addEventListener('click',()=>{
        window.open(`${repoURL}index.html`,'_self');
    });
}
setMode()
handleLoad('loader');
handleNavigate();
changeMode();
getInfoAndDisplay();
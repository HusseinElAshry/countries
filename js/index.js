import { data,fetchData } from "./dataModule.js";
import changeMode from "./darkMode.js";
import { handleLoad } from "./loader.js";
import { addCardInfo,createElement } from "./utilies.js";
const displayCardsMapHandler = (el)=>{
    const population = addCardInfo('Population',el.population);
    const region = addCardInfo('Region',el.region);
    const capital = addCardInfo('Capital',el.capital);
    const countryNameElement = createElement({
        tagName:'p',
        classList:['fw-800','fs-5'],
        children:[el.name]
    });
    const info = createElement({
        tagName:'div',
        classList:['px-3','py-4'],
        children:[countryNameElement,population,region,capital]
    });
    const img = createElement({
        tagName:'img',
        classList:['w-100'],
    });
    img.setAttribute('src', el?.flags?.svg);
    const item = createElement({
        tagName:'div',
        classList:['item','h-100'],
        children:[img,info]
    });
    item.setAttribute('id',el.name);
    item.addEventListener('click',(e)=>navigateToInfo(el.alpha3Code));
    const itemParent = createElement({
        tagName:'div',
        classList:['item-parent', 'col-xxl-3', 'col-lg-4', 'col-md-6', 'p-3', 'p-lg-4','align-self-stretch'],
        children:[item]
    });
    return itemParent;
}
const display= (dataToDisplay)=>{
    if(dataToDisplay){
        const container = document.getElementById('countriesContainer');
        const elements = dataToDisplay.map(displayCardsMapHandler);
        container.querySelector('.row').append(...elements);
    }
}
const clearData=()=>{
   document.getElementById('countriesContainer').querySelector('.row').innerHTML=''; 
}
const filterByRegion = (region = 'Asia')=>{
    display(data.filter((el)=>el.region == region));
}
const filterByKey = (key)=>{
    display(data.filter(el=>el.name.toLowerCase().includes(key.toLowerCase())));
}
const navigateToInfo = (country)=>{
    window.open(`../country.html?country=${country}`,'_self');
}
const fireRegionFilter = ()=>{
    const regionListElement = document.getElementById('regionSelect');
    regionListElement.addEventListener('change',()=>{        
        if(regionListElement.value){
            clearData();
            filterByRegion(regionListElement.value);
        }
    }); 
}
const fireKeyFilter = ()=>{
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input',()=>{
        clearData();
        if(searchInput.value){
            filterByKey(searchInput.value)
        }else{
            display(data);
        }
    });
}
document.forms[0].addEventListener('submit',(e)=>{e.preventDefault()});
fireKeyFilter();
fireRegionFilter();
handleLoad('loader');
changeMode();
fetchData().then(()=>{
    display(data);
});




    
    

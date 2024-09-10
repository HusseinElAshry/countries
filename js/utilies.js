const addCardInfo = (field="", info="")=>{
    const fieldElement = document.createElement('p');
    fieldElement.innerHTML = field.concat(': ');
    fieldElement.classList.add('fw-800')
    const infoElement = document.createElement('span');
    infoElement.classList.add('fw-600')
    infoElement.innerHTML = info;
    fieldElement.append(infoElement);
    return fieldElement;
}
const createElement = ({tagName,classList=[],children=[]}={})=>{
    const htmlElment = document.createElement(tagName);
    classList.length?htmlElment.classList.add(...classList):htmlElment.classList.add('');
    children.length?htmlElment.append(...children):'';
    return htmlElment;
}
const repoURL = 'https://husseinelashry.github.io/countries/'
export{
    addCardInfo,
    createElement,
    repoURL
}
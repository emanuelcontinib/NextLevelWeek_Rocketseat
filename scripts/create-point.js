
function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]")
  
  fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then ( res => res.json () )
  .then( states => {
      for( const state of states ) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}

populateUFs()

function getCities(event){
  const citySelect = document.querySelector("[name=city]")
  const stateInput = document.querySelector("[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML ='<option value> Selecione a Cidade </option>'
  citySelect.disabled = true;

  fetch (url)
  .then ( res => res.json () )
  .then( cities => {
    
    for( const city of cities ) { console.log(citySelect)
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }
    citySelect.disabled = false;
  })
}


document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)


/*Ítens de Coleta*/
/*todos os li*/

const itensToColect = document.querySelectorAll('.items-grid li')

for (let item of itensToColect) {
  item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=items]')

let selectedItems = []

  function handleSelectedItem (event){
    const itemLi = event.target
    
    //class or remove class with js
    itemLi.classList.toggle('selected')

    const itemId = itemLi.dataset.id


    //verificar e pegar se existem ítens selecionados
    const alreadySelected = selectedItems.findIndex( item =>  {
      const itemfound = item == itemId
      return itemfound 
    })    

    //se já está selecionado, tirar da seleção
    if (alreadySelected >=0 ) {
      const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId
        return itemIsDifferent
      })
      selectedItems = filteredItems
      //se não estiver, selecionar
    }else{
      selectedItems.push(itemId)
      console.log(selectedItems);
    }
    //atualizar o campo hidden com os itens
    collectedItems.value = selectedItems
  }

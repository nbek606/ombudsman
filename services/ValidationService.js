
import globalVariables from '@/store/globalVariables'

const changeElementClass = (list, type) => {
  list.forEach(item => {
    item.classList[type]('border_red')
  });
}

const getRequiredList = (form, requiredClass) => {
   const requireds = form.querySelectorAll(`.${requiredClass}`)
   return Array.prototype.slice.call(requireds)
}

const getEmptiesList = (requiredsList) => {
  if (requiredsList.length == 0) {
    return []
  }
  
  return requiredsList.filter(item => ['', null].includes(item.value))
}

const formValidation = (formId) => {
  const form = document.getElementById(formId)
  const requiredClass = globalVariables.state['requiredClass']

  if (form == null) {
    return
  }

  const requiredsList = getRequiredList(form, requiredClass)

  changeElementClass(requiredsList, 'remove')

  const empties = getEmptiesList(requiredsList)
  
  if (empties.length == 0) {
    return true
  }

  changeElementClass(empties, 'add')

  empties[0].scrollIntoView({
    behavior: "smooth",
    block: "center", 
    inline: "nearest"
  });

  return empties.length > 0 ? false : true
} 

export default {
  formValidation 
}
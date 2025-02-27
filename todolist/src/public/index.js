
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#addButton")
  const list = document.querySelector("#list")
  const todoInput = document.querySelector("#todoInput")
  
  addButton.addEventListener("click", () => {
    const li = document.createElement('li')
    const p = document.createElement('p')

    li.classList.add("listItem")
    li.id = Math.floor(Math.random() * 10000)
    
    if(todoInput.value.length < 1) {
      console.log("You need to input something longer than 0 characters")
      return
    }

    p.textContent = todoInput.value
    li.append(p)
    list.append(li)
    todoInput.value = ''
    const newButton = document.createElement('button')
    newButton.textContent = "Remove"
    li.append(newButton)
    newButton.addEventListener("click", () => {
      li.remove()
    })
  })
  
})


const todo_list_input = document.querySelector('#todo-list-input')
const todo_list_btn = document.querySelector('#todo-list-btn')
const tasks_list = document.querySelector('#tasks-list')


todo_list_btn.addEventListener('click', () => {
   tasks_list.innerHTML = `${tasks_list.innerHTML} 
   <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
        style="background-color: #f4f6f7;">
        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
        <s>${todo_list_input.value}</s>
    </li>`
})
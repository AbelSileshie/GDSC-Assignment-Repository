function addtask(){
    const taskinput = document.getElementById('tasktext');
    const tasktext = taskinput.value.trim();
    if (tasktext !== ''){
        const taskList = document.getElementById('tasks');
        const ckeckbox = document.getElementById('checkbox');
        const Newtask = document.createElement('h1');
        Newtask.textContent = tasktext;
        taskList.appendChild(Newtask);
        taskinput.value = '';
        checkbox.addEventListener('change', function(){
        if(this.checked){
            taskList.style.textDecoration = 'line-through';
        }       
        else {
            taskList.style.textDecoration = 'none'  
        }
        
        })
    }
    else{
        alert('please Enter A task!')
    }
}
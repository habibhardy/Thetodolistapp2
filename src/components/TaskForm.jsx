import React, {useEffect } from 'react';
import '../styles/TaskForm.css'
import '../App.css';

const TaskForm = ({input,setInput,tasks,setTasks,seteditTask,editTask}) => {

    
      const onInputChange = (e) =>{
          setInput(e.target.value);
      };


      useEffect(()=>{
        if (editTask) {
            setInput(editTask.title);
        }else{
           setInput('');
        }
       },[setInput,editTask]);

      const updateTask = (title,id,statu) => {
               const newTask = tasks.map((task_)=>{
                   return   task_.id === id ? { title , id , statu } : task_ ;
               })
               setTasks(newTask);
               seteditTask("");
      }

      const onSubmit = (e) =>{
        e.preventDefault();
        if(input === ''){
            return;
        }
        if (!editTask) {
            setTasks([...tasks,{id:Math.floor(Math.random() * 10000),title:input,statu:false}]);
            setInput('');
        }else{
           updateTask(input,editTask.id,editTask.statu);
        }
    };



  return (
 
        <form onSubmit={onSubmit} className='form'>

             <span  className='text' >
            SAVE A TASK
             </span>
        
          <input
            placeholder='Add a task ...'
            value={input}
            onChange={onInputChange}
            name='text'
            style={{border:`4px solid ${editTask?`rgb(96, 19, 148)`:``}`}}
            className='input_'
          />
          <button type='submit' className='btn'>
                  Save
          </button>
        
    </form>
    
  )
}

export default TaskForm
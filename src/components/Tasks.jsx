import React, { useState } from 'react';
import '../styles/Tasks.css'
import '../App.css';
import Task from './Task'

const Tasks = ({tasks,setTasks,seteditTask}) => {


     const handleDelete = (index) => {
        const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
         setTasks(newTasks); 
      };

      const handleComplete = (task_) => {
        const newTasks = tasks.map((task) => {
             if (task.id === task_.id) {
                   return {...task,statu: !task.statu};
             }
             return task;
        });
        setTasks(newTasks); 
      };

      const handleEdit = ({id}) => {
        const newTasks = tasks.find((task) => task.id === id);
        console.log('>>>>>>>>>>>:'+newTasks)
        seteditTask(newTasks); 
      };
    

  return (
    <div   className='task_list' >
         
                {
                    tasks.map((item,index)=>{
                        return <Task key={index}  id={index} title={item.title} onRemove={handleDelete} handleEdit={handleEdit} task={item} onComplete={handleComplete} />
                    })
                }
                      
    </div>
  )
}

export default Tasks
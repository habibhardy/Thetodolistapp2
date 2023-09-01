import React, { useState } from 'react'
import '../styles/Task.css';
import '../App.css';

import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const Task = ({id,title,onRemove,onComplete,task,handleEdit}) => {

  return (
    <div  key={id}  className={'task_row'} style={{
                                                               border:`2px solid ${task.statu?`rgb(105, 250, 76)`:`white`}`,
                                                               boxShadow:`${task.statu?`rgba(0, 255, 21, 0.35) 0px 3px 15px`:``}` 
                                                                            }} >
              <span style={{color:`${task.statu?`rgb(105, 250, 76)`:`white`}`,transition:'all 300ms ease',fontSize:'20px'}} >
                    {title}
              </span>

              <div  className='right'  style={{justifyContent:`${task.statu?`end`:``}`}}  >

              <div  className={task.statu ? 'complete_btn_c' : 'complete_btn'} onMouseUp={()=>{onComplete(task)}} >
                      {
                        task.statu ? <DoneOutlinedIcon   style={{
                          color:`${task.statu?`rgb(105, 250, 76)`:`white`}`,
                          width:'65%',
                          height:'65%',
                                       }}  /> : null
                      }
              
              </div>

              {
                !task.statu ?  <div  className='edit_btn'   onMouseUp={()=>{handleEdit(task)}} >
                      <CreateOutlinedIcon  style={{
                                                               color:`${task.statu?`rgb(105, 250, 76)`:`white`}`,
                                                               width:'65%',
                                                               height:'65%',
                                                                            }}  />
                </div> : null
              }

              <div  className={task.statu ? 'delete_btn_c' : 'delete_btn'}  onMouseUp={()=>{
                
                    setTimeout(() => {
                         onRemove(id)
                    }, 400);
                }} >
                  <ClearOutlinedIcon   style={{
                                                               color:`${task.statu?`rgb(105, 250, 76)`:`white`}`,
                                                               width:'65%',
                                                               height:'65%',
                                                                            }} />
                </div>
             

              </div>
             
              


    </div>
  )
}

export default Task
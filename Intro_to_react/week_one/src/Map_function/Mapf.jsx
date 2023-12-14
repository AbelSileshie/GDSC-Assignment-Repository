import React from 'react'
import './Mapf.css'

const Arrays = ['Kebede ', 'Bekele ' ,'Kalid ', 'Derebe'];
const Array_map = Arrays.map((n)=>n);
export const Mapf = () => {
  return (
    <div>
       <h2 className='footer'>This Is A second example of Map Function which is in another Folder:<br/><br/>{Array_map}</h2> 
        </div>
  )
}

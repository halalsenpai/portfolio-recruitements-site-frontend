import React, { Children, useState } from "react";
import { Checkbox } from "antd";
import CTag from "./Ctag";
import { MdExpandMore, MdExpandLess } from "react-icons/md";


const CTaskItem = (props) => {
  const [TaskExpand, setTaskExpand] = useState(true);
  
  
  const { type = "complete" , taskDescription="Lorem Ipsum is simply dummy text rekjnfjrenjgnkngekjngrejkg jrekjenjngjrkenngjkn" } = props;
  return (
    <div className="w-100 h-100 task-list" onClick={()=>setTaskExpand(!TaskExpand)}>
      
      <div className="task-div">
       
        <div className="d-flex">
          
          
          <Checkbox />

          <p className={`task-description ${!TaskExpand?`expanded`:``}`}>
            
              {taskDescription}
            
          
          </p>
        </div>

        {!TaskExpand?

                <MdExpandLess className='expand'  />
                
                               :

                <MdExpandMore className='expand'  />}
        

       
        <CTag type={type} />
     
     
      </div>
    </div>
  );
};

export default CTaskItem;

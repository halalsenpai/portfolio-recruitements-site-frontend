import React from 'react'
import CInterviewCard from '../uiComponents/shared/CInterviewCard/CInterviewCard'

const Sandbox = () => {
    return (
        <div style={{width:'100%', height:'fit-content', display:'flex', paddingBlock:'2em', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <CInterviewCard type="acceptReject"/>
            <br/>
            <CInterviewCard type="accepted"/>
            <br/>
            <CInterviewCard type="viewDetails"/>
        </div>
    )
}

export default Sandbox

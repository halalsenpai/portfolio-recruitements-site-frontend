import { Button } from 'antd'
import React from 'react'
function CButton(props) {
  const {children,type="small", themeColor=''} = props;
    return (
        <Button {...props} className={`c-button ${type==='large'?'large':''} ${themeColor}`} >
        {children}
        </Button>
    )
}

export default CButton

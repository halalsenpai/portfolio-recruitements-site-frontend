import { Button } from 'antd'
import React from 'react'
function CButton(props) {
  const {children,type="small"} = props;
    return (
        <Button className={`c-button ${type==='large'?'large':''}`} {...props}>
        {children}
      </Button>
    )
}

export default CButton

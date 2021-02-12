import React from 'react'
function CButton({children,type="small"}) {
    return (
        <button className={`c-button ${type==='large'?'large':''}`}>
        {children}
      </button>
    )
}

export default CButton

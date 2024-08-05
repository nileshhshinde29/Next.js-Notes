import React from 'react'

function Layout({children,slotComp1,slotComp2, slotComp3}) {
  return (
    <div>
        <div>{children}</div>
        <div>{slotComp1}</div>
        <div>{slotComp2}</div>
        <div>{slotComp3}</div>
    
    </div>
  )
}

export default Layout
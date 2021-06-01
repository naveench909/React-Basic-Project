import React, { useEffect } from 'react'

const Alert = ({msg , type , removeAlert , list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert();
    },2000)
    return () => clearTimeout(timeout)
  },[list])
  return (
    <div className={type}>
      <p>{msg}</p>
    </div>
  );
}

export default Alert

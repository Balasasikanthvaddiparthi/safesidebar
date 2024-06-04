import React from 'react'

function InputText({type, placeholder,labelTitle,labelStyle}) {
  return (
    
      
    <div className="form-control w-full">
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input type={type || "text"}  placeholder={placeholder || ""} className="input  input-bordered w-full " />
        </div>
        
        
  )
}

export default InputText
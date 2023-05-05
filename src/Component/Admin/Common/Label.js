import React from 'react'
import { common } from '../../../utils/common'

export default function Label({ text, helpText, isRequired = false, className = "", fontSize, bold = false, width }) {
 const FONT_SIZE=process.env.REACT_APP_LABLE_FS;
  fontSize = common.defaultIfEmpty(fontSize,FONT_SIZE);
  return (
    <>
      <label className={className}
        style={{ fontSize: fontSize, fontWeight: bold ? 'bold' : '', width: width }}>{text}
        {isRequired && <strong className='text-danger'>*</strong>}
      </label>
      {helpText !== undefined && helpText !== "" &&
        <i title={helpText}
          data-toggle="tooltip"
          style={{ cursor: "pointer" }}
          className="bi bi-patch-question-fill"></i>}
    </>
  )
}

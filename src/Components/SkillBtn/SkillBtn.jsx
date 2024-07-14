import React from 'react';
import './SkillBtn.css'

const SkillBtn = ({children}) => {
  return (
    <div className='skill btn'>
      {children}
    </div>
  )
}

export default SkillBtn

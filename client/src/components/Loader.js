import React from 'react'


const Loader = () => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='25 25 50 50'
      style={{
        width: '120px',
        height: 'auto',
        display: 'block',
        margin: 'auto',
      }}
    >
      <circle
        cx='50'
        cy='50'
        r='20'
        fill='none'
        strokeWidth='5'
        stroke='#45d6b5'
        strokeLinecap='round'
        strokeDashoffset='0'
        strokeDasharray='100, 200'
      >
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          from='0 50 50'
          to='360 50 50'
          dur='2.5s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-dashoffset'
          values='0;-30;-124'
          dur='1.25s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-dasharray'
          values='0,200;110,200;110,200'
          dur='1.25s'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  )
}

export default Loader

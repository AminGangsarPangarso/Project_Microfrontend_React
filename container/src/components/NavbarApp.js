import {mount } from '../../../navbar/src/bootstrap'
import React from 'react'
import { useRef,useEffect } from 'react'

export default ()=>{
    const ref =useRef(null)

    useEffect(()=>{
        mount(ref.current)
    })
    return <div ref={ref}></div>
}
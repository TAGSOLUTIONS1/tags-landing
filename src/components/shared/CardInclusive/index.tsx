import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { Head } from 'next/document'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface CardProps {description:string, buttoncontent:string , image:string |StaticImport}
const CardInclusive= (props:CardProps)=> {
  return (
    <div className='bg-light-white p-4 gap-[46px] rounded-2xl max-w-md'>
        <div><Image className='w-[434px] h-[358px] rounded-2xl' src={props.image} alt="Logo"></Image></div>
        <p className='text-p1 mt-10'>{props.description}</p>
        <div className='mt-10 text-center'><Button title={props.buttoncontent}></Button></div>
    </div>
  )
}

export default CardInclusive;



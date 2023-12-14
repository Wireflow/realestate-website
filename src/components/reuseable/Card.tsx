import Image from 'next/image';
import React from 'react'
import Button from './Button'

type CardProps = {
    ButtonType?: "yellow" | "blue" | "outline" | "lightblue";
    ButtonText?: string;
    Title?: string;
    Description?: string;
    Icon?: string;


}

const Card = ({ ButtonType, ButtonText, Title, Description, Icon } : CardProps) => {
  return (
    <div className='flex flex-col items-center gap-5'>
     <div className='rounded-full bg-light-blue w-[100px] h-[100px] flex justify-center items-center'>
         <Image src={`/${Icon}`} width={40} height={40} alt='service-icon'/>
     </div>
     <h2 className='text-2xl font-bold'>{Title}</h2>
     <p className='w-80 text-center text-md'>{Description}</p>
     <Button buttonStyle={ButtonType}>{ButtonText}</Button>
    </div>
  )
}

export default Card
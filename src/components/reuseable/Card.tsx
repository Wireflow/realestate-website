import Image from 'next/image';
import React from 'react'
import Button from './Button'

type CardProps = {
    ButtonType?: "yellow" | "blue" | "outline" | "lightblue";
    ButtonText?: string;
    Title?: string;
    Description?: string;
    Icon?: string;
    CardContainerStyle?: string;
    IconContainerStyle?: string;
    CardTitleStyle?: string;
    CardDescriptionStyle?: string;
}

const Card = ({ ButtonType, ButtonText, Title, Description, Icon, CardContainerStyle,IconContainerStyle, CardTitleStyle, CardDescriptionStyle } : CardProps) => {
  return (
    <div className={CardContainerStyle}>
     <div className={IconContainerStyle}>
         <Image src={`/${Icon}`} width={40} height={40} alt='service-icon'/>
     </div>
     <h2 className={CardTitleStyle}>{Title}</h2>
     <p className={CardDescriptionStyle}>{Description}</p>
     <Button buttonStyle={ButtonType}>{ButtonText}</Button>
    </div>
  )
}

export default Card
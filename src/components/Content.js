import React from 'react'
import { Btn } from './styles/Btn.Styled'
import { ContentContainer,ContentFlex } from './styles/Content.styled'

export default function Content({content}) {
  
  return (
   <ContentContainer>
    {content.map((item,index)=>{
      return(
      <ContentFlex key={index} style={{backgroundColor:`${item.bg}`,flexDirection:index%2===0? 'row':'row-reverse'}}>
        <img src={item.img} alt={item.header}/>
        <div>
        <h1 style={{color:item.color,fontSize:item.fontSize}}>
          {item.header}
        </h1>
        {item.main?(
        <p style={{color:item.color}}>
         {item.main}
        </p>):null}
        <Btn style={{color:item.color, borderColor:item.color}}>
          {item.buttonText}
        </Btn>
        </div>

      </ContentFlex>
      )
    }
    )
  }
  <h4>StarBucks Clone By Muhammed Hassan</h4>
  </ContentContainer>
  )
};

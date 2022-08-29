import React from 'react'
import { Btn } from './styles/Btn.Styled'
import { ContentContainer, ContentFlex } from './styles/Content.styled'
import { motion } from 'framer-motion'

export default function Content({ content }) {

  return (
    <ContentContainer>
      {content.map((item, index) => {
        return (
          <ContentFlex key={index} Flex={index % 2 === 0 ? 'row' : 'row-reverse'} style={{ backgroundColor: `${item.bg}` }}>
            <img src={item.img} alt={item.header} />
            <div>
              <motion.div
                style={{ marign: 0, maxWidth: 'max-content' }}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                exit={{ opacity: 1 }}
              >
                <h1 style={{ color: item.color, fontSize: index === 0 && '1.5rem' }}>
                  {item.header}
                </h1>
                {item.main ? (
                  <p style={{ color: item.color }}>
                    {item.main}
                  </p>) : null}
                <Btn style={{ color: item.color, borderColor: item.color }}>
                  {item.buttonText}
                </Btn>
              </motion.div>
            </div>
          </ContentFlex>
        )
      }
      )
      }
      <a href='https://github.com/MhassanAv' target='_blank' rel='noreferrer'><h4>StarBucks Clone By Muhammed Hassan</h4></a>
    </ContentContainer>
  )
};

import React from "react";
import { Btn } from "./styles/Btn.Styled";
import { ContentContainer, ContentFlex } from "./styles/Content.Styled";
import { motion } from "framer-motion";

export default function Content({ content,loadingState }) {
  return (
    <ContentContainer>
      {content.map((item, index) => {
        return (
          <ContentFlex
            key={index}
            Flex={index % 2 === 0 ? "row" : "row-reverse"}
            style={{ backgroundColor: `${item.bg}` }}
          >
            <img src={item.img} alt={item.header} />
            <div>
              <motion.div
                style={{ marign: 0, maxWidth: "max-content" }}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: !loadingState? 0:0.8 , duration:0.3 }}
                exit={{ opacity: 1 }}
              >
                <h1
                  style={{
                    color: item.color,
                    fontSize: index === 0 && "1.5rem",
                  }}
                >
                  {item.header}
                </h1>
                {item.main && (
                  <p style={{ color: item.color }}>{item.main}</p>
                )}
                <Btn style={{ color: item.color, borderColor: item.color }}>
                  {item.buttonText}
                </Btn>
              </motion.div>
            </div>
          </ContentFlex>
        );
      })}
      {/*<a href="https://github.com/MhassanAv" target="_blank" rel="noreferrer">
        <h4>Starbucks Clone By Muhammed Hassan</h4>
    </a>*/}
    </ContentContainer>
  );
}

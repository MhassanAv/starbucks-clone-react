import React from 'react'
import styled from 'styled-components'
import List from './List'

//figure out how you will add footer buttons and how you will manage it's state
//first  approach is with css media queries

const footerData = [{
  header: "About Us",
  ListItems: ['Our Company',
    'Our Coffee',
    'Stories and News',
    'Starbucks Archive',
    'Investor Relations',
    'Customer Service']
},
{
  header: "Careers",
  ListItems: ['Culture and Values',
    'Inclusion, Diversity, and Equity',
    'College Achievement Plan',
    'Alumni Community',
    'U.S. Careers',
    'International Careers']
},
{
  header: "Social Impact",
  ListItems: ['People',
    'Planet',
    'Environmental and Social Impact Reporting']
},
{
  header: "For Business Partners",
  ListItems: ['Landlord Support Center',
    'Suppliers',
    'Corporate Gift Card Sales',
    'Office and Foodservice Coffee']
},
{
  header: "Order and Pickup",
  ListItems: ['Order on the App',
    'Order on the Web',
    'Delivery',
    'Order and Pickup Options',
    'Explore and Find Coffee for Home']
},

]


const StyledFooterLists = styled.div`
display: flex;
flex-direction:row;
align-items: flex-start;
justify-content: flex-start;
background-color:${({ theme }) => theme.backgroundColor};
color: ${({ theme }) => theme.fontColor};
padding-left:max(calc(15vw - 10rem), 2rem); 
padding-right:max(calc(15vw - 10rem), 2rem);
width: 92%;

div{
    width: 100%;
    margin: 2rem;
    max-height: max-content;
}

@media all and (max-width: 768px){

  flex-direction:column;
  width: 100%;
  div{
    margin:1rem;
  }
}


`

export default function Footer() {
  return (
    <footer>
      <StyledFooterLists>
        {footerData.map((item,index)=>
          <List footer={true} items={item} key={index}/>
        )}
      </StyledFooterLists>
    </footer>
  )
}

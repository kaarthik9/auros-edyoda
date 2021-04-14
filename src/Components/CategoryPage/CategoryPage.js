import React from 'react'
import ShopPage from '../ShopPage/ShopPage'

export default function CategoryPage(props) {

  const category = props.match.params.category;
  document.title = category
  
  return (
    <>
      <ShopPage showByCategory={category} />
    </>
  )
}

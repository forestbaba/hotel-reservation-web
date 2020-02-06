import React from 'react'
import './style.scss'
import { SearchSvg } from '../icons/styledsvg'


const Searchbar =({placeholder}) => {
  return (
      <div className='search-parent'>
          <SearchSvg/>
          <input placeholder={placeholder}/>
    </div>
  )
}
export default Searchbar
import './VisaProducts.css'
import ProductsChildrenItems from './ProductsChildrenItems'
import { FilterCategory } from '../../Components/Update/UseContext/FilterCategoryScreen'
import { useContext } from 'react'

export default function VisaProductItems(props) {

  const { home } = props

  const { showValue } = useContext(FilterCategory)



  return home === null || home === 'undefined' ? null :

  
    home?.filter((asd) =>
    showValue?.length > 1 ? showValue?.some((key)=> asd?.foodType?.foodType?.includes(key)) : asd
      )?.map((user,Index) => (
          <ProductsChildrenItems item={user} key={Index} />
      ))
    




}



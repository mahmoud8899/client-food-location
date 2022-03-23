
import { createContext, useState } from 'react'

export const FilterCategory = createContext()

export default function FilterCategoryScreen({ children }) {

  const [addCart, setAddCart] = useState([])

  // const [showValue, setShowValue] = useState([])
  // const [queryData, setQueryData] = useState('')
  // // filter new

  // function testingFunction(queryData) {
  //   const items = queryData
  //   const filterItmes = showValue?.includes(items)
  //   if (filterItmes) {
  //     return setShowValue(prev => [...prev?.filter((x) => x !== items)])
  //   } else {
  //     return setShowValue(prev => [...prev, items])
  //   }
  // }
  // useEffect(() => {
  //   if (queryData) return testingFunction(queryData)
  //   testingFunction()
  // }, [queryData]) // eslint-disable-line react-hooks/exhaustive-deps
  // console.log(queryData)



  return <FilterCategory.Provider value={{ addCart, setAddCart }}>
    {children}
  </FilterCategory.Provider>

}
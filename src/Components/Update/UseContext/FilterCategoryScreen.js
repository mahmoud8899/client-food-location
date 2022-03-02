
import { createContext, useEffect, useState } from 'react'

export const FilterCategory = createContext()

export default function FilterCategoryScreen({ children }) {



  const [showValue, setShowValue] = useState([])
  const [queryData, setQueryData] = useState('')


  function testingFunction(queryData) {
    const items = queryData
    const filterItmes = showValue?.includes(items)

    if (filterItmes) {

      return setShowValue(prev => [...prev?.filter((x) => x !== items)])
    } else {
      return setShowValue(prev => [...prev, items])
    }

  }

  useEffect(() => {

    if (queryData) return testingFunction(queryData)


    testingFunction()

  }, [queryData]) // eslint-disable-line react-hooks/exhaustive-deps







  return <FilterCategory.Provider value={{ showValue, setShowValue, setQueryData }}>
    {children}
  </FilterCategory.Provider>

}
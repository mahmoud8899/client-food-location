import { SearchingHomeDatilas } from '../../Components/Update/UseContext/SearchingHome'
import RestrangeItems from '../../Pages/Home/RestrangeItems/RestrangeItems'
// import {} from ''
import { useContext, useEffect } from 'react'
export default function SearchingPage({location}) {




     // result searching 
    const { products  } = useContext(SearchingHomeDatilas)


  


     
    useEffect(()=>{


        if(products?.length === 0){

            return

            // return   dispatch(SearchingProductsAction(city, inputSearching, true))
        }


        return

    },[products?.length])



    // console.log(city)








    





    return <div className="x">
           <RestrangeItems    home={products}   Title='Result'  />
    </div>
}
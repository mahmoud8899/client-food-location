import { Fragment, useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'
import { FoodTypesAction } from '../../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingErrorHandle from '../LoadingErrorHandle/LoadingErrorHandle'
import { FilterCategory } from '../UseContext/FilterCategoryScreen'


export default function FilterProducts(props) {



    const {setQueryData,showValue} = useContext(FilterCategory)
    // get all category...
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    useEffect(() => {


        return category === null && dispatch(FoodTypesAction())
    }, [category, dispatch])





  









 






    return <Fragment>



        <div className='Title-name-products-filter' onClick={() => setShow(true)} >
            <div className='text-filter-product'>
                Sorterat per Rekommenderas
            </div>
            <div className='text-filter-product-method'>
                <ImageScreen ImageIcon={MyOderImage.filter} className='close-pp-pp-image notColor' />
            </div>
        </div>


        <Modal show={show} onHide={() => setShow(false)}>

            <div className='Title-name-products-text  add-padding-filter'>

                <h1>filter</h1>
            </div>






            <LoadingErrorHandle loading={loadingCategory} error={errorCategory} home={category} >
                <div className='filter-text add-padding-filter'>
                    {category === null || category === 'undefined' ? null : category?.map((food, Index) => (
                        <span
                            key={Index}
                            onClick={(e) => setQueryData(food?.foodType)}
                            className={showValue?.includes(food?.foodType) ? 'Active-items-filter active' : 'Active-items-filter'}
                        >{food?.foodType}</span>
                    ))}
                </div>
            </LoadingErrorHandle>


            <div className='buttom-close' onClick={() => setShow(false)}>
                <div>save</div>
            </div>

        </Modal>



    </Fragment>
}
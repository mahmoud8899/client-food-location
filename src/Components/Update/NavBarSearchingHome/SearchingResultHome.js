import { Col, Row } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../ImageScreen/ImageScreen'
import { GetCartInfoHomeRestranges } from '../../../redux/Action/CartItemAction'
import { useSelector, useDispatch } from 'react-redux'
import LoadingErrorHandle from '../LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer } from '../../../Assistant/TextError'
import '../../../Pages/Home/Home.css'
import { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import InfiniteScrollData from '../../../Account/RestaurantsAccount/Datils/InfiniteScrollData'
import { SearchingHomeDatilas } from '../UseContext/SearchingHome'
import { SliceName } from '../../../Assistant/Slice'
import Rating from '../../Rating/Rating'
import { MdDirectionsBike } from "react-icons/md";
import Items from './Items'
export default function SearchingResultHome(props) {

    const history = useHistory()


    // filter params id city....
    const LastLength = history?.location?.pathname?.length
    const city = history?.location?.pathname?.slice(1, LastLength - 1)




    const { inputSearching, setInputSearching } = useContext(SearchingHomeDatilas)






    const dispatch = useDispatch()

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, home, error, nextNumber, } = PageHomeRestrange


    // get restrants cart....
    useEffect(() => {
        home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
            city: city,
            productType: "restaurant"
        }))
    }, [home?.length, city])




    // fetch more data....
    const fetchData = () => {
        console.log('dddd')

    }





    const keys = ["username", "description"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(inputSearching))
        )
    };



// onClick={() => setInputSearching('')}
    return inputSearching?.length > Number(1) && <Row className='justify-content-center'>
        <Col xs={12} md={12} md={6} xl={6} className='postion-abs'  >
            <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} >
                <div className='result-col'>
                    <InfiniteScrollData products={home} categoryProductsNextPagesxp={nextNumber} fetchData={fetchData}>
                        <Row className='justify-content-center'>



                            <Items home={search(home)} />
                        </Row>

                    </InfiniteScrollData>

                </div>

            </LoadingErrorHandle>

        </Col>

    </Row>




}




// <div className='searching-result'>
//     <ImageScreen
//         ImageIcon={MyOderImage.food}
//         className='result-image'
//     />
//     <div className='rigth-result'>
//         <span className='rigth-result-first'>food uppsala</span>
//         <span className='rigth-result-last'>this is foood god</span>
//     </div>
// </div>


// <div className='searching-result'>
//     <ImageScreen
//         ImageIcon={MyOderImage.food}
//         className='result-image'
//     />
//     <div className='rigth-result'>
//         <span className='rigth-result-first'>food uppsala</span>
//         <span className='rigth-result-last'>this is foood god</span>
//     </div>
// </div>
// </Col>
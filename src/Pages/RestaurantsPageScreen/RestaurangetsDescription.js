
import { Image, Modal } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './style.css'
import { HiOutlineX  } from 'react-icons/hi'

export default function RestaurangetsDescription(props) {


    const { openDescription, setOpenDescription ,cartinfo} = props

    return <Modal show={openDescription} onHide={() => setOpenDescription(!openDescription)}>



        <div className='add-Open-Imae-postion'>

            <Image src={MyOderImage.maps}
                className='description-image' />

            <div className='close-yourOrder add-postion-close'>
            <HiOutlineX  className='close-pp-pp-image'   onClick={() => setOpenDescription(!openDescription)}/>

            </div>
        </div>

        <div className='scroll-description'>

            <div className='close-yourOrder'>

                <h1 className='Addres-font-size'>{cartinfo?.username}</h1>


                <span className='comment-image-top-text-last'>
                    open time : {cartinfo?.opentime?.oppen}
                </span>


            </div>


            <div className='close-yourOrder'>

                <div className='comment-image-top-text-last'>
                    {cartinfo?.description}
                </div>


            </div>

            <div className='close-yourOrder'>
                <div className='Addres-font-size'>
                    Addres
                </div>

                <div className='Addres-maps-res'>
                    <span> {cartinfo?.addressinfo?.city}</span>
                    <span>{cartinfo?.addressinfo?.address}</span>
                </div>

                <div className='Addres-font-size see_map'>
                    see map
                </div>


            </div>


            <div className='close-yourOrder'>
                <div className='Addres-font-size'>
                    contact
                </div>

                <div className='Addres-maps-res'>
                    <span className='comment-image-top-text-last'>
                        If you have allergies or other dietary restrictions, please contact the
                        restaurant. The restaurant will provide food-specific information upon request
                    </span>

                </div>

                <div className='website-contact'>
                    <span>
                        website
                    </span>
                    <span >
                        visit webeite
                    </span>
                </div>


            </div>


        </div>






    </Modal>

}
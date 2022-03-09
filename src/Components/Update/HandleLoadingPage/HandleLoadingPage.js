import { Fragment } from 'react'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import CodeError from '../../CodeError/CodeError'
import ImageScreen from '../../ImageScreen/ImageScreen'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'






export default function HandleLoadingPage(props) {

    const {
        children,
        loading,
        error,
        updateSuccessFully,
        HandleClose,
        BackAndRemoveError,
        updated,
    } = props




    return <Fragment>
        {loading ?
            <div className='Loading-Updated'>
                <LoadingScreen />
            </div>
            : error ?
                <div className='body-category'>

                    <div className='Handl-navBar'>
                        <ImageScreen
                            ImageIcon={MyOderImage.left}
                            className='close-pp-pp-image'
                            onClick={BackAndRemoveError}
                        />
                        <ImageScreen
                            ImageIcon={MyOderImage.close}
                            className='close-pp-pp-image'
                            onClick={HandleClose}
                        />
                    </div>



                    <div className='Loading-Updated'>
                        <CodeError error={error}
                            onClick={(e) => console.log('error')}
                        />
                    </div>
                </div>


                :
                updateSuccessFully
                    ?
                    <div className='body-category'>
                        <ImageScreen
                            ImageIcon={MyOderImage.close}
                            className='close-pp-pp-image'
                            onClick={() => HandleClose()}
                        />

                        <div className='Loading-Updated'>

                            <div className='Text-Uploading'>
                                {updated ? 'Updated your order' : 'successfully new product'}
                            </div>
                            <LoadingScreen />
                        </div>
                    </div>
                    :

                    children
        }
    </Fragment>
}
import { Fragment } from 'react'
import CodeError from '../../CodeError/CodeError'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import { HiOutlineX, HiArrowNarrowLeft } from 'react-icons/hi'





export default function HandleLoadingPage(props) {

    const {
        children,
        loading,
        error,
        updateSuccessFully,
        HandleClose,
        BackAndRemoveError,
        updated,
        ErrorText,
    } = props




    return <Fragment>
        {loading ?
            <div className='Loading-Updated'>
                <LoadingScreen />
            </div>
            : error ?
                <div className='body-category'>

                    <div className='Handl-navBar'>
                        <HiArrowNarrowLeft className='close-pp-pp-image' onClick={BackAndRemoveError}
                        />
                        <HiOutlineX className='close-pp-pp-image' onClick={HandleClose} />


                    </div>



                    <div className='Loading-Updated'>
                        <CodeError error={ErrorText ? ErrorText : error}
                            onClick={(e) => console.log('error')}
                        />
                    </div>
                </div>


                :
                updateSuccessFully
                    ?
                    <div className='body-category'>

                        <HiOutlineX className='close-pp-pp-image' onClick={() => HandleClose()} />


                        <div className='Loading-Updated'>

                            <div className='Text-Uploading'>
                                {updated ? 'Uppdaterad' : 'Uppdaterad'}
                            </div>
                            <LoadingScreen />
                        </div>
                    </div>
                    :

                    children
        }
    </Fragment>
}
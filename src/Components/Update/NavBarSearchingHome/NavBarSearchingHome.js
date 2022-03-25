import { Form } from 'react-bootstrap'
import { Fragment, useCallback, useContext } from 'react'
import TheInputForm from '../../TheInputForm/TheInputForm'
import { HiOutlineX } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { SearchingHomeDatilas } from '../UseContext/SearchingHome'
export default function NavBarSearchingHome(props) {




    const { inputSearching, setInputSearching } = useContext(SearchingHomeDatilas)







    // console.log(inputSearching.length)



    return <div onClick={() => setInputSearching('')}>

        <TheInputForm
            placeholder='Sök'
            onChange={(e) => setInputSearching(e.target.value.toLowerCase())}
            value={inputSearching}
            className={
                inputSearching?.length > Number(0) ?
                    'Input-type-style productdetials text-searching-left' :
                    'Input-type-style productdetials text-searching'
            }
            FirstIcons={
                <Fragment>

                    {inputSearching?.length > Number(0) ? null : <BiSearch className='Icons-LEFT halve-searching' />}
                    {inputSearching?.length > Number(1) && <HiOutlineX
                        className='close-pp-pp-image ADD-REMOVE'
                        onClick={() => setInputSearching('')}
                    />
                    }

                </Fragment>
            }
        />

        {/* {inputSearching?.length > Number(2) &&
            <div className='Searching-result-page'>

                <SearchingResultHome  />

            </div>


        } */}

    </div>




}


    // <Form.Control
    //         type='text'
    //         placeholder='Search'
    //         className='Type-input-searching add-Home'
    //         onChange={(e) => setInput(e.target.value)}
    //         value={input}

    //     />

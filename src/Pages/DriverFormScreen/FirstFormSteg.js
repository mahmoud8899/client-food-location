import Input from "../../Components/Input/Input";




export default function FirstFormSteg(props) {

    const { setUserInfoInput, userInfoInput,HandleDriver,handleError } = props

    return <>
        <div className='ask-text margin-bottom-style'>
            <div>

                <span className='ask-text-style-text'>emil</span>
            </div>
            <Input
                placeholder='emil'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, email: e.target.value })}
                value={userInfoInput?.email}
                type='emil'
                className='Input-driver-type'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}

            />
        </div>


        <div className='ask-text margin-bottom-style'>
            <div>

                <span className='ask-text-style-text'>phone number</span>
            </div>
            <Input
                placeholder='phone number'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, telephone: e.target.value })}
                value={userInfoInput?.telephone}
                type='number'
                className='Input-driver-type'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}

            />
        </div>


        <div className='ask-text margin-bottom-style'>
            <div>

                <span className='ask-text-style-text'>first name</span>
            </div>
            <Input
                placeholder='first name'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, firstname: e.target.value })}
                value={userInfoInput?.firstname}
                type='text'
                className='Input-driver-type'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}

            />
        </div>

        <div className='ask-text margin-bottom-style'>
            <div>

                <span className='ask-text-style-text'>last name</span>
            </div>
            <Input
                placeholder='last name'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, lastname: e.target.value })}
                value={userInfoInput?.lastname}
                type='text'
                className='Input-driver-type'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}

            />
        </div>



        <div className='ask-text margin-bottom-style'>
            <div>

                <span className='ask-text-style-text'>country</span>
            </div>
            <Input
                placeholder='country'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, country: e.target.value })}
                value={userInfoInput?.country}
                type='text'

                className='Input-driver-type'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}

            />
        </div>



        <div className='ask-text margin-bottom-style'>
            <div>

                <span className='ask-text-style-text'>date of birth</span>
            </div>

            <Input
                placeholder='date of birth'

                onChange={(e) => setUserInfoInput({ ...userInfoInput, birth: e.target.value })}
                value={userInfoInput?.birth}
                type='date'
                className='Input-driver-type'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}

            />

            <p className='handelerror'>{
                handleError ? userInfoInput?.birth?.length === 0 ? handleError : null : null

            }</p>
        </div>



    </>
}





export default function PageSwitch(props) {

    const {
        SwitchText,
        setPostData,
        postData
    }




    return <div className='switch-type'
        onClick={() => setProductDetails({
            ...productDetails, popular: productDetails?.popular ? false : true

        })} >

        <span className={productDetails?.popular ? 'checkOut-popluer' : ''}>

        </span>
        <span>{SwitchText}Är det populär mat?</span>

    </div>

}
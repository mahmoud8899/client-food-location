




export default function EditComponent(props) {


    const {
        setOptionMore,
        optionMore,
        OpenEditAddress,
        ENoption,
        NoRemove
    } = props


    return <div className='Remove-div-all'>
        <div className='routx-' onClick={(e) => setOptionMore(!optionMore)}>
            <h1>...</h1>
        </div>
        <div className={optionMore ? 'class-edit-postion hidden' : 'class-edit-postion'}>
            <span onClick={NoRemove}>ta bort</span>
            {ENoption ? null :  <span onClick={OpenEditAddress}>uppdatering</span>}
            
        </div>
    </div>
}
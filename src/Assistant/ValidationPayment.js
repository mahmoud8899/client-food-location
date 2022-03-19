

// validation check everything before paying 
// [1] :address 
// [2]: cartnumber 
// [3]: booking 
// [4]: reatrurant time 
export const ValidationPayment = (TheCheckOutDriver, theCheckOutCard, CheckUserAddress, CheckOutRestrange, TheCheckOutBookingTime, dataTime) => {

    // get hour ans minues
    const TheHours = dataTime ? dataTime?.getHours() : ''
    const THEMinutes = dataTime ? dataTime?.getMinutes() : ''
    // 
    let timemintes = String(`${TheHours}:${THEMinutes}`)

    if (CheckOutRestrange?.close >= timemintes) {


        if (TheCheckOutDriver?.name === 'utkörning') {
            return typeof CheckUserAddress === 'undefined' ? 'vänligen lägg till en leveransadress klicka för att se beställning detaljerna' :
                typeof theCheckOutCard === 'undefined' ? 'vänligen lägg till betalning för kunna fortsätta med din beställning' :

                    true

        }


        if (TheCheckOutDriver?.name === 'hämta själv') {
            return typeof theCheckOutCard === 'undefined' ? 'vänligen lägg till betalning för kunna fortsätta med din beställning' : true
        }

    } else {




        return TheCheckOutBookingTime?.timeOrder === null
            || TheCheckOutBookingTime?.dateOrder === 'today' ?
            'kontrollera tiden' : true





    }







}




// check out all confirming
// check out time and today...
export const CheckOutConfirming = (TheCheckOutBookingTime, CheckOutRestrange, dataTime) => {

    // get hour ans minues
    const TheHours = dataTime ? dataTime?.getHours() : ''
    const THEMinutes = dataTime ? dataTime?.getMinutes() : ''
    // 
    let timemintes = String(`${TheHours}:${THEMinutes}`)

    if (CheckOutRestrange?.close >= timemintes) {


        return TheCheckOutBookingTime?.timeOrder === null && TheCheckOutBookingTime?.dateOrder === null
            ? 'Maten kommer inom 45 minuter eller mindre' :
            `${TheCheckOutBookingTime?.dateOrder}-${TheCheckOutBookingTime?.timeOrder}`

    } else {
        return TheCheckOutBookingTime?.timeOrder === null
            || TheCheckOutBookingTime?.dateOrder === 'today' ?
            'kontrollera tiden' :  `${TheCheckOutBookingTime?.dateOrder}-${TheCheckOutBookingTime?.timeOrder}`

    }
}






// real time Validation
// create product and checkut type input...
export function ValidationProducts(productDetails, changeImage) {

    return productDetails?.name?.trim().length <= 2 ||
        productDetails?.description?.trim().length <= 19 ||
        (productDetails?.image?.length <= 0 && changeImage === '') ||
        /^[1-9]\d*(\.\d+)?$/.test(productDetails.prices) !== true


}

// if type input equle old value  not requirest
export function ValidationUpdateProduct(OldValues, NewValues, changeImage) {


    return NewValues?.name?.trim()?.normalize() === OldValues?.name?.normalize()
        && NewValues?.description?.trim()?.normalize() === OldValues?.description?.normalize()
        && NewValues?.popular === OldValues?.popular
        && Number(NewValues?.prices) === Number(OldValues?.prices)
        && changeImage === ''
}



// the best code...
export function ChangeCode(CodeName) {


    return CodeName?.trim().toLowerCase()
}




// validation category
export function ValidationCategory(NewValue, OldValue) {

    return NewValue?.trim().normalize() === OldValue?.trim()?.normalize()
}



// Validation Cart Info.....
export function ValidationCartInfo(
    NewValue,
    OldValue,
    opentime,
    addressinfo,
    finishfood,
    changeImage
) {

    return NewValue?.username?.toLowerCase()?.normalize() === OldValue?.username?.toLowerCase()?.normalize()
        && NewValue?.description?.normalize() === OldValue?.description?.normalize()
        && NewValue?.productType?.normalize() === OldValue?.productType?.normalize()
        && NewValue?.freeDelvery === OldValue?.freeDelvery
        && NewValue?.restrangeDriver === OldValue?.restrangeDriver
        && (NewValue?.image?.length <= 0 || changeImage === '')
        && opentime?.oppen?.normalize() === OldValue?.opentime?.oppen?.normalize()
        && opentime?.close?.normalize() === OldValue?.opentime?.close?.normalize()
        && addressinfo?.city?.normalize() === OldValue?.addressinfo?.city?.normalize()
        && Number(addressinfo?.telefon) === Number(OldValue?.addressinfo?.telefon)
        && addressinfo?.address?.normalize() === OldValue?.addressinfo?.address?.normalize()
        && addressinfo?.website?.normalize() === OldValue?.addressinfo?.website?.normalize()
        && Number(finishfood?.to) === Number(OldValue?.finishfood?.to)
        && Number(finishfood?.end) === Number(OldValue?.finishfood?.end)


}


// validation account
export function ValidationAccount(name) {
    return name?.Accountnumber?.length >= 6 && name?.Accountowner?.length >= 6 &&
        name?.iban?.length >= 6
}

// valtion updated account..
export function ValidationUpdatedAccount(NewData, OldData) {

    return NewData?.Accountnumber?.trim()?.normalize() === OldData?.accountnumber?.normalize()
        && NewData?.Accountowner?.trim()?.normalize() === OldData?.accountnowner?.normalize()
        && NewData?.iban?.trim()?.normalize() === OldData?.iban?.normalize()





}




// valdtion create caret
export function ValidationCreateCart(productDetails, opentime, addressinfo, finishfood, changeImage) {



    return productDetails?.username?.trim()?.length >= Number(3)
        && productDetails?.description?.trim()?.length >= Number(3)
        && productDetails?.productType?.trim()?.length >= Number(3)
        && opentime?.oppen > '00:00'
        && opentime?.close > '00:00'
        && addressinfo?.city?.length >= Number(3)
        && addressinfo?.address?.length >= Number(3)
        && addressinfo?.telefon?.length >= Number(10)
        && addressinfo?.website?.length >= Number(3)
        && finishfood?.to >= 1
        && finishfood?.end >= 1
        && changeImage?.length >= Number(2)

}



// validation user updated address
export const ValidationUserAddress = (NewAddress, OldAddress) => {






    return NewAddress?.addres?.trim()?.normalize() === OldAddress?.addres?.trim()?.normalize()
        && NewAddress?.city?.trim()?.normalize() === OldAddress?.city?.trim()?.normalize()
        && NewAddress?.homeNumber?.trim()?.normalize() === OldAddress?.homeNumber?.trim()?.normalize()
        && NewAddress?.work?.trim()?.normalize() === OldAddress?.work?.trim()?.normalize()
        && NewAddress?.zipcode?.trim()?.normalize() === OldAddress?.zipcode?.trim()?.normalize()
}



// validation firstname and lastname change 
export const ValidationUsername = (NewInfon, OldInfo) => {

    return NewInfon?.firstname?.trim()?.normalize() === OldInfo?.firstname?.trim()?.normalize()
        && NewInfon?.lastname?.trim()?.normalize() === OldInfo?.lastname?.trim()?.normalize()
}
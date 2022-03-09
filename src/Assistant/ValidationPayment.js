

// valtion payment [1]: address   /[2] : card payment
// Before confirming the payment.......
export const ValidationPayment = (TheCheckOutDriver, theCheckOutCard, CheckUserAddress) => {

    if (TheCheckOutDriver?.name === 'delivery') {
        return typeof CheckUserAddress === 'undefined' ? 'Please Add Delivery Address' :
            typeof theCheckOutCard === 'undefined' ? 'check in payment Methode' : true
    }


    if (TheCheckOutDriver?.name === 'takeaway') {
        return typeof theCheckOutCard === 'undefined' ? 'check in payment Methode' : true
    }

}




// check out all confirming
// check out time and today...
export const CheckOutConfirming = (TheCheckOutBookingTime) => {

    let testingdate = new Date().getHours()
    let testingdateMinutes = new Date().getMinutes()
    let theTimeClose = '22:00'
    let timemintes = String(`${testingdate}:${testingdateMinutes}`)
    let timeNow = '23'

    if (theTimeClose >= timemintes) {

        return TheCheckOutBookingTime?.timeOrder === null && TheCheckOutBookingTime?.dateOrder === null
            ? 'booking time today after 45 minutes' :
            `${TheCheckOutBookingTime?.dateOrder}-${TheCheckOutBookingTime?.timeOrder}`

    } else {
        return TheCheckOutBookingTime?.timeOrder === null && TheCheckOutBookingTime?.dateOrder === null
            ? 'sorry du kan inte booking idag' :
            TheCheckOutBookingTime?.dateOrder === 'today' && timeNow ? 'we are close to today' : 'thank you '



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

    return NewValue?.username?.normalize() === OldValue?.username?.normalize()
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
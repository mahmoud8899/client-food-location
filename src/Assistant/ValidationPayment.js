

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
        (productDetails.image.length <= 0 && changeImage === '') ||
        /^[1-9]\d*(\.\d+)?$/.test(productDetails.prices) !== true


}

// if type input equle old value  not requirest
export function ValidationUpdateProduct(OldValues, NewValues ,changeImage) {

  
    return NewValues?.name?.trim()?.normalize() === OldValues?.name?.normalize()
        && NewValues?.description?.trim()?.normalize() === OldValues?.description?.normalize()
        && Number(NewValues?.prices) === Number(OldValues?.prices)
        &&  changeImage === ''  


    // NewValues?.image?.normalize() === OldValues?.image?.normalize() 





    // || /^[1-9]\d*(\.\d+)?$/.test(productDetails.prices) !== true


}



// the best code...
export function ChangeCode(CodeName) {


    return CodeName?.trim().toLowerCase()
}




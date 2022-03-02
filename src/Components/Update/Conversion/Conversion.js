import {FirstNameRest} from '../../../Assistant/Selection'
// from home to restauran
export const Conversion = (conv) => {


    // [1]: city [2]: product type [3]: nameproduct
    //  console.log(TheSplit,nameproductType,cityName)


    let TheSplit = conv?.username?.split(" ").join('-')
    let nameproductType = conv?.productType
    let cityName = conv?.addressinfo?.city


    return `/${cityName}/${nameproductType}/${TheSplit}`

    // // return history.push(`/${id?.addressinfo?.city}/restaurant/${testing}`,{item : 'dff'})

    // return history?.push({
    //     pathname: `/${conv?.addressinfo?.city}/restaurant/${TheSplit}`,
    //     state: conv?._id
    // })
}

// from home to restauran
export const ConversionCheckOut = (conv) => {
    let TheSplit = conv?.username?.split(" ").join('-')
    let nameproductType = conv?.productType
    let cityName = conv?.addressinfo?.city


    return `/${cityName}/${nameproductType}/${TheSplit}/checkout`
}







// navigation work
export const RouterWork = (history) => {

    return history.push(`/sw/${FirstNameRest}/work`)
}

// navigation canact
export const ContactPage = (history) => {

    return history.push(`/sw/${FirstNameRest}/contact`)
}


// Navigation About ...
export const AboutPage = (history) => {

    return history.push(`/sw/${FirstNameRest}/about`)
}




// category like
export const TheCategoryLike = (FilterLocation, name) => {

    return `${FilterLocation}${name}/`
}
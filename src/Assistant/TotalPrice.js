
// collect all order
export const TotalPrice = (data) => {
    return  data?.reduce((acc, item) => acc + item.prices * item.courrent, 0).toFixed(2)
}


// collect all order and dlivery Totalsumma
export const Totalsumma =(firstorder,lastDleiver) =>{
    let  TotaltOrder =   firstorder?.reduce((acc, item) => acc + item.prices * item.courrent, 0).toFixed(2)

    let CollectAll = Number(TotaltOrder)  + Number(lastDleiver)

    return   CollectAll

}

// Dlivery price 
export const DliveryPrice = [Number(30)]

export const CollectOrder = (data) => {

    return  data?.reduce((acc, item) => acc + item.courrent, 0)

}


// discount is not loop
export const AllDiscount = (data) =>{


    const Totalprics =  data?.reduce((acc, item) => acc + item.prics * item.qty, 0).toFixed(2)
    const Totaldiscount =  data?.reduce((acc, item) => acc + item?.discount / 100, 0).toFixed(2)

    return Number(Totalprics) - (Number(Totalprics) * Number(Totaldiscount))
}

// cod discount
export const CodeDiscountOtumat = (data,prosent) =>{


    const Totalprics =  data?.reduce((acc, item) => acc + item.prics * item.qty, 0).toFixed(2)
    const Totaldiscount =  data?.reduce((acc, item) => acc + prosent / 100, 0).toFixed(2)

    return Number(Totalprics) - (Number(Totalprics) * Number(Totaldiscount))
}

// discount is loop
export const TotalDiscount = (name) => {



    const result = Number(name?.discount) / 100
    const lastresult = Number(name?.prices) - (Number(name?.prices) * result)


    return lastresult.toFixed(2)
  


}



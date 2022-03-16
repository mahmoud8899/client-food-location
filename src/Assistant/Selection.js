import { MyOderImage } from './MyOrderImage'




//--  Not   active 
// current add more cart
export const CurrentNumber = [0, 1, 2, 3, 4, 5]

//-- active
// address location
export const addresSelection = [

    {
        _id: 1,
        name: 'home',

        image: `${MyOderImage.home}`
    },
    {
        _id: 2,
        name: 'work',
        image: `${MyOderImage.work}`
    },
    {
        _id: 3,
        name: 'other',
        image: `${MyOderImage.other}`
    }
]
//-- active
// page name..
export const FirstNameRest = 'UppsalaMat'
//-- active
// pay money to the driver
export const selectionCourier = [
    {
        _id: 1,
        courier: 1.00
    },
    {
        _id: 2,
        courier: 2.00
    },
    {
        _id: 3,
        courier: 3.00
    },
    {
        _id: 4,
        courier: 4.00
    },
]
//-- active
// choose the type of food order
// id and name and image and description
export const DeliveryTakeaway = [
    {
        _id: 1,
        name: 'utkörning',
        des: 'Du har inte valt en adress',
        image: `${MyOderImage.bike2}`
    },
    {
        _id: 2,
        name: 'hämta själv',
        des: 'Jag hämtar själv',
        image: `${MyOderImage.takeaway}`
    }
]

//-- active
// week days 
export const TheWeek = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
]


//-- active
// week days 
export const AddSstich = (name) => {
    const newFilter = name?.slice(0, 3)
    switch (newFilter) {

        case 'mon': return 'Monday'
        case 'tue': return 'Tuesday'
        case 'wed': return 'Wednesday'
        case 'thu': return 'Thursday'
        case 'fri': return 'Friday'
        case 'sat': return 'Saturday'
        case 'sun': return 'Sunday'

        default: return 'today'
    }
}


//-- active
// choose the type of driver
export const AskOne = [
    'car',
    'bike',
    'motorcycle'
]

//-- active
// selection city
export const Stand = [
    'uppsala',
    'gothenburg'
]


//-- active
// selection image to address.
export const WhichWork = (name) => {
    switch (name?.toLowerCase()) {
        case 'home': return `${MyOderImage.home}`
        case 'work': return `${MyOderImage.work}`
        case 'other': return `${MyOderImage.other}`
        default: return `${MyOderImage.home}`
    }
}

//-- active
// rating to comment
export const TheRating = [1, 2, 3, 4, 5,]




export const TheDoday = () => {
    const objToday = new Date()
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const justNu = weekday[objToday.getDay()]
    // console.log(objToday.getDay())
    return justNu

}









const tody = new Date()?.toDateString()
const WhilTody = tody.slice(0, 3).toLocaleLowerCase()
const mnayToday = TheWeek.indexOf(WhilTody)
// // array
const FirstWeek = TheWeek.slice(mnayToday, TheWeek?.length)
const lastWeek = TheWeek.slice(0, mnayToday)
let arrayPush = []
arrayPush.push(...FirstWeek)
arrayPush.push(...lastWeek)

export const timeFrom = (X) => {

    var Sopsdsds = []
    var dates = []
    for (let I = 0; I < Math.abs(X); I++) {
        dates.push(new Date(new Date().getTime() - ((X >= 0 ? I : (I - I - I)) * 24 * 60 * 60 * 1000)).toLocaleString());
    }




    for (let i = 0; i < 7; i++) {
        Sopsdsds.push(`${arrayPush[i]} : ${dates[i]}`)
    }

    // console.log('dd',Sopsdsds)
    return Sopsdsds

}


// -- active
// create time to pay order
export const theTimeNow = (name, form) => {
    const theTimeJustNow = new Date()?.getHours() + 1
    const timeNu = Number(name?.oppen?.slice(0, 2))
    const timeMinuter = Number(name?.oppen?.slice(3, 5))
    const timeClose = Number(name?.close?.slice(0, 2))
    const CollectMinutes = new Date()?.getMinutes()
    var newTimeResu = Number()
    if (Number(theTimeJustNow) > timeNu) {
        newTimeResu = theTimeJustNow

    }
    let StratTheTimeNow = form ? timeNu : newTimeResu
    let CloseTime = timeClose ? timeClose : timeClose

    let LastMinutes = 59;
    let resultMintes = [];
    for (StratTheTimeNow; StratTheTimeNow < CloseTime; StratTheTimeNow++) {
        for (let mintes = form ? timeMinuter : CollectMinutes; mintes <= LastMinutes; mintes += 10) {
            resultMintes.push(`${StratTheTimeNow}:${mintes}`);
        }
    }



    return resultMintes

}








// console.log(TheDoday())
// export const RemoveItmes = "Restore unfinished order You created an order previously that you didn’t finish, would you like to continue from where you left off?"
// export const TheWeekName = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
// ]


// export const OrderSelection = [
//     {
//         _id: 1,
//         name: 'Door delivery',
//         driverPric: 30,

//     }, {
//         _id: 2,
//         name: 'Pick Up',
//         driverPric: 0
//     }
// ]



// export const PaymentSelection = [
//     {
//         _id: 1,
//         name: 'Debit / Credit Card',
//         description: 'Payment with debit/credit cart',
//         image: `${MyOderImage.credit}`
//     },
//     {
//         _id: 2,
//         name: 'Banking',
//         description: 'Payment with Banking',
//         image: `${MyOderImage.bank}`
//     },
//     {
//         _id: 3,
//         name: 'Paypal',
//         description: 'Payment with Paypal',
//         image: `${MyOderImage.paypal}`
//     },

// ]
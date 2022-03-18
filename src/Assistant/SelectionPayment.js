

// selection user takeway and delivery
// what need method need user for food
export const Usercheck = (data, user,cartinfo) => {

   switch (data?.name) {

      case 'hämta själv': return `Takeaway om ${cartinfo?.finishfood?.to}-${cartinfo?.finishfood?.end} min`

      case 'utkörning' : return user?.Adress?.work ? `Leverans om  ${cartinfo?.finishfood?.to}-${cartinfo?.finishfood?.end} min till ${user?.Adress?.work}` : 'lägg till leveransadress'

      default: return 'lägg till leveransadress'


   }
}


// selection if customs want dlivery show your address
export const CheckDriverUser = (dri, use) => {

   if (dri?.name === 'utkörning' && use?.Adress?.addres) {

      return `${use?.Adress?.addres} ${use?.Adress?.homeNumber} ${use?.Adress?.city} ${use?.Adress?.work} `
   }
}







export const classWeek = () =>{


   const TheWeek = [
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat',
      'sun',
   ]

   const tody = new Date()?.toDateString()


   const WhilTody = tody.slice(0, 3).toLocaleLowerCase()

   const mnayToday = TheWeek.indexOf(WhilTody)


   // // array
   const FirstWeek = TheWeek.slice(mnayToday, TheWeek?.length)
   const lastWeek = TheWeek.slice(0, mnayToday)

   let arrayPush = []

   arrayPush.push(...FirstWeek)
   arrayPush.push(...lastWeek)

   return arrayPush


}





// export const 



export const Usercheck = (data, user) => {

   switch (data?.name) {

      case 'takeaway': return 'takeaway in 10-20'

      case 'delivery': return user?.Adress?.work ? `delivery in 25-35 min to ${user?.Adress?.work}` : 'please add delivery address'

      default: return 'please add delivery address'


   }
}


export const CheckDriverUser = (dri, use) => {

   if (dri?.name === 'delivery' && use?.Adress?.addres) {

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
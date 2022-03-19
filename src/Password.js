import { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";



export default function PasswordScreen() {




  const HandleP = () => {
    console.log('click')
  }



  // let MAc = Number(9)
  // const Mahmoudx = 
  // console.log(Mahmoudx)



  const [startDate, setStartDate] = useState(new Date());





 

  let Mahmoud = new Date()
  // Mahmoud.setHours(20, 20, 0)
  let ACXD = new Date()
  ACXD.setHours(23, 20, 0)


  // console.log(startDate)




  return <Form onSubmit={HandleP}>

    <div className="xxxd">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        minTime={Mahmoud}
        maxTime={ACXD}
        timeCaption="Time"
        dateFormat="HH:mm"
        timeFormat="HH:mm"
        className="masssss"
      />
    </div>


  </Form>
}
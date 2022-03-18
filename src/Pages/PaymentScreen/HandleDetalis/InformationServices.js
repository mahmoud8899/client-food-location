import { Modal } from 'react-bootstrap'





export default function InformationServices(props) {

    // params open and close show infrom serives
    const { show, setShow } = props




    const HandleHide = () => {


        return setShow(!show)
    }



    return <Modal show={show} onHide={HandleHide}>

<h1>information</h1>

    </Modal>
}
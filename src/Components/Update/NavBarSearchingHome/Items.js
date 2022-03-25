import { Col } from "react-bootstrap";
import { MdDirectionsBike } from "react-icons/md";
import { Link } from "react-router-dom";
import { SliceName } from "../../../Assistant/Slice";
import ImageScreen from "../../ImageScreen/ImageScreen";
import Rating from "../../Rating/Rating";
import { Conversion } from "../Conversion/Conversion";



export default function Items(props){


    const {home} = props


    return  <Col xs={12} sm={12} md={12} lg={12}  >
    {home?.map((rest, Index) => (

        <Link className='searching-result' key={Index} to={{ pathname: Conversion(rest) }} >
            <ImageScreen
                ImageIcon={rest?.image}
                className='result-image'
            />
            <div className='rigth-result'>
                <span className='rigth-result-first'>{rest?.username}</span>
                <span className='rigth-result-last'>{SliceName(rest?.description, 20)}</span>
                <div className='Driver-pri'>
                    {rest?.freeDelvery ?
                        <span>Fri Leverans</span>
                        :
                        <div className='pries-div'> 
                            <MdDirectionsBike className='font-icons' />
                          <span>  29,00 kr</span>
                        </div>
                    }
                    <span className='left-rating'><Rating value={rest?.rating} text={`${rest?.numReviews}`} /></span>

                </div>
            </div>
        </Link>

    ))}
</Col>
}
import { Col, Container, Row } from "react-bootstrap"





export default function SkeletonLoading({ type }) {





    // filter home 
    function FilterHome() {


        return <div className='Skeleton-filter'>
            <div className='Skeleton-filter-image' ></div>

            <div className='Skeleton-filter-text'>
                <span></span>
                <span></span>
            </div>
        </div>
    }



    // home page
    function CartHome() {
        return <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>

    }



    // product page
    function ProductPage() {

        return <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>
                    <div className="Product-skeleton">
                        <div className="Product-skeleton-first">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="Product-skeleton-last">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    }




    // home page
    function CartHomeLoading() {
        return <Container fluid>
            <Row className="justify-content-center">
                <Col xs={6} md={6} lg={6} >

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={6} lg={6} >

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    }




    if (type === 'filterHome') return Array(3).fill(<FilterHome />)
    if (type === 'HomeCart') return Array(3).fill(<CartHome />)
    if (type === 'ProductPage') return <div className="first-class-product">
        <ProductPage />

        <CartHome />
    </div>
    if (type === 'loadingdata') return <CartHomeLoading />


}
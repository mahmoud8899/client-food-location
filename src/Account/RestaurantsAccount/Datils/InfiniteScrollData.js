import Styles from '../../../Components/Update/StylesComponents/style'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import InfiniteScroll from 'react-infinite-scroll-component'





export default function InfiniteScrollData(props) {
    const { products, categoryProductsNextPagesxp, fetchData, children } = props





    return <InfiniteScroll
        style={Styles.hidden}
        className='fex-style-more'
        dataLength={products.length}
        next={fetchData}
        hasMore={categoryProductsNextPagesxp !== null ? 'false' : 'true'}
        loader={categoryProductsNextPagesxp !== null ? <div className='center-loading'><LoadingScreen /></div> : null }
        endMessage={<p ><b>Yay! You have seen it all</b> </p>}
    >

        {children}


    </InfiniteScroll>
}
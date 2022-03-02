import COLORS from '../../Assistant/Color'


const Styles = {
    box :{
        width: '300px',
        background: COLORS.firstRed,
        padding: '10px',
        position: 'relative',
        boxShadow: `1rem 0rem 0.1rem 0.1rem ${COLORS.notClick}`
    },
    text: {
        color : COLORS.white,
        fontSize: 16,
        textTransform: 'capitalize',
        fontFamily: 'monospace'
    },
    image: {
        width: '15px',
        height: '15px',
        marginBottom: '20px'
    }

}


export default Styles
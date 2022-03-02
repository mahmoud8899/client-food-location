import COLORS from '../../../Assistant/Color'


const Styles = {
    addCartcolor: {
        background: COLORS.firstRed,
        width: '100%',
        border: 'none',
        height: '45px',
        color: COLORS.white,
        borderRadius: '10px',
        fontSize: '14px'
    },
    box: {
        boxShadow: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px`,
        margin: '5px'
    },
    font: {
        fontSize: 13,
    },
    color: {
        color: COLORS.firstRed,
        marginBottom: '72px',
        textAlign: 'center',
        marginTop: '1rem'
    },
    remove: {
        width: '15px',
        height: '15px',
        marginLeft: 'auto',
        display: 'block'
    },
    time: {
        width: '15px',
        height: '15px',
        marginLeft: 20,
    },
    timenotLeft: {
        width: '15px',
        height: '15px',
    },
    boxpric: {
        background: COLORS.notClick,
        color: COLORS.white
    },

    looklike: {
        background: COLORS.firstRed,
        color: COLORS.white
    },

    bottom: {
        marginTop: '10px'
    },
    co: {

        overflow: 'none'
    },

    newBox: {
        color: COLORS.firstRed,
        fontSize: '20px',
        cursor: 'pointer'
    },
    back: {
        background: COLORS.finds
    },
    colorCancel: {
        background: '#00000063',
        color: COLORS.white,
        marginRight: '0.5rem'

    },
    colorx: {
        background: COLORS.firstRed,
        color: COLORS.white
    },

    input: {
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        border: 'none'
    },
    addPayment: {
        backgroundColor: COLORS.firstRed,
        color: COLORS.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '19px',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        height : '100%'
    },
    ColorSetting: {
        color: COLORS.firstRed,
        fontFamily: `system-ui`,
        fontSize: '14px'
    }
}


export default Styles
import COLORS from '../../Assistant/Color'



const Styles = {

    disabled: {
        background : COLORS.notClick,
        color: COLORS.white,
        border: 'none',
        width: '100%',
        borderRadius: '0.4rem',
        height: '45px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        cursor: 'pointer',
        transition : '2s all'

    },
    notDisabled: {
        background : COLORS.firstRed,
        width : '100%',
        border : 'none',
        height : '45px',
        color : COLORS.white,
        borderRadius : '10px',
        fontSize : '14px'
    }
}


export default Styles
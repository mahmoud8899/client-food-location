import COLORS from '../../Assistant/Color'


const Styles = {
    buttomColorPage : {
        background : COLORS.firstRed,
        width : '100%',
        border : 'none',
        height : '45px',
        color : COLORS.white,
        borderRadius : '10px',
        fontSize : '14px',
  

    },
    buttomColorPageCancal:{
        background : COLORS.finds,
        width : '100%',
        border : 'none',
        height : '45px',
        color : COLORS.light,
        borderRadius : '10px',
        fontSize : '14px'
    },

    colorLine : {

        border : `1px solid ${COLORS.find}`,
        bordeRadius : '1.2rem'

    },

    cloroTesting : {

        background : COLORS.firstRed,
        bordeRadius: '20%',
        border: 'none',
        padding : '1rem',
        heigth : '200px',
        overflowY: 'hidden'
    },

    color: {
        fontSize: '20px',
        color: COLORS.firstRed,
        borderBottom: `0.1rem solid ${COLORS.firstRed}`,
        fontFamily: 'monospace'
    },
    input : {
        border: `2px solid ${COLORS.find}`,
        paddingLeft: '40px'
    }
}


export default Styles
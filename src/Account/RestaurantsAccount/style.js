import COLORS from '../../Assistant/Color'



const Styles = {

    imageproduct : {

        width : '40px',
        heigth: '40px',
        border : 'none',
        borderRadius : '0.4rem',
        cursor : 'pointer',
        objectFit : 'cover'
    },

    co: {

        overflow: 'none'
    },
    stylebuttom:{
        backgroundColor : COLORS.firstRed,
        color : COLORS.white,
        border : 'none',
        width: '100%',
        borderRadius: '0.4rem',
        height : '45px',
        marginTop : '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        cursor: 'pointer',

    },

    font : {

        fontSize : '15px'

    },

    processing : {

        width : '10px',
        height : '10px',
        marginRight : '0.4rem'

    },

    remove: {

        background: COLORS.firstRed,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },

    edit: {
        background: COLORS.finds,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

 

    color: {

        borderTop: `2px solid ${COLORS.finds}`,
        borderBottom: `2px solid ${COLORS.finds}`,
        border: `2px solid ${COLORS.finds}`,
        borderRadius: '40px',
    },
    boxChildren: {


        width: '100%',
        fontSize: '12px',
        textTransform: 'capitalize',
        padding: 'auto',
        height: '40px',
        lineHeight: '20px',
        cursor: 'pointer',



    },
    box: {


        padding: '0rem'

    },
    iconsremov :{
        width: '12px',
        heigth: '12px',
        objectFit: 'cover',
        marginRight: '0.2rem'
    },
    image: {
        width: '20px',
        heigth: '20px',
        objectFit: 'cover',
        marginRight: '0.2rem'
    },
    fontText: {
        fontSize: '13px',
        textTransform: 'capitalize',
        width: '100px',
        
    },
    buttom: {
        fontSize: '13px',
        textTransform: 'capitalize',
        background: COLORS.firstRed,
        padding: '0rem',
        margin: '0rem',
        textAlign: 'center',
        lineHeight: '31px',
        borderRadius: '20px',
        height: '31px',
        color: COLORS.white,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        cursor: 'pointer',

    },
    buttomColor: {
        fontSize: '13px',
        textTransform: 'capitalize',
        background: COLORS.finds,
        padding: '0rem',
        margin: '0rem',
        textAlign: 'center',
        lineHeight: '31px',
        borderRadius: '20px',
        height: '31px',
        color: COLORS.light,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        cursor: 'pointer',
    }
}

export default Styles
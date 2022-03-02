import COLORS from '../../Assistant/Color'



const Styles = {

    error : {

        color :COLORS.firstRed,
        fontSize: '13px',
        padding : '0rem',
        margin : '0rem'

    },
    input : {

      width: '100%',
      marginBottom : 10,
      height : '60px',
      boxShadow: `${COLORS.firstRed} 0px 1px 2px 0px, ${COLORS.firstRed} 0px 1px 3px 1px`

    },
    top_commit_xp: {
        marginTop : 40,
        marginLeft: 10,
        padding: 2,
    },
    Comment_User: {

    },
    Comment_User_Info: {
        width: '100%',
        display: 'flex',
      
        
    },
    name : {
   width : 150,
   textTransform : 'capitalize'
    },
    user_text_comment: {
        backgroundColor: COLORS.firstRed,
        borderRadius: 10,
        padding: 3,
        fontSize: 15,
        textTransform: 'capitalize',
        textAlign: 'left',
        cursor: 'pointer',
        opacity: 0.9,
        border: 'none',
        outline: 'none',
        color: 'white',
        marginTop: 5,
    },
    time_commit: {
        width: '100%',
        display: 'block',
        padding: 0,
        margin: 0,
        marginLeft: 'auto',
        textAlign: 'right',
        fontSize : 12,
    },
    input_selector_user:{
        width: '100%',
        height: 40,
        marginBottom : 10,
        boxShadow: `0rem 0rem 0rem 0.1rem  ${COLORS.firstRed}`,
        borderRadius : 5,
        border : 'none',
        outline : 'none'
       

      
    },
    style : {
        width : '100%',
        height : 40,
        backgroundColor : COLORS.firstRed,
        border : 'none',
        color : COLORS.white,
        textTransform: 'capitalize',
        borderRadius : 3,
        fontSize : 15
    },
    Comment: {
        width : '100%',
        height : 60,
        border : 'none',
        color : COLORS.firstRed,
        textTransform: 'capitalize',
        borderRadius : 3,
        fontSize : 15,
        boxShadow: `0rem 0rem 0.1rem 0.1rem  ${COLORS.firstRed}`
       
      
        
    },
    login : {
        color: COLORS.white,
        backgroundColor: COLORS.firstRed
    }


}




export default Styles
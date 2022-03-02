



// handel error
export const HandleError = (name) =>{

    switch(name){

        case 'jwt expired' : return 'Expired Re-request forget password'
       
        case 'jwt malformed' : return 'Expired Re-request forget password'

        default : return name

    }


    

}
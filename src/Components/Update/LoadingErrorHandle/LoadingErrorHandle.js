import CodeError from '../../CodeError/CodeError'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'




export default function LoadingErrorHandle(props) {

    const { children, loading, error, home, TextNotItems } = props




    return loading ?
        <div className='Dev-Error'>
            <LoadingScreen />
        </div>
        :
        error ?
            <div className='Dev-Error'>
                <CodeError error='error server' />
            </div>
            :
            home?.length === 0 ?

                <div className='Dev-Error'>
                    <CodeError error={TextNotItems} />
                </div>

                :
                children









}



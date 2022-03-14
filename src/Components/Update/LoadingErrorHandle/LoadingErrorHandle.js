import CodeError from '../../CodeError/CodeError'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'




export default function LoadingErrorHandle(props) {

    const { children, loading, error, TextNotItems, extraStyle } = props






    return loading ?
        <div className={extraStyle ? 'Dev-Error extraStyle' : 'Dev-Error'}>
            <LoadingScreen />
        </div>
        :
        error ?
            <div className={extraStyle ? 'Dev-Error extraStyle' : 'Dev-Error'}>
                <CodeError error={TextNotItems} />
            </div>
            :

            children

}



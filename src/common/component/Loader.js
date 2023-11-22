import '../style/style.css';
function Loader(){
    return(
        <div data-testid="loader" className='loading-container'>
            <div className="lds-spinner">

            </div>
        </div>
        
    )
}
export default Loader;

function Links(props) {
    return <div className='Navinside'>
        {props.iterate.map((el) => {
            return <h5>{el}</h5>
        })}
    </div>
}
export default Links
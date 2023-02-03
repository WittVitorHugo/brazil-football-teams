import './Card.css'

const Card = ({name, logo}) => {
    return (
        <div className='card'>
            <div className='team-logo'>
                <img src={logo} />
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default Card
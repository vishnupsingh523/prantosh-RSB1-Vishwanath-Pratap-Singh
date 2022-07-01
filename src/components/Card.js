const Card = ({ movie }) => {
    return (
        <div className="content">
            <img src={movie.location} />
            <h1>{movie.name}</h1>
        </div>
    )
}

export default Card;
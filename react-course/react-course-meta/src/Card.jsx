function Card({num}) {
    return(
        <div>
            <h1>this card's value is {num}</h1>
            <p>{num} is {num > 50 ? "greater than 50" : "smaller than 50"}</p>
            

        </div>
    )
}

export default Card;
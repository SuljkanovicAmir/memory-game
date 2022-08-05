

function Card ({ card, handleGame }) {
    return ( 
        <div className="card" onClick={e => handleGame(card.title)}>
             <img className='cardImg' src={card.src} alt={card.title}/>
             <p>{card.title}</p>
        </div>
     );
}
 



export default Card;
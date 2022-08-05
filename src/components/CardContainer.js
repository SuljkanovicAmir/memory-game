import Card from './Card'



function CardContainer ( { cards, handleGame }) {
   
    return ( 
        <div className="cardContainer">
            {cards.map((card, i) => 
            <Card 
                card={card} 
                key={i}
                handleGame={handleGame}
            />)}
        </div> 
    );
}



export default CardContainer;
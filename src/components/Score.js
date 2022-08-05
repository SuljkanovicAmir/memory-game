function Score ({score, highScore}) {
    return (
        <div className="score">
            <p>Current score: {score}</p>
            <p>Best score: {highScore}</p>
        </div>
    );
}
 
export default Score;
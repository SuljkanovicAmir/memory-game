function Message ({reset, score}) {
    return (  
        <div className="messageDiv">
            <h1>You Lost</h1>
            <p>Final score: {score}</p>
            <button className="resetBtn" onClick={reset}>Restart Game</button>
        </div>

    );
}
 
export default Message ;
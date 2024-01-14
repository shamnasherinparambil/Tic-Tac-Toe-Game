export default function GameOver({ winner,onRemach }) {
    return(  <div id="game-over">
    <h1> Game Over</h1>
    {winner && <p> {winner} Won !!!</p>}
    {!winner && <p>It&apos;s a Draw</p>}
    <p>
      <button onClick={onRemach}>Remach</button>
    </p>
  </div>);

}

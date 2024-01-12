import { useState } from "react";

export default function Player({ initialName, symbol ,isActive}) {
  const [isEditing, setIsEditing] = useState(false);
  const [changeName, setChangeName] = useState(initialName);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setChangeName(e.target.value);
  }

  let editableplayerName = <span className="player-name">{changeName}</span>;
  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={changeName} onChange={handleChange} />
    );
  }
  return (
    <li className={ isActive ? 'active': undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

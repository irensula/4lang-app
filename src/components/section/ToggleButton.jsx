export default function ToggleButton({ onToggle}) {
    return (
      <div>
        <button onClick={onToggle}>Show</button>
      </div>
    );
  }
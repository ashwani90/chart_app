import { useState, useEffect } from "react";
import { Chart } from "./components/chart";
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="circle"></div>
            <div className="mouse-position">
            <h4>Mouse Position</h4>
            <div className="position"></div>
        </div>
    </div>
  );
}

export default App;

class MousePositionObservable {
constructor() {
    this.subscriptions = [];
    window.addEventListener('mousemove', this.handleMouseMove);
}
handleMouseMove = (e) => {
this.subscriptions.forEach(sub => sub(e.clientX, e.clientY));
}
cleanup = () => {
window.removeEventListener('mousemove', this.handleMouseMove);
}
subscribe(callback) {
this.subscriptions.push(callback);
return () => {
this.subscriptions = this.subscriptions.filter(cb => cb === callback);
}
}
}
const mousePositionObservable = new MousePositionObservable();
const unlisten = mousePositionObservable.subscribe((x,y) => {
const circle = document.querySelector('.circle');
window.setTimeout(() => {
circle.style.transform = 'translate(${x}px,${y}px)';
}, 1000);
});

mousePositionObservable.subscribe((x,y) => {
const board = document.querySelector('.mouse-position .position');
console.log('MouseCursorPosition ', x, y);
board.innerHTML = `<div><div> ClientX: ${x}</div><div>ClientY: ${y}</div></div>`;
})
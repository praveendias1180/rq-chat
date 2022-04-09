const socket = io('ws://localhost:4000');


socket.on('message', text => {
    console.log(text);
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
    document.title = text + " - RQ Chat App";
}
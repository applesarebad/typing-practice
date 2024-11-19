function redirectWebpage(num) {
    window.location = "typing.html";
    localStorage.setItem("lessonNumber", num.toString());
}


// const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives live display - false would wait till we stop talking then display

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;
    // texts.appendChild(p);

    if (e.results[0].isFinal){

        if (text.includes('one')){
            redirectWebpage(1);
        }
        if (text.includes('two')){
            redirectWebpage(2);
        }
        if (text.includes('three')){
            redirectWebpage(3);
        }
        if (text.includes('four')){
            redirectWebpage(4);
        }
        if (text.includes('five')){
            redirectWebpage(5);
        }
        if (text.includes('six')){
            redirectWebpage(6);
        }
        if (text.includes('back')){
            alert("going back");
        }
        if (text.includes('home')){
            alert("going home");
        }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();
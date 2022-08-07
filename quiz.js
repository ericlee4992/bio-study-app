function answer(q, ans){
    if (q === 1) {
        if (ans === 1) {
            let selectedButton = document.querySelector('.q1 .n1');
            selectedButton.style.backgroundColor = "lightgreen";
            [1,2,3]
                .filter(v => v !== 1).map(v => turnOff(v));
        } else {
            let selectedButton = document.querySelector(`.q1 .n${ans}`); // n2 or n3
            selectedButton.style.backgroundColor = "pink";
        }
    } else if (q === 2){
        if (ans === 1) {
            let selectedButton = document.querySelector('.q2 .n1');
            selectedButton.style.backgroundColor = "lightgreen";
            [1,2,3]
                .filter(v => v !== 1).map(v => turnOff(v));
        } else {
            let selectedButton = document.querySelector(`.q2 .n${ans}`); // n2 or n3
            selectedButton.style.backgroundColor = "pink";
        }
    }
}

function turnOff(q, index) {
    let element = document.querySelector(`.q${q} .n${index}`);
    element.style.backgroundColor = '';
}

function reset(qu1, qu2){
    let element1 = document.querySelectorAll(`.buttons${qu1} > button`);
    for (let i = 0; i<element1.length ; i++) {
        element1[i].style.backgroundColor = '';
    }

    let element2 = document.querySelectorAll(`.buttons${qu2} > button`);
    for (let i = 0; i < element2.length; i++){
        element2[i].style.backgroundColor = '';
    }
    
}

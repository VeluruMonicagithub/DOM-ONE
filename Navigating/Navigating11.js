const headerElement = document.getElementById('header');
        if (headerElement){
            headerElement.textContent = "Welcome to the DOM World!";
        }
        const paragraphElements = document.getElementsByTagName('p');
        for (let i = 0; i < paragraphElements.length; i++){
            paragraphElements[i].style.color = 'blue';
        }
        const containerElement = document.querySelector('.container');
        if (containerElement){
            containerElement.style.backgroundColor = 'yellow';
        }
document.addEventListener('DOMContentLoaded', function(){
    
    const colorInput = document.getElementById('colorInput');
    const textInput = document.getElementById('textInput');
    const changeBgBtn = document.getElementById('changeBgBtn');
    const updateTextBtn = document.getElementById('updateTextBtn');
    const targetDiv = document.getElementById('targetDiv');
    
    changeBgBtn.addEventListener('click', function(){
        const colorValue = colorInput.value.trim();
        
        if (colorValue === ''){
            alert("Invalid color name!");
            return; 
        }

        const originalColor = targetDiv.style.backgroundColor;
        
        targetDiv.style.backgroundColor = colorValue;
        
        if (targetDiv.style.backgroundColor === originalColor && colorValue !== originalColor) {
            targetDiv.style.backgroundColor = originalColor; 
            alert("Invalid color name!");
        }
    });

    updateTextBtn.addEventListener('click', function(){
        const textValue = textInput.value.trim();
        
        if (textValue === ''){
            alert("Please enter some text!");
        } else {
            targetDiv.textContent = textValue;
            textInput.value = '';
        }
    });
});
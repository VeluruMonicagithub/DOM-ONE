        document.addEventListener('DOMContentLoaded', function(){
            const list = document.querySelector('#myList');
            const button = document.querySelector('#addItemBtn');

            button.addEventListener('click', function(){
                const newItem = document.createElement('li');
                const currentCount = list.children.length;
                const sequenceNumber = currentCount + 1;
                newItem.textContent = `New Item ${sequenceNumber}`;

                if (sequenceNumber % 2 !== 0){
                    newItem.style.fontWeight = 'bold';
                    newItem.style.color = 'blue';
                }
                else{
                    newItem.style.fontStyle = 'italic';
                    newItem.style.color = 'red';
                }

                list.appendChild(newItem);
            });
        });
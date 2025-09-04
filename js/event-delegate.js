

document.getElementById('item-list')
    .addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })

document.getElementById('btn-add')
    .addEventListener('click', function () {

        // parent to be added to 
        const ol = document.getElementById('item-list')

        // new item

        const li = document.createElement('li');
        li.innerText = 'New Element Added';

        // append to the child

        ol.appendChild(li);

    })



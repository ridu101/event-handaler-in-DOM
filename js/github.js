document.getElementById('input-delete')
    .addEventListener('keyup', function (event) {
        const text = event.target.value;
        const buttonDelete = document.getElementById('btn-delete');
        const headDelete= document.getElementById('title-text');

        if (text === 'delete') {
            console.log('delete typed');
            buttonDelete.removeAttribute('disabled')
            headDelete.style.display='none'

        }
        else {
            console.log('something else');
            buttonDelete.setAttribute('disabled', true);
        }

    })
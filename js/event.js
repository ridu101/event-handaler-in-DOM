const updateText = document.getElementById('updateText').addEventListener('click', function () {
    // console.log('button clicked')

    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'Hahaha !! I am changed';
})

// another inner text changing
document.getElementById('log-btn').addEventListener('click', function () {
    const userElement = document.getElementById('user-info');
    userElement.innerText = ' User Login Successful ✅'
})
// event handel change the input field text

    // 1. set event listener
    document.getElementById('btn-update').addEventListener('click', function () {
    // 2. get the text from input field
    const nameInput = document.getElementById('input-text');
    const updatedName = nameInput.value;
    // 3. set the name
    const nameP = document.getElementById('name');
    nameP.innerText = updatedName;


})

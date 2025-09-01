
// step1- set an event handler in button
    document.getElementById('btn-comment').addEventListener('click', function () {
    

    // step-2: get the text from the input filed

    const text = document.getElementById('textArea');
    const publishComment = text.value;

    // step 3 update the comment 

    const commentContainer = document.getElementById('comment-container');

    // step 4: create a comment p and set the inner text

    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');

    commentElement.innerText = publishComment;

    // step-5: append the child to the parent

    commentContainer.appendChild(commentElement);





})
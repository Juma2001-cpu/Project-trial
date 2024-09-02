document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendMessageButton = document.getElementById('send-message');
    const chatBox = document.getElementById('chat-box');

    sendMessageButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
            chatInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
        }
    });

    const commentInput = document.getElementById('comment-input');
    const postCommentButton = document.getElementById('post-comment');
    const commentList = document.getElementById('comment-list');

    postCommentButton.addEventListener('click', () => {
        const comment = commentInput.value.trim();
        if (comment) {
            const commentElement = document.createElement('div');
            commentElement.textContent = comment;
            commentList.appendChild(commentElement);
            commentInput.value = '';
            commentList.scrollTop = commentList.scrollHeight; // Auto-scroll to the bottom
        }
    });
});

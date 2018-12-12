function addMessage() {
	var myAnchor = document.getElementById('myAnchor');	
	
	var newMessage = document.createElement('p');
	
	var newComment = document.getElementById('getComment').value;
	
	newMessage.innerHTML = newComment;
	
	myAnchor.prepend(newMessage);
	
}

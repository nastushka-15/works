const userName = document.querySelector('#userName');
const userAvatar = document.querySelector('#userAvatar');
const userComment = document.querySelector('#userComment');
const button = document.querySelector('.button');


function makeComment() {
	let name = document.getElementById('name').value;
	const avatar = document.getElementById('avatar').value;
	const comment = document.getElementById('comment').value;

	let trimmedName = name.trim();
	let name2 = trimmedName[0].toUpperCase();
	let name3 = trimmedName.slice(1);
	let name4 = name3.toLowerCase();
	let name5 = name2+name4;

	let checkSpam = comment.replace(/viagra/gi, '***');

	userName.textContent = name5;
	userAvatar.src = avatar;
	userComment.textContent = checkSpam;
}

button.addEventListener('click', makeComment);

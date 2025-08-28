// console.log("connected script file");

//function to get element from id:
function getElement(id) {
	const element = document.getElementById(id);
	return element;
}

const AllHeart = document.getElementsByClassName("heart-click");

for (const heart of AllHeart) {
	heart.addEventListener("click", function () {
		const heartCount = getElement("heart-count").innerText;
		const totalCount = Number(heartCount) + 1;

		getElement("heart-count").innerText = totalCount;
	});
}

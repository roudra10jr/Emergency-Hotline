// console.log("connected script file");

//function to get element from id:
function getElement(id) {
	const element = document.getElementById(id);
	return element;
}

// heart-icon click functionality :
const allHeart = document.getElementsByClassName("heart-click");

for (const heart of allHeart) {
	heart.addEventListener("click", function () {
		const heartCount = getElement("heart-count").innerText;
		const totalCount = Number(heartCount) + 1;

		getElement("heart-count").innerText = totalCount;
	});
}

// call button mechanism :

const callsBtn = document.getElementsByClassName("btn-call");
// console.log(CallsBtn);
for (const callBtn of callsBtn) {
	callBtn.addEventListener("click", function () {
		const title =
			callBtn.parentNode.parentNode.parentNode.children[1].children[0]
				.children[0].innerText;
		const number =
			callBtn.parentNode.parentNode.parentNode.children[1].children[1]
				.children[0].innerText;
		let date = new Date().toLocaleTimeString();
		// console.log(date);
		const coinValue = getElement("coin-count").innerText;

		if (Number(coinValue) >= 20) {
			alert("Calling " + title + " " + number);
			const currentCoin = Number(coinValue) - 20;
			getElement("coin-count").innerText = currentCoin;

			const historyContainer = getElement("card-container");
			const divElement = document.createElement("div");

			divElement.innerHTML = `
                    <div
							class="flex justify-between bg-white p-3 rounded-lg shadow-sm shadow-gray-300"
						>
							<div class="">
								<h1 class="font-bold text-lg">
									${title}
								</h1>
								<p>${number}</p>
							</div>
							<h1 class="font-semibold text-gray-400 mt-2">${date}</h1>
					</div>
            `;
			historyContainer.appendChild(divElement);
		} else {
			alert("You have insufficient coin to call the number");
		}
	});
}

// clear button functionality:

getElement("clear-btn").addEventListener("click", function () {
	getElement("card-container").innerText = "";
});

// copy button functionality: delegation technique

getElement("helpline-box").addEventListener("click", function (e) {
	// console.log(e.target);
	if (e.target.className.includes("copy-btn")) {
		// alert("clicked copy btn");
		const copyBtn = e.target;
		const number =
			copyBtn.parentNode.parentNode.parentNode.children[1].children[1]
				.children[0].innerText;

		// alert("Number Successfully copied : " + number);
		navigator.clipboard.writeText(number).then(() => {
			alert("Number successfully copied: " + number);
		});

		const copyCount = getElement("copy-count").innerText;
		const totalCopy = Number(copyCount) + 1;
		getElement("copy-count").innerText = totalCopy;
	}
});

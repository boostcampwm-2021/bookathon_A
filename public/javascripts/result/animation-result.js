export const imageSlider = (target) => {
	const onDisplay = (imgNum) => {
		const imgs = target.querySelectorAll("img");

		imgs[imgNum].style.display = "block";

		let opacity = 0;
		let time = 50;

		setTimeout(() => {
			const seeIn = setInterval(() => {
				imgs[imgNum].style.opacity = opacity;
				opacity += 1 / time;
			}, 10);

			setTimeout(() => {
				clearInterval(seeIn);
			}, time * 10);
		}, 0);

		if (imgs.length === 1) return;

		setTimeout(() => {
			const seeOut = setInterval(() => {
				imgs[imgNum].style.opacity = opacity;
				opacity -= 1 / time;
			}, 10);

			setTimeout(() => {
				clearInterval(seeOut);
			}, time * 10);
		}, 2500);

		setTimeout(() => {
			imgs[imgNum].style.display = "none";

			imgNum++;

			if (imgNum === imgs.length) imgNum = 0;

			onDisplay(imgNum);
		}, 3000);
	};

	let imgNum = 0;

	onDisplay(imgNum);
};

(() => {
    let i = 0;
    const followInterval = setInterval(() => {
        if (i >= 30) {
            clearInterval(followInterval);
            return;
        }
        const buttons = document.querySelectorAll('button');
        // window.scroll(0, 1000)
        const nextButton = buttons[i];
        nextButton.click();
        i += 1;
    }, 3000)
})()

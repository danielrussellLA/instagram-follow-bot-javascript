(() => {
    let i = 0;
    const followInterval = setInterval(() => {
        if (i >= 30) clearInterval(followInterval);
        const buttons = document.querySelectorAll('button');
        const nextButton = buttons[i];
        if (nextButton.textContent.toLowerCase() === 'following') {
            nextButton.click();
        }
        const temp1 = document.querySelectorAll('button');
        const temp = temp1[0];
        if (temp.textContent.toLowerCase() === 'unfollow') { 
            temp.click();
        }
        i++;
    }, 500)
})()

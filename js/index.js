let count = 0;

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        count++;

        if (count > 3) {
            console.log("Limit exceeded!");
        }
    }

    console.log(count);
});
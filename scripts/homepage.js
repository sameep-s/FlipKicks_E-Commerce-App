const imgFull = document.querySelectorAll('.img-full');
const imgCol = document.querySelectorAll('.img-col');

const isLoaded = (img) => img.complete && img.naturalHeight !== 0;

console.log(imgCol);




window.addEventListener("load", e => {

    // stop the animation
    imgFull.forEach((imgFull) => {
        if (isLoaded(imgFull)) {
            imgFull.classList.remove("skeleton-img");
        }
    });

    imgCol.forEach((imgCol) => {
        imgCol.classList.remove("skeleton-img");
    });
})

// setTimeout(() => {
//     endSkeleton();
// }, 2000);

const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10
const cols = 3

for(let i = 0; i < rows * cols; i ++){
     const img = document.createElement('img')
     img.src = `${unsplashURL + getRandomSize()}`
     console.log(img)
     container.appendChild(img)
}


function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}

function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300
}
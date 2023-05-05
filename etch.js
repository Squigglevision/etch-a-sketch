const grid = document.querySelector('#grid');

// for(i = 0; i < 256; i++ ) {
//     let gridSquares = document.createElement('div');
//     gridSquares.classList.add('gridItem');

//     grid.appendChild(gridSquares);

// }

function generateSquares(totalSquares){

    if(sideNumber <= 100){
        for(i = 0; i < totalSquares; i++) {
            let gridSquares = document.createElement('div');
            gridSquares.classList.add('gridItem');
            grid.appendChild(gridSquares);
            let heightAndWidth = areaWidth/sideNumber;
            console.log(heightAndWidth);
            gridSquares.setAttribute('style', 'width: ' + heightAndWidth + 'px;'
                                + 'height: ' + heightAndWidth + 'px;')

        }

        const gridItems = document.querySelectorAll('.gridItem');
        gridItems.forEach(item => item.addEventListener("mouseover",(e) => {
        item.classList.add('mousedOver');

        }))

    }

    else {
        console.log('this is the else statement');
        sideNumber = prompt("Please enter a number of squares per row - 100 or " 
                        + "fewer:", 0);
        grid.textContent = '';
        let squaresPerSide = sideNumber * sideNumber;
        generateSquares(squaresPerSide);

    }

}




const areaWidth = 960;
const rowNumber = 16;
let startingSize = areaWidth/rowNumber;

for(i = 0; i < 256; i++ ) {
    let gridSquares = document.createElement('div');
    gridSquares.classList.add('gridItem');
    grid.appendChild(gridSquares);
    gridSquares.setAttribute('style', 'width: ' + startingSize + 'px;' + 
                            'height: ' + startingSize + 'px;')
}


let r = 000;
let g = 000;
let b = 000;

// let timesMousedOver;
// let itemDarkened = 0

const gridItems = document.querySelectorAll('.gridItem');
gridItems.forEach(item => item.addEventListener("mouseover",(e) => {
    item.classList.add('mousedOver');


    //     let timesMousedOver;
    //     console.log(timesMousedOver);

    //     if (timesMousedOver === undefined){
    //         r = Math.floor(Math.random() * 256);
    //         g = Math.floor(Math.random() * 256);
    //         b = Math.floor(Math.random() * 256);
    //         const randomColor = "rgb(" + r + "," + g + "," + b + ")"; 
    //         item.style.backgroundColor = randomColor;
    //         console.log(randomColor);
    
    //         timesMousedOver = 1;
    
    //     }
    
    
    //    else if (timesMousedOver > 0 && timesMousedOver <=10) {
    //         // for(i = 0; i <10; i++){
    //             r -= r*0.30;
    //             g -= g*0.30;
    //             b -= b*0.30;
    //             darkerColor = "rgb(" + r + "," + g + "," + b + ")";
    //             console.log(darkerColor);
    //             console.log("This is triggering");
    //             item.style.backgroundColor = darkerColor;
    //             timesMousedOver += 1;
    //         // }
    //     }

}))

const squaresNum = document.querySelector('#squaresNum');
squaresNum.addEventListener('click', function (e) {
    sideNumber = prompt("Please enter a number of squares per row - 100 or "
                    + "fewer:", 0);
    grid.textContent = '';
    let totalSquares = sideNumber * sideNumber;
    generateSquares(totalSquares);

})

// function randomRGB() {
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var RGBColor = "rgb(" + r + "," + g + "," + b + ")";  
//     console.log(RGBColor);
//     return RGBColor;
//   }
  
//   randomRGB();
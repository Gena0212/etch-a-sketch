const container = document.querySelector('#container');
let numberOfGridrows;
numberOfGridrows = 4;

for (let i = 0; i < numberOfGridrows; i ++){
    const row = document.createElement('div');
    row.classList.add('row')

    for (j = 0; j <numberOfGridrows; j++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
  //      gridElement.textContent ='This is a grid element!';
        //gridElement.setAttribute('style', 'height =15px', 'width =300px/numberOfGridrows');
        let gridmeasurements = 300/numberOfGridrows
        gridElement.style.width = gridmeasurements.toString() + 'px';
        gridElement.style.height = gridmeasurements.toString() + 'px';
        row.appendChild(gridElement);
    }

    container.appendChild(row);
}

const gridElements = document.querySelectorAll(".gridElement");

gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseenter', function(){
        console.log('success')
        this.style.backgroundColor = "#00ffff";
    });
    
});


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    numberOfGridrows = parseFloat(prompt('Please enter a number!'));
    console.log(numberOfGridrows)
    console.log(Number.isInteger(numberOfGridrows))
    while ((!(Number.isInteger(numberOfGridrows)))||(numberOfGridrows<1)||(numberOfGridrows>100)){
        numberOfGridrows = parseFloat(prompt('Please enter a number!'));
        console.log(numberOfGridrows)
        console.log(Number.isInteger(numberOfGridrows))
    }
    container.innerHTML = "";

    for (let i = 0; i < numberOfGridrows; i ++){
        const row = document.createElement('div');
        row.classList.add('row')
    
        for (j = 0; j <numberOfGridrows; j++){
            const gridElement = document.createElement('div');
            gridElement.classList.add('gridElement');
            let gridmeasurements = 300/numberOfGridrows
            gridElement.style.width = gridmeasurements.toString() + 'px';
            gridElement.style.height = gridmeasurements.toString() + 'px';
            row.appendChild(gridElement);
          
        }
    
        container.appendChild(row);
    }
    const gridElements = document.querySelectorAll(".gridElement");

    gridElements.forEach((gridElement) => {
        gridElement.addEventListener('mouseenter', function(){
            console.log('success')
            this.style.backgroundColor = "#00ffff";
        });
    
});

});

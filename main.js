const data = [
    {
        name: 'Stand Collar Short Down Jacket',
        price: 700,
        img: 'images/1.jpg'
    },
    {
        name: 'Down jacket with high collar',
        price: 870,
        img: 'images/2.jpg'
    },
    {
        name: 'Turtleneck with long sleeves',
        price: 450,
        img: 'images/3.jpg'
    },
    {
        name: 'Long sweater',
        price: 300,
        img: 'images/4.jpg'
    },
    {
        name: 'Shopper tote bag',
        price: 1400,
        img: 'images/5.jpg'
    },
    {
        name: 'Compact purse with shoulder strap',
        price: 250,
        img: 'images/6.jpg'
    }
]

const div = document.querySelector('.main__right');

function addProduct(img, name, price) {
    const newPrise = '$ ' + price + ' USD'
    const newDiv = document.createElement('div');
    const productName = document.createTextNode(name);
    const productPrice = document.createTextNode(newPrise);
    const productImg = document.createElement('img');
    const newH3 = document.createElement('h3');
    const newP = document.createElement('p');
    const addDiv = document.createElement('div');
    const addDivText = document.createTextNode('ADD TO CART');

    productImg.src = img;
    newH3.appendChild(productName);
    newP.appendChild(productPrice);
    addDiv.appendChild(addDivText);

    addDiv.classList.add('hidden');
    newDiv.classList.add('grid-item');
    newDiv.append(productImg, newH3, newP, addDiv);
    div.appendChild(newDiv);

    newDiv.addEventListener('mouseover', () => {
        addDiv.classList.add('show');
    })

    newDiv.addEventListener('mouseout', () => {
        addDiv.classList.remove('show');
    })

    addDiv.addEventListener('click', addToCart);
}

data.forEach(({img, name, price}) => {
    addProduct(img, name, price);
})

let counter = 0;

function addToCart() {
    counter++;
    console.log(counter);
    const countDiv = document.querySelector('.counter') || document.createElement('div');
    countDiv.classList.add('counter');
    const basket = document.querySelector('.basket');

    countDiv.textContent = counter;
    basket.appendChild(countDiv);
}
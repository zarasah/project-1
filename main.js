const data = [
    {
        name: 'Stand Collar Short Down Jacket',
        price: 2600,
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

    productImg.src = img;
    newH3.appendChild(productName);
    newP.appendChild(productPrice);

    newDiv.classList.add('grid-item')
    newDiv.append(productImg, newH3, newP);
    div.appendChild(newDiv);
}

data.forEach(({img, name, price}) => {
    addProduct(img, name, price);
})
const data = [
    {
        name: 'Stand Collar Short Down Jacket',
        price: 700,
        img: 'images/1.jpg',
        id: 0
    },
    {
        name: 'Down jacket with high collar',
        price: 870,
        img: 'images/2.jpg',
        id: 1
    },
    {
        name: 'Turtleneck with long sleeves',
        price: 450,
        img: 'images/3.jpg',
        id: 2
    },
    {
        name: 'Long sweater',
        price: 300,
        img: 'images/4.jpg',
        id: 3
    },
    {
        name: 'Shopper tote bag',
        price: 1400,
        img: 'images/5.jpg',
        id: 4
    },
    {
        name: 'Compact purse with shoulder strap',
        price: 250,
        img: 'images/6.jpg',
        id: 5
    }
]

const div = document.querySelector('.main__right');

function addProduct(img, name, price, id) {
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
    newDiv.id = id;
    newDiv.append(productImg, newH3, newP, addDiv);
    div.appendChild(newDiv);

    newDiv.addEventListener('mouseover', () => {
        addDiv.classList.add('show');
    })

    newDiv.addEventListener('mouseout', () => {
        addDiv.classList.remove('show');
    })

    newDiv.addEventListener('click', (event) => {
        const tar = event.target;
        const index = tar.closest('div').id;
        if(index) {
            let number = +index;
            fretured(data[number]);
        }
    })

    addDiv.addEventListener('click', addToCart);
}

data.forEach(({img, name, price, id}) => {
    addProduct(img, name, price, id);
})

let counter = 0;

function addToCart() {
    counter++;

    const countDiv = document.querySelector('.counter') || document.createElement('div');
    countDiv.classList.add('counter');
    const basket = document.querySelector('.basket');

    countDiv.textContent = counter;
    basket.appendChild(countDiv);
}

function fretured(obj) {
    const itemArray = document.querySelectorAll('.item');
    const history = document.querySelector('.wrapper');
    const newItem = document.createElement('div');
    const itemR = document.createElement('div');
    const itemL = document.createElement('div');
    const image = document.createElement('img');
    const p = document.createElement('p');

    p.textContent = obj.name;
    itemR.appendChild(p);

    image.src = obj.img;
    itemL.appendChild(image);

    itemL.classList.add('history');
    itemR.classList.add('history');
    newItem.classList.add('item');

    if (itemArray.length > 2) {
        itemArray[0].parentNode.removeChild(itemArray[0]);        
    }

    newItem.append(itemL, itemR);
    history.appendChild(newItem);
}
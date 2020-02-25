
import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';

const addToCartEvent = () => {
 console.log('you clicked add to cart');
    //let domString = '';
    //util.domString += `This is the cart`;
    //printToDom('cart-container',domString);
    }; 
const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2> ${book.name} </h2>`
    domString += '<button class="btn btn-dark" id="add-to-cart-button"> Add to Cart </button>'
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};

export default { makeStore }
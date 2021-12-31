let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product');
let product_per_page = Math.ceil(product.length/4);
// console.log(product_per_page)
let length = 0;
let move_per_click = 25.34;
let max_move = 153;

// Mobile view
let mobile_view = window.matchMedia("(max-width: 768px)");
// checking
if (mobile_view.matches) {
    move_per_click = 50.36;
    max_move = 403;
}
let forward_movement = () => {
    length = length + move_per_click;
    if (product == 1) {
        length = 0;
    }
    for (const item of product) {
        if (length > max_move) { length = length - move_per_click; }
        item.style.left = `-${length}%`;
    }
}
 
let backward_movement = () => {
    length = length - move_per_click
    if (length <= 0) { length = 0; }
    for (const item of product) {
        if (product_per_page > 1)
            item.style.left = `-${length}%`;
    }
}

span[1].onclick = () => { forward_movement() }
span[0].onclick = () => { backward_movement()}
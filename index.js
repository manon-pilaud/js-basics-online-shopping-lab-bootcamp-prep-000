var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { 
   var price = Math.floor((Math.random()*100) +1)
   var ObjCart = ({itemName:item, itemPrice:price})
   cart.push (ObjCart)
   return `${item} has been added to your cart.`
   
}

function viewCart(){
var statement = 'In your cart, you have '
if (cart.length === 0) {
    return  'Your shopping cart is empty.'
}
else if (cart.length === 1){
    return statement + `${cart[0].itemName} at $${cart[0].itemPrice}.`
}
else if (cart.length === 2) {
  return statement + `${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
}
else if (cart.length>2) {
for (var i=0; i<cart.length - 1; i++ ){
statement = statement + `${cart[i].itemName} at $${cart[i].itemPrice}, `
}
return statement + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
}
}

  

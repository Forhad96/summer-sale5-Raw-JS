
function btnAddToCart(event){
    const itemPrice = event.children[3].children[0].innerText;

    const previousTotalPrice = document.getElementById('total-price');
    

    const currentTotalPrice = parseFloat(previousTotalPrice.innerText) + parseFloat(itemPrice)

    previousTotalPrice.innerText = currentTotalPrice.toFixed(2);

// coupon validation
    const cartTotal = parseFloat(previousTotalPrice.innerText);
    if(cartTotal >= 200){
        const couponBtn = document.getElementById('coupon-apply');
        couponBtn.removeAttribute('disabled');
        const couponText = document.getElementById('coupon-text');
        couponText.innerHTML = `<span class=" text-accent">congratulation</span> you get <span class="text-[#E527B2]">20% off</span> <br> Use coupon code <span class="text-[#E527B2]">SELL200</span>`
        // check coupon code value
        couponBtn.addEventListener('click',function(){
            const couponCode = document.getElementById('coupon-code').value;
            if(couponCode == "SELL200"){
                console.log('yes')
            }
        })
    }
    
  

    
    console.log(currentTotalPrice)
    
}
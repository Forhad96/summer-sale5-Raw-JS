function btnAddToCart(event) {
  const itemName = event.children[2].innerText;
  const itemPrice = event.children[3].children[0].innerText;
  const previousTotalPrice = document.getElementById("total-price");
  const couponBtn = document.getElementById("coupon-apply");
  const discountTotal = document.getElementById("discount");
  const totalPaymentAmount = document.getElementById("total");
  const purchaseBtn = document.getElementById("purchase-btn");
  const subTotal = document.getElementById('subtotal');

  const currentTotalPrice =
    parseFloat(previousTotalPrice.innerText) + parseFloat(itemPrice);
  // set total
  previousTotalPrice.innerText = currentTotalPrice.toFixed(2);
  totalPaymentAmount.innerText = currentTotalPrice.toFixed(2);
  subTotal.innerText = currentTotalPrice.toFixed(2);

  // create element for show item name on card
  const orderList = document.getElementById("order-list");
  const p = document.createElement("p");
  const count = orderList.childElementCount;
  p.className = "text-xl";
  p.innerHTML = `${count + 1}. ${itemName}`;
  orderList.appendChild(p);

  // badge counting
  const itemCount = document.querySelectorAll('.item-count');
  // console.log(itemCount)
  Array.from(itemCount,e => (e.innerText = count + 1))

  // coupon/cart validation
  const withOutDiscountTotal = parseFloat(previousTotalPrice.innerText);
  if (withOutDiscountTotal > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (withOutDiscountTotal >= 200) {
    couponBtn.removeAttribute("disabled");
    const couponText = document.getElementById("coupon-text");
    couponText.innerHTML = `<span class=" text-accent">congratulation</span> you get <span class="text-[#E527B2]">20% off</span> <br> Use coupon code <span class="text-[#E527B2]">SELL200</span>`;
    // coupon value checking
    couponBtn.addEventListener("click", function () {
      const couponCode = document.getElementById("coupon-code").value;
      if (couponCode == "SELL200") {
        couponText.innerHTML = `<span class=" text-accent">congratulation</span> your coupon <br> <span class="text-[#E527B2]">Successfully applied</span>`;

        const withDiscountTotal =
          withOutDiscountTotal - (withOutDiscountTotal * 20) / 100;
        // set discount total and total payment amount
        discountTotal.innerText = (
          withOutDiscountTotal - withDiscountTotal
        ).toFixed(2);
        totalPaymentAmount.innerText = withDiscountTotal.toFixed(2);
        // set discount price inside the button
        const previewBtnTotal = document.getElementById("btn-total");
        previewBtnTotal.innerText = `( ${withDiscountTotal}Tk )`;
      } else {
        couponText.innerHTML = `<span class="text-red-500">Please enter a valid coupon!!</span>`;
      }
    });
  }

  // purchase button handler
  document.getElementById("modal-btn").addEventListener("click", function () {
    purchaseBtn.setAttribute("disabled", "true");
    couponBtn.setAttribute("disabled", "true");
    previousTotalPrice.innerText = "00";
    discountTotal.innerText = "00";
    totalPaymentAmount.innerText = "00";
    p.innerText = "";
  });

  cartBtn.classList.remove('hidden');

}

// cart button for mobile devices
const cartBtn = document.getElementById("cart-btn")
cartBtn.addEventListener("click", function () {
  // console.log('btn clicked')
  const aside = document.getElementById("aside-container");
  // console.log(aside.classList);
  // aside.classList.remove('hidden')
  aside.classList.toggle('hidden')
});

// scroll
// function scrollBtn(){
//   cartBtn.classList.remove('hidden');

//   setTimeout(() =>{
//   cartBtn.classList.add('hidden');

//   },10000)
// }
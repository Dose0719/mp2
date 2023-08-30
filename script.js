document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".btn-items");
    let cartItems = [];

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const item = {
          title: this.parentNode.querySelector("h5").textContent,
          price: parseFloat(this.parentNode.querySelector("h1").textContent.replace("$", "")),
        };

        cartItems.push(item);
        showAlert(item.title);
        updateCart();
      });
    });

    function showAlert(itemTitle) {
      const alertMessage = `Added ${itemTitle} to the cart!`;
      alert(alertMessage);
    }

    function updateCart() {
      const cartTotal = document.getElementById("cart-total");
      let totalAmount = 0;

      cartItems.forEach((item) => {
        totalAmount += item.price;
      });

      cartTotal.textContent = "$" + totalAmount.toFixed(2);
    }
  });
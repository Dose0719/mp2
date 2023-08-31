document.addEventListener("DOMContentLoaded", function () {
    // JSON data
    const jsonData = {
        // "0": {
        //     "id": 1,
        //     "name": "Nike React Infinity Run Flyknit",
        //     "brand": "NIKE",
        //     "gender": "MEN",
        //     "category": "RUNNING",
        //     "price": 160,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
        //     "slug": "nike-react-infinity-run-flyknit"
        //   },
        //   "1": {
        //     "id": 2,
        //     "name": "Nike React Miler",
        //     "brand": "NIKE",
        //     "gender": "MEN",
        //     "category": "RUNNING",
        //     "price": 130,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
        //     "slug": "nike-react-miler"
        //   },
        //   "2": {
        //     "id": 3,
        //     "name": "Nike Air Zoom Pegasus 37",
        //     "brand": "NIKE",
        //     "gender": "WOMEN",
        //     "category": "RUNNING",
        //     "price": 120,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
        //     "slug": "nike-air-zoom-pegasus-37"
        //   },
        //   "3": {
        //     "id": 4,
        //     "name": "Nike Joyride Run Flyknit",
        //     "brand": "NIKE",
        //     "gender": "WOMEN",
        //     "category": "RUNNING",
        //     "price": 180,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
        //     "slug": "nike-joyride-run-flyknit"
        //   },
        //   "4": {
        //     "id": 5,
        //     "name": "Nike Mercurial Vapor 13 Elite FG",
        //     "brand": "NIKE",
        //     "gender": "WOMEN",
        //     "category": "FOOTBALL",
        //     "price": 250,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
        //     "slug": "nike-mercurial-vapor-13-elite-fg"
        //   },
        //   "5": {
        //     "id": 6,
        //     "name": "Nike Phantom Vision Elite Dynamic Fit FG",
        //     "brand": "NIKE",
        //     "gender": "WOMEN",
        //     "category": "FOOTBALL",
        //     "price": 150,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
        //     "slug": "nike-phantom-vision-elite-dynamic-fit-fg"
        //   },
        //   "6": {
        //     "id": 7,
        //     "name": "Nike Phantom Venom Academy FG",
        //     "brand": "NIKE",
        //     "gender": "WOMEN",
        //     "category": "FOOTBALL",
        //     "price": 80,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
        //     "slug": "nike-phantom-venom-academy-fg"
        //   },
        //   "7": {
        //     "id": 8,
        //     "name": "Nike Mercurial Vapor 13 Elite Tech Craft FG",
        //     "brand": "NIKE",
        //     "gender": "MEN",
        //     "category": "FOOTBALL",
        //     "price": 145,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
        //     "slug": "nike-mercurial-vapor-13-elite-tech-craft-fg"
        //   },
        //   "8": {
        //     "id": 9,
        //     "name": "Nike Mercurial Superfly 7 Pro MDS FG",
        //     "brand": "NIKE",
        //     "gender": "MEN",
        //     "category": "FOOTBALL",
        //     "price": 137,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
        //     "slug": "nike-mercurial-superfly-7-pro-mds-fg"
        //   },
        //   "9": {
        //     "id": 10,
        //     "name": "Nike Air Force 1",
        //     "brand": "NIKE",
        //     "gender": "KIDS",
        //     "category": "CASUAL",
        //     "price": 90,
        //     "is_in_inventory": true,
        //     "items_left": 3,
        //     "imageURL": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
        //     "slug": "nike-air-force-1"
        //   }
    };

    // Cart object to store added products
    const cart = [];

    // Function to create product cards
    function createProductCard(product) {
        const card = document.createElement("div");
        card.classList.add("card", "bg-white", "shadow-md", "rounded-lg", "overflow-hidden");

        card.innerHTML = `
        <div class="inner-card" id="items">
            <div class="img-cart">
                <img class="bg-blue-500 itemshoe" src="${product.imageURL}" width="400px" alt="">
            </div>
            <div class="title p-4 text-center">
                <div>
                    <h5>${product.name}</h5>
                    <p>${product.category}</p>
                </div>
                <div>
                    <h1>$${product.price}</h1>
                </div>
            </div>
            <button id="add-to-cart-btn" class="btn-items py-1 px-2 bg-blue-500 text-white">
                <i class="fas fa-bag-shopping"></i> Add to cart
            </button>
        </div>
    `;

        const addToCartButton = card.querySelector("#add-to-cart-btn");
        addToCartButton.addEventListener("click", function () {
            addToCart(product);
        });

        return card;
    }

    // Function to add a product to the cart
    function addToCart(product) {
        cart.push(product);
        updateCart();
        fetchAndDisplayProducts(); // Refresh the displayed products
    }

    // Function to remove a product from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    // Function to update and display the cart contents
    function updateCart() {
        const cartContent = document.getElementById("cart-content");
        cartContent.innerHTML = ''; // Clear previous content

        for (let i = 0; i < cart.length; i++) {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <div>${cart[i].imageURL}</div>
                <div>${cart[i].name}</div>
                <div>$${cart[i].price}</div>
                <button class="remove-btn">Remove</button>
            `;

            const removeButton = cartItem.querySelector(".remove-btn");
            removeButton.addEventListener("click", function () {
                removeFromCart(i);
            });

            cartContent.appendChild(cartItem);
        }
    }

    // Function to fetch and display products
    function fetchAndDisplayProducts() {
        const productsSection = document.getElementById("p1");
    
        for (const key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
                const product = jsonData[key];
    
                // Check if the product is not in the cart before displaying it
                if (!cart.some(cartProduct => cartProduct.id === product.id)) {
                    const card = createProductCard(product);
                    productsSection.appendChild(card);
                }
            }
        }
    }

    fetchAndDisplayProducts();
});


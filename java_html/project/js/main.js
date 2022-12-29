let mainImage = document.getElementById("mainImage");
let count = 0;
function changeImage() {
    if (count < 2) {
        count++;
    } else {
        count = 0;
    }
    mainImage.style.backgroundImage = `url(/project/image/main/main${count}.jpg)`;
}
setInterval(changeImage, 5000);

function before() {
    count = count - 1;
    if (count == -1) {
        count = 2;
    }
    mainImage.style.backgroundImage = `url(/project/image/main/main${count}.jpg)`;
}
function next() {
    if (count < 2) {
        count++;
    } else {
        count = 0;
    }
    mainImage.style.backgroundImage = `url(/project/image/main/main${count}.jpg)`;
}

// for (i = 0; i < products.length; i++) {
//     product = products[i];
//     document.getElementById("productBox").innerHTML += `
//     <div class="product">
//         <a href="/project/html/product/product${i + 1}.html">
//             <div class="productImage">
//                 <img src="/project/image/${product.category}/${product.name}1.avif" alt="" />
//             </div>
//             <div class="productName">${product.name}</div>
//             <div class="productPrice">${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
//         </a>
//     </div>
//     `;
// }

let viewCount = 8;
function printProduct() {
    if (viewCount > products.length) {
        viewCount = products.length;
    }
    for (i = 0; i < viewCount; i++) {
        product = products[i];
        document.getElementById("productBox").innerHTML += `
        <div class="product">
            <a href="/project/html/product/product${i + 1}.html">
                <div class="productImage">
                    <img src="/project/image/${product.category}/${product.name}1.avif" alt="" />
                </div>
                <div class="productName">${product.name}</div>
                <div class="productPrice">${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </a>
        </div>
        `;
    }
}

printProduct();

function plusViewCount() {
    document.getElementById("productBox").innerHTML = null;
    viewCount = viewCount + 8;
    printProduct();
    console.log(viewCount);
    console.log(products.length);
    if (viewCount >= products.length) {
        document.getElementById("moreView").remove();
        document.getElementById("container").innerHTML += `
        <button type="button" class="viewButton" id="noneView" onclick="returnViewCount()">접기</button>
        `;
    }
}
function returnViewCount() {
    document.getElementById("productBox").innerHTML = null;
    viewCount = 8;
    printProduct();
    document.getElementById("noneView").remove();
    document.getElementById("container").innerHTML += `
    <button type="button" class="viewButton" id="moreView" onclick="plusViewCount()">더보기</button>
    `;
}

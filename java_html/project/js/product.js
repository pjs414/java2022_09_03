document.getElementById("section").innerHTML += `
<div id="container">
    <div id="middleLeft">
        <div id="imageBox"></div>
        <div id="text">상품설명</div>
        <div id="productInfo"></div>
    </div>
    <div id="middleRight">
        <div id="moveBox">
            <div id="productName"></div>
            <div id="productCategory"></div>
            <div id="productPrice"></div>
            <div id="productPrice2"></div>
            <div id="productAmount">재고상태 : 주문가능</div>
            <div id="orderAmount">수량</div>
            <button id="minus">-</button>
            <input type="text" id="orderCount" value="0" />
            <button id="plus">+</button>
            <div id="totPriceText">총 가격</div>
            <div id="totPrice">0원</div>
            <div id="buyBox">
                <button id="buy">Buy</button>
                <button class="like" onclick="likeToggle()">
                    <span class="material-symbols-outlined"> favorite </span>
                </button>
            </div>
        </div>
    </div>
</div>`;

let number = document.getElementById("number").innerHTML.substr(7) - 1;
let product = products[number];
document.getElementsByTagName("title")[0].innerText = "product" + (number + 1);

for (i = 2; i < 10; i++) {
    document.getElementById("imageBox").innerHTML += `
    <div class="image">
        <img src="/project/image/${product.category}/${product.name}${i}.avif" alt="" />
    </div>`;
}

document.getElementById("productName").innerHTML = product.name;
document.getElementById("productCategory").innerHTML = product.category;
document.getElementById("productPrice").innerHTML = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("productPrice2").innerHTML = product.price;
document.getElementById("productAmount").innerHTML = product.amount > 0 ? "재고상태 : 여유" : "재고상태 : 품절";
document.getElementById("productInfo").innerHTML = product.info;

document.getElementById("minus").addEventListener("click", minus);
document.getElementById("plus").addEventListener("click", plus);

function minus() {
    let orderCount = document.getElementById("orderCount");
    let price = Number(document.getElementById("productPrice2").innerHTML);

    if (orderCount.value > 0) {
        orderCount.value--;
        document.getElementById("totPrice").innerHTML = (Number(orderCount.value) * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    }
    if (orderCount.value < 1) {
        document.getElementById("buy").style.setProperty("background-color", "rgb(194, 194, 194)");
    }
}
function plus() {
    let orderCount = document.getElementById("orderCount");
    let price = Number(document.getElementById("productPrice2").innerHTML);
    orderCount.value++;
    document.getElementById("totPrice").innerHTML = (Number(orderCount.value) * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    if (orderCount.value > 0) {
        document.getElementById("buy").style.setProperty("background-color", "rgb(27,188,155)");
    }
}

document.getElementById("orderCount").addEventListener("input", calcPrice);
function calcPrice() {
    let orderCount = document.getElementById("orderCount");
    let price = Number(document.getElementById("productPrice2").innerHTML);
    document.getElementById("totPrice").innerHTML = (Number(orderCount.value) * price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    if (Number(orderCount.value) > 0) {
        document.getElementById("buy").style.setProperty("background-color", "rgb(27,188,155)");
    } else {
        document.getElementById("buy").style.setProperty("background-color", "rgb(194, 194, 194)");
    }
}

function hide() {
    let str = document.getElementsByClassName("image");

    console.log(str[0].clientHeight);
    for (i = 0; i < str.length; i++) {
        // if (Number(str[i].clientHeight) < 100) {
        //     str[i].style.display = "none";
        // }
        console.log(str[i]);
        console.log(str[i].clientHeight);
    }
}
// hide();

function likeToggle() {
    document.getElementsByClassName("like")[0].classList.toggle("on");
}

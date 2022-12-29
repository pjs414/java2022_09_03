let number = document.getElementById("number").innerHTML;

document.getElementById("section").innerHTML += `
<div id="container">
    <div id="categoryImg"></div>
</div>`;

for (i = 0; i < products.length; i++) {
    if (products[i].category == number) {
        document.getElementById("container").innerHTML += `
        
            <a href="/project/html/product/product${i + 1}.html">
                <div class="product">
                    <div class="image">
                        <img src="/project/image/${number}/${products[i].name}1.avif" alt="" />
                    </div>
                    <div class="info">
                        <div class="productName">${products[i].name}</div>
                        <div class="productCategory">${number}</div>
                        <div class="productInfo">${products[i].info}</div>
                        <div class="priceAmount">
                            <div class="productPrice">${products[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}</div>
                            <div class="productAmount">${products[i].amount > 0 ? "재고상태 : 여유" : "재고상태 : 품절"}</div>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }
}
document.getElementById("categoryImg").innerHTML = `
    <img src="/project/image/category_main/${number}.jpg" alt="" />
    <div>${number}</div>`;

let amount = document.getElementsByClassName("productAmount");
for (i = 0; i < amount.length; i++) {
    let state = amount[i].innerHTML;
    if (state == "재고상태 : 품절") {
        amount[i].classList.add("red");
    }
}

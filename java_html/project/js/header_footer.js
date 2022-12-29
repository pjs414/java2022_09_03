document.getElementsByTagName("head")[0].innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />`;
document.getElementById("header").innerHTML = `
<div>
    <ul id="topRight">
        <li><a href="/project/html/login.html">Login</a></li>
        <li><a href="/project/html/cart.html">Cart</a></li>
        <li><a href="/project/html/notice.html">Notice</a></li>
        <li><a href="/project/html/review.html">Review</a></li>
    </ul>
</div>
<div>
    <ul id="topLeft">
        <li>
            <a id="headTitle" href="/project/html/main.html">EZEN</a>
        </li>
    </ul>
</div>
<ul id="category">
    <li><a href="/project/html/category/category_chair.html">Chair</a></li>
    <li><a href="/project/html/category/category_table.html">Table</a></li>
    <li><a href="/project/html/category/category_sofa.html">Sofa</a></li>
    <li><a href="/project/html/category/category_bed.html">Bed</a></li>
    <li><a href="/project/html/category/category_closet.html">Closet</a></li>
    <li><a href="/project/html/category/category_light.html">Light</a></li>
</ul>`;

document.getElementById("footer").innerHTML = `
<div id="info">
    <div class="infoDiv" id="company">
        <p class="title">COMPANY INFO</p>
        <ul>
            <li>Ezen Funnyour</li>
            <li>대표 : 박원희</li>
            <li>사업자 등록번호 : 012-345-6789</li>
            <li>통신판매업신고번호 : 제 2022-인천남동구-0001호</li>
            <li>개인정보담당자 : 이성주</li>
            <li>이메일 : alzkdpf1783@gmail.com</li>
            <li>주소 : 인천광역시 남동구 인주대로 593 엔타스빌딩 12층</li>
        </ul>
    </div>
    <div class="infoDiv" id="bank">
        <p class="title">BANK INFO</p>
        <ul>
            <li>토스 : 010-1234-5678</li>
            <li>예금주 : 임예선</li>
        </ul>
    </div>
    <div class="infoDiv" id="cs">
        <p class="title">CS CENTER</p>
        <ul>
            <li>문의담당자 : 김형석</li>
            <li>CS : 032-1234-5678</li>
            <li>MON - FRI / AM 09:00 - PM 06:00</li>
            <li>LUNCH TIME PM 12:00 - PM 1:00</li>
            <li>SAT , SUN , HOLIDAY / OFF</li>
        </ul>
    </div>
    <br />
    <div id="logo">EZEN</div>
    <div id="snsLogo">
        <a href="" target="_blank"><span class="fa fa-instagram"></span></a>
        <a href="" target="_blank"><span class="fa fa-facebook-f"></span></a>
        <a href="" target="_blank"><span class="fa fa-twitter"></span></a>
    </div>
</div>
<button id="go-top">
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg>
</button>
`;
var backToTop = () => {
    // Scroll | button show/hide
    window.addEventListener("scroll", () => {
        if (document.querySelector("html").scrollTop > 100) {
            document.getElementById("go-top").style.display = "block";
        } else {
            document.getElementById("go-top").style.display = "none";
        }
    });
    // back to top
    document.getElementById("go-top").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
};
backToTop();

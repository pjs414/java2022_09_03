    function search(){
        let tx=document.getElementById('searchI').value;
        document.querySelector('#aaa').innerText='';
        pcnt=0;
    for(let i=0;i<product.length;i++){
        if(product[i].name.match(tx)){
            print(i);
            pcnt++;
        }
    }if(pcnt==0){
        document.querySelector('#aaa').innerHTML=
        `<h1>찾으시는 상품이 없습니다.</h1>`
    }
    }
    function categoryChart(a){
        document.querySelector('#aaa').innerText='';
        for(let i=0;i<product.length;i++){
            if(product[i].category==a){
                print(i);
        }
    }
}
    function allChart(){
        document.querySelector('#aaa').innerText='';
        for(let i=0;i<product.length;i++){
            print(i);
    }
}
function proList(a){
    for(let i=0;i<product.length;i++){
        if(product[i].name.match(a)){
            return `<img id="pic" src=${product[i].image} alt="사지넝ㅄ음">`;
        }
    }
    }
    function print(d){
        let dib = document.createElement('div');
            let at = document.createElement('a');
            at.setAttribute('href',`상품상세.html?${d}`)
            dib.setAttribute('id','probox');
            if(product[d].sale==0){
                dib.innerHTML=`${proList(product[d].name)}<br><b>${product[d].name}</b><br>${product[d].price}<br><sub>${product[d].ex}</sub>`;
            }else{
                dib.innerHTML=`${proList(product[d].name)}<br><b>${product[d].name}</b><br><del>${product[d].price}</del><sup>-${product[d].sale}%</sup>  ${Math.floor(product[d].price*((100-product[d].sale)/100))}<br><sub>${product[d].ex}</sub>`;
            }
            at.appendChild(dib);
            let con = document.createElement('div');
            con.appendChild(at);
            document.querySelector('#aaa').innerHTML+=con.innerHTML;
    }
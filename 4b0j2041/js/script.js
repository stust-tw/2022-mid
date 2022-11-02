// 圓點跟蹤
	// var cursor = document.getElementById("cursor");
 //       document.addEventListener("mousemove",function(e){
 //           	var x = e.clientX - 25;
 //           	var y = e.clientY - 25;
 //              cursor.style.transform = `translate(${x}px , ${y}px)`;
 //       });
     
// 原點跟蹤 新版
       const cursor = document.documentElement;
       cursor.addEventListener("mousemove", (e) => {
              cursor.style.setProperty('--x', e.clientX + "px");
              cursor.style.setProperty('--y', e.clientY + "px");
       });


// 視覺差 舊版
       // window.addEventListener("scroll", ()=>{   
       //        const bgId = document.getElementsByClassName("bg").length + 1;
       //        const scrollPositionY = window.pageYOffset;
       //        const scroll = 'scroll0';
       //        for(let i = 1; i <= bgId; i++) {
       //               eval(`const ${scroll + i} = document.getElementById("${scroll + i}");`);
       //               eval(`var speed = ${scroll + i}.dataset.speed`);
       //               eval(`${scroll + i}.style.transform = 'translateY(${scrollPositionY * speed  * 0.01}px)'`);
       //        };
       // });
// 視覺差 新版   
       let layers = document.querySelectorAll(".scroll-layers");
       let speed;
       let yPos;
       window.addEventListener("scroll",(e) => {
              let formTop = this.pageYOffset;

              for(let layer of layers){
                     speed = layer.getAttribute('speed');
                     yPos = -(formTop * speed) * 0.01;
                     layer.style.transform = `translateY(${yPos}px)`;
              }
       });

// 按鈕  
       const submit = document.getElementById("submit");
       const airShip = document.getElementById("airShip");
       const marqueee = document.getElementById("marqueee");
       const EasterEgg = document.getElementById("EasterEgg");
       const EasterEgg2 = document.getElementById("EasterEgg02");
       const plasterStatue = document.getElementById('plasterStatue')
       const menuBtn = document.getElementById('menuBtn');
       const infoBtn = document.getElementById('moreInfo');
       infoBtn.addEventListener("click", () => {
              alert("這裡沒有寫!!! 我不懂你點這要做甚麼??");
       });
       marqueee.addEventListener("click", () => {
              alert("跑馬燈燈燈燈燈燈燈~~~~~~~~");
       });
       menuBtn.addEventListener("click", () => {
              alert("我知道你很想點開來看，但我沒有寫:P");
       });
       plasterStatue.addEventListener("click", () => {
              alert("我只是個石膏像而已，別點我!!");
       });
       airShip.addEventListener("click", () => {
              alert("ㄟ 幹飛船ㄟ!! 蟑螂這可以養嗎?");
       });
       EasterEgg.addEventListener("click", () =>{
              alert("你找到了一個我精心製作的彩蛋，但是這就只是顆透明按鈕而已!!")
       });
       EasterEgg2.addEventListener("click", () =>{
              alert("那個我好像忘了每台尺寸都不一樣，算了看之後再刪除好了，我寫了一堆沒意義的程式碼!!喔~耶!!我發瘋了!!!!!!!!")
       });
       submit.addEventListener("click", () =>{
              alert("信件已送出")
       });
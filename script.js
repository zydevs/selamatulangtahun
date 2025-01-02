function updateDateTime() {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const now = new Date();

    // Format hari
    const day = days[now.getDay()];
    // Format tanggal (dalam format Indonesia)
    const date = now.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    // Format waktu (jam:menit:detik)
    const time = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    // Gabungkan format
    const datetime = `${day}, ${date} ${time}`;

    // Masukkan ke dalam elemen H3
    document.getElementById('datetime-display').textContent = datetime;
}

// Perbarui waktu setiap detik
setInterval(updateDateTime, 1000);

// Jalankan sekali saat halaman dimuat
updateDateTime();

//grafik suhu&kelembaban
// get element
var suhu1 = document.getElementById("suhu-titik1");
var suhu2 = document.getElementById("suhu-titik2");
var suhu3 = document.getElementById("suhu-titik3");
var suhu4 = document.getElementById("suhu-titik4");
var suhu5 = document.getElementById("suhu-titik5");
var suhu6 = document.getElementById("suhu-titik6");
var suhu7 = document.getElementById("suhu-titik7");

var kelembaban1 = document.getElementById("kelembaban-titik1");
var kelembaban2 = document.getElementById("kelembaban-titik2");
var kelembaban3 = document.getElementById("kelembaban-titik3");
var kelembaban4 = document.getElementById("kelembaban-titik4");
var kelembaban5 = document.getElementById("kelembaban-titik5");
var kelembaban6 = document.getElementById("kelembaban-titik6");
var kelembaban7 = document.getElementById("kelembaban-titik7");

// fetch data
function fetchData() {
// TITIK 1
  var apiUrl =
    "https://api.thingspeak.com/channels/2799236/feeds/last.json?timezone=Asia%2FJakarta&api_key=MHM4KUDJL89HL1VD";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu1.innerText = parseFloat(data.field4).toFixed(2);
      kelembaban1.innerText = parseFloat(data.field3).toFixed(2);
      document.getElementById("coordinate1").innerText = data.field1 + " | " + data.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data.field1}&lon=${data.field2}&format=json`
      )
        .then((response) => response.json())
        .then((dataLoc) => {
          
          document.getElementById("type1").innerText = dataLoc.type;
          document.getElementById("address1").innerText = dataLoc.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
// TITIK 2
  var apiUrl2 =//
    "https://api.thingspeak.com/channels/2799238/feeds/last.json?timezone=Asia%2FJakarta&api_key=EF0MSMXOCUFX6CQQ";//

  fetch(apiUrl2)//
    .then((response2) => response2.json())//
    .then((data2) => { //
      console.log("Response JSON:", data2); //

      suhu2.innerText = parseFloat(data2.field4).toFixed(2); //
      kelembaban2.innerText = parseFloat(data2.field3).toFixed(2); //
      document.getElementById("coordinate2").innerText = data2.field1 + " | " + data2.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data2.field1}&lon=${data2.field2}&format=json`//
      )
        .then((response2) => response2.json()) //
        .then((dataLoc2) => { //
          
          document.getElementById("type2").innerText = dataLoc2.type;//
          document.getElementById("address2").innerText = dataLoc2.display_name;//
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
// TITIK 3
  var apiUrl3 =
    "https://api.thingspeak.com/channels/2799243/feeds/last.json?timezone=Asia%2FJakarta&api_key=6NO96ERJD5YGSU9O";

  fetch(apiUrl3)
    .then((response3) => response3.json())
    .then((data3) => {
      console.log("Response JSON:", data3);

      suhu3.innerText = parseFloat(data3.field4).toFixed(2);
      kelembaban3.innerText = parseFloat(data3.field3).toFixed(2);
      document.getElementById("coordinate3").innerText = data3.field1 + " | " + data3.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data3.field1}&lon=${data3.field2}&format=json`
      )
        .then((response2) => response2.json())
        .then((dataLoc3) => {
          document.getElementById("type3").innerText = dataLoc3.type;
          document.getElementById("address3").innerText = dataLoc3.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
// TITIK 4
  var apiUrl4 =
    "https://api.thingspeak.com/channels/2799237/feeds/last.json?timezone=Asia%2FJakarta&api_key=FT4LXEI9VS5QXJG2";

  fetch(apiUrl4)
    .then((response4) => response4.json())
    .then((data4) => {
      console.log("Response JSON:", data4);

      suhu4.innerText = parseFloat(data4.field4).toFixed(2);
      kelembaban4.innerText = parseFloat(data4.field3).toFixed(2);
      document.getElementById("coordinate4").innerText = data4.field1 + " | " + data4.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data4.field1}&lon=${data4.field2}&format=json`
      )
        .then((response4) => response4.json())
        .then((dataLoc4) => {
          document.getElementById("type4").innerText = dataLoc4.type;
          document.getElementById("address4").innerText = dataLoc4.display_name;
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
// TITIK 5
    var apiUrl5 =//
    "https://api.thingspeak.com/channels/2799239/feeds/last.json?timezone=Asia%2FJakarta&api_key=T8ZA66K8FGF94D4Q";//

  fetch(apiUrl5)//
    .then((response5) => response5.json())//
    .then((data5) => { //
      console.log("Response JSON:", data5); //

      suhu5.innerText = parseFloat(data5.field4).toFixed(2); //
      kelembaban5.innerText = parseFloat(data5.field3).toFixed(2); //
      document.getElementById("coordinate5").innerText = data5.field1 + " | " + data5.field2;   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data5.field1}&lon=${data5.field2}&format=json`//
      )
        .then((response5) => response5.json()) //
        .then((dataLoc5) => { //
          
          document.getElementById("type5").innerText = dataLoc5.type;//
          document.getElementById("address5").innerText = dataLoc5.display_name;//
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
// TITIK 6
    var apiUrl6 =//
    "https://api.thingspeak.com/channels/2799242/feeds/last.json?timezone=Asia%2FJakarta&api_key=0EIYQ2711B98M9GK";//

  fetch(apiUrl6)//
    .then((response6) => response6.json())//
    .then((data6) => { //
      console.log("Response JSON:", data6); //

      suhu6.innerText = parseFloat(data6.field4).toFixed(2); //
      kelembaban6.innerText = parseFloat(data6.field3).toFixed(2); //
      document.getElementById("coordinate6").innerText = data6.field1 + " | " + data6.field2;//   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data6.field1}&lon=${data6.field2}&format=json`//
      )
        .then((response6) => response6.json()) //
        .then((dataLoc6) => { //
          
          document.getElementById("type6").innerText = dataLoc6.type;//
          document.getElementById("address6").innerText = dataLoc6.display_name;//
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
// TITIK 7
    var apiUrl7 =//
    "https://api.thingspeak.com/channels/2799244/feeds/last.json?timezone=Asia%2FJakarta&api_key=JCIS7EQ8XJQCKQ5M";//

  fetch(apiUrl7)//
    .then((response7) => response7.json())//
    .then((data7) => { //
      console.log("Response JSON:", data7); //

      suhu7.innerText = parseFloat(data7.field4).toFixed(2); //
      kelembaban7.innerText = parseFloat(data7.field3).toFixed(2); //
      document.getElementById("coordinate7").innerText = data7.field1 + " | " + data7.field2;//   

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${data7.field1}&lon=${data7.field2}&format=json`//
      )
        .then((response7) => response7.json()) //
        .then((dataLoc7) => { //
          
          document.getElementById("type7").innerText = dataLoc7.type;//
          document.getElementById("address7").innerText = dataLoc7.display_name;//
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

fetchData();

// pointer events
const iframe = document.querySelector('.webgis-content iframe');
iframe.addEventListener('mouseenter', () => {
    iframe.style.pointerEvents = 'auto';
});
iframe.addEventListener('mouseleave', () => {
    iframe.style.pointerEvents = 'none';
});


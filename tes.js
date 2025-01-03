function fetchData() {
    // titik 1
    var apiUrl =
      "https://api.thingspeak.com/channels/2799236/feeds/last.json?timezone=Asia%2FJakarta&api_key=MHM4KUDJL89HL1VD";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data.field1}&lon=${data.field2}&format=json`
        )
          .then((response) => response.json())
          .then((dataLoc) => {
            document.getElementById("residental1").innerText =
              dataLoc.address.road;
            document.getElementById("lat1").innerText = dataLoc.lat;
            document.getElementById("long1").innerText = dataLoc.lon;
            document.getElementById(
              "go-to-maps1"
            ).href = `https://www.google.com/maps?q=${dataLoc.lat},${dataLoc.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));

    // titik 2
    var apiUrl2 =
    "https://api.thingspeak.com/channels/2799238/feeds/last.json?timezone=Asia%2FJakarta&api_key=EF0MSMXOCUFX6CQQ";

    fetch(apiUrl2)
      .then((response2) => response2.json())
      .then((data2) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data2.field1}&lon=${data2.field2}&format=json`
        )
          .then((response2) => response2.json())
          .then((dataLoc2) => {
            document.getElementById("residental2").innerText =
              dataLoc2.address.road;
            document.getElementById("lat2").innerText = dataLoc2.lat;
            document.getElementById("long2").innerText = dataLoc2.lon;
            document.getElementById(
              "go-to-maps2"
            ).href = `https://www.google.com/maps?q=${dataLoc2.lat},${dataLoc2.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));

    // titik 3
    var apiUrl3 =
      "https://api.thingspeak.com/channels/2799243/feeds/last.json?timezone=Asia%2FJakarta&api_key=6NO96ERJD5YGSU9O";

    fetch(apiUrl3)
      .then((response3) => response3.json())
      .then((data3) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data3.field1}&lon=${data3.field2}&format=json`
        )
          .then((response3) => response3.json())
          .then((dataLoc3) => {
            document.getElementById("residental3").innerText =
              dataLoc3.address.road;
            document.getElementById("lat3").innerText = dataLoc3.lat;
            document.getElementById("long3").innerText = dataLoc3.lon;
            document.getElementById(
              "go-to-maps3"
            ).href = `https://www.google.com/maps?q=${dataLoc3.lat},${dataLoc3.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));

    // titik 4
    var apiUrl4 =
      "https://api.thingspeak.com/channels/2799237/feeds/last.json?timezone=Asia%2FJakarta&api_key=FT4LXEI9VS5QXJG2";

    fetch(apiUrl4)
      .then((response4) => response4.json())
      .then((data4) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data4.field1}&lon=${data4.field2}&format=json`
        )
          .then((response4) => response4.json())
          .then((dataLoc4) => {
            document.getElementById("residental4").innerText =
              dataLoc3.address.road;
            document.getElementById("lat4").innerText = dataLoc4.lat;
            document.getElementById("long4").innerText = dataLoc4.lon;
            document.getElementById(
              "go-to-maps4"
            ).href = `https://www.google.com/maps?q=${dataLoc4.lat},${dataLoc4.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));

    // titik 5
    var apiUrl5 =
      "https://api.thingspeak.com/channels/2799239/feeds/last.json?timezone=Asia%2FJakarta&api_key=T8ZA66K8FGF94D4Q";

    fetch(apiUrl5)
      .then((response5) => response5.json())
      .then((data5) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data5.field1}&lon=${data5.field2}&format=json`
        )
          .then((response5) => response5.json())
          .then((dataLoc5) => {
            document.getElementById("residental5").innerText =
              dataLoc5.address.road;
            document.getElementById("lat5").innerText = dataLoc5.lat;
            document.getElementById("long5").innerText = dataLoc5.lon;
            document.getElementById(
              "go-to-maps5"
            ).href = `https://www.google.com/maps?q=${dataLoc5.lat},${dataLoc5.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));

    // titik 6
    var apiUrl6 =
      "https://api.thingspeak.com/channels/2799242/feeds/last.json?timezone=Asia%2FJakarta&api_key=0EIYQ2711B98M9GK";

    fetch(apiUrl6)
      .then((response6) => response6.json())
      .then((data6) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data6.field1}&lon=${data6.field2}&format=json`
        )
          .then((response6) => response6.json())
          .then((dataLoc6) => {
            document.getElementById("residental6").innerText =
              dataLoc6.address.road;
            document.getElementById("lat6").innerText = dataLoc6.lat;
            document.getElementById("long6").innerText = dataLoc6.lon;
            document.getElementById(
              "go-to-maps6"
            ).href = `https://www.google.com/maps?q=${dataLoc6.lat},${dataLoc6.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));

    // titik 7
    var apiUrl7 =
      "https://api.thingspeak.com/channels/2799244/feeds/last.json?timezone=Asia%2FJakarta&api_key=JCIS7EQ8XJQCKQ5M";

    fetch(apiUrl7)
      .then((response7) => response7.json())
      .then((data7) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${data7.field1}&lon=${data7.field2}&format=json`
        )
          .then((response7) => response7.json())
          .then((dataLoc7) => {
            document.getElementById("residental7").innerText =
              dataLoc7.address.road;
            document.getElementById("lat7").innerText = dataLoc7.lat;
            document.getElementById("long7").innerText = dataLoc7.lon;
            document.getElementById(
              "go-to-maps7"
            ).href = `https://www.google.com/maps?q=${dataLoc7.lat},${dataLoc7.lon}`;
          });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  fetchData();
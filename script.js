mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJlZXplb25saW5lIiwiYSI6ImNsNXNyajFtczA1Y2IzYnFxajNpdjJ5ZjAifQ.g__i-gyZ7tRzTik2NRGt8Q";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/breezeonline/cl5smxa56000714mvxzdow2uw",
  center: [-112.5, 51.442],
  zoom: 5.48,
});

map.on("load", () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06baff6ae0dc0907d12_Nissan_E8.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Okotoks Nissan</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/okotoks-nissan" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.98088, 50.71899],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06b65e88708698a843a_DavisGMC_Lethbridge_E24_comp.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis GMC Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-gmc-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.78594, 49.69742],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06bb0cec573f23de0cc_Subaru_E1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Subaru of Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/subaru-of-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.79049, 49.69875],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06b16f07811c692da7d_DAG_D8-1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis Auto Group</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-auto-group" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.78372, 49.69229],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06bfe4bdb92d11334fa_Davis_Claresholm_E4.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis Claresholm</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-claresholm" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.5896744, 50.0410767],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06b2d8aba83f12f3435_Davis_Airdrie_E6.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis Chevrolet Airdrie</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-chevrolet-airdrie" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-114.00060272216797, 51.28445816040039],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06cedf1e711dae8fbae_Davis_MedHat_E1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis Medicine Hat</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-medicine-hat" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-110.66834, 50.05006],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06c4b10a21d8aa94674_Gershaw_Fixed_01-2.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Gershaw Terrace</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/gershaw-terrace" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-110.6934122, 50.0354669],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06cbd7e24b87f24e479_Davis_Brooks_D7.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis Brooks</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-brooks" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-111.8970496, 50.5861669],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06c4b10a22db3a94675_DJI_0498.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Chinook Equipment</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/cem-heavy-equipment" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.1645701, 49.7859132],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06cae5d27369568c4de_Fix_Auto_Lethbridge_E2.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Fix Auto Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/fix-auto-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.7818651, 49.6951745],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06c5e9cd4656522058f_1-3.jpeg" class="bz-cover-image"><h3 class="bz-card-title">420 34 St S, Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/420-34-st-s-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.7910592, 49.6823298],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06dedf1e774d8e8fbb5_Fix_Airdrie_E7.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Fix Auto Airdrie</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/fix-auto-airdrie" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.998192, 51.2912591],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06d33c8e10d02dfa9bc_Scougall_E5.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Scougall Motors</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/scougall-motors" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.4003233, 49.7162841],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06d80c909e7b1c66485_Pincher.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Pincher Station Land</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/pincher-station-land" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.948139, 49.485155],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06d3667e46fff9ece00_Site-Option-2-v5.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Williams</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/williams" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.81856, 49.69999],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06d33c8e10c79dfa9bd_20201001-0E3A8085.jpeg" class="bz-cover-image"><h3 class="bz-card-title">525 Mayor Magrath Drive S</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/525-mayor-magrath-drive-s" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.809249, 49.692409],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06e8a2ed975d543a809_FCC_Lethbridge_Redone_0-7.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Farm Credit Canada</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/farm-credit-canada" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.781179, 49.693592],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06de7b1c32762626c5e_Wellhouse_Header_ShiftREI.jpeg" class="bz-cover-image"><h3 class="bz-card-title">539 41st S</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/office-and-retail-539-41-st-s" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.7827608, 49.6699124],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06e0f672254c06c754e_4077-2nd-ave-south-image-3.jpeg" class="bz-cover-image"><h3 class="bz-card-title">4077 2 Ave S</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/4077-2-ave-s" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.781859, 49.697557],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06ee7b1c39b6b626c61_498-41-ST-S.jpeg" class="bz-cover-image"><h3 class="bz-card-title">498 41 St S</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/498-41-st-s" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.7827608, 49.6699124],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06eae5d275fe268c4f9_20201012-0E3A8205.jpeg" class="bz-cover-image"><h3 class="bz-card-title">3321 1 Ave S</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/3321-1-ave-s" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.791346, 49.698488],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06e1d98f629880ea7fe_Shift_Grizzly_1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Grizzly Trail Motors</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/grizzly-trail-motors" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-114.402629, 54.121785],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06f8a65047800b60a38_shift_westlock_v1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Westlock Motors</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/westlock-motors" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.849512, 54.157633],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06f3f86aeb25292c499_20210713-collision-3.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Westlock Collision Centre</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/westlock-collision-centre" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.8451911, 54.1519711],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06f8a2ed97d7043a811_20210714-DJI_0743.jpeg" class="bz-cover-image"><h3 class="bz-card-title">367-25 St, Fort Macleod</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/367-25-st-fort-macleod" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.4003213, 49.7262865],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d06fd4973106f28d692e_Shift_Coaldale_Header.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Coaldale Civic Square</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/coaldale-civic-square-property" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.6062732, 49.7275725],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d070519fef921c2e5f3f_Shift_KickingHorse.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Kicking Horse Ford</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/kicking-horse-ford" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-116.9689, 51.29995],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d070fe4bdb6550133510_20220418-Outside-2-shift.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Unit #30, 420 34 Street S</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/unit-30-420-34-street-s" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.7910592, 49.6823298],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d070173c0b0e5f104345_20220516-03-SITE.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Crowsnest Crossing</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/crowsnest-crossing" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-114.461119, 49.618802],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d070a5f7100ba516a690_Calgary-Mauser-property-pic.jpeg" class="bz-cover-image"><h3 class="bz-card-title">7905-46 St SE, Calgary</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/7905-46-st-se-calgary" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.9671605, 51.0409376],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d0713f86ae5c1892c49e_Reginal-property-cropped-1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">125 Dewdney Rd N, Regina</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/125-dewdney-rd-n-regina" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-104.6178, 50.45008],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d07163fa0a490bdfa05b_use-for-portfolio-cropped-1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">5408-52 Ave, Lloydminster</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/5408-52-ave-lloydminster" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-110.0120586, 53.2889998],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d071189a03563c8e927b_Davis-Render-05-13-2022.jpeg" class="bz-cover-image"><h3 class="bz-card-title">Davis Dodge Fort Macleod</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/davis-dodge-fort-macleod" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.4087063, 49.7209114],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d07165e887bc7b8a84c0_20220614-Winnipeg-Property-Pic.jpeg" class="bz-cover-image"><h3 class="bz-card-title">328 Dawson Rd N, Winnipeg</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/328-dawson-rd-n-winnipeg" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-97.0872844, 49.885613],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d07133c8e11bfadfa9ed_20210530-Evcon-Web.jpeg" class="bz-cover-image"><h3 class="bz-card-title">610-30 St N, Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/610-30-st-n-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.7968608, 49.6992054],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://uploads-ssl.webflow.com/62d5cf8ef87df10b6a9b50d0/62d5d071ea1244cc70eff32e_7th-st-3-1.jpeg" class="bz-cover-image"><h3 class="bz-card-title">311-7 St S, Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shiftrei.ca/properties/311-7-st-s-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.8370894, 49.6954259],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://assets.website-files.com/62d5cf8ef87df10b6a9b50d0/64efa95608be72f54e4c223a_HA%20Brochure%20Cover%20compressed-p-800.jpg" class="bz-cover-image"><h3 class="bz-card-title">3139-1 Ave S, Lethbridge</h3><div class="bz-button-wrapper"><a href="https://www.shiftrei.ca/properties/3139-1-ave-s-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.79336, 49.69858],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://assets.website-files.com/62d5cf8ef87df10b6a9b50d0/648205b93fe9db42eb1584da_5%20web-p-800.jpg" class="bz-cover-image"><h3 class="bz-card-title">1319-11 St, Coaldale</h3><div class="bz-button-wrapper"><a href="https://www.shiftrei.ca/properties/1319-11-st-coaldale" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.60762, 49.73568],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://assets.website-files.com/62d5cf8ef87df10b6a9b50d0/641b36c975311e2fa95c735c_Gilmar%20Crane%20Brick%20web.jpg" class="bz-cover-image"><h3 class="bz-card-title">3216-3 Ave, Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shift-rei.ca/properties/3216-3-ave-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.79263, 49.49580],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://assets.website-files.com/62d5cf8ef87df10b6a9b50d0/641b38846d10224e38a8a938_Gilmar%20Crane%20Blue%20web-p-800.jpg" class="bz-cover-image"><h3 class="bz-card-title">3208-3 Ave S, Lethbridge</h3><div class="bz-button-wrapper"><a href="https://shift-rei.ca/properties/3208-3-ave-s-lethbridge" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-red",
          },
          geometry: {
            type: "Point",
            coordinates: [-112.793129, 49.695975],
          },
        },
        {
          type: "Feature",
          properties: {
            description:
              '<div class="bz-property-card-wrapper"><img src="https://assets.website-files.com/62d5cf8ef87df10b6a9b50d0/6369677e3f147272f1907280_CE%20Pincher%20Creek%20compressed.jpg" class="bz-cover-image"><h3 class="bz-card-title">Chinook Equipment Pincher Creek</h3><div class="bz-button-wrapper"><a href="https://www.shiftrei.ca/properties/chinook-equipment-pincher-creek" class="bz-button-map w-button">View Property</a></div></div>',
            icon: "bz-map-pin-32",
          },
          geometry: {
            type: "Point",
            coordinates: [-113.926637, 49.49217],
          },
        }
      ],
    },
  });
  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "{icon}",
      "icon-allow-overlap": true,
    },
  });

  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on("click", "places", (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup().setLngLat(coordinates).setHTML(description).addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on("mouseenter", "places", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
  });
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// disable map zoom when using scroll
map.scrollZoom.disable();

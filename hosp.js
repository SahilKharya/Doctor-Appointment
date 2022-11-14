
function searchDoctor() {
        if(document.getElementById("doctor").value == 'Shivam'){
                document.getElementById("find").innerHTML +=
                "<h5>Doctor Found</h5>";
        } else {
                document.getElementById("find").innerHTML +=
                "<h5>Not Found</h5>";
        }
       
}
function searchHospital() {
        if(document.getElementById("doctor").value == 'SG Hospital'){
                document.getElementById("find").innerHTML +=
                "<h5>Hospital Available</h5>";
        } else {
                document.getElementById("find").innerHTML +=
                "<h5>Not Found</h5>";
        }
       
}
function initMap() {


        var a = {
                info: '<strong>SG Hospital Jaipur</strong><br>\
                B1, Ashadeep Enclave-A, Opposite Ashadeep Green Avenue, Jagatpura<br>\Jaipur, Rajasthan 302025<br>\Contact:098290 61197<br>\
                                <a href="https://www.google.com/maps/dir//SG+Hospital+Jaipur,+B1,+Ashadeep+Enclave-A,+Opposite+Ashadeep+Green+Avenue,+Nilay+Kunj+Road,+Jagatpura,+Karolan+Ka+Barh,+Jaipur,+Rajasthan+302025/@26.819842,75.8514025,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dc845915bd3d9:0xbcc13628ceb5dec7!2m2!1d75.8660332!2d26.8028744">Get Directions</a>',
                lat: 26.802888790432196,
                long: 75.86597889661789
        };
        var b = {
                info: '<strong>Narayana Multispeciality Hospital</strong><br>\
                               Rana Sanga Marg, Sector 28, Sitapura Industrial Area, Pratap Nagar<br>\Jaipur, Rajasthan 302033<br>Contact:1860 208 0208<br>\
                    <a href="https://www.google.com/maps/dir//Narayana+Multispeciality+Hospital,+Rana+Sanga+Marg,+Sector+28,+Sitapura+Industrial+Area,+Pratap+Nagar,+Jaipur,+Rajasthan+302033/@26.8343487,75.807991,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dc999fe90f309:0x91760491563438ac!2m2!1d75.8247122!2d26.7949218">Get Directions</a>',
                lat: 26.794945085056504,
                long: 75.8247097581625
        };

        var c = {
                info: '<strong>Apex Hospitals</strong><br>\r\
                               SP-4 & 6, Malviya Nagar Industrial Area, Malviya Nagar<br>Jaipur, Rajasthan 302017<br>contact:0141 410 1111<br>\
                                <a href="https://www.google.com/maps/dir//Apex+Hospitals,+SP-4+%26+6,+Malviya+Nagar+Industrial+Area,+Malviya+Nagar,+Jhalana+Gram,+Malviya+Nagar,+Jaipur,+Rajasthan+302017/@26.8405671,75.8405787,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db66b6d706811:0xcd772b82cdece6c4!2m2!1d75.8251164!2d26.854711">Get Directions</a>',
                lat: 26.854690574836688,
                long: 75.82507554441689
        };
        var d = {
                info: '<strong>Agarwal Hospital</strong><br>\r\
                               Station Rd, Dada Gurudev Nagar, Sanganer<br>Jaipur, Rajasthan 302029<br>contact:0141 254 7000<br>\
                                <a href="https://www.google.com/maps/dir//Agarwal+Hospital,+Sp-3,+Malviya,+Industrial+Area,+Jhalana+Gram,+Malviya+Nagar,+Jaipur,+Rajasthan+302017/@26.8405671,75.8405787,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db438daaaaaab:0x6e365f8f7c69cafe!2m2!1d75.8247419!2d26.8547863">Get Directions</a>',
                lat: 26.811735024460656,
                long: 75.77978275716305
        };


        var e = {
                info: '<strong>Fortis Escorts Hospital, Jaipur</strong><br>\r\
                                       Inside Malpura Gate, Sanganer, Maruti Nagar<br> Jaipur, Rajasthan 302011<br>\
                                        <a href="https://www.google.com/maps/dir//Fortis+Escorts+Hospital,+Jaipur,+Jawahar+Lal+Nehru+Marg,+Malviya+Nagar,+Sector+5,+Malviya+Nagar,+Jaipur,+Rajasthan+302017/@26.8597492,75.7605565,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db5e10592b4d5:0xa3d690090ae7b75d!2m2!1d75.8034823!2d26.8462087">Get Directions</a>',
                lat: 26.846199185533706,
                long: 75.80358702689409
        };
        var f = {
                info: '<strong>Jain Hospital</strong><br>\r\
                                     Calgiri Road, Near Police Station, Jhalana Gram,Malviya Nagar<br>Jaipur, Rajasthan 302017<br>contact:089550 00333<br><a href="https://www.google.com/maps/dir//Jain+Hospital,+Inside+Malpura+Gate,+Sanganer,+Govind+Nagar,+Maruti+Nagar,+Jaipur,+Rajasthan+302011/@26.8255137,75.8121134,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dca6d2930f6cf:0xc0de82a3d445562b!2m2!1d75.8054552!2d26.8174731">Get Directions</a>',
                lat: 26.817428962395613,
                long: 75.80539617687464
        };

        var g = {
                info: '<strong>Rungta Hospital</strong><br>\r\
                                      S16A, S17, Mahaveer Nagar, Tonk Toad, Gopal Pura Mode<br>Jaipur, Rajasthan 302018<br>contact:074140 01001<br>\<a href="https://www.google.com/maps/dir//Rungta+Hospital,+Calgiri+Road,+Near+Police+Station,+Jhalana+Gram,+Malviya+Nagar,+Jhalana+Gram,+Malviya+Nagar,+Jaipur,+Rajasthan+302017/@26.8710433,75.7792684,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db67400000001:0x7b8ae3e01435dd92!2m2!1d75.8152281!2d26.8576096">Get Directions</a>',
                lat: 26.857563868599982,
                long: 75.81510409712791
        };


        var h = {
                info: '<strong>Jaipur Hospital, Mahaveer Nagar</strong><br>\r\
                                        S16A, S17, Mahaveer Nagar, Near Gopalpura Flyover, Tonk Toad<br> Jaipur, Rajasthan 302018<br>contact:074140 01001<br>\
                                        <a href="https://www.google.com/maps/dir//Jaipur+hospital,+10,+Mahaveer+Nagar,+Shri+Vihar,+Mahaveer+Nagar,+Durgapura,+Jaipur,+Rajasthan+302018/@26.8544894,75.8061409,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db5c35ede15c3:0xac87f7770fe70d66!2m2!1d75.7941079!2d26.8550314">Get Directions</a>',
                lat: 26.811735024460656,
                long: 75.7949835062027
        };

        var i = {
                info: '<strong>Bhandari Hospital & Research Centre, Jaipur</strong><br>\r\
                                        138 A, Vasundhara Colony, Gopalpura Bypass, Tonk Road<br> Jaipur, Rajasthan 302018<br>contact:0141 270 3851<br>\
                                        <a href="https://www.google.com/maps/dir//Bhandari+Hospital+%26+Research+Centre,+Jaipur,+138+A,+Vasundhara+Colony,+Gopalpura+Bypass,+Tonk+Road,+Muktanand+Nagar,+Gopal+Pura+Mode,+Jaipur,+Rajasthan+302018/@26.844665,75.8056863,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396dca04b57eac93:0xea7e8980c3b8b283!2m2!1d75.79346!2d26.8636545">Get Directions</a>',
                lat: 26.863637746318798,
                long: 75.79335775226355
        };

        var j = {
                info: '<strong>Apollo Hospital</strong><br>\r\
                                        239, Chetak Vihar Colony, Baldeogarh<br>Jaipur, Rajasthan 302031<br>\
                                        <a href="https://www.google.com/maps/dir//Apollo+Hospital,+239,+Chetak+Vihar+Colony,+Baldeogarh,+Jaipur,+Rajasthan+302031/@26.86432,75.8413148,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db712a4d322fb:0xcbe3529bde8a3fdf!2m2!1d75.8756939!2d26.8930693">Get Directions</a>',
                lat: 26.89307708790067,
                long: 75.87560467422009
        };


        var k = {
                info: '<strong>Jaipur Hospital</strong><br>\r\
                                        Near SMS Stadium,, Tonk Rd, Jaipur Nagar Nigam<br> Jaipur, Rajasthan 302015<br>contact:0141 274 1465<br>\
                                        <a href="https://www.google.com/maps/dir//Jaipur+Hospital,+Near+SMS+Stadium,,+Tonk+Rd,+Jaipur+Nagar+Nigam,+Lalkothi,+Jaipur,+Rajasthan+302015/@26.8757085,75.8118354,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db420e65e5acb:0x2b5b8e5dec74b037!2m2!1d75.8047127!2d26.8923503">Get Directions</a>',
                lat: 26.892372901264665,
                long: 75.80478899180889
        };











        var locations = [
                [a.info, a.lat, a.long, 0],
                [b.info, b.lat, b.long, 1],
                [c.info, c.lat, c.long, 2],
                [d.info, d.lat, d.long, 3],
                [e.info, e.lat, e.long, 4],
                [f.info, f.lat, f.long, 5],
                [g.info, g.lat, g.long, 6],
                [h.info, h.lat, h.long, 7],
                [i.info, i.lat, i.long, 8],
                [j.info, j.lat, j.long, 9],
                [k.info, k.lat, k.long, 10],

        ];

        var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(26.8, 75.809320),
                mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow({});

        var marker, i;

        for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                });

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                        return function () {
                                infowindow.setContent(locations[i][0]);
                                infowindow.open(map, marker);
                        }
                })(marker, i));
        }
}







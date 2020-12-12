$( document ).ready(function() {
    header();
    menu();
    footer();
    var putanjaNiz = window.location.pathname.split('/');
    var lokacija = putanjaNiz[putanjaNiz.length - 1]
    console.log(lokacija);
    function header(){
        let slicica = ["fas fa-location-arrow", "far fa-envelope", "fas fa-phone-alt"];
        let text = ["Switzerland", "office&#64;werbier&#46;com", "+41 27 329 16 11"];
        let ispis = document.getElementById("zaglavlje");
        for(let i = 0; i < slicica.length; i++){
            ispis.innerHTML += `<div class="col-12 col-md-4 text-center info">
                                    <p class="mt-3">
                                        <i class="${slicica[i]} px-2"></i>
                                        ${text[i]}
                                    </p>
                                </div>`
        }
    }
    function menu(){
        let href = ["index.html", "rooms.html", "summer.html", "winter.html", "contact.html"];
        let name = ["Home", "Rooms", "Summer", "Winter" , "Contact"];
        var meni = document.getElementById("menu");
        for(let i = 0; i < href.length; i++){
            meni.innerHTML += `<li class="nav-item px-2">
                                    <a id="${name[i]}" class="nav-link text-center" href="${href[i]}">${name[i]}</a>
                                </li>`
        }
    }
    function footer(){
        let slicicaLink = ["fas fa-location-arrow", "contact.html", "fas fa-phone-alt"];
        let text = ["Rue de Médran 70, Verbier 1936", "Book now", "+41 27 329 16 11"];
        var footer = document.getElementById("podnozje");
        for(let i = 0; i < text.length; i++){
            if(i % 2 == 0){
                footer.innerHTML += `<div class="col-12 col-md-4 text-center">
                                    <p class="mt-3 info">
                                        <i class="${slicicaLink[i]} px-2 my-auto"></i>
                                        ${text[i]} 
                                    </p>
                                </div>` 
            }
            else{
                footer.innerHTML += `<div class="col-12 col-md-4 text-center my-auto">
                                        <a href="${slicicaLink[i]}" class="btn zaobljen">${text[i]}</a>
                                    </div>`
            }
        }
    }
    if(lokacija == "rooms.html"){
        document.getElementById("Rooms").classList.add("active");
        roomsContent();
        function roomsContent(){
            let slikaSrc = ["cozy_room.jpg", "fabulous_room.jpg", "spectacular_room.jpg", "cool_suite.jpg", "fantastic_suite.jpg", "sunlime_suite.jpg", "wow_suite.jpg", "extreme_wow_suite.jpg", "cozy_mega_room.jpg", "spectacular_mega_room.jpg", "marvelous_room.jpg", "splendid_room.jpg"];
            let slikaAlt = ["Cozy room", "Fabulous room", "Spectacular room", "Cool suite", "Fantastic suite", "Sublime suite", "wow suite", "Extreme WOW suite", "Cozy Mega Room", "Spectacular Mega Room", "Marvelous room", "Slendid room"]; // alt slike i ime modala
            let fsizeNiz = ["Cozy", "Fabulous", "Spectacular", "Cool", "Fantastic", "Sublime", "WOW", "Extreme WOW", "Cozy Mega Family", "Spectacular Mega Family", "Marvelous", "Splendid"]; // Ime diva sobe
            let idNizModal = ["Cozy", "Fabulous", "Spectacular", "Cool", "Fantastic", "Sublime", "WOW", "Extreme_WOW", "Cozy_Mega", "Spectacular_Mega", "marvelous", "splendid"]; // id u modalu
            let cardText = ["Guest room, 1 King, No view, Fireplace, Balcony", "Guest room, 1 King, Mountain view, Fireplace, Balcony", "Guest room, 1 King, Best Valley view, Fireplace, Balcony", "Junior Suite, 1 King, Sofa bed, Mountain view, Top floor, Fireplace, Balcony", "Larger Suite, 1 King, Fireplace, Balcony", "Penthouse Suite, 1 King, Sofa bed, Mountain view, Top floor, Fireplace, Balcony", "2 Bedroom Suite, Bedroom 1: 1 King, Bedroom 2: 1 King, Sofa bed, Bathrooms: 2.5, Top floor", "2 Bedroom Presidential Suite, Best valley view, Top floor, Fireplace, Balcony", "Guest room, 1 King, No view, and 1 single bed, Fireplace, Balcony", "Guest room, 1 King, Best Valley view, and 1 single bed, Fireplace", "2 Bedroom Residence, Bedroom 1: 1 King, Bedroom 2: 1 King, Bathrooms: 2, Fireplace", "Guest room, 1 King, No view, Fireplace, Balcony"];
            const nizoviSoba = {
             cozy : ["Cozy modern chalet style", "Bed types: king bed, 2 twin beds", "Sleeps: 2 guests", "WiFi", "20 rooms", "Balcony", "Walk-in closet", "Separate WC", "Breakfast"],
             fabulous : ["Fresh views in warm design", "Bed types: king bed, 2 twin beds", "Sleeps: 2 guests", "WiFi", "18 rooms", "Furnished balcony with mountain view", "Walk-in closet", "Separate WC", "Breakfast"],
             spectacular : ["Mountain chic interior", "Bed types: king bed", "Sleeps: 2 guests", "WiFi", "44 rooms", "Furnished balcony with great valley view", "Walk-in closet", "Separate WC", "Breakfast"],
             cool : ["Upper Floor Location", "Bed types: king bed, 2 twin beds", "Sleeps: 3 guests", "WiFi", "4 suites", "Furnished balcony with beautiful view", "Valley View", "Open Floor Plan", "Breakfast"],
             fantastic : ["Extensive salon space", "Bed types: king bed", "Sleeps: 3 guests", "WiFi", "7 suites", "Furnished balcony with sweeping view", "Walk-in closet", "2 separate WC", "Breakfast"],
             sublime : ["Furnished balcony", "Bed types: king bed", "Sleeps: 3 guests", "WiFi", "3 suites", "Mountain or Valley Views", "Walk-in closet", "2 separate WC", "Breakfast", "Bi-Level Suite", "Two LCD TVs", "Private Mezzanine"],
             wow : ["Elevated wood-beamed ceilings", "Bed types: king bed", "Sleeps: 3 guests", "WiFi", "1 suite", "Furnished balcony with panoramic view", "Walk-in closet", "2 separate WC", "Breakfast", "Two-Sided Fireplace", "Private Mezzanine", "Two LCD TVs", "Bi-Level Suite", "Dining/Boardroom Table for Six"],
             extremeWOW : ["Two-Sided Fireplace", "Bed types: king bed", "Sleeps: 3 guests", "WiFi", "1 suite", "Furnished balcony with panoramic valley view", "Walk-in closet", "2 separate WC", "Breakfast", "Master bathroom with freestanding bathtub", "Two LCD TVs", "Bi-Level Suite", "Private Mezzanine", "Panoramic valley view", "Private sauna", "Dining/Boardroom Table for Six", "Circular 360-degree Rotating Bed"],
             cozyMega : ["Cozy modern chalet style", "Bed types: king bed,  single beds", "Sleeps: 3 guests", "WiFi", "4 rooms", "Furnished balcony", "Great Valley View", "Additional Built-in Single Bed", "Breakfast"],
             spectacularMega : ["Mountain chic interior", "Bed types: king bed,  single beds", "Sleeps: 3 guests", "Additional Built-in Single Bed", "6 rooms", "Walk-in closet", "Separate WC", "Breakfast", "WiFi"],
             marvelous : ["Bunk Beds Upon Request (Select Residences)", "Bed types: king bed", "Sleeps: 6 guests", "Fully Equipped Kitchen", "Two bedroom residence", "Furnished balcony with panoramic view", "Walk-in closet", "Two LCD TVs", "Breakfast", "WiFi"],
             splendid : ["Cozy modern chalet style", "Bed types: king bed", "Sleeps: 6 guests", "Three bedroom residence", "Bunk beds upon request (Select Residences)", "Furnished balcony with panoramic view", "Walk-in closet", "Fully Equipped Kitchen", "Two LCD TVs", "Breakfast bar", "Dining for Eight"]};
             imenaNizova = ["cozy", "fabulous", "spectacular", "cool", "fantastic", "sublime", "wow", "extremeWOW", "cozyMega", "spectacularMega", "marvelous", "splendid"];
            let ispis = document.getElementById("ispis");
            for(let i = 0; i < slikaSrc.length; i++){
                ispis.innerHTML += `<div class= "col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                                        <div class="card">
                                            <img src="assets/img/${slikaSrc[i]}" class="card-img-top img-fluid potamni" alt="${slikaAlt[i]}">
                                            <div class="card-body">
                                                <p class="fsize text-center">
                                                    ${fsizeNiz[i]}
                                                </p>
                                            </div>
                                            <div>
                                                <p class="card-text">
                                                    ${cardText[i]}
                                                </p>
                                            </div>
                                            <div class="card-body d-flex align-items-end justify-content-center">
                                                <div class="btn pozadina text-center">
                                                    <button type="button" class="btn card-link blink" data-toggle="modal" data-target="#Cozy">
                                                        More info
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal fade" id="${idNizModal[i]}" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="staticBackdropLabel">${slikaAlt[i]}</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                            <img src="assets/img/${slikaSrc[i]}" class="card-img-top img-fluid" alt="${slikaAlt[i]}">
                                                    </div>
                                                    <div class="modal-tekst text-center">
                                                        <p>
                                                            Room feature:
                                                        </p>
                                                        <div class="row" id="${imenaNizova[i]}">
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn pozadina blink" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
            }
            Object.keys(nizoviSoba).forEach(index => {
                var ispisOpisa = document.getElementById(index);
                nizoviSoba[index].forEach(element =>{
                    let komplet = `<div class="col-12 col-sm-6 col-md-4">
                                        <p>
                                            ${element}
                                        </p>
                                    </div>`
                    ispisOpisa.innerHTML += komplet
                })
            });
        }
    }
    if(lokacija == "contact.html"){
        document.getElementById("Contact").classList.add("active");
        link();
        adults();
        children();
        document.getElementById("btnProvera").addEventListener("click", forma);
        function forma(){ 
                console.log("124");
                var ime = document.getElementById("fname");
                var prezime = document.getElementById("lname");
                var email = document.getElementById("email"); 
                var arrival = document.getElementById("arrival");
                var departue = document.getElementById("departue");
                // dozvoljene vrednosti
                var reImePrezime= /^([A-ZĐŽŠČĆ][a-zđžščć]{2,20})+$/ //najmanje 3 karaktera prvo slovo veliko a najvise 20
                var reEmail = /^[a-z][\w\.]*\@[a-z0-9]{3,20}(\.[a-z]{3,5})?\.[a-z]{2,3}$/ //
                var validator = 0;
                //ime 
                if(!reImePrezime.test(ime.value)){ 	        
                    ime.innerHTML = "";
                    ime.nextElementSibling.innerHTML = "First name must have first letters uppercase and minimum 3 letters in total.";
                    ime.classList.add("borderRed");
                    ime.nextElementSibling.classList.add("textRed");
                    validator++;
                }
                else{
                    ime.innerHTML = "";
                    ime.nextElementSibling.innerHTML = "";
                    ime.classList.remove("borderRed");
                    ime.nextElementSibling.classList.remove("textRed");
                }
                //prezime
                if(!reImePrezime.test(prezime.value)){  	        
                    prezime.innerHTML = "";
                    prezime.nextElementSibling.innerHTML = "Last name must have first letters uppercase and minimum 3 letters in total.";
                    prezime.classList.add("borderRed");
                    prezime.nextElementSibling.classList.add("textRed");
                    validator++;
                }
                else{
                    prezime.innerHTML = "";
                    prezime.nextElementSibling.innerHTML = "";
                    prezime.classList.remove("borderRed");
                    prezime.nextElementSibling.classList.remove("textRed");
                }
                //email 
                if(!reEmail.test(email.value)){ 	       
                    email.innerHTML = "";
                    email.nextElementSibling.innerHTML = 'The email can not be empty.';
                    email.classList.add("borderRed");
                    email.nextElementSibling.classList.add("textRed");
                    validator++;
                }
                else{
                    email.innerHTML = "";
                    email.nextElementSibling.innerHTML = '';
                    email.classList.remove("borderRed");
                    email.nextElementSibling.classList.remove("textRed");
                }
                //arrival
                if(!arrival.value) { 	       
                    arrival.nextElementSibling.innerHTML = 'Please select arrival time.';
                    arrival.classList.add("borderRed");
                    arrival.nextElementSibling.classList.add("textRed");
                    validator++;
                }
                else {
                    arrival.nextElementSibling.innerHTML = '';
                    arrival.classList.remove("borderRed");
                    arrival.nextElementSibling.classList.remove("textRed");
                }
                //departue 
                if(!departue.value) { 	       
                    departue.nextElementSibling.innerHTML = 'Please select departue time.';
                    departue.classList.add("borderRed");
                    departue.nextElementSibling.classList.add("textRed");
                    validator++;
                }
                else {
                    departue.nextElementSibling.innerHTML = '';
                    departue.classList.remove("borderRed");
                    departue.nextElementSibling.classList.remove("textRed");
                }
                console.log(validator);
                if(!validator){
                    window.alert("Expect confirmation of your email from our customer service.");
                }
        }
        function link(){
            let location = ["Documentation.pdf", "assets/js/main.js", "sitemap.xml", "author.html"];
            let slicica = ["fas fa-file-alt", "fab fa-css3", "fas fa-sitemap", "fas fa-user"];
            let text = ["Document", "JS", "Sitemap", "Author"];
            let ispis = document.getElementById("linkContent");
            for(let i = 0; i < slicica.length; i++){
                ispis.innerHTML += `<div class="col-12 col-md-3 my-2">
                                        <a href="${location[i]}">
                                            <i class="${slicica[i]}"></i>
                                            ${text[i]}
                                        </a>
                                    </div>`
            }
        }
        function adults(){
            let ispis = document.getElementById("adults");
            let i = 0
            if(i=0){
                ispis.innerHTML +=`<option selected>${i}</option>`
            }
            for(let i = 1; i < 9; i++){
                
                ispis.innerHTML +=`<option>${i}</option>`
            }
        }
        function children(){
            let ispis = document.getElementById("children");
            for(let i = 0; i < 5; i++){
                ispis.innerHTML +=`<option>${i}</option>`
            }
        }
    }
    if(lokacija == "winter.html"){
        document.getElementById("Winter").classList.add("active");
        winterContent();
        function winterContent(){
            let slikaSrc = ["skiing.jpg", "snowboarding.jpg", "mountain.jpg", "heliskiing.jpg", "scenic_helikopter.jpg", "paragliding.jpg", "parachute_ski.jpg"];
            let slikaAlt = ["skiing", "snowboarding", "mountain climbing", "heliskiing", "scenic helikopter", "paragliding", "parachute ski"];
            let cardBody = ["Ski and Snowboard Lessons", "Off-Piste Coaching", "Mountain Guides", "Heli-Skiing", "Scenic Helicopter Flights", "Paragliding", "Parachute Jump"];
            let cardText = ["Which lesson is right for you can depend on a lot of factors. With small groups, they will experience the perfect balance between great fun and learning. Cancellations are not permitted; guests who miss a lesson will be charged the full lesson price.", "Ever wanted to learn how to ski powder? Verbier has some of the best off-piste terrain in the world! Enjoy your first experience with a fully qualified instructor to improve your freeride technique or just get away from the slopes  for a day.", "Go off the beaten track.  Experience ski touring and skiing on glacial terrain. Well, these are all options when you ski with a guide – from a one day experience to over-night trips in high mountain cabins, and of course Heli-skiing.", "Experience the adrenaline of a helicopter ride to one of the remote peaks around the Verbier ski area. Ski untouched powder and experience unrivalled descents. And if you haven’t had enough, you can fly back up and do it all again.", "Whether you ski or not, why not enjoy an amazing flight around the Valais area in a helicopter. Fly around the region’s signature mountains including Mont Blanc and the Matterhorn. You can even ski to the heli-pad at Croix de Coeur where your helicopter will pick you up.", "Take to the open skies on a paraglider solo or tandem. Thrill your senses, infuse your mind with pure adrenaline and escape your routine point of view with a paragliding flight in the Swiss Alps. The view is better from all the way up the mountains.", "For the ultimate buzz, take a parachute jump over the Alps. After being briefed by the ground crew, your instructor will make sure you’re fully prepared and comfortable before boarding the heli- copter. Following the stunning helicopter flight to your target altitude, the door opens… and you’re in free-fall over the Alps!"];
            let ispis = document.getElementById("winter");
            for(let i = 0; i < slikaSrc.length; i++){
                if(i % 2 == 0){
                    ispis.innerHTML +=`<div class="row">
                    <div class="col-12 col-lg-6 my-4">
                        <img src="assets/img/${slikaSrc[i]}" class="img-fluid zaobljen potamni" alt="${slikaAlt[i]}">
                    </div>
                    <div class="col-12 col-lg-6 my-4">
                        <div class="card zaobljen">
                            <div class="card-body">
                                <p class="wsize ">
                                    ${cardBody[i]}
                                </p>
                            </div>
                            <div class="card-text">
                                <p>
                                ${cardText[i]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`
                }
                else{
                    ispis.innerHTML +=`<div class="row okrenuto">
                    <div class="col-12 col-lg-6 my-4">
                        <div class="card zaobljen">
                            <div class="card-body">
                                <p class="wsize ">
                                ${cardBody[i]}
                                </p>
                            </div>
                            <p class="card-text">
                            ${cardText[i]}
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 my-4">
                        <img src="assets/img/${slikaSrc[i]}" class="img-fluid zaobljen potamni" alt="${slikaAlt[i]}">
                    </div>
                </div>`
                }
            }
        }
    }
    if(lokacija == "summer.html"){
        document.getElementById("Summer").classList.add("active");
        summerContent();
        function summerContent(){
            let slikaSrc = ["golf.jpg", "hiking.jpg", "biking.jpg", "heli_sightseeing.jpg", "paragliding.jpg", "bungee_jumping.jpg", "rock_climbing.jpg"];
            let slikaAlt = ["golf", "hiking", "biking", "sightseeing helikopter", "paragliding", "bungee jumping", "rock climbing"];
            let cardBody = ["Golf", "Hiking", "Biking", "Heli Sightseeing Tours", "Paragliding", "Bungee Jumping", "Rock Climbing"];
            let cardText = ["In Verbier, you can play on two golf courses, open from June to November. Accessible to golfers of all ages, the two golf courses complement each other and provide all the thrills expected by the little white ball aficionados.", "With 28 marked cross-country itineraries and infinite terrain, Verbier and Val de Bagnes offer some of the best hiking trails in Switzerland for all fitness levels. Get out and discover the natural surroundings, take in unbelievable views of green valleys, and breathe it all in. The air is fresh way up here.", "Whether you’re up for e-biking, road biking, MTB/mountain biking, cross-country or “Downhill” riding in the Verbier bike park – with 500 km of mountain bike trails and endless roads, there are so many options to explore.", "So many options including circling the local 4000m high peaks or a full tour from Mont Blanc to the Matterhorn.", "Take to the open skies on a paraglider solo or tandem. Paragliding is as accessible as it is intoxicating. Throughout the Summer, the grassy take-off slopes are covered with colourful wings. In Winter, take off with your skis on and admire the spectacular views over the snowy Alps.", "With a breathtaking view and high safety standards, Werber offers world’s most unique bungee jumping experience in the world.", "From beginner instruction to expert multi-pitch climbs, the Val de Bagnes is a climbing Mecca for all abilities."];
            let ispis = document.getElementById("summer");
            for(let i = 0; i < slikaSrc.length; i++){
                if(i % 2 == 0){
                    ispis.innerHTML += `<div class="row okrenuto">
                                            <div class="col-12 col-lg-6 my-4">
                                                <div class="card zaobljen">
                                                    <div class="card-body">
                                                        <p class="wsize ">
                                                        ${cardBody[i]}
                                                        </p>
                                                    </div>
                                                    <p class="card-text">
                                                    ${cardText[i]}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-6 my-4">
                                                <img src="assets/img/${slikaSrc[i]}" class="img-fluid zaobljen potamni" alt="${slikaAlt[i]}">
                                            </div>
                                        </div>`
                }
                else{
                ispis.innerHTML += `<div class="row">
                                        <div class="col-12 col-lg-6 my-4">
                                            <img src="assets/img/${slikaSrc[i]}" class="img-fluid zaobljen potamni" alt="${slikaAlt[i]}">
                                        </div>
                                        <div class="col-12 col-lg-6 my-4">
                                            <div class="card zaobljen">
                                                <div class="card-body">
                                                    <p class="wsize ">
                                                        ${cardBody[i]}
                                                    </p>
                                                </div>
                                                <div class="card-text">
                                                    <p>
                                                    ${cardText[i]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
                }
            }
        }
    }
    if(lokacija == "index.html"){
        document.getElementById("Home").classList.add("active");
        indexContent();
        function indexContent(){
                let slikaSrcF = ["two_bedroom.jpg", "beach.jpg", "parachute_ski.jpg"];
                let slikaAltF = ["two bed room", "beach", "ski parachute"];
                let slikaSrcS = ["single_room.jpg", "summer_hotel_front.jpg",  "skiing.jpg"];
                let slikaAltS = ["single bed room", "summer hotel front", "skiing"];
                let slikaSrcT = ["secound_single_room.jpg", "summer_hotel_back.jpg", "snowboarding.jpg"];
                let slikaAltT = ["secound single bed room", "summer hotel back", "snowboarding"];
                let link = ["rooms.html", "summer.html", "winter.html"];
                let idNaslov = ["room_view", "summer_view", "night_view"];
                let naslov = ["DARING DESIGN MEETS A SOPHISTICATED SCENE", "DETOX. RETOX. REPEAT AT THE BEACH", "A PERFECT SPORT FOR THRILL-SEEKERS"];
                let podNaslov = ["DISCOVER ALPINE GLAMOUR REDEFINE", "Switzerland is a fabulous summer destination to uncover", "Hit the slopes form your hotel in Switzerland"];
                let text = ["The property features 123 stylish guest rooms, suites and residences, each with fireplace, bed and private balcony. The design is daring, local materials like wood and stone are fused with modern accent in a Werbier Hotels’ style to create spaces that are spectacular to look at and divine to dream in.", "Active sport enthusiasts, beach fans and music lovers will not miss the hot summer program taking place from mid-June until the end of September. The Beach is the center–stage for thrill–seeking mountain enthusiasts and a hot spot to detox, retox and repeat.", "Action packed days mirror energy fueled nightsat this stunning Werbier ski resort, with ski in/ski out access. Perched at 1531 meters, just steps away from the main Werbier ski lifts, Werbier is open all year round and offers immediate access to more than 400 kilometers of ski, biking and hiking terrain."];
            let ispis = document.getElementById("home");
            console.log(naslov.length)
            for (let i = 0; i < naslov.length; i++) {
                if(!i % 2 == 0){
                ispis.innerHTML +=`<div class="col-12 d-flex justify-content-center align-items-center mask pattern-6" id="${idNaslov[i]}">
                                                        <div class="h2">
                                                            <p class="p-3 text-center">
                                                                ${naslov[i]}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="container my-5 home">
                                                        <div class="row">
                                                            <div class="col-12 col-md-6 my-auto">
                                                                <div class="h2">
                                                                    <p class="text-center">
                                                                        ${podNaslov[i]}
                                                                    </p>
                                                                </div>
                                                                <p class="mt-4">
                                                                    ${text[i]}
                                                                </p>
                                                                <div class="beoTekst mb-3 text-center">
                                                                    <a class="btn pozadina" href="${link[i]}" role="button">Learn more</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 my-2">
                                                                <img src="assets/img/${slikaSrcF[i]}" class="img-fluid zaobljen potamni" alt="${slikaAltF[i]}">
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col12 col-md-6 my-2">
                                                                <img src="assets/img/${slikaSrcS[i]}" class="img-fluid zaobljen potamni" alt="${slikaAltS[i]}">
                                                            </div>
                                                            <div class="col12 col-md-6 my-2">
                                                                <img src="assets/img/${slikaSrcT[i]}" class="img-fluid zaobljen potamni" alt="${slikaAltT[i]}">
                                                            </div>
                                                        </div>
                                                    </div>`
                }
                else{
                    ispis.innerHTML = `<div class="col-12 d-flex justify-content-center align-items-center mask pattern-6" id="${idNaslov[i]}">
                                            <div class="h2">
                                                <p class="p-3 text-center">
                                                    ${naslov[i]}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="container my-5 home">
                                            <div class="row okrenuto">
                                                <div class="col-12 col-md-6 my-4">
                                                    <img src="assets/img/${slikaSrcF[i]}" class="img-fluid zaobljen potamni" alt="${slikaAltF[i]}">
                                                </div>
                                                <div class="col-12 col-md-6 my-auto">
                                                    <div class="h2 text-center">
                                                        <p>
                                                            ${podNaslov[i]}
                                                        </p>
                                                    </div>
                                                    <p class="mt-4">
                                                        ${text[i]}	
                                                    </p>
                                                    <div class="beoTekst mb-3 text-center">
                                                        <a class="btn pozadina" href="${link[i]}" role="button">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-5">
                                                <div class="col12 col-md-6 my-2">
                                                    <img src="assets/img/${slikaSrcS[i]}" class="img-fluid zaobljen potamni" alt="${slikaAltS[i]}">
                                                </div>
                                                <div class="col12 col-md-6 my-2">
                                                    <img src="assets/img/${slikaSrcT[i]}" class="img-fluid zaobljen potamni" alt="${slikaAltT[i]}">
                                                </div>
                                            </div>
                                        </div>`
                }
            }
        }
    }
});

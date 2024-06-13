(function(){"use strict";var e={3289:function(e,a,t){var n=t(5130),o=t(6768),i=t.p+"img/logo.b03e9110.svg",r=t.p+"img/facebook.42800301.svg",s=t.p+"img/instagram.a8a62096.svg",l=t.p+"img/twitter.ee10422c.svg",d=t.p+"img/googleplus.464135bf.svg";const c=(0,o.Lk)("div",{class:"navbar-brand"},[(0,o.Lk)("img",{src:i,alt:"Taniti Island logo"})],-1),u=(0,o.Fv)('<footer><p>© Ashley Fallon, images provided by <a href="https://unsplash.com">unsplash</a>.</p><ul><li><img src="'+r+'" alt="Facebook"></li><li><img src="'+s+'" alt="Instagram"></li><li><img src="'+l+'" alt="Twitter"></li><li><img src="'+d+'" alt="Google Plus"></li></ul></footer>',1);function h(e,a,t,n,i,r){const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("header",null,[c,(0,o.bF)(s,{name:"navigation"})]),(0,o.Lk)("main",null,[(0,o.bF)(s)]),u],64)}var f={name:"App"},g=t(1241);const v=(0,g.A)(f,[["render",h]]);var p=v,m=t(973),y=t.p+"img/arrow-down.84ab702f.svg";const w=(0,o.Fv)('<div id="home" class="hero"><hgroup><span>Welcome to</span><h1>Taniti</h1></hgroup></div><div class="arrow-spacer"><img src="'+y+'" alt="Taniti Island logo"></div><section id="about"><h2>About</h2><p>Welcome to Taniti Island, your slice of paradise in the heart of the tropics! Nestled amidst the azure waters of the Pacific Ocean, Taniti Island is a small, remote gem waiting to be discovered by adventurous souls seeking an authentic tropical escape.</p><p>With its pristine white-sand beaches, lush rainforests, and crystal-clear lagoons teeming with vibrant marine life, Taniti Island offers a sanctuary for nature lovers and sun-seekers alike. Immerse yourself in the tranquil rhythm of island life as you explore secluded coves, hike scenic trails, or simply unwind under the swaying palms.</p><p>But Taniti Island is more than just a picturesque retreat; it&#39;s a place rich in culture and tradition. Engage with the warm and welcoming locals, whose hospitality and vibrant customs will leave a lasting impression on your heart. Sample delicious cuisine made from the freshest local ingredients, and experience the rhythmic beats of traditional music and dance that echo through the island&#39;s villages.</p><p>Whether you&#39;re seeking adventure, relaxation, or a cultural immersion, Taniti Island offers a truly unforgettable experience. So pack your bags, leave your worries behind, and embark on a journey to paradise. Taniti Island awaits, ready to enchant and inspire you at every turn. Come and discover the magic of this hidden tropical oasis.</p></section><div class="arrow-spacer"><img src="'+y+'" alt="Taniti Island logo"></div>',4),b={id:"resources"},k=(0,o.Lk)("h2",null,"Resources",-1);function T(e,a,t,n,i,r){const s=(0,o.g2)("CarouselContainer");return(0,o.uX)(),(0,o.CE)(o.FK,null,[w,(0,o.Lk)("section",b,[k,(0,o.bF)(s)])],64)}const I={class:"carousel"};function x(e,a,t,n,i,r){const s=(0,o.g2)("CarouselItem");return(0,o.uX)(),(0,o.CE)("div",I,[(0,o.bF)(s,{id:"attractions",link:"#/resource/attractions"},{heading:(0,o.k6)((()=>[(0,o.eW)(" Attractions ")])),details:(0,o.k6)((()=>[(0,o.eW)(" Discover the hidden treasures and natural wonders that await around every corner on Taniti Island. ")])),_:1}),(0,o.bF)(s,{id:"lodging",link:"#/resource/lodging",active:""},{heading:(0,o.k6)((()=>[(0,o.eW)(" Lodging ")])),details:(0,o.k6)((()=>[(0,o.eW)(" Experience unrivaled comfort amidst the serenity of Taniti Island's lodging options. ")])),_:1}),(0,o.bF)(s,{id:"transportation",link:"#/resource/transportation"},{heading:(0,o.k6)((()=>[(0,o.eW)(" Transportation ")])),details:(0,o.k6)((()=>[(0,o.eW)(" Seamlessly navigate the island's beauty with our convenient transportation options, ensuring you never miss a moment of adventure. ")])),_:1})])}var C=t(4232);const L={class:"detail-body"},q={class:"detail-action"},A=["href"];function S(e,a,t,n,i,r){return(0,o.uX)(),(0,o.CE)("article",{class:(0,C.C4)({active:t.active})},[(0,o.Lk)("h3",null,[(0,o.RG)(e.$slots,"heading")]),(0,o.Lk)("div",L,[(0,o.Lk)("p",null,[(0,o.RG)(e.$slots,"details")])]),(0,o.Lk)("div",q,[(0,o.Lk)("a",{href:t.link},"Learn More",8,A)])],2)}var F={name:"CarouselItem",props:{link:{type:String,default:"#"},active:{type:Boolean,default:!1}}};const E=(0,g.A)(F,[["render",S]]);var R=E,W={name:"CarouselContainer",components:{CarouselItem:R}};const j=(0,g.A)(W,[["render",x]]);var H=j,z={name:"HomeView",components:{CarouselContainer:H}};const O=(0,g.A)(z,[["render",T]]);var B=O;const V=(0,o.Lk)("menu",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/resource/attractions"},"Attractions")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/resource/lodging"},"Lodging")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/resource/transportation"},"Transportation")])],-1);function _(e,a,t,n,i,r){return(0,o.uX)(),(0,o.CE)("nav",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#home",class:(0,C.C4)({active:"home"===i.activeSection}),onClick:a[0]||(a[0]=e=>r.scrollTo(e,"home"))},"Home",2)]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#about",class:(0,C.C4)({active:"about"===i.activeSection}),onClick:a[1]||(a[1]=e=>r.scrollTo(e,"about"))},"About",2)]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#resources",class:(0,C.C4)({active:"resources"===i.activeSection}),onClick:a[2]||(a[2]=e=>r.scrollTo(e,"resources"))},"Resources",2),V])])}var D={name:"HomeNav",data(){return{activeSection:null}},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const e=["home","about","resources"];for(const a of e){const e=document.getElementById(a),t=e.getBoundingClientRect();if(t.top<=window.innerHeight&&t.bottom>=0){this.activeSection=a;break}}},scrollTo(e,a){e.preventDefault();const t=document.getElementById(a);t&&t.scrollIntoView({behavior:"smooth"})}}};const K=(0,g.A)(D,[["render",_]]);var P=K,X=t.p+"img/attractions-2.8bba325d.avif",G=t.p+"img/attractions-3.cad54dc3.avif",M=t.p+"img/user.20a849e3.svg";const N=(0,o.Fv)('<div id="attractions" class="hero" data-v-c37e6088><hgroup data-v-c37e6088><h1 data-v-c37e6088>Attractions</h1></hgroup></div><div class="arrow-spacer" data-v-c37e6088><img src="'+y+'" alt="Taniti Island logo" data-v-c37e6088></div><section id="about" data-v-c37e6088><h2 data-v-c37e6088>Discover Taniti&#39;s Hidden Gems</h2><p data-v-c37e6088>Embark on a journey of discovery as you explore the captivating attractions of Taniti Island. From pristine beaches and lush rainforests to vibrant markets and cultural landmarks, Taniti offers a wealth of experiences waiting to be uncovered. Immerse yourself in the natural beauty of secluded coves and crystal-clear lagoons, where every moment is a postcard-worthy scene. Dive into the island&#39;s rich cultural tapestry as you wander through bustling villages, sampling delicious local cuisine and engaging with welcoming locals eager to share their traditions. Whether you&#39;re seeking adventure, relaxation, or cultural immersion, Taniti&#39;s attractions promise to enchant and inspire you at every turn. Come and uncover the magic of Taniti Island&#39;s hidden gems today.</p></section><div class="arrow-spacer" data-v-c37e6088><img src="'+y+'" alt="Taniti Island logo" data-v-c37e6088></div><section id="local" data-v-c37e6088><h2 data-v-c37e6088>Local Favorites</h2><img class="img float-left" src="'+X+'" data-v-c37e6088><h3 class="clear-right" data-v-c37e6088>AquaVenture Kayaks</h3><p data-v-c37e6088>Embark on an aquatic adventure with AquaVenture Kayaks, your premier choice for exploring Taniti Island&#39;s pristine waters. Glide through tranquil lagoons, weave through mangrove forests, and discover hidden coves along the island&#39;s stunning coastline. Whether you&#39;re a seasoned kayaker or a novice explorer, our expert guides are ready to lead you on unforgettable journeys, sharing their knowledge of the local ecosystem and pointing out hidden treasures along the way.</p><p data-v-c37e6088>Explore the island&#39;s breathtaking marine landscapes at your own pace or join one of our guided tours to uncover hidden gems and learn about the rich biodiversity of Taniti&#39;s coastal waters. With our top-of-the-line kayaks and expert guidance, you can paddle with confidence and discover the wonders of Taniti Island from a whole new perspective.</p><img class="img float-right" src="'+G+'" data-v-c37e6088><h3 class="clear-left" data-v-c37e6088>CliffHanger Adventures</h3><p data-v-c37e6088>Ascend to new heights and conquer Taniti Island&#39;s rugged terrain with CliffHanger Adventures, your gateway to thrilling rock climbing experiences. Embark on exhilarating climbs up towering cliffs, scale rocky outcrops overlooking the azure sea, and test your skills on challenging crags surrounded by lush tropical vegetation. Whether you&#39;re a seasoned climber seeking adrenaline-pumping challenges or a beginner looking to try something new, our experienced guides will ensure a safe and unforgettable adventure. Immerse yourself in the beauty of Taniti&#39;s natural landscapes as you reach new heights and uncover breathtaking vistas from vantage points few have seen before. Join us at CliffHanger Adventures and discover the thrill of rock climbing in paradise.</p></section><div class="arrow-spacer" data-v-c37e6088><img src="'+y+'" alt="Taniti Island logo" data-v-c37e6088></div><section id="community" data-v-c37e6088><h2 data-v-c37e6088>From the Community</h2><article data-v-c37e6088><hgroup data-v-c37e6088><h3 data-v-c37e6088><img src="'+M+'" alt="" data-v-c37e6088><span class="author" data-v-c37e6088>Alex Smith</span> says... </h3></hgroup><p data-v-c37e6088>&quot;<strong data-v-c37e6088>AquaVenture Kayaks</strong> provided an amazing day of adventure on Taniti Island! Kayaking along the pristine coastline and exploring hidden coves was a serene and unforgettable experience. The guides were friendly and knowledgeable, ensuring safety and providing interesting insights about the island. Highly recommend for anyone looking for a unique way to explore Taniti&#39;s beauty!&quot;</p></article><article data-v-c37e6088><hgroup data-v-c37e6088><h3 data-v-c37e6088><img src="'+M+'" alt="" data-v-c37e6088><span class="author" data-v-c37e6088>Sophia Davis</span> says... </h3></hgroup><p data-v-c37e6088>&quot;Rock climbing with <strong data-v-c37e6088>CliffHanger Adventures</strong> was an absolute blast! Even as a beginner, I felt supported and encouraged by the friendly guides. Scaling the cliffs and reaching new heights was an empowering experience, and the stunning views from the top made it all worth it. Highly recommend for adventurers of all skill levels!&quot;</p></article><article data-v-c37e6088><hgroup data-v-c37e6088><h3 data-v-c37e6088><img src="'+M+'" alt="" data-v-c37e6088><span class="author" data-v-c37e6088>Sarah Thompson</span> says... </h3></hgroup><p data-v-c37e6088>&quot;<strong data-v-c37e6088>CliffTop Adventures</strong> delivered an unforgettable day on Taniti Island! Rock climbing and kayaking were both incredible experiences. The guides were friendly and knowledgeable, ensuring safety and fun. Highly recommend for adventure seekers!&quot;</p></article></section>',7);function J(e,a,t,n,o,i){return N}var $={name:"AttractionView"};const U=(0,g.A)($,[["render",J],["__scopeId","data-v-c37e6088"]]);var Q=U,Y=t.p+"img/lodging-2.07f34e8a.avif",Z=t.p+"img/lodging-3.0bf9ea3b.avif";const ee=(0,o.Fv)('<div id="lodging" class="hero" data-v-4e5cdf2d><hgroup data-v-4e5cdf2d><h1 data-v-4e5cdf2d>Lodging</h1></hgroup></div><div class="arrow-spacer" data-v-4e5cdf2d><img src="'+y+'" alt="Taniti Island logo" data-v-4e5cdf2d></div><section id="about" data-v-4e5cdf2d><h2 data-v-4e5cdf2d>Island Escapes Await</h2><p data-v-4e5cdf2d>Taniti Island offers a variety of lodging options tailored to suit every traveler&#39;s needs. Whether you prefer the rustic charm of beachfront bungalows, the cozy comfort of guesthouses nestled in lush tropical surroundings, or the modern amenities of eco-lodges, you&#39;ll find your ideal sanctuary here. Each accommodation choice promises a unique experience, allowing you to immerse yourself fully in the island&#39;s serene ambiance and unwind in style.</p><p data-v-4e5cdf2d>From waking up to the gentle sound of waves to enjoying panoramic views of the turquoise waters, every moment spent in our lodging options is designed to enhance your island getaway. Whether you&#39;re seeking a romantic escape, a family adventure, or a solo retreat, Taniti Island welcomes you with open arms and promises an unforgettable stay. Come, discover your piece of paradise and create cherished memories amidst the beauty of Taniti Island.</p></section><div class="arrow-spacer" data-v-4e5cdf2d><img src="'+y+'" alt="Taniti Island logo" data-v-4e5cdf2d></div><section id="local" data-v-4e5cdf2d><h2 data-v-4e5cdf2d>Local Favorites</h2><img class="img float-left" src="'+Y+'" data-v-4e5cdf2d><h3 class="clear-right" data-v-4e5cdf2d>Cliffside Vista Retreat</h3><p data-v-4e5cdf2d>Perched on the edge of a rugged cliff overlooking the glistening waters of Taniti Island, our Cliffside Vista Retreat offers a one-of-a-kind experience for those seeking ultimate serenity and breathtaking views. Step into your glass-walled sanctuary and feel as though you&#39;re suspended in mid-air, with nothing but the vast expanse of the ocean stretching out before you. Watch the sun paint the sky with hues of orange and pink as it sets below the horizon, casting a warm glow over the tranquil waters below.</p><p data-v-4e5cdf2d>Indulge in the luxury of simplicity as you relax in your elegantly appointed room, where every detail is designed to enhance your connection with nature. Fall asleep to the soothing sound of waves crashing against the cliffs below, and awaken to the sight of dolphins frolicking in the distance. With its unparalleled location and unparalleled views, our Cliffside Vista Retreat offers an unforgettable escape from the ordinary, inviting you to immerse yourself fully in the natural beauty of Taniti Island.</p><img class="img float-right" src="'+Z+'" data-v-4e5cdf2d><h3 class="clear-left" data-v-4e5cdf2d>SeaRise Chalet</h3><p data-v-4e5cdf2d>Welcome to SeaRise Chalet, where the boundless expanse of the sea meets the rustic charm of island living. Perched gracefully above the tranquil waters of Taniti Island&#39;s lagoon, this enchanting retreat offers a serene escape like no other. Step onto your private deck and immerse yourself in the panoramic views of the endless horizon stretching before you, as gentle waves lap against the stilts of your chalet.</p><p data-v-4e5cdf2d>SeaRise Chalet beckons with its understated elegance and unspoiled natural beauty, inviting you to unwind and reconnect with the rhythms of the ocean. Spend your days exploring the vibrant marine life just below the surface or simply basking in the warm embrace of the tropical sun from the comfort of your deck. As evening falls, be captivated by the mesmerizing spectacle of the sunset painting the sky in hues of gold and crimson, casting a magical glow over the tranquil waters below.</p><p data-v-4e5cdf2d>Retreat to the cozy comfort of your chalet, where every detail has been thoughtfully curated to ensure a restful and rejuvenating stay. Fall asleep to the soothing melody of the waves and wake up refreshed and invigorated, ready to embrace another day in paradise. At SeaRise Chalet, the beauty of Taniti Island&#39;s coastal paradise unfolds before you, offering a sanctuary where time stands still and unforgettable memories are made.</p></section><div class="arrow-spacer" data-v-4e5cdf2d><img src="'+y+'" alt="Taniti Island logo" data-v-4e5cdf2d></div><section id="community" data-v-4e5cdf2d><h2 data-v-4e5cdf2d>From the Community</h2><article data-v-4e5cdf2d><hgroup data-v-4e5cdf2d><h3 data-v-4e5cdf2d><img src="'+M+'" alt="" data-v-4e5cdf2d><span class="author" data-v-4e5cdf2d>Sarah Johnson</span> says... </h3></hgroup><p data-v-4e5cdf2d>&quot;I had the most amazing time at <strong data-v-4e5cdf2d>SeaRise Chalet</strong> on Taniti Island! The scenery from my chalet was breathtaking, and the experience of waking up to the sound of the waves was unforgettable. The cozy comfort and panoramic views made my stay truly magical. Can&#39;t wait to come back!&quot;</p></article><article data-v-4e5cdf2d><hgroup data-v-4e5cdf2d><h3 data-v-4e5cdf2d><img src="'+M+'" alt="" data-v-4e5cdf2d><span class="author" data-v-4e5cdf2d>David Lee</span> says... </h3></hgroup><p data-v-4e5cdf2d>&quot;Taniti Island exceeded all my expectations, especially my stay at <strong data-v-4e5cdf2d>Sunshine Waterside Haven</strong>! Waking up in a sunny-colored building literally on the water was a dream come true. The vibrant atmosphere and direct access to the lagoon made my experience truly unforgettable. Highly recommend it to anyone looking for a tropical getaway.&quot;</p></article><article data-v-4e5cdf2d><hgroup data-v-4e5cdf2d><h3 data-v-4e5cdf2d><img src="'+M+'" alt="" data-v-4e5cdf2d><span class="author" data-v-4e5cdf2d>Emily White</span> says... </h3></hgroup><p data-v-4e5cdf2d>&quot;Spent a week at <strong data-v-4e5cdf2d>Cliffside Vista Retreat</strong> on Taniti Island and wished I never had to leave! The breathtaking views from my glass-walled room were simply unparalleled. Falling asleep to the sound of the waves crashing against the cliff below was pure bliss. Already planning my next trip back!&quot;</p></article></section>',7);function ae(e,a,t,n,o,i){return ee}var te={name:"LodgingView"};const ne=(0,g.A)(te,[["render",ae],["__scopeId","data-v-4e5cdf2d"]]);var oe=ne,ie=t.p+"img/transportation-2.3310b016.avif",re=t.p+"img/transportation-3.fa44f4eb.avif";const se=(0,o.Fv)('<div id="transportation" class="hero" data-v-2ec50af9><hgroup data-v-2ec50af9><h1 data-v-2ec50af9>Transportation</h1></hgroup></div><div class="arrow-spacer" data-v-2ec50af9><img src="'+y+'" alt="Taniti Island logo" data-v-2ec50af9></div><section id="about" data-v-2ec50af9><h2 data-v-2ec50af9>Explore with Ease</h2><p data-v-2ec50af9>Discover seamless travel on Taniti Island with our efficient transportation solutions. From scenic boat rides to convenient shuttle services, we ensure you can navigate the island with ease. Whether you&#39;re venturing to remote beaches or exploring bustling villages, our reliable options promise to enhance your island experience.</p><p data-v-2ec50af9>Leave the logistics to us and focus on soaking in the beauty of Taniti Island. With our friendly drivers and well-maintained vehicles, you can sit back, relax, and enjoy the journey. Let us take you on a hassle-free adventure, where every ride is a delightful opportunity to uncover the wonders of our tropical paradise.</p></section><div class="arrow-spacer" data-v-2ec50af9><img src="'+y+'" alt="Taniti Island logo" data-v-2ec50af9></div><section id="local" data-v-2ec50af9><h2 data-v-2ec50af9>Local Favorites</h2><img class="img float-left" src="'+ie+'" data-v-2ec50af9><h3 class="clear-right" data-v-2ec50af9>IslandHopper Shuttle</h3><p data-v-2ec50af9>Embark on a hassle-free journey across Taniti Island with IslandHopper Shuttle, your go-to transportation solution for exploring local favorites. Our reliable shuttle service offers convenient pick-up and drop-off points, ensuring you can effortlessly navigate the island&#39;s attractions and hotspots. Sit back, relax, and enjoy the scenic views as our friendly drivers whisk you away to your desired destination. Whether you&#39;re heading to pristine beaches, vibrant markets, or cultural landmarks, IslandHopper Shuttle promises a comfortable and stress-free travel experience, allowing you to focus on making the most of your island adventure.</p><img class="img float-right" src="'+re+'" data-v-2ec50af9><h3 class="clear-left" data-v-2ec50af9>BreezeCycle Rentals</h3><p data-v-2ec50af9>Feel the wind in your hair and the freedom of the open road with BreezeCycle Rentals, your ultimate choice for motorbike adventures on Taniti Island. Cruise along the island&#39;s picturesque coastal routes or venture inland to discover hidden treasures with our fleet of premium motorbikes. Whether you&#39;re a solo traveler seeking solitude or a group of friends craving adventure, BreezeCycle Rentals offers the perfect ride to suit your needs. Explore the island&#39;s diverse landscapes at your own pace, stopping to soak in breathtaking views and immerse yourself in the local culture. With BreezeCycle Rentals, every journey becomes an unforgettable experience on Taniti Island.</p></section><div class="arrow-spacer" data-v-2ec50af9><img src="'+y+'" alt="Taniti Island logo" data-v-2ec50af9></div><section id="community" data-v-2ec50af9><h2 data-v-2ec50af9>From the Community</h2><article data-v-2ec50af9><hgroup data-v-2ec50af9><h3 data-v-2ec50af9><img src="'+M+'" alt="" data-v-2ec50af9><span class="author" data-v-2ec50af9>Mark Thompson</span> says... </h3></hgroup><p data-v-2ec50af9>&quot;Using <strong data-v-2ec50af9>IslandHopper Shuttle</strong> made exploring Taniti Island a breeze! The convenience of their shuttle service allowed me to visit all the local hotspots without worrying about transportation. Friendly drivers, comfortable rides, and punctual service—I couldn&#39;t have asked for more!&quot;</p></article><article data-v-2ec50af9><hgroup data-v-2ec50af9><h3 data-v-2ec50af9><img src="'+M+'" alt="" data-v-2ec50af9><span class="author" data-v-2ec50af9>Lily Chen</span> says... </h3></hgroup><p data-v-2ec50af9>&quot;<strong data-v-2ec50af9>IslandCruise Rentals</strong> provided the perfect motorbike for my solo adventure on Taniti Island. Renting a bike was easy, and the staff were incredibly helpful in recommending routes and attractions. Riding along the coastal roads with the wind in my hair was an experience I&#39;ll never forget!&quot;</p></article><article data-v-2ec50af9><hgroup data-v-2ec50af9><h3 data-v-2ec50af9><img src="'+M+'" alt="" data-v-2ec50af9><span class="author" data-v-2ec50af9>Alex Rodriguez</span> says... </h3></hgroup><p data-v-2ec50af9>&quot;<strong data-v-2ec50af9>BreezeCycle Rentals</strong> exceeded my expectations! Their motorbikes were well-maintained and reliable, making my exploration of Taniti Island smooth and enjoyable. The flexibility to go wherever I pleased allowed me to discover hidden gems off the beaten path. Highly recommend for anyone looking to adventure around the island!&quot;</p></article></section>',7);function le(e,a,t,n,o,i){return se}var de={name:"TransportationView"};const ce=(0,g.A)(de,[["render",le],["__scopeId","data-v-2ec50af9"]]);var ue=ce;const he=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/",class:"divide-end"},"Home")],-1),fe=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/resource/attractions"},"Attractions")],-1),ge=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/resource/lodging"},"Lodging")],-1),ve=(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#/resource/transportation"},"Transportation")],-1),pe=[he,fe,ge,ve];function me(e,a,t,n,i,r){return(0,o.uX)(),(0,o.CE)("nav",null,pe)}var ye={name:"ResourceNav"};const we=(0,g.A)(ye,[["render",me]]);var be=we;const ke=[{path:"/",components:{default:B,navigation:P}},{path:"/resource/attractions",components:{default:Q,navigation:be}},{path:"/resource/lodging",components:{default:oe,navigation:be}},{path:"/resource/transportation",components:{default:ue,navigation:be}}],Te=(0,m.aE)({history:(0,m.Bt)(),routes:ke,scrollBehavior(){return{top:0}}});var Ie=Te;(0,n.Ef)(p).use(Ie).mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var i=a[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,i){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(c--,1);var d=o();void 0!==d&&(a=d)}}return a}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/D479/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,i,r=n[0],s=n[1],l=n[2],d=0;if(r.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var c=l(t)}for(a&&a(n);d<r.length;d++)i=r[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},n=self["webpackChunkprototype"]=self["webpackChunkprototype"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3289)}));n=t.O(n)})();
//# sourceMappingURL=app.a54887be.js.map
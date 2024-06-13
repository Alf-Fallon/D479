<template>
    <div id="transportation" class="hero">
        <hgroup>
            <h1>Transportation</h1>
        </hgroup>
    </div>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="about">
        <h2>Explore with Ease</h2>
        <p>Discover seamless travel on Taniti Island with our efficient transportation solutions. From scenic boat rides to convenient shuttle services, we ensure you can navigate the island with ease. Whether you're venturing to remote beaches or exploring bustling villages, our reliable options promise to enhance your island experience.</p>
        <p>Leave the logistics to us and focus on soaking in the beauty of Taniti Island. With our friendly drivers and well-maintained vehicles, you can sit back, relax, and enjoy the journey. Let us take you on a hassle-free adventure, where every ride is a delightful opportunity to uncover the wonders of our tropical paradise.</p>
    </section>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="local">
        <h2>Local Favorites</h2>
        <img class="img float-left" src="@/assets/transportation-2.avif">
        <h3 class="clear-right">IslandHopper Shuttle</h3>
        <p>Embark on a hassle-free journey across Taniti Island with IslandHopper Shuttle, your go-to transportation solution for exploring local favorites. Our reliable shuttle service offers convenient pick-up and drop-off points, ensuring you can effortlessly navigate the island's attractions and hotspots. Sit back, relax, and enjoy the scenic views as our friendly drivers whisk you away to your desired destination. Whether you're heading to pristine beaches, vibrant markets, or cultural landmarks, IslandHopper Shuttle promises a comfortable and stress-free travel experience, allowing you to focus on making the most of your island adventure.</p>
        <img class="img float-right" src="@/assets/transportation-3.avif">
        <h3 class="clear-left">BreezeCycle Rentals</h3>
        <p>Feel the wind in your hair and the freedom of the open road with BreezeCycle Rentals, your ultimate choice for motorbike adventures on Taniti Island. Cruise along the island's picturesque coastal routes or venture inland to discover hidden treasures with our fleet of premium motorbikes. Whether you're a solo traveler seeking solitude or a group of friends craving adventure, BreezeCycle Rentals offers the perfect ride to suit your needs. Explore the island's diverse landscapes at your own pace, stopping to soak in breathtaking views and immerse yourself in the local culture. With BreezeCycle Rentals, every journey becomes an unforgettable experience on Taniti Island.</p>
    </section>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="community">
        <h2>From the Community</h2>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">Mark Thompson</span> says...
                </h3>
            </hgroup>
            <p>"Using <strong>IslandHopper Shuttle</strong> made exploring Taniti Island a breeze! The convenience of their shuttle service allowed me to visit all the local hotspots without worrying about transportation. Friendly drivers, comfortable rides, and punctual service—I couldn't have asked for more!"</p>
        </article>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">Lily Chen</span> says...
                </h3>
            </hgroup>
            <p>"<strong>IslandCruise Rentals</strong> provided the perfect motorbike for my solo adventure on Taniti Island. Renting a bike was easy, and the staff were incredibly helpful in recommending routes and attractions. Riding along the coastal roads with the wind in my hair was an experience I'll never forget!"</p>
        </article>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">Alex Rodriguez</span> says...
                </h3>
            </hgroup>
            <p>"<strong>BreezeCycle Rentals</strong> exceeded my expectations! Their motorbikes were well-maintained and reliable, making my exploration of Taniti Island smooth and enjoyable. The flexibility to go wherever I pleased allowed me to discover hidden gems off the beaten path. Highly recommend for anyone looking to adventure around the island!"</p>
        </article>
    </section>
</template>

<script>
export default {
    name: 'TransportationView'
}
</script>

<style scoped>

.hero {
    height: 50vh;
    background-image: url('/src/assets/transportation-hero.jpg');
    background-position: bottom;
}

</style>
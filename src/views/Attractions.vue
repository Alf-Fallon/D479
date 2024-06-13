<template>
    <div id="attractions" class="hero">
        <hgroup>
            <h1>Attractions</h1>
        </hgroup>
    </div>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="about">
        <h2>Discover Taniti's Hidden Gems</h2>
        <p>Embark on a journey of discovery as you explore the captivating attractions of Taniti Island. From pristine beaches and lush rainforests to vibrant markets and cultural landmarks, Taniti offers a wealth of experiences waiting to be uncovered. Immerse yourself in the natural beauty of secluded coves and crystal-clear lagoons, where every moment is a postcard-worthy scene. Dive into the island's rich cultural tapestry as you wander through bustling villages, sampling delicious local cuisine and engaging with welcoming locals eager to share their traditions. Whether you're seeking adventure, relaxation, or cultural immersion, Taniti's attractions promise to enchant and inspire you at every turn. Come and uncover the magic of Taniti Island's hidden gems today.</p>
    </section>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="local">
        <h2>Local Favorites</h2>
        <img class="img float-left" src="@/assets/attractions-2.avif">
        <h3 class="clear-right">AquaVenture Kayaks</h3>
        <p>Embark on an aquatic adventure with AquaVenture Kayaks, your premier choice for exploring Taniti Island's pristine waters. Glide through tranquil lagoons, weave through mangrove forests, and discover hidden coves along the island's stunning coastline. Whether you're a seasoned kayaker or a novice explorer, our expert guides are ready to lead you on unforgettable journeys, sharing their knowledge of the local ecosystem and pointing out hidden treasures along the way.</p>
        <p>Explore the island's breathtaking marine landscapes at your own pace or join one of our guided tours to uncover hidden gems and learn about the rich biodiversity of Taniti's coastal waters. With our top-of-the-line kayaks and expert guidance, you can paddle with confidence and discover the wonders of Taniti Island from a whole new perspective.</p>
        <img class="img float-right" src="@/assets/attractions-3.avif">
        <h3 class="clear-left">CliffHanger Adventures</h3>
        <p>Ascend to new heights and conquer Taniti Island's rugged terrain with CliffHanger Adventures, your gateway to thrilling rock climbing experiences. Embark on exhilarating climbs up towering cliffs, scale rocky outcrops overlooking the azure sea, and test your skills on challenging crags surrounded by lush tropical vegetation. Whether you're a seasoned climber seeking adrenaline-pumping challenges or a beginner looking to try something new, our experienced guides will ensure a safe and unforgettable adventure. Immerse yourself in the beauty of Taniti's natural landscapes as you reach new heights and uncover breathtaking vistas from vantage points few have seen before. Join us at CliffHanger Adventures and discover the thrill of rock climbing in paradise.</p>
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
                    <span class="author">Alex Smith</span> says...
                </h3>
            </hgroup>
            <p>"<strong>AquaVenture Kayaks</strong> provided an amazing day of adventure on Taniti Island! Kayaking along the pristine coastline and exploring hidden coves was a serene and unforgettable experience. The guides were friendly and knowledgeable, ensuring safety and providing interesting insights about the island. Highly recommend for anyone looking for a unique way to explore Taniti's beauty!"</p>
        </article>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">Sophia Davis</span> says...
                </h3>
            </hgroup>
            <p>"Rock climbing with <strong>CliffHanger Adventures</strong> was an absolute blast! Even as a beginner, I felt supported and encouraged by the friendly guides. Scaling the cliffs and reaching new heights was an empowering experience, and the stunning views from the top made it all worth it. Highly recommend for adventurers of all skill levels!"</p>
        </article>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">Sarah Thompson</span> says...
                </h3>
            </hgroup>
            <p>"<strong>CliffTop Adventures</strong> delivered an unforgettable day on Taniti Island! Rock climbing and kayaking were both incredible experiences. The guides were friendly and knowledgeable, ensuring safety and fun. Highly recommend for adventure seekers!"</p>
        </article>
    </section>
</template>

<script>
export default {
    name: 'AttractionView'
}
</script>

<style scoped>

.hero {
    height: 50vh;
    background-image: url('/src/assets/attractions-hero.jpg');
    background-position: bottom;
}

</style>
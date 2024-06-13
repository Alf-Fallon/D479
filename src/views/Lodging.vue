<template>
    <div id="lodging" class="hero">
        <hgroup>
            <h1>Lodging</h1>
        </hgroup>
    </div>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="about">
        <h2>Island Escapes Await</h2>
        <p>Taniti Island offers a variety of lodging options tailored to suit every traveler's needs. Whether you prefer the rustic charm of beachfront bungalows, the cozy comfort of guesthouses nestled in lush tropical surroundings, or the modern amenities of eco-lodges, you'll find your ideal sanctuary here. Each accommodation choice promises a unique experience, allowing you to immerse yourself fully in the island's serene ambiance and unwind in style.</p>
        <p>From waking up to the gentle sound of waves to enjoying panoramic views of the turquoise waters, every moment spent in our lodging options is designed to enhance your island getaway. Whether you're seeking a romantic escape, a family adventure, or a solo retreat, Taniti Island welcomes you with open arms and promises an unforgettable stay. Come, discover your piece of paradise and create cherished memories amidst the beauty of Taniti Island.</p>
    </section>
    <div class="arrow-spacer">
        <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
    </div>
    <section id="local">
        <h2>Local Favorites</h2>
        <img class="img float-left" src="@/assets/lodging-2.avif">
        <h3 class="clear-right">Cliffside Vista Retreat</h3>
        <p>Perched on the edge of a rugged cliff overlooking the glistening waters of Taniti Island, our Cliffside Vista Retreat offers a one-of-a-kind experience for those seeking ultimate serenity and breathtaking views. Step into your glass-walled sanctuary and feel as though you're suspended in mid-air, with nothing but the vast expanse of the ocean stretching out before you. Watch the sun paint the sky with hues of orange and pink as it sets below the horizon, casting a warm glow over the tranquil waters below.</p>
        <p>Indulge in the luxury of simplicity as you relax in your elegantly appointed room, where every detail is designed to enhance your connection with nature. Fall asleep to the soothing sound of waves crashing against the cliffs below, and awaken to the sight of dolphins frolicking in the distance. With its unparalleled location and unparalleled views, our Cliffside Vista Retreat offers an unforgettable escape from the ordinary, inviting you to immerse yourself fully in the natural beauty of Taniti Island.</p>
        <img class="img float-right" src="@/assets/lodging-3.avif">
        <h3 class="clear-left">SeaRise Chalet</h3>
        <p>Welcome to SeaRise Chalet, where the boundless expanse of the sea meets the rustic charm of island living. Perched gracefully above the tranquil waters of Taniti Island's lagoon, this enchanting retreat offers a serene escape like no other. Step onto your private deck and immerse yourself in the panoramic views of the endless horizon stretching before you, as gentle waves lap against the stilts of your chalet.</p>
        <p>SeaRise Chalet beckons with its understated elegance and unspoiled natural beauty, inviting you to unwind and reconnect with the rhythms of the ocean. Spend your days exploring the vibrant marine life just below the surface or simply basking in the warm embrace of the tropical sun from the comfort of your deck. As evening falls, be captivated by the mesmerizing spectacle of the sunset painting the sky in hues of gold and crimson, casting a magical glow over the tranquil waters below.</p>
        <p>Retreat to the cozy comfort of your chalet, where every detail has been thoughtfully curated to ensure a restful and rejuvenating stay. Fall asleep to the soothing melody of the waves and wake up refreshed and invigorated, ready to embrace another day in paradise. At SeaRise Chalet, the beauty of Taniti Island's coastal paradise unfolds before you, offering a sanctuary where time stands still and unforgettable memories are made.</p>
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
                    <span class="author">Sarah Johnson</span> says...
                </h3>
            </hgroup>
            <p>"I had the most amazing time at <strong>SeaRise Chalet</strong> on Taniti Island! The scenery from my chalet was breathtaking, and the experience of waking up to the sound of the waves was unforgettable. The cozy comfort and panoramic views made my stay truly magical. Can't wait to come back!"</p>
        </article>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">David Lee</span> says...
                </h3>
            </hgroup>
            <p>"Taniti Island exceeded all my expectations, especially my stay at <strong>Sunshine Waterside Haven</strong>! Waking up in a sunny-colored building literally on the water was a dream come true. The vibrant atmosphere and direct access to the lagoon made my experience truly unforgettable. Highly recommend it to anyone looking for a tropical getaway."</p>
        </article>
        <article>
            <hgroup>
                <h3>
                    <img src="@/assets/svg/user.svg" alt="">
                    <span class="author">Emily White</span> says...
                </h3>
            </hgroup>
            <p>"Spent a week at <strong>Cliffside Vista Retreat</strong> on Taniti Island and wished I never had to leave! The breathtaking views from my glass-walled room were simply unparalleled. Falling asleep to the sound of the waves crashing against the cliff below was pure bliss. Already planning my next trip back!"</p>
        </article>
    </section>
</template>

<script>
export default {
    name: 'LodgingView'
}
</script>

<style scoped>

.hero {
    background-image: url('/src/assets/lodging-hero.jpg');
    background-position: bottom;
}

</style>
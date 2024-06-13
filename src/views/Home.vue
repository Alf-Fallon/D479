<template>
  <div id="home" class="hero">
    <hgroup>
      <span>Welcome to</span>
      <h1>Taniti</h1>
    </hgroup>
  </div>
  <div class="arrow-spacer">
    <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
  </div>
  <section id="about">
    <h2>About</h2>
    <p>Welcome to Taniti Island, your slice of paradise in the heart of the tropics! Nestled amidst the azure waters of the Pacific Ocean, Taniti Island is a small, remote gem waiting to be discovered by adventurous souls seeking an authentic tropical escape.</p>
    <p>With its pristine white-sand beaches, lush rainforests, and crystal-clear lagoons teeming with vibrant marine life, Taniti Island offers a sanctuary for nature lovers and sun-seekers alike. Immerse yourself in the tranquil rhythm of island life as you explore secluded coves, hike scenic trails, or simply unwind under the swaying palms.</p>
    <p>But Taniti Island is more than just a picturesque retreat; it's a place rich in culture and tradition. Engage with the warm and welcoming locals, whose hospitality and vibrant customs will leave a lasting impression on your heart. Sample delicious cuisine made from the freshest local ingredients, and experience the rhythmic beats of traditional music and dance that echo through the island's villages.</p>
    <p>Whether you're seeking adventure, relaxation, or a cultural immersion, Taniti Island offers a truly unforgettable experience. So pack your bags, leave your worries behind, and embark on a journey to paradise. Taniti Island awaits, ready to enchant and inspire you at every turn. Come and discover the magic of this hidden tropical oasis.</p>
  </section>
  <div class="arrow-spacer">
    <img src="@/assets/arrow-down.svg" alt="Taniti Island logo">
  </div>
  <section id="resources">
    <h2>Resources</h2>
    <CarouselContainer></CarouselContainer>
  </section>
</template>

<script>
import CarouselContainer from '@/components/CarouselContainer.vue';

export default {
  name: 'HomeView',
  components: {
    CarouselContainer
  }
}
</script>
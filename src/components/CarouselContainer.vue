<template>
    <div class="carousel">
        <CarouselItem id="attractions" link="#/resource/attractions">
            <template v-slot:heading>
                Attractions
            </template>
            <template v-slot:details>
                Discover the hidden treasures and natural wonders that await around every corner on Taniti Island.
            </template>
        </CarouselItem>
        <CarouselItem id="lodging" link="#/resource/lodging" active>
            <template v-slot:heading>
                Lodging
            </template>
            <template v-slot:details>
                Experience unrivaled comfort amidst the serenity of Taniti Island's lodging options.
            </template>
        </CarouselItem>
        <CarouselItem id="transportation" link="#/resource/transportation">
            <template v-slot:heading>
                Transportation
            </template>
            <template v-slot:details>
                Seamlessly navigate the island's beauty with our convenient transportation options, ensuring you never miss a moment of adventure.
            </template>
        </CarouselItem>
    </div>
</template>

<script >
import CarouselItem from './CarouselItem.vue'

export default {
    name: 'CarouselContainer',
    components: {
        CarouselItem
    }
}
</script>
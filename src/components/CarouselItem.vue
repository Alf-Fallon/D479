<template>
    <article :class="{ active: active }">
        <h3>
            <slot name="heading"></slot>
        </h3>
        <div class="detail-body">
            <p>
                <slot name="details"></slot>
            </p>
        </div>
        <div class="detail-action">
            <a :href="link">Learn More</a>
        </div>
    </article>
</template>

<script>
export default {
    name: 'CarouselItem',
    props: {
        link: {
            type: String,
            default: '#'
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>
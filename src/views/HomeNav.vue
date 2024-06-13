<template>
    <nav>
      <li>
        <a href="#home" :class="{ 'active': activeSection === 'home' }" @click="scrollTo($event, 'home')">Home</a>
      </li>
      <li>
        <a href="#about" :class="{ 'active': activeSection === 'about' }" @click="scrollTo($event, 'about')">About</a>
      </li>
      <li>
        <a href="#resources" :class="{ 'active': activeSection === 'resources' }" @click="scrollTo($event, 'resources')">Resources</a>
        <menu>
          <li>
            <a href="#/resource/attractions">Attractions</a>
          </li>
          <li>
            <a href="#/resource/lodging">Lodging</a>
          </li>
          <li>
            <a href="#/resource/transportation">Transportation</a>
          </li>
        </menu>
      </li>
    </nav>
</template>
<script>
export default {
    name: 'HomeNav',
    
  data() {
    return {
      activeSection: null
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = ['home','about','resources'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          this.activeSection = sectionId;
          break;
        }
      }
    },
    scrollTo(event, section) {
      event.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>
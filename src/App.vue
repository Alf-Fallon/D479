<template>
  <header>
    <div class="navbar-brand">
      <img src="@/assets/logo.svg" alt="Taniti Island logo">
    </div>
    <router-view name="navigation"></router-view>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <p>&copy; Ashley Fallon, images provided by <a href="https://unsplash.com">unsplash</a>.</p>
    <ul>
      <li>
        <img src="@/assets/svg/facebook.svg" alt="Facebook">
      </li>
      <li>
        <img src="@/assets/svg/instagram.svg" alt="Instagram">
      </li>
      <li>
        <img src="@/assets/svg/twitter.svg" alt="Twitter">
      </li>
      <li>
        <img src="@/assets/svg/googleplus.svg" alt="Google Plus">
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'App'
}
</script>
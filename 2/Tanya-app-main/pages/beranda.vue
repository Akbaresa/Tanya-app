<template>
  <div>
    <Navbar></Navbar>
    <Beranda></Beranda>
  </div>
</template>

<script>
import Navbar from './Beranda/Navbar/Navbar.vue'
import Beranda from './Beranda/content/Beranda.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Beranda
  }
}
</script>

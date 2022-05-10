<template>
  <Navbar/>
  <router-view />
  <div class="text text-light text-center fixed-bottom p-3">
    Keep Halal and Semangat
    <br/>
    Copyright©
    <a class="text text-light" href="https://instagram.com/lukman.amd7?igshid=YmMyMTA2M2Y=">Lukman Ahmadi</a>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import Navbar from "../src/components/Navbar.vue";
export default {
  components: {
    Navbar,

  },
};
</script>
<style>
.text{
  background: #2e882e;
}
</style>
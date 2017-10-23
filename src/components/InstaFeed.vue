<template>
  <vue-instagram token="accessTokenHere" username="kevinongko" :count="5">
    <template slot="feeds" scope="props">
      <li class="fancy-list"> {{ props.feed.link }} </li>
    </template>
    <template slot="error" scope="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>

</template>
 
<script>
import VueInstagram from 'vue-instagram'
 
export default {
  name: 'App',
 
  components: {
    VueInstagram
  }
}
</script>
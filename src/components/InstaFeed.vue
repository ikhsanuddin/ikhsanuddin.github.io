<template>
  <vue-instagram token="3706573532.67bb69d.02b723f9085448c09583c9d1d040bc4e" username="mdrn.zr" :count="3" class="full-content flex flex-align-center row">
    <template slot="feeds" slot-scope="props">
      <div class="col-12 col-md-4">
        <a :href="props.feed.link" target="_blank">
          <div class="card round ">
            <div class="card-header">
              <img :src="props.feed.user.profile_picture" class="avatar" :alt="props.feed.user.username" width="20px" height="20px" style="border-radius:50%;">
              <b>{{props.feed.user.full_name}}</b>
            </div>
            <div class="card-body">

              <!-- Better using bind -->
              <div class="item-sq" v-if="props.feed.caption && props.feed.caption.text" v-bind:style='{ backgroundImage: "url(" + props.feed.images.standard_resolution.url + ")", }'></div>
              <div class="item-sq round-bottom" v-else v-bind:style='{ backgroundImage: "url(" + props.feed.images.standard_resolution.url + ")", }'>
              </div>
            
            </div>
            <div class="card-desc" v-if="props.feed.caption && props.feed.caption.text">
              {{ props.feed.caption.text }}
            </div>
          </div>
        </a>
      </div>
    </template>

    <template slot="error" slot-scope="props">
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
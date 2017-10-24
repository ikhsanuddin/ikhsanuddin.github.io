<template>
  <vue-instagram token="1704570665.10ff0f9.6246e49d33494c7dba78af1b2b1f981e" username="ican.man" :count="3" class="over-right flex flex-align-center">
    <template slot="feeds" slot-scope="props">
      <div class="col-4">
        <a :href="props.feed.link" target="_blank">
          <div class="card round">
            <div class="card-header">
              <img :src="props.feed.user.profile_picture" class="avatar" :alt="props.feed.user.username" width="20px" height="20px" style="border-radius:50%;">
              <b>{{props.feed.user.full_name}}</b>
            </div>
            <div class="card-body">
              <div class="item-sq" v-bind:style='{ backgroundImage: "url(" + props.feed.images.standard_resolution.url + ")", }'>
              </div>
            </div>
            <div class="card-desc">
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
<style>
  .over-right{
    margin-right: -5%;
    width: 55%;
    transition: all 0.5s ease;
    height: -webkit-fill-available;
  }
  .over-right:hover{
    margin-right: 0;
    width: 65%;
  }
</style>
<script>
import VueInstagram from 'vue-instagram'
export default {
  name: 'App',
  components: {
    VueInstagram
  }
}
</script>
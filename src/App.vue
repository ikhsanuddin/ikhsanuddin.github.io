<template>
  <main id="app">
    <div class="full nav">
      <h1>
        IKHSANUDDIN
      </h1>
    </div>
    <section class="flex flex-align-center flex-justify-center p-4">
      <div class="half">
        <h2>Start your <b>creative journey</b> now!</h2>
        <small>Always bring the beautiful app with vue.js</small><br>
        <button>Request a Demo</button>
      </div>
      <InstaFeed></InstaFeed>
    </section>
  </main>
</template>

<script>
import InstaFeed from './components/InstaFeed'

export default {
  name: 'app',
  components: {
    InstaFeed
  }
}
</script>

<style>
body{
  margin: 0;
  overflow-x: hidden;
}

*{
  webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.round{
  border-radius: 10px;
}

.flex{
  display: flex;
}

.flex-align-center{
  align-items: center;
}

.flex-justify-center{
  justify-content: center;
}

.full{
  width: 100%;
}

.half{
  width: 50%;
}

.nav{
  position: fixed;
  background-color: #ffffff;
  padding-left: 15px;
  text-align: left;
  z-index: 1000;
}

section{
  min-height: 100vh;
}

.item-sq{
  width: 100%;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffffff;
}

.overflow-0{
  overflow: hidden;
}

.card{
  background-color: #ffffff;
  border: 1px solid #fafafa;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}

.card:hover{
  filter: brightness(1.1);
}
.card:active{
  transform: scale(0.97);
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.15);
}

.card .card-desc, 
.card .card-header{
  padding: 15px;
}

.col-12{
  width: 100%;
}

.col-6{
  width: 50%;
}

.col-4{
  width: 33.333%;
}

.col-3{
  width: 25%;
}

.col-2{
  width: 16.667%;
}

.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{
  padding-left: 15px;
  padding-right: 15px;
  float: left;
  clear: none;
}

.p-4{
  padding: 40px;
}
</style>
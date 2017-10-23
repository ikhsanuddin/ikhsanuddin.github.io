<template>
  <main id="app">
    <h1>
      Test
    </h1>
    <section class="flex flex-align-center flex-justify-center">
      <h2>Overview</h2>
      <instagram-feed></instagram-feed>
    </section>
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
body{
  margin: 0;
}

*{
  webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1{
  position: fixed;
  top: 20px;
  left: 20px;
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

section{
  min-height: 100vh;
}

.item-sq{
  width: 100%;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: beige;
}

.overflow-0{
  overflow: hidden;
}

.card{
  background-color: beige;
  border: 1px solid #fafafa;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.05);
  transition: all 0.2s ease;
}

.card:hover{
  filter: brightness(1.02);
}
.card:active{
  transform: scale(0.97);
  box-shadow: 0px 0px 35px 0px rgba(0,0,0,0.05);
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
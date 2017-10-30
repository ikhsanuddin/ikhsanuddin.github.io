<template>
  <main id="app">
    <div class="full nav">
      <h1>
        MDRNZR
      </h1>
    </div>
    <section id="" class="flex flex-align-center flex-justify-between row">
      <div class="col-12 col-md-4">
        <h2>Start your <b>creative journey</b> <small>now!</small></h2>
        <p>Always bring the beautiful app with vue.js</p>
        <button>Request a Demo</button>
      </div>
      <div class="container-dynamic-hover full-content">
        <InstaFeed></InstaFeed>
      </div>
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

<style lang="scss">
  // @import "./custom-bootstrap.scss";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>

<style>

/*Normalize*/

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

/*Text*/
html{
  font-size: 16px;
}

h1,h2,h3,h4,h5,h6{
  font-weight: normal;
  margin-top: 1rem;
}

h1{
  font-size: 3rem;
  margin-bottom: .6rem;
}
h2{
  font-size: 2.5rem; 
  margin-bottom: .5rem;
}
h3{
  font-size: 2rem; 
  margin-bottom: .4rem;
}
h4{
  font-size: 1.7rem; 
  margin-bottom: .3rem;
}
h5{
  font-size: 1.5rem; 
  margin-bottom: .2rem;
}
h6{
  font-size: 1rem; 
  margin-bottom: .1rem;
}
small{
  font-size: 0.8em;
}
body{
  margin: 0;
  overflow-x: hidden;
}

/*Border*/
.round{
  border-radius: 10px;
}

.round-bottom{
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

/*Flexbox*/
.flex{
  display: flex;
}

.flex-align-center{
  align-items: center;
}

.flex-justify-center{
  justify-content: center;
}

.flex-justify-between{
  justify-content: space-between;
}

/*height & width*/
.full{
  width: 100%;
}

.half{
  width: 50%;
}
.full-content{
  height: -webkit-fill-available;
}

/*Component*/

/*Button*/
button{
  cursor: pointer;
  margin-top: 10px;
  color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  border: none;
  background: linear-gradient(135deg,rgba(109,213,237,1) 0%, rgba(33,147,176,1) 100%);
}

/*Navigation*/
.nav{
  position: fixed;
  background-color: rgba(255,255,255,.7);
  padding-left: 15px;
  text-align: left;
  border-bottom: #ffffff;
  z-index: 1000;
}

/*Item*/
.item-sq{
  width: 100%;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffffff;
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

/*Helper*/
.overflow-0{
  overflow: hidden;
}

.p-4{
  padding: 100px;
}

/* Large desktops and laptops */
@media (min-width: 1200px) {}

/* Landscape tablets and medium desktops */
@media (min-width: 992px) /*and (max-width: 1199px)*/ {
  section{
    min-height: 100vh;
    padding-left: 75px;
    padding-right: 75px;
  }
  .container-with-dynamic-hover{
    width: 35%;
  }

  .container-dynamic-hover{
    margin-right: -5%;
    width: 55%;
    transition: all 0.5s ease;
    height: -webkit-fill-available;
  }
  .container-dynamic-hover:hover{
    margin-right: 0;
    width: 65%;
  }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {}

/* Portrait phones and smaller */
@media (max-width: 480px) {}
</style>
<template>
  <div
    :style="{
      position: 'absolut',
      width: '100vw',
      height: '100vh',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      overflow: 'hidden',
      scroll: 'no',

      margin: '0',
    }"
  >
    <div class="cardcontainer">
      <img class="galleryImg" src="../assets/terme-1.jpg" />
    </div>
    <div id="div-main" v-for="item in data" :key="item.id">
      <div style="float: left; margin-left: 5vw">
        <p id="title">{{ item.Title }}</p>
        <p style="margin: 0">{{ item.description }}</p>
      </div>

      <div class="arrows">
        <img class="galleryImg1" src="../assets/pfeile.svg" />
        <img class="galleryImg2" src="../assets/pfeile.svg" />
        <img class="galleryImg3" src="../assets/pfeile.svg" />
      </div>
    </div>
  </div>
</template>

<script >
import jsonData from ".//Online-ticket.json";
export default {
  data() {
    return {
      data: jsonData,
    };
  },
};
</script>

<style scoped>
#div-main {
  margin-top: 25vw;
  margin-left: 3.6458333333333335vw;
  margin-right: 3.6458333333333335vw;
  font-size: 4.2vw;
  background-color: rgb(0, 0, 0, 0.8);
}
.logos {
  position: relative;
  width: 8vw;
  height: auto;
}

@keyframes zoominoutsinglefeatured {
  0% {
    height: 100vh;
    transform: scale(1, 1);
  }
  100% {
    height: 100vh;
    transform: scale(1.2, 1.2);
  }
}
.cardcontainer img {
  position: fixed;
  left: -200vw;
  float: left;
  z-index: -1;
  animation: zoominoutsinglefeatured 8s infinite;
}
@keyframes zoomin1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes zoomin2 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes zoomin3 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.galleryImg1 {
  width: 13vw;
  margin-top: 3vw;
  position: fixed;

  animation: zoomin1 2s infinite;
}
.galleryImg2 {
  margin-top: 6vw;
  width: 13vw;
  position: fixed;

  animation: zoomin2 2s infinite;
}
.galleryImg3 {
  margin-top: 9vw;
  width: 13vw;
  position: fixed;

  animation: zoomin3 2s infinite;
}
.arrows {
  margin-left: 70vw;
  margin-bottom: 23vw;
}
#title {
  margin-top: 0;
  margin: 0;
}
</style>
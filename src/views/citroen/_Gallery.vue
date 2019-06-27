<template>
  <div class="container">
    <div class="row row-gal">
      <div class="col-sm-6 wow animation slide-in-left">
        <div class="ga-header">
          <h3 class="ga-header-title">NEW SUV C5 AIRCROSS</h3>
          <h4 class="ga-header-subtitle">UN SUV CON UNA PERSONALIDAD SINGULAR</h4>
        </div>

        <figure class="ga-figure-mockup">
          <img src="@/assets/img/citroen/gallery/mockup.png" class="wow animation slide-in-fwd-right" alt="Citröen SUV C5">
        </figure>

        <hr>

        <div class="ga-header">
          <h3 class="ga-header-title title-small">ESPECIFICACIONES TÉCNICAS</h3>
          <h4 class="ga-header-subtitle title-small">VERSIÓN 1.5 BLUEHDI 130 S&S BVM6 LIVE</h4>
        </div>
        <ul class="ga-features">
          <li>Con diseño robusto y musculoso el New C5 Aircross se destaca como el SUV más cómodo en su segmento.</li>
          <li>Suspensión Progressive Hydraulic Cushions® y ruedas de 720 mm de diámetro.</li>
          <li>Asientos Advanced Comfort. Tres asientos traseros individuales, corredizos, inclinables y plegables.</li>
          <li>Capacidad de maleta varía de 580 a 720 litros, establece un nuevo estándar.</li>
          <li>Tecnologías de asistencia al conductor y  de conectividad, un SUV de la próxima generación.</li>
        </ul>
      </div>

      <div class="col-sm-6 wow animation slide-in-right">
        <div class="gal-container">
          <div class="gal-item" @click="toggleVideo">
            <img src="@/assets/img/citroen/gallery/thumb-video.jpg">
          </div>
          <div class="gal-item" v-for="(photo, index) in photos" :key="index">
            <img :src="photo" @click="showPhoto()" alt>
          </div>
          <vue-easy-lightbox :visible="visible" :imgs="imgs" @hide="handleHide"></vue-easy-lightbox>
        </div>
      </div>
    </div>

    <div class="gal_video-container" v-show="showVideo">
      <button class="gal_video-close" @click="toggleVideo">x</button>
      <div class="gal_video-body scale-in-center">
        <div class="resp-container">
          
        </div>
        <youtube ref="youtube" :resize="true" :fitParent="true" :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
      </div>
    </div>
  </div>
</template>

<script>
import WOW from 'wow.js'
export default {
  name: "Gallery",
  data() {
    return {
      videoId: "dd02YtofQ0g",
      playerVars: {
        autoplay: 0,
        controls: 0,
        showinfo: 0
      },
      showVideo: false,
      visible: false,
      imgs: [],
      photos: [
        "https://fotos.chileautos.cl/img/landing/citroen/gallery/foto01.jpg",
        "https://fotos.chileautos.cl/img/landing/citroen/gallery/foto02.jpg",
        "https://fotos.chileautos.cl/img/landing/citroen/gallery/foto03.jpg",
        "https://fotos.chileautos.cl/img/landing/citroen/gallery/foto04.jpg",
        "https://fotos.chileautos.cl/img/landing/citroen/gallery/foto05.jpg"
      ]
    };
  },
  created() {
const wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animation', // default
    offset:       250,          // default
    mobile:       true,       // default
    live:         true        // default
  })

  wow.init();
},
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  methods: {
    playVideo() {
      this.$refs.youtube.player.playVideo()
    },
    stopVideo() {
       this.$refs.youtube.player.stopVideo()
    },
    playing() {
      console.log("o/ we are watching!!!");
    },
    showPhoto() {
      this.imgs = [];
      this.imgs.push(event.target.src);
      this.show();
    },
    toggleVideo() {
      this.showVideo = !this.showVideo;
      if(this.showVideo) {
         this.playVideo()
         return
      }
      this.stopVideo()
    },
    handleHide() {
      this.visible = false;
    },
    show() {
      this.visible = true;
    }
  }
};
</script>

<style>
</style>

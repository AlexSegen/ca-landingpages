<template>
  <div class="container">
    <div class="row row-gal">
      <div class="col-sm-6 wow animation slide-in-left">
        <div class="ga-header">
          <h3 class="ga-header-title">All New Veloster</h3>
          <h4 class="ga-header-subtitle">Fun with a capital N. </h4>
        </div>

        <figure class="ga-figure-mockup">
          <img :src="getImgUrl(pickedColor)" class="wow animation slide-in-fwd-right" alt="Citröen SUV C5">
          <figcaption class="text-center">
            <span class="dot dot-white" @click="changePickedColor('white.png')"></span>
            <span class="dot dot-grey" @click="changePickedColor('grey.png')"></span>
            <span class="dot dot-blue" @click="changePickedColor('blue.png')"></span>
            <span class="dot dot-red" @click="changePickedColor('red.png')"></span>
            <span class="dot dot-yellow" @click="changePickedColor('yellow.png')"></span>
          </figcaption>-
        </figure>


        <hr>

        <div class="ga-header">
          <h3 class="ga-header-title title-small">Specifications</h3>
          <h4 class="ga-header-subtitle title-small">2020 VELOSTER N</h4>
        </div>
        <ul class="ga-features">
          <li>1.6 T-GDi Gasoline Turbo Engine</li>
          <li>8" Touch screen display: Projecting key driving information closer to eye level, the available pop-up HUD helps keep you focused on the road ahead.</li>
          <li>Fine-tune your performance thrills by customizing your own drive mode. Calibrate each of the seven chassis and powertrain settings. </li>
          <li>19-inch alloy wheels</li>
          <li>Pirelli P Zero™ tires</li>
        </ul>
      </div>

      <div class="col-sm-6 wow animation slide-in-right">
        <div class="gal-container">
          <div class="gal-item" v-for="(photo, index) in photos" :key="index">
            <img :src="getThumbUrl(photo)" @click="showPhoto()" alt style="border-radius: 4px;">
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
        "thumb0.jpg",
        "thumb1.jpg",
        "thumb2.jpg",
        "thumb3.jpg",
        "thumb4.jpg",
        "thumb5.jpg",
      ],
      pickedColor: "white.png"
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
    changePickedColor(val) {
      this.pickedColor = val;
    },
    getImgUrl(pic) {
      return require('@/assets/img/ext/'+pic)
    },
    getThumbUrl(thumb) {
      return require('@/assets/img/thumbs/'+thumb)
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
  .dot {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid lightgrey;
    display: inline-block;
    margin: 0 5px 0 5px;
  }

  .dot-white {
    background-color: #FFF;
  }

  .dot-grey {
    background-color: #363943;
  }

  .dot-red {
    background-color: #7E0101;
  }

  .dot-yellow {
    background-color: #DCB94D;
  }

  .dot-blue {
    background-color: #17386A;
  }
</style>

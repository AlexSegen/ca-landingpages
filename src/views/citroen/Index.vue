<template>
  <div class="citroen-landing " id="top">
    <section class="c5-section bg vh100">
      <div class="container-fluid ">
        <div class="row mb-5">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="c5-header" style="margin-top:40px">
              <h1 class="c5-header-h1">VELOSTER N</h1>
              <h2 class="c5-header-h2">Our performance enthusiast hatch.</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-4 d-none d-md-block col-md-4 d-none d-md-block pt-5">
            <Form :lead="lead"/>
          </div>
          <div class="col-md-6">
          </div>
        </div>
      </div>

      <go-next v-if="section.gallery" goto="gallery"/>
    </section>

    <section class="c5-section ga-section vh100" id="gallery" v-if="section.gallery">
      <gallery/>

      <go-next goto="news" v-if="section.news"/>

      <div class="lp_contact-bar " v-if="section.news">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="lp_contact-bar-text">
              Un SUV Ultra-Confortable y ajustable <br>
                <span class="text-muted">Equipado para llevarte donde quieras.</span></div>
              </div>
            <div class="col-md-4 d-none d-md-block"><a href="#top" class="btn btn-theme btn-contact btn-shadow" v-smooth-scroll>COTIZAR AHORA</a></div>
            <div class="col-md-4 d-md-none text-center"><button type="button" class="btn btn-theme btn-contact btn-shadow" @click="toggleForm" v-smooth-scroll>COTIZAR AHORA</button></div>
          </div>
        </div>
      </div>

    </section>

    <section class="c5-section news-section section-padding vh100" id="news" v-if="section.news">
      <news class="mb-40"/>

      <go-next class="mt-40" goto="top" :goup="true"/>
    </section>

    <button
      class="btn btn-toggle d-block d-sm-none d-xs-none"
      type="button"
      :class="{ 'shown': toggle }"
      v-text="toggle ? 'Cerrar Formulario': 'COTIZAR AHORA'"
      @click="toggleForm"
    >COTIZAR</button>

    <div class="form-overlap animation fade-in" :class="{ 'open': toggle }">
      <Form :lead="lead"/>
    </div>
  </div>
</template>
<script>
import config from "@/config";
import { mapActions } from "vuex";
import News from "@/views/citroen/_News";
import GoNext from "@/components/_goNext";
import Gallery from "@/views/citroen/_Gallery";
import Form from "@/components/citroen/Formulario";

export default {
  name: "Landing",
  components: {
    Form,
    Gallery,
    News,
    GoNext
  },
  data() {
    return {
      section: {
        gallery: true,
        news: false
      },
      toggle: false,
      lead: {
        asunto: "Solicitud de Cotización desde Chileautos.cl",
        plantilla: config.template,
        destinatarios: config.destinatarios,
        metadata: {
          Nombre: "",
          apellido: "",
          rut: "",
          fonoCel: "",
          email: "",
          region: 0,
          ciudad: 0,
          modelo: "Hyundai Veloster 2020",
          comentarios: "",
          Marca: "",
          nombreCiudad: "",
          destinatarios: config.destinatarios.to
        },
        mensajeOut: config.mensajeOut
      }
    };
  },
  methods: {
    ...mapActions(["getRegions"]),
    toggleForm() {
      this.toggle = !this.toggle;
    }
  },
  created() {
    this.getRegions();
  }
};
</script>


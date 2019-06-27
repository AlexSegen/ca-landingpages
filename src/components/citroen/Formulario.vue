<template>
<div class="form-container-v2 theme02 animation fade-in">
      <div class="form-header">Ingresa tus datos</div>
    <div v-if="success" class="alert alert-success text-center mt-3"><strong>¡Gracias por contactarnos!</strong> nos comunicaremos contigo muy pronto.</div>
    <form v-show="!success" @submit.prevent="handleSubmit()">
        
        <div class="form-loader " v-if="loading">
          <span>
            <div class="runIn">
              <img src="@/assets/img/wheel_b-w.png" alt="Loading" class="loader-wheel">
            </div>
            Enviando datos...
          </span>
        </div>
        
        <div class="fields">
          <div class="row">
            <div class="col --col">
              <div class="form-group" :class="{ 'has-error': submitted && errors.has('Nombre') }">
                <input type="text" placeholder="Nombre" class="form-control form-control-sm"
                id="nombre"
                name="Nombre"
                v-model="lead.metadata.Nombre"
                v-validate="'required'"
                >
                <div class="invalid-input"
                v-if="submitted && errors.has('Nombre')"
                v-b-tooltip.hover :title="errors.first('Nombre')"
                data-placement="left"
                ></div>
              </div>
            </div>
            <div class="col --col">
              <div class="form-group" :class="{ 'has-error': submitted && errors.has('apellido') }">
                <input type="text" placeholder="Apellido" class="form-control form-control-sm"
                id="apellido"
                name="apellido"
                v-model="lead.metadata.apellido"
                v-validate="'required'">
                <div class="invalid-input"
                v-if="submitted && errors.has('apellido')"
                v-b-tooltip.hover :title="errors.first('apellido')"
                data-placement="left"></div>
              </div>
            </div>
          </div>

          <div class="form-group" :class="{ 'has-error': submitted && errors.has('rut') }">
            <input type="text" placeholder="RUT" class="form-control form-control-sm"
            id="rut"
            name="rut"
            v-model="lead.metadata.rut"
            v-validate="{ required: true, min: 9 }">
            <div class="invalid-input"
            v-if="submitted && errors.has('rut')"
            v-b-tooltip.hover :title="errors.first('rut')"
            data-placement="left"
            ></div>
          </div>
          <div class="form-group" :class="{ 'has-error': submitted && errors.has('email') }">
            <input type="email" placeholder="Email" class="form-control form-control-sm"
              id="Mail"
              name="email"
              v-model="lead.metadata.email"
              v-validate="'required|email'">
            <div class="invalid-input"
            v-if="submitted && errors.has('email')"
            v-b-tooltip.hover :title="errors.first('email')"
            data-placement="left"
            ></div>
          </div>
          <div class="form-group" :class="{ 'has-error': submitted && errors.has('fonoCel') }">
            <input type="text" placeholder="Teléfono" class="form-control form-control-sm"
              id="telefono"
              name="fonoCel"
              v-model="lead.metadata.fonoCel"
              v-validate="{ required: true, min: 9 }">
            <div class="invalid-input"
            v-if="submitted && errors.has('fonoCel')"
            v-b-tooltip.hover :title="errors.first('fonoCel')"
            data-placement="left"
            ></div>
          </div>

          <div class="row">
            <div class="col --col">
              <div class="form-group" :class="{ 'has-error': submitted && errors.has('region') }">
                <select class="form-control form-control-sm" :class="{ 'waiting': lead.metadata.region == 0 }"
                    id="region"
                    name="region"
                    v-model="lead.metadata.region"
                    v-validate="{ required: true, is_not: 0 }"
                    @change="loadCities()"
                    >
                  <option value="0">Región</option>
                  <option value="99">Región de prueba</option>
                    <template v-for="(region, regionIndex) in regions">
                        <option
                        :key="'regionKey_'+ regionIndex"
                        :value="region.codRegion"
                        >{{region.region }}</option>
                    </template>
                </select>
                <div class="invalid-input"
                v-if="submitted && errors.has('region')"
                v-b-tooltip.hover :title="errors.first('region')"
                data-placement="left"></div>
              </div>
            </div>
            <div class="col --col">
              <div class="form-group" :class="{ 'has-error': submitted && errors.has('ciudad') }">
                <select class="form-control form-control-sm" :class="{ 'waiting': lead.metadata.ciudad == 0 }"
                id="ciudad"
                name="ciudad"
                @change="getCityName()"
                v-model="lead.metadata.ciudad"
                v-validate="{ required: true, is_not: 0 }">
                  <option value="0">Ciudad</option>
                  <option value="99" data-ciudad="Ciudad de Prueba">Ciudad de Prueba</option>
                    <template v-for="(city, cityIndex) in cities">
                    <option
                        :key="'cityKey_'+ cityIndex"
                        :value="city.codCiudad"
                        :data-ciudad="city.ciudad"
                    >{{city.ciudad }}</option>
                    </template>
                </select>
                <div class="invalid-input"
                v-if="submitted && errors.has('ciudad')"
                v-b-tooltip.hover :title="errors.first('ciudad')"
                data-placement="left"></div>
              </div>
            </div>
          </div>

          <div class="form-group" :class="{ 'has-error': submitted && errors.has('comentarios') }">
            <textarea placeholder="Comentarios" cols="30" rows="2" class="form-control"
              id="Comentarios"
              name="comentarios"
              v-model="lead.metadata.comentarios"
              v-validate="{ required: true, min: 10 }"
            ></textarea>
            <div class="invalid-input"
              v-if="submitted && errors.has('comentarios')"
              v-b-tooltip.hover :title="errors.first('comentarios')"
              :placement="'left'"></div>
          </div>

          <input type="hidden" name="" v-model="origen">
          <input type="hidden" name="" v-model="lead.metadata.modelo">

          <div class="form-group mb-0">
            <div v-if="error" class="alert alert-warning text-center mt-3"><strong>¡Lo sentimos!</strong> Algo falló al enviar tus datos. Por favor, <u>reintenta</u>.</div>
            <button type="submit" class="btn btn-theme btn-block">Solicitar Cotización</button>
          </div>
        </div>
      </form>
      <div
        class="form-footer"
      >El uso de este sitio web implica la aceptación de los Términos y Condiciones y de las Políticas de Privacidad de Chileautos.cl Copyright © {{year}} Chileautos Chile SpA.</div>
    </div>
</template>

<script>
import Api from "@/services/api.services"
import { mapGetters, mapActions } from "vuex";
import spanish from "vee-validate/dist/locale/es";
export default {
  name: "leadform",
  components: {},
  data() {
    return {
      year: new Date().getFullYear(),
      loading: false,
      success: false,
      error: false,
      origen: "landing",
      submitted: false
   };
  },
  props: ['lead'],
   computed: {
      ...mapGetters(["regions", "cities"])
   },
  methods: {
    ...mapActions(["getCities"]),
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.generatelead();
        }
      });
    },
    generatelead() {
       this.loading = true;
       console.log(this.lead)
       Api.createLead(this.lead).then( ()=> {
          this.success = true;
       }).catch(error => {
         this.error = true;
       }).finally(() => {
          this.loading = false;
       })
    },
    loadCities(){
       this.getCities(this.lead.metadata.region)
    },
    getCityName() {
      if(event.target.options.selectedIndex > -1) {
        this.lead.metadata.nombreCiudad = event.target.options[event.target.options.selectedIndex].dataset.ciudad
      }
    }
  },
  metaInfo() {
    return {
      title: "NEW SUV C5 AIRCROSS"
    };
  },
  created() {
    this.origen = this.$route.query.camp;

    this.$validator.localize("es", {
      messages: spanish.messages
    });

    this.$validator.localize("es");
  }
};
</script>
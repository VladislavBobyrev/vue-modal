<template>
  <the-modal v-if="modal"  @close="modal = false"></the-modal>
  <div class="container">
    <h1>{{$i18n('app.text')}}</h1>
    <div class="card">
      <h2> {{$i18n('app.title')}}</h2>
      <button class="btn primary" @click="changelang">{{$i18n('app.changeBtn')}}</button>
       
      <select class="select" name="languge" v-model="selected">
        <option v-for="option in options" :value="option.value">
          {{option.text}}          
        </option>
      </select>
      
      <button class="btn warning" @click="modal = true">{{$i18n('app.btnModal')}}</button>
    </div>

    
    
  </div>
</template>

<script>
import TheModal from "./TheModal.vue"
export default {
  inject: ['changeI18n'],
  data() {
    return{
    selected: 'ru',
    options: [
       { text: 'Русский', value: 'ru' },
      { text: 'English', value: 'en' },
      { text: 'France', value: 'fr' },
      { text: 'China', value: 'ch' },
    ],
    modal: false,
    }

  },
  methods: {
    changelang(){
      this.changeI18n(this.selected)
      this.$forceUpdate()
    },
  },
  components:{
    TheModal
  }

}
</script>

<style>

</style>
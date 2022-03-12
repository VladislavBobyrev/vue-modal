<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <section class="modal">
    <h2>{{$i18n('app.modalTile')}}</h2>
    <p>{{$i18n('app.modalSubTitle')}}</p>
    <p>{{$i18n('app.modalMessage')}}</p>
  </section>
</template>

<script>
export default {
  emits: ['close'],
  inject: ['changeI18n'],
}
</script>

<style>

</style>
<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Aprovechamiento, tratamiento y/o disposición final
    p Es necesario dejar consignado el tipo de aprovechamiento, tratamiento y/o disposición final que se utilizará para los residuos generados en la organización. Estos procesos deben ser seleccionados en función de las características de los residuos, las posibilidades de la organización, las alternativas existentes y las preferencias, en cumplimiento con la normatividad ambiental y sanitaria vigente, y propendiendo siempre por la opción o estrategia que genere un menor impacto ambiental. 
    p En la siguiente tabla se presentan algunas alternativas de manejo que pueden aplicarse a los residuos:
    .row.justify-content-center.mt-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Tabla 8 
          span Técnicas de manejo por tipo de residuo

        img(src='@/assets/curso/tema9/10.png' alt='AvatarTop')

  
</template>

<script>
export default {
  name: 'Tema10',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tabla-a thead
  background-color: #80CAB6
.tarjeta.color-acento-contenido
  background-color: #ECF7F4
.tarjeta-avatar > img
  width: 40%
  margin-top: 40px
.tarjeta-avatar .tarjeta
  padding-top: 20px!important
</style>

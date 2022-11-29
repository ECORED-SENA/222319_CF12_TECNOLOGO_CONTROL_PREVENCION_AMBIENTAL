<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Control de plagas y técnicas de desinfección
    img(src='@/assets/curso/tema8/1.png' alt='AvatarTop')
    p Por el riesgo infeccioso que puede encontrarse en el manejo de residuos sobre todo en el cuarto de almacenamiento de residuos y los puntos ecológicos puede atraer vectores causantes de enfermedades al personal que realiza las labores de aseo, por tanto, es importante tener un programa de control de plagas y un protocolo de limpieza y desinfección a estas áreas.
    separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Control de plagas 
    p medidas, para poder comprender es necesario revisar algunos conceptos:
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>

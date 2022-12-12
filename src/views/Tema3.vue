<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estrategias de formación y educación
    img(src='@/assets/curso/tema3/1.jpg' alt='AvatarTop')
    p.mt-3 En la organización es recomendable establecer procesos de sensibilización y capacitación dirigidas a todo su personal, con el propósito de dar a conocer los aspectos relacionados con el manejo integral de los residuos, en especial los procedimientos específicos, funciones, responsabilidades, mecanismos de coordinación, así como las directrices establecidas en la normatividad vigente. 
    p Los temas que pueden desarrollarse en el programa de capacitación son: 
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q1.svg' alt='AvatarTop')
        p.text-center Prevención en la generación de residuos y reducción en el origen. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q2.svg' alt='AvatarTop')
        p.text-center Talleres de segregación de residuos, recolección, almacenamiento, simulacros de aplicación del plan de contingencia. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q3.svg' alt='AvatarTop')
        p.text-center Legislación ambiental vigente. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q4.svg' alt='AvatarTop')
        p.text-center Riesgos ambientales por el inadecuado manejo de los residuos. 
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q5.svg' alt='AvatarTop')
        p.text-center Conocimiento del organigrama y responsabilidades asignadas. 

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q6.svg' alt='AvatarTop')
        p.text-center Manejo de residuos o desechos peligrosos 

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema3/q7.svg' alt='AvatarTop')
        p.text-center Beneficios ambientales por el adecuado manejo de residuos 
    p.mt-3 Es importante que la capacitación sea continua, para lo cual se puede establecer un cronograma de actividades en donde estructure el proceso y planifique las distintas actividades programadas para tal fin, empleando métodos como talleres, carteleras, actividades lúdicas, envío de correos electrónicos, altavoz al interior de la organización, entre otros. 
    .row.mt-3
      .col-lg-6
        .row.p-5.colort3
          p.mb-0 Estos procesos de formación y capacitación están orientados a fortalecer a la organización en aquellas actividades que presenten falencias. Es importante que quede el soporte o certificación de las actividades desarrolladas, que incluya como mínimo los siguientes elementos: el tema abordado, los listados y firmas de las personas asistentes, la intensidad de la capacitación y la fecha de realización, adicional puede agregar las evidencias como fotografías. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p. 17) 
      .col-lg-6
        img(src='@/assets/curso/tema3/2.png' alt='AvatarTop')

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

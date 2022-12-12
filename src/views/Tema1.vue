<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales
    p A continuación, se presentan conceptos importantes que debe apropiar:
    .row.bg1
      .col-3
        .row.colorazul.p-2
          h4.text-white.text-center.mb-0 Manejo integral de residuos
      p.mt-3 Es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos. Decreto 1713. Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002, p.3) 
      .row.justify-content-center.mt-2
        .col-lg-10

          .titulo-sexto.color-acento-contenido
            h5 Figura 2
            span Manejo integral de residuos
          img(src="@/assets/curso/tema1/1.svg", alt="Texto que describa la imagen")
          figcaption.mt-4.text-center.fondob Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11) 
    .col-4
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 Gestión integral de residuos sólidos
    p.mt-2 Es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final. Decreto 1713. Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002, p.3) 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Manejo Integral de Residuos implica la planeación y cobertura de las actividades relacionadas con los residuos, desde la generación hasta la disposición final, incluyendo los aspectos de segregación, movimiento interno, almacenamiento, desactivación, recolección, transporte y tratamiento, con lo cual se pretende evitar y minimizar la generación de residuos e incrementar el aprovechamiento de éstos, de tal suerte que cada vez sea menor la cantidad de residuos a disponer, como se puede observar en el esquema de jerarquización  de la gestión de los residuos. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11) 
    .row.justify-content-center.mt-5
      .col-lg-10

        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span Jerarquía en la gestión de residuos
        img(src="@/assets/curso/tema1/3.svg", alt="Texto que describa la imagen")
        figcaption.mt-4.text-center Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.11)
    .row.bg2.justify-content-center
      .col-lg-10
        h4 Gestión
        p Es el conjunto de actividades orientadas a dar a los residuos sanitarios el destino final adecuado de acuerdo con las características de cada residuo. 
        h4 Gestión Interna de residuos
        p Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización. Presenta:
        .row.justify-content-center
          .col-lg-10
            .row.p-2.colort1.align-items-center.justify-content-center
              .col-lg-1
              .col-lg-2
                img.wi1(src="@/assets/curso/tema1/4.svg", alt="Texto que describa la imagen")
              .col-lg-9
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Dotación de contenedores donde depositar los residuos.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Transporte de los residuos al almacén central de residuos sanitarios del centro. 
          h4.mt-4 Gestión Externa de residuos
          p son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación.  Presenta:1) Recogida y transporte a Plantas de Transferencia o Tratamiento. 2) Tratamiento y eliminación. Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.”                                              
</template>

<script>
export default {
  name: 'Tema1',
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
.lista-ol--cuadro__vineta
  color: #12263F!important
</style>

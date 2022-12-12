<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p A partir de un diagnóstico del manejo de los residuos se realiza la planeación e implementación de la gestión ambiental en el manejo de los residuos según la normativa y las acciones de mejora. El plan de gestión integral de residuos se divide en dos:  gestión interna y gestión externa, en este material se tendrá en cuenta la gestión integral de los residuos a nivel interno.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Esquema para la elaboración del plan de gestión integral de residuos
    .row.colori1.justify-content-center
      .col-lg-10
        img(src="@/assets/curso/intro/1.svg", alt="Texto que describa la imagen")
        figcaption.mt-4 Nota. Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008, p. 28) 
    p El plan de gestión integral de residuos en lo relación a la gestión interna hace relación a:
    .row.mt-4
      .col-lg-6
        img(src="@/assets/curso/intro/2.png", alt="Texto que describa la imagen")
      .col-lg-6
        .row.colori.p-3
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Compromiso, organización, objetivos y metas del plan de gestión de residuos.
            li 
              i.fas.fa-check
              | Estrategias de prevención y minimización
            li 
              i.fas.fa-check
              | Separación en la fuente que consiste en: clasificación de los residuos, color de los recipientes, etiquetado y embalado.
            li 
              i.fas.fa-check
              | Recolección y transporte interno de los residuos al cuarto de almacenamiento.
            li 
              i.fas.fa-check
              | Almacenamiento temporal de los residuos en la organización.
            li 
              i.fas.fa-check
              | Planeación en el aprovechamiento, tratamiento y/o disposición final de los residuos. 
            li 
              i.fas.fa-check
              | Capacitaciones internas de formación y educación ambiental en la gestión de los residuos en la organización.
            li 
              i.fas.fa-check
              | Plan de contingencia y seguridad y salud en el trabajo, manejo de elementos de protección personal.
            li.mb-0
              i.fas.fa-check
              | Plan de seguimiento de la gestión de los residuos.
    p.mt-3 Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del valle de aburrá (2008, p.28)
    .row.mt-2.colori2.align-items-center.p-2
      .col-lg-5
        img(src="@/assets/curso/intro/3.svg", alt="Texto que describa la imagen")
      .col-lg-7 
        p En el material complementario puede revisar los videos “Programa Integral de Residuos Sólidos PGIRS en IPSE” y “¿Cómo hacer un manejo integral de los residuos?”
        .row.justify-content-center
          .col-lg-10
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Programa Integral de Residuos Sólidos PGIRS en IPSE</strong>
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Cómo hacer un manejo integral de los residuos</strong>
                                      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.lista-ul--color li > i:first-of-type
  color: #0540B7
</style>

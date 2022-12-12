<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Almacenamiento de residuos
    p Un sitio de almacenamiento de residuos puede ser una bodega separada por residuos o en una sola pero dividida por compartimentos, también los hay estilo lockers o en buggies de gran tamaño, a continuación, se relaciona un sitio de almacenamiento de residuos estándar que se utilizan, de acuerdo con criterios de almacenamiento normativos para cuartos de almacenamiento.
    .row.justify-content-center.mt-3
      .col-lg-10
        .row
          .col-lg-6
            h5.mb-1 Figura 20 
            p Sitio de almacenamiento de residuos ejemplo 1
            img(src='@/assets/curso/tema7/1.png', alt='Texto que describa la imagen')
            figcaption.mt-1 Nota. Almacenamiento de residuos peligrosos. SOCOAM (s.f)
          .col-lg-6
            h5.mb-1 Figura 21
            p Sitio de almacenamiento de residuos ejemplo 2
            img(src='@/assets/curso/tema7/2.png', alt='Texto que describa la imagen')
            figcaption.mt-1 Nota. Unidad de verificación en temas de auditorías ambientales. Mario Duran Herrera (2005, p. 17) 
        h5.mb-1.mt-4 Figura 22
        p Cuarto de almacenamiento de residuos 
        img(src='@/assets/curso/tema7/3.png', alt='Texto que describa la imagen')
        figcaption.mt-2 Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p.71) 
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/4.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Los sitios de almacenamiento para residuos no peligrosos y residuos peligrosos - RESPEL están diseñados para acopiar los residuos en un sitio seguro por un periodo de tiempo determinado, a la espera de su gestión externa. 
          br
          br
          | Es importante que la organización revise las características que presenta el sitio de almacenamiento y en caso de no presentarse conformidad con lo establecido en las normas vigentes sobre la materia, adopte las acciones pertinentes. 
    p.mt-3 Para el almacenamiento interno de residuos debe contarse con un sitio de almacenamiento central y en caso de ser necesario con sitios de almacenamiento intermedios. Estos últimos se justifican cuando la organización presenta áreas grandes de generación o cuando se ubican en diferentes pisos de la edificación. 
    p Se recomienda establecer un lugar de almacenamiento de residuos dentro de la organización, evaluando las características que debe cumplir como:
    .row.justify-content-center
      .col-lg-10
        .row.bgt7.p-3
          .col-lg-1
          .col-lg-3
            img(src='@/assets/curso/tema7/5.svg', alt='Texto que describa la imagen')

          .col-lg-8
            ul.lista-ul--color.lista-ul
              li
                i.fas.fa-check
                | Área de acceso restringido, con elementos de señalización.
              li
                i.fas.fa-check
                | Cubierto para protección de aguas lluvias.
              li
                i.fas.fa-check
                | Iluminación y ventilación adecuadas.
              li
                i.fas.fa-check
                | Paredes lisas de fácil limpieza, pisos duros y lavables con ligera pendiente al interior.
              li
                i.fas.fa-check
                | Equipo de extinción de incendios.
              li
                i.fas.fa-check
                | Acometida de agua y drenajes para lavado.
              li
                i.fas.fa-check
                | Elementos que impidan el acceso de vectores, roedores, etc.
              li
                i.fas.fa-check
                | Disponer de una báscula y llevar un registro para el control de la generación de residuos.
              li
                i.fas.fa-check
                | A la entrada del lugar de almacenamiento debe colocarse un aviso a manera de cartelera, identificando claramente el sitio de trabajo, los materiales manipulados, el código de colores y los criterios de seguridad, implementándose un estricto programa de limpieza, desinfección y control de plagas. 
    .row.mt-4.align-items-center
      .col-lg-6
        img(src='@/assets/curso/tema7/6.png', alt='Texto que describa la imagen')

      .col-lg-6 
        p Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p. 8) 
        p Los residuos peligrosos que por su contenido puedan reaccionar entre sí de forma violenta, no deben ser almacenados conjuntamente, ya que, en caso de incendio, caídas, roturas o cualquier otro tipo de incidente, los recipientes que los contienen pueden resultar dañados y los productos contenidos en ellos pueden entrar en contacto produciendo reacciones peligrosas.
    p.mt-3 En el siguiente gráfico se presenta un resumen de las incompatibilidades más características para los residuos peligrosos:
    .row
      .col-lg-1
      .col-lg-5
        h5.mt-4.mb-1 Figura 23
        p Matriz de incompatibilidad de residuos peligrosos
        img(src='@/assets/curso/tema7/7.png', alt='Texto que describa la imagen')
        figcaption.mt-2 Nota. Manual para el manejo integral de residuos sólidos en el valle de aburrá. Área metropolitana del valle de aburra (2016, p. 22) 
    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Figura 24 
          span Matriz de incompatibilidad de residuos químicos
        img(src='@/assets/curso/tema7/8.png', alt='Texto que describa la imagen')
        figcaption.mt-2 Nota. Matriz de incompatibilidad .Universidad Javeriana (2017)
        .tarjeta.color-primario.p-3.mb-5.mt-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema6/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tips de almacenamiento de residuos
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download        




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

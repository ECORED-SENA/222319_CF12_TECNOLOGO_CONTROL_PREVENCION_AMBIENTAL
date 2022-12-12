<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Recolección y transporte interno de residuos
    p Se deben diseñar rutas de recolección interna de residuos según la distribución de los puntos de generación y que cubran la totalidad de la organización, estableciendo horarios y frecuencias e identificando en cada uno de estos lo siguiente: 
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort1.justify-content-center
          .col-lg-10
            ul.lista-ul--color.lista-ul
              li
                i.fas.fa-check
                | Localización, número y capacidad de los recipientes donde se encuentran los residuos. 
              li.mb-0
                i.fas.fa-check
                | Tipo de residuo generado, lo cual está asociado al color del recipiente. 
    p.mt-3 Esta actividad puede realizarse con la ayuda de planos de la edificación donde funciona la organización, creando un plano de ruta sanitaria.
    p La frecuencia de recolección interna dependerá de la capacidad de almacenamiento y el tipo de residuo generado. Los elementos empleados para la recolección de residuos peligrosos son de uso exclusivo para este fin. 
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El tiempo de permanencia de los residuos en los puntos de generación debe ser el mínimo posible, especialmente en áreas donde se generan residuos peligrosos. En el evento de un derrame de residuos peligrosos, se efectuará de inmediato acciones correctivas, conforme a las recomendaciones dadas por los proveedores en las hojas de seguridad de cada material. Deben establecerse los procedimientos para este tipo de acontecimientos y debe quedar consignado en el Plan de Contingencias y el personal de recolección del residuo derramado debe saber cómo actuar ante la contingencia.
    .row.align-items-center.mt-4
      .col-lg-6 
        p Es necesario disponer de un lugar adecuado para el almacenamiento, lavado, limpieza y desinfección de los recipientes, vehículos de recolección y demás implementos utilizados para la recolección interna. Los recipientes deben ser lavados, desinfectados y secados periódicamente, permitiendo su uso en condiciones sanitarias adecuadas. Manual para el manejo integral de residuos sólidos en El Valle de Aburra. Área Metropolitana del Valle de Aburrá (2016, p.18) 
        p La ruta de recolección requiere estar en plano y estar publicada en un lugar visible y estratégico y verse en el plano la ubicación de los puntos ecológicos por colores de segregación y la demarcación de la ruta de residuo no peligroso y la ruta de residuo peligroso, los horarios y frecuencias de recolección y la capacidad de los recipientes. En la siguiente gráfica se presenta un ejemplo.
      .col-lg-6
        img(src='@/assets/curso/tema6/2.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Figura 18
          span Ruta sanitaria ejemplo

        img(src='@/assets/curso/tema6/3.png', alt='Texto que describa la imagen')
        figcaption Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a microgeneradores. Área Metropolitana de Bucaramanga (2002, p.7)
        .row.justify-content-center.mt-5
          .col-lg-6
            .row.p-5.colort3
              p Los residuos son transportados, depositados y almacenados en los centros de acopio temporal y/o “<i>Shut</i>” de residuos dispuesto en la organización o localización a la espera de la recolección de la empresa externa local de servicio público de aseo si es residuo no peligroso no aprovechable los conocidos como ordinarios y comunes y de gestores ambientales externos para los residuos peligrosos, de reciclaje y manejo especial. 
              p.mb-0 El personal que realice la recolección de residuos lo debe hacer con los elementos de protección personal adecuados para la labor, y deben efectuar controles puntuales para verificar que los residuos estén bien separados y segregados.
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mt-4
              h5 Figura 19
              span Equipos de recolección
            p.mb-1 Los equipos de recolección son:

            img(src='@/assets/curso/tema6/4.png', alt='Texto que describa la imagen')
            figcaption Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p. 73) 
        p.mt-3 Considere a continuación unos tips referentes al movimiento interno de residuos:
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema6/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tips referentes al movimiento interno de residuos
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
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

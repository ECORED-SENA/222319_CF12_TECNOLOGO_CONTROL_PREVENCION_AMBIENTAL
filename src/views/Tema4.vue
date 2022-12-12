<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Prevención y minimización de residuos
    img(src='@/assets/curso/tema4/1.jpg' alt='AvatarTop')
    p.mt-3 La prevención y la minimización en la generación de los residuos desde su origen es la forma más eficaz de reducir la cantidad de residuos a manejar, el costo asociado a su manipulación y los impactos a la salud y al ambiente. 
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La adopción de buenas prácticas")
        .row.justify-content-center
          .col-xl-5
            h4 La adopción de buenas prácticas
            p La adopción de buenas prácticas, la optimización de los procesos, el cambio a tecnologías limpias, la sustitución de materias primas y la modificación de productos. 
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/2.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La reutilización de elementos")
        .row.justify-content-center
          .col-xl-5
            h4 La reutilización de elementos
            p La reutilización de elementos que se generan en los procesos de la organización. Igualmente, el reciclaje de materiales, aprovechamiento de subproductos utilizándolos como materias primas dentro del mismo proceso productivo o dentro de otro. 
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/3.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="La utilización de una menor cantidad de empaques")
        .row.justify-content-center
          .col-xl-5
            h4 La utilización de una menor cantidad de empaques
            p La utilización de una menor cantidad de empaques, solicitando al proveedor la entrega de productos sin envolturas innecesarias, el empleo de elementos que sean susceptibles de aprovechamiento para reemplazar el uso de aquellos que no lo son. 
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema4/4.png', alt='Texto que describa la imagen')
    p.mt-5 El siguiente gráfico ilustra las estrategias de gestión de residuos que puede tener en cuenta el generador, para lograr la minimización.
    .row.justify-content-center.mt-4
      .col-lg-10
        h5 Figura 4
        p Estrategias de minimización
        img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
        figcaption.mt-2 Nota. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p. 18)
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/6.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Para los generadores, la implementación de estrategias de gestión orientadas a la prevención y minimización de los residuos representa beneficios económicos, ambientales, legales y de imagen pública, entre otros. Sin embargo, debe haber un compromiso de la gerencia o de la dirección de la organización frente a la gestión de los residuos, para garantizar que el programa tenga éxito, reconociendo que su implementación reducirá costos y mejorará su actuación ambiental, expresando su adopción a través de la política ambiental de la empresa, organización o institución. 
    p.mt-3.mb-0 Antes de tomar la decisión sobre la implementación de una o varias alternativas identificadas, se recomienda evaluar su factibilidad utilizando criterios técnicos, legales, financieros y ambientales. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p.18)
    p Para estas actividades en las organizaciones generan estrategias de prevención y minimización llamados programas o por medio de campañas, si por medio de programas ambientales muchas veces llevan objetivo, meta e indicador específico para saber la eficacia del programa, como:
    .row.mt-4
      .col-lg-6
        .row.colori.p-5
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Programa de disminución de consumo de papel.

            li 
              i.fas.fa-check
              | Programa de no uso del pitillo.
            li 
              i.fas.fa-check
              | Programa de no uso de vasos desechables.
            li 
              i.fas.fa-check
              | Programa de no uso de la bolsa desechable.
            li 
              i.fas.fa-check
              | Programa de ahorro de recursos de productos en general teniendo en cuenta la normativa obligatoria o tendencias de disminución de algún tipo de bien que puede ser un potencial residuo y que puede ser prevenido.

      .col-lg-6
        img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
    .row.mt-2.colori2.align-items-center.p-2
      .col-lg-5
        img(src="@/assets/curso/intro/3.svg", alt="Texto que describa la imagen")
      .col-lg-7 
        p En el material complementario puede revisar el video “Campaña cero papel SENA”, para conocer más del tema.
        .row.justify-content-center
          .col-lg-10
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=37Y2a2R0ORg&ab_channel=comunicacionesfusa" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Campaña cero papel SENA</strong>
 
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

<style lang="sass">
.tarjeta.color-acento-contenido--borde
  background-color: #D3EDE5
  border: solid 4px #D3EDE5
.tabs-a__tab
  background-color: #E8E8E8
</style>

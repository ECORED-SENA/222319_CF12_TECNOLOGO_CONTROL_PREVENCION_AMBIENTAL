<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Definición de compromiso organizacional, objetivos y metas
    p De acuerdo con lo identificado en el diagnóstico realizado por la organización, se deben formular un compromiso organizacional conocido como Política Ambiental y unos objetivos y metas orientados hacia la prevención de la generación y hacia la minimización de los residuos que debe verse reflejado en la política ambiental de la organización.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Se recomienda plantear unos objetivos congruentes con las condiciones, recursos y necesidades que posea el generador, procurando que sean coherentes y alcanzables. 

          br
          br
          | En cuanto a las metas se debe evitar que sean vagas, o que sean demasiado ambiciosas sin que exista un compromiso real para cumplirlas, y por ello deben ser realistas y ejecutables desde las perspectivas ambiental, técnica y financiera. Las metas deben ser cuantificables, siempre que sea posible, y tener escalas de tiempo. 
    p.mt-3 “Los objetivos y metas deben ser propuestos por el generador de acuerdo con sus intereses y necesidades. Igualmente, se recomienda formular indicadores que permitan medir el avance en el cumplimiento de los objetivos y las metas propuestas”. Manual para el manejo integral de residuos sólidos en el valle de aburrá. Área metropolitana del valle de aburrá (2016, p.16) 
    p Los objetivos y metas deben estar orientados a: 
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/i1.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4
              p.text-center La prevención y minimización de la generación de residuos. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/i2.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4
              p.text-center Mejorar las condiciones de separación en la fuente, almacenamiento, aprovechamiento, tratamiento, disposición final de los residuos especiales, peligrosos y no peligrosos. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/i3.svg' alt='AvatarTop')

          .tarjeta.color-acento-botones
            .p-4
              p.text-center Disminuir los riesgos a los que están expuestos los trabajadores que manejan los residuos generados en la organización. 
    p.mt-3 El siguiente caso, es un ejemplo de Política:
    .row.mt-4.p-3.colort2
      .col-lg-6
        p <strong>La empresa PAMPA LTDA fabricante y comercializadora de productos alimenticios,</strong> está comprometida con la protección del medio ambiente y el desarrollo sostenible en todas sus operaciones. Para dar cumplimiento a este compromiso, así como los requisitos que exige la legislación colombiana vigente, nos esforzaremos por eliminar las prácticas empresariales que puedan producir impactos negativos en el medio ambiente y disminución y aprovechamiento de los residuos y vertimientos. La empresa proveerá y mantendrá un ambiente de trabajo sano y seguro, en la medida que se considere razonablemente posible, según se indique en las prácticas aceptadas para el desarrollo sostenible. Promoverá programas de mejoramiento continuo y desarrollo sostenible, generando una imagen positiva a la sociedad, brindando servicios oportunos que garanticen la confianza y el bienestar de sus socios, clientes, proveedores y colaboradores. Confiamos en que todos, gerencia, personal directivo y operativo, se asociarán en el compromiso personal hacia el cuidado del medio ambiente como una forma de vida. Esta política será revisada anualmente, de acuerdo con los resultados obtenidos en la evaluación de los indicadores del sistema de Gestión Ambiental. Política ambiental PAMPA (2016, p.1) 
      .col-lg-6
        img(src='@/assets/curso/tema2/2.png' alt='AvatarTop')
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span Ejemplo de objetivo, meta e indicador en residuos
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            .row
              .col-2
                h4.text-white.mb-0 OBJETIVO
              .col-2
                h4.text-white.mb-0 META
              .col-8
                h4.mb-0.text-white INDICADOR
          table
            caption Nota. Autores (2020) Objetivos, metas e indicadores.
            tr
              th Disminuir los residuos en la organización
              th Disminuir los residuos en la organización
              <td><img src='@/assets/curso/tema2/f1.svg'> </td>
            tr
              th Reciclar la mayoría de los residuos generados en la organización
              th Reciclar el 70% de los residuos generados en la organización
              <td><img src='@/assets/curso/tema2/f2.svg'> </td>
</template>

<script>
export default {
  name: 'Tema2',
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
.tarjeta.color-acento-botones
  background-color: #EDEEDA
.tarjeta-avatar > img
  width: 29%
.tabla-b.color-acento-contenido .tabla-b__header
  background-color: #A3314F
</style>

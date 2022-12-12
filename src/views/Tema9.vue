<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Seguridad y salud en el trabajo
    img(src='@/assets/curso/tema9/1.png' alt='AvatarTop')
    p.mt-4 Se deberán incluir las medidas de higiene y seguridad que permitirán proteger la salud del trabajador y prevenir riesgos que atenten contra su integridad. Así mismo, estas medidas contemplan aspectos de capacitación en procedimientos de bioseguridad y el trabajo, higiene y protección personal, entre otras y son complementarias a las condiciones del ambiente de trabajo, tales como iluminación, ventilación, ergonomía, etc.
    p Es importante tener en cuenta que todo empleador que tenga a su cargo trabajadores que participen en la manipulación de residuos debe cumplir con lo estipulado en la normatividad vigente sobre seguridad y salud en el trabajo. Área Metropolitana de Bucaramanga (2010, p. 9)
    separador
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9 .1 Elementos de protección personal para el manejo de residuos
    p Es obligatorio el uso de elementos de protección personal para las actividades de recolección de residuos y almacenamiento de residuos por el personal que realiza estas labores.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Tabla 5 
          span Elementos de protección según actividad en residuos       

        .row.colort9.p-3
          .tabla-a.color-acento-contenido.mb-5 
            table
              caption Nota. Guía de manejo de residuos peligrosos en la sección servicios integrales de salud y desarrollo psicosocial. Universidad industrial de Santander (2009, 4) 
              thead
                tr
                  th Actividad
                  th Elementos de protección
                  th Gráfico

              tbody
                tr.fondob
                  td <strong>Recolección de residuos </strong>
                  td Ropa de trabajo institucional<br>Delantal de caucho tipo industrial (opcional)<br>Guantes de caucho tipo industrial<br>Botas de caucho con suela antideslizante o botas de cuero antideslizante<br>Tapabocas (para no peligrosos)<br>Tapabocas N95 (para peligrosos infecciosos)<br>Mascarilla de gases (para peligrosos res. Químicos)

                  td.text-small Manejo de residuos hospitalarios (2010) Equipos de protección personal p.25<br>https://es.slideshare.net/CeciliaSTZ/resumen-unidad-4-residuos-man
                tr.fondob
                  td <strong>Lavado del Cuarto de almacenamiento de residuos  </strong>
                  td Overol de color claro con manga larga antifluido<br>Delantal plástico de tipo industrial color claro y ajustado a la cintura (si es requerido o si no tiene el traje antifluido)<br>Guantes de caucho tipo industrial color claro calibre 25 largo 20 <br>Protección ocular<br>Mascarilla de alta eficiencia categoría N95% en filtración (CDC, NIOSH o mascarilla de gases)<br>Botas de caucho con suela antideslizante

                  td.text-small Universidad industrial de Santander (2009) Guía de manejo de residuos peligrosos en la sección servicios integrales de salud y desarrollo psicosocial.p.74<br>https://n9.cl/yaqx
    separador
    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Plan de contingencia
    p Todo plan de contingencias se debe basar en los potenciales escenarios de riesgo del sistema, que deben obtenerse del análisis de vulnerabilidad realizado, de acuerdo con las amenazas que pueden afectar a la organización durante su funcionamiento. 
    p El plan de contingencias debe incluir procedimientos generales de atención de emergencias y procedimientos específicos para cada escenario de riesgo identificado.
    p La elaboración del plan de contingencias debe seguir los siguientes parámetros: 
    .row.justify-content-center
      .col-lg-10
        .row.mt-3.bgh.p-3
          .col-lg-2
          .col-lg-3
            img(src="@/assets/curso/tema9/2.svg")
          .col-lg-1
          .col-lg-6
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Análisis de riesgo
              li 
                i.fas.fa-check
                | Identificación y caracterización de peligros y amenazas
              li 
                i.fas.fa-check
                | Análisis de vulnerabilidad por amenazas
              li 
                i.fas.fa-check
                | Definición de los escenarios de riesgo
              li 
                i.fas.fa-check
                | Organización del plan de emergencias
              li 
                i.fas.fa-check
                | Puesta en marcha del plan de emergencias
              li 
                i.fas.fa-check
                | Responsables de la elaboración y puesta en marcha del plan de contingencias.
        figcaption.mt-1 Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008, p. 55) 
    .col-2.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 Análisis de riesgos
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/3.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El análisis de riesgos tiene por objetivo identificar y evaluar cuales son aquellos eventos o condiciones que pueden llegar a ocasionar una emergencia. Este análisis se convierte en una herramienta para establecer las medidas de prevención y control de los riesgos asociados a la actividad de la organización, al entorno físico y al entorno social en el cual desarrolla sus funciones. El análisis de riesgos está conformado por las etapas de identificación y caracterización de peligros y amenazas de carácter natural o antrópico, el análisis de vulnerabilidad por amenaza, la evaluación del riesgo y la identificación de escenarios de riesgo.
    .col-6.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 Identificación y caracterización de los peligros y las amenazas
    p.mt-3 Se entiende por peligro, una fuente o situación con potencial de daño en términos de lesión o enfermedad, daño a la propiedad, al ambiente de trabajo, al medio ambiente o una combinación de éstos, y por amenaza, la probabilidad de que un fenómeno de origen natural o humano, eventualmente, cause daño y genere pérdidas, y que se produzca en un determinado tiempo y lugar.
    .row
      .col-lg-6
        p En la identificación de peligros, la organización debe realizar una observación y estudio detallado de los procesos, las actividades que realiza y su entorno, indicando cuáles son aquellas situaciones que pueden generar una emergencia. Una vez identificados los peligros, éstos deben ser analizados según su probabilidad de ocurrencia en términos de amenaza.
        p Para identificar los posibles peligros, se deben analizar y determinar aspectos como la combinación o mezcla de sustancias químicas y los residuos con características peligrosas, con el almacenamiento o transporte de gases tóxicos o líquidos corrosivos, la inflamabilidad de una sustancia, la presencia de materiales radiactivos, el deterioro de la vía, los cuales, pueden interactuar con peligros de origen natural y social, como por ejemplo, la presencia de una falla geológica, de ríos, de volcanes, las condiciones atmosféricas adversas en la zona, o las condiciones políticas y sociales de la región.

      .col-lg-6
        img(src="@/assets/curso/tema9/4.png")
    p.mt-3.mb-0 La probabilidad de ocurrencia de las amenazas relacionadas con el almacenamiento y transporte de
    p.mb-0 sustancias químicas y residuos peligrosos, tales como la fuga de un gas tóxico o el derrame de un
    p combustible, se pueden ver potenciadas por la probabilidad de amenazas de tipo natural o social, como por ejemplo el desbordamiento de un río, una erupción volcánica o un atentado terrorista.
    p En la tabla se muestran algunas de las posibles amenazas que pueden afectar los componentes del manejo integral de residuos sólidos.
    .titulo-sexto.color-acento-contenido.mt-4
      h5 Tabla 6 
      span Amenaza en las actividades de residuos 

    img(src="@/assets/curso/tema9/5.svg")
    figcaption.mt-2 Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p. 57) 
    .col-4.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 Análisis de vulnerabilidad por amenaza
    .row.mt-4
      .col-lg-6
        .row.bgh.p-3
          p Es el proceso mediante el cual se determina el nivel de exposición y predisposición a la pérdida de un elemento o grupo de elementos, ante una amenaza específica. El grado de vulnerabilidad que tiene una empresa frente a una amenaza específica está directamente relacionado con la organización interna que ésta tiene para prevenir o controlar aquellos factores que originan el peligro, al igual que su preparación para minimizar las consecuencias, una vez sucedan los hechos. El Reglamento Técnico del Sector Agua Potable y Saneamiento Básico (RAS) en su Título G, establece una metodología para la realización de un análisis de vulnerabilidad.
    p.mt-3 La vulnerabilidad puede ser física o funcional dependiendo del tipo de estructura o de la capacidad de absorber la emergencia respectivamente. Para estimar la vulnerabilidad se debe:
    .row.mt-3
      .col-lg-1
      .col-lg-2
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/6.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Identificar y evaluar las amenazas.
      .col-lg-2
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/6.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Identificar los componentes del sistema.
      .col-lg-2
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/6.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Estimar el potencial de daños.
      .col-lg-2
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/6.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Categorizar los daños.
      .col-lg-2
        .tarjeta-avatar
          img(src='@/assets/curso/tema9/6.svg' alt='AvatarTop')

          .tarjeta.color-acento-contenido
            .p-4
              p.text-center Evaluar el riesgo.
    p.mt-4 El riesgo es definido como la probabilidad de ocurrencia de un suceso con consecuencias económicas, sociales o ambientales en un sitio particular y durante un tiempo de exposición determinado. Se obtiene de relacionar la amenaza con la vulnerabilidad de los elementos expuestos. La Tabla señala la matriz que indica la priorización de los riesgos de la organización mediante el análisis de las amenazas y la vulnerabilidad.
    p Esta matriz puede ser ampliada según el criterio de la empresa para lograr un mayor nivel de detalle.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mt-4
              h5 Tabla 7
              span Valoración del riesgo 

            img(src='@/assets/curso/tema9/7.png' alt='AvatarTop')
            figcaption Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares-pgirhs aplicado a micro generadores. Área Metropolitana de Bucaramanga (2010, p. 58).
          .col-lg-6
            .row
              .col-12.mt-5
                .row.colorazul.p-2
                  h4.text-white.text-center.mb-0 Definición de los escenarios de riesgo
            .row.bgh.p-4.mt-4
              p Se entiende como la descripción de un futuro posible y de la trayectoria asociada a él. El escenario de riesgo es la interacción de los diferentes factores de riesgo (amenaza y vulnerabilidad) en un territorio y en un momento dado. Debe describir y permitir la identificación del tipo de daño y pérdidas que pueden generarse en caso de presentarse un evento peligroso en unas condiciones dadas de vulnerabilidad.
    .col-4.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 Organización del plan de emergencias
    p.mt-3 Como se mencionó anteriormente, el análisis de riesgos es un requisito para la organización del plan de emergencias, ya que permite identificar los escenarios de riesgo. De esta manera, se facilita la proyección adecuada de las siguientes acciones:
    .row.justify-content-center
      .col-lg-10
        .row.p-3.colort8
          .col-lg-1
            img(src='@/assets/curso/tema9/8.svg' alt='AvatarTop')
          .col-lg-11
            ul.lista-ul--color    
              li 
                i.fas.fa-check
                | Aislamiento.
              li 
                i.fas.fa-check
                | Señalización.
              li 
                i.fas.fa-check
                | Definición de puntos de encuentro y vías de escape.
              li 
                i.fas.fa-check
                | Determinación de la cantidad y localización estratégica de equipos de seguridad y protección individual.
              li 
                i.fas.fa-check
                | Definición de procedimientos contra derrames, fugas e incendios.
    .col-6.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 Puesta en marcha y mantenimiento del plan de emergencias
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El éxito de una operación de atención de eventos mayores depende de las acciones de respuesta previstas y desarrolladas en el Plan de Emergencias. De esta manera, para lograr los resultados esperados en el plan durante la ocurrencia de situaciones de emergencia, es necesario divulgarlo debidamente dentro de la organización, e integrarlo a otros planes locales y regionales, así como a otras entidades que deberán actuar conjuntamente en la respuesta a la emergencia. Además de la debida divulgación, la implementación del Plan está relacionada con la disponibilidad de los recursos humanos, además de los materiales necesarios y compatibles con la gravedad de los posibles eventos que se atenderán.

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

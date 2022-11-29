<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Segregación en la fuente
    p Se requiere establecer el código de colores para la segregación de residuos y definir la cantidad, capacidad y estado de los recipientes usados para dicha segregación.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El diagnóstico permite definir el tipo y cantidad de recipientes que se requieren para la adecuada separación de los residuos en todas las áreas de la organización. Los recipientes utilizados preferiblemente deben cumplir con el color correspondiente a la clase de residuos que se va a depositar en ellos.
    p.mt-3 Para facilitar el proceso de separación en la fuente es conveniente que los recipientes estén rotulados teniendo en cuenta los siguientes aspectos: 
    .row.mt-4
      .col-lg-4
        .row
          .col-3.px-0
            img(src='@/assets/curso/tema5/2.svg', alt='Texto que describa la imagen')
          .col-9
            .row.colort5.p-4
              p.text-center.mt-3 Tipo de residuo a disponer 
      .col-lg-4
        .row
          .col-3.px-0
            img(src='@/assets/curso/tema5/3.svg', alt='Texto que describa la imagen')
          .col-9
            .row.colort5.p-3
              p.text-center.mt-2 Símbolo asociado, en caso de tener uno establecido. 
      .col-lg-4
        .row
          .col-3.px-0
            img(src='@/assets/curso/tema5/4.svg', alt='Texto que describa la imagen')
          .col-9
            .row.colort5.p-2
              p.text-center.mt-4 Listado de residuos generados con mayor frecuencia en la organización. 
    p.mt-3 <strong>Para mayor facilidad se puede usar la siguiente tabla de información como ejemplo que sirve para enlistar los residuos, identificar el tipo de residuo, el recipiente a usar, el rótulo a usar, la capacidad del mismo, el estado del recipiente y si es posible pueden ir más datos como áreas y ubicación específica del punto ecológico</strong>, también estas tablas colocan una casilla adicional que es que se hace con este, y que gestor ambiental lo gestiona. Manual para el manejo integral de residuos sólidos en el valle de aburrá. Área metropolitana del valle de aburrá (2016, p. 18)
    .row.justify-content-center.mt-5
      .col-lg-10
        h5 Tabla 2
        p Información separación en la fuente 
        .row.p-3.colort51
          img(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')
          figcaption.mt-2.fondob Nota. Guía para elaboración y presentación del plan de gestión integral de residuos hospitalarios y similares aplicado a micro generadores Área Metropolitana de Bucaramanga (2010, p.6) 
    p.mt-4 <strong>En cuanto a los residuos de tipo químico, es preferible manejarlos en sus propios envases, empaques y recipientes, atendiendo las instrucciones dadas en sus etiquetas y hojas de seguridad</strong>, las cuales deben ser suministradas por los proveedores, cuidando de no mezclarlos cuando sean incompatibles o reaccionen entre sí. En estos casos, se debe consultar normas de seguridad industrial y salud ocupacional. 
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema5/6.png', alt='Texto que describa la imagen')

      .col-lg-6
        .row.p-5.colort3
          p <strong>Es importante aclarar que en los puntos de separación no es necesaria la ubicación de todos los recipientes acorde al código de colores</strong>, ya que su ubicación y cantidad debe obedecer a los aspectos identificados durante el diagnóstico, de manera que se distribuyen acorde a los residuos generados en cada sección. 
          p El envasado, embalado, rotulado y etiquetado debe estar conforme a la normatividad vigente, principalmente cuando se trate de residuos peligrosos. Manual para el manejo integral de residuos sólidos en el Valle de Aburrá. Área metropolitana del Valle de Aburrá (2016, p.20)
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Código de colores en los recipientes
    p Para implementar la separación de residuos, se utiliza un código de colores en los recipientes para su identificación, usualmente este código de colores se rige a nivel territorial actualmente se cuenta con una norma regulatoria que es la Resolución No. 2184 de 2019 ARTÍCULO 4o. Adáptese en el territorio nacional, el código de colores para la separación de residuos sólidos en la fuente, así:
    .row.justify-content-center.mt-3
      .col-lg-10
        .row.p-3.colort1.align-items-center
          .col-lg-1
            img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop')
          .col-lg-11
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Color verde para depositar residuos orgánicos aprovechables.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | Color Blanco para depositar los residuos aprovechables como plástico, vidrio, metales, multicapa, papel y cartón.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | Color negro para depositar los residuos no aprovechables.
        h5.mt-4 Figura 5
        p Código de colores para los residuos a nivel nacional
        .row
          .col-lg-8
            img(src='@/assets/curso/tema5/8.png' alt='AvatarTop')
            figcaption.mt-3 Nota. El Gobierno unifica el código de colores para la separación de residuos en la fuente a nivel nacional. Minambiente (2020)
          .col-lg-4
            .row.p-3.colort3
              p Algunas empresas tienen como guía la GTC 24 de 2009 para sus procesos de gestión de residuos, ya que algunos residuos no se disponen al servicio público de aseo lo cual le da la opción de clasificar de manera más específica los residuos sobre todos los de reciclaje y entregarlos desde la fuente más separados a gestores ambientales de reciclaje y tratamiento de residuos.
              p Esta GTC 24 no es obligatoria es opcional, algunas empresas también por elección utilizan solo algunos colores de esta GTC 24.
        h5.mt-4 Figura 6

        p Código de colores GTC24
        .row.p-3.colort51
          img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop')
          figcaption.fondob.mt-2 Nota. GTC 24- Gestión Ambiental Residuos sólidos Guía para la separación en la fuente. ICONTEC (2009, p.5)
        h5.mt-4 Figura 7
        p Código de colores propuesto por la GTC 24
        img(src='@/assets/curso/tema5/10.png' alt='AvatarTop')
        figcaption Nota. Guía para la gestión de residuos peligrosos. Universidad Pontificia Bolivariana. (2011, p.63) 
        h5.mt-4 Figura 8

        p Código de colores en el gremio de la salud
        img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop')
        figcaption.mt-2 Nota. Resolución en proyecto 2 por la cual se adopta el manual para la gestión integral de residuos generados en la atención en salud y otras actividades, y se dictan otras disposiciones. Ministerio de salud y protección social (2020, p.10)  
        .row.justify-content-center.mt-3
          .col-lg-6
            img(src='@/assets/curso/tema5/12.png' alt='AvatarTop')

          .col-lg-6
            p Para la identificación y clasificación de las características de peligrosidad de residuos diferentes a riesgo biológico o infeccioso se aplicará lo establecido en el artículo 2.2.6.1.2.3 y el Anexo III del Decreto 1076 de 2015 o la norma que lo modifique o sustituya.
            p.mb-0 Actualmente se identifican con color rojo y se coloca el nombre específico del residuo químico en el rótulo.
            p.mb-0 El color rojo sigue utilizándose a nivel nacional para identificar un residuo peligroso tanto infeccioso como químico.
            p El color violeta sigue utilizándose a nivel nacional para identificar un residuo radioactivo.
        .row.mt-3.colort52.p-3.align-items-center
          .col-1
            img(src='@/assets/curso/tema5/q1.svg' alt='AvatarTop')

          .col-11
            h5 Nota: 
            p Es indispensable tener en cuenta esta normativa haciendo la salvedad de que se debe garantizar es que su gestión sea acorde con las bases normativas vigentes.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Características de los recipientes
    p Los tipos y capacidades de los recipientes dependen de las características y tipos de residuos, el tipo y frecuencia del sistema de recolección y del espacio disponible para ellos.
    p Frecuentemente se emplean bolsas, contenedores, canecas, cajas, entre otros. Sin embargo, se debe tener en cuenta lo siguiente, para su selección:
    .row.justify-content-center
      .col-lg-10
        .row.p-4.colort53
          .row.linea.align-items-center 
            .col-1
              img.wi2(src='@/assets/curso/tema5/q2.svg' alt='AvatarTop')
            .col-11
              p <strong>A nivel doméstico</strong> se espera que los recipientes sean de material impermeable, liviano y resistente, de fácil carga, de tal forma que facilite su transporte y se reduzca el impacto sobre el ambiente y la salud humana.
          .row.linea.mt-3.align-items-center
            .col-1
              img.wi2(src='@/assets/curso/tema5/q3.svg' alt='AvatarTop')
            .col-11
              p <strong>Los recipientes de carácter retornable</strong>  deberían permitir su fácil limpieza.
          .row.linea.mt-3.align-items-center
            .col-1
              img.wi2(src='@/assets/curso/tema5/q4.svg' alt='AvatarTop')
            .col-11
              p <strong>Los recipientes que se empleen para presentar los residuos para recolección</strong>   deberían evitar el contacto de los residuos con el entorno y con las personas encargadas de dicha recolección.
          .row.linea.mt-3.align-items-center
            .col-1
              img.wi2(src='@/assets/curso/tema5/q5.svg' alt='AvatarTop')
            .col-11
              p <strong>Los recipientes tanto desechables como retornables deberían:</strong>    proporcionar seguridad e higiene, permitir el aislamiento de los residuos con el entorno, tener una capacidad y volumen proporcional al peso, volumen y características de los residuos contenidos, ser de material resistente, preferiblemente reciclable, reutilizable o ambos y facilitar su cierre o amarre.
          .row.linea.mt-3.align-items-center
            .col-1
              img.wi2(src='@/assets/curso/tema5/q6.svg' alt='AvatarTop')
            .col-11
              p <strong>En instalaciones multiusuario,</strong>  comerciales e industriales pueden emplearse grandes contenedores de acopio.
    p.mt-5 GTC 24- Gestión Ambiental Residuos sólidos Guía para la separación en la fuente. ICONTEC (2009, p.8)
    p Los recipientes para residuos infecciosos deben ser del tipo tapa y pedal y se identifican sus canecas con el logo de infeccioso, si es químico algunas veces colocan el logo de una calavera y dicen el tipo de químico que se envasa. 
    .row.justify-content-center.mt-4
      .col-lg-10
        h5.mt-4 Figura 9
        p Imagen de infeccioso
        .row
          .col-lg-8
            img(src='@/assets/curso/tema5/13.png' alt='AvatarTop')
            figcaption.mt-1 Nota. Plan de gestión Integral de Residuos. Universidad Industrial de Santander (2013, p.11) 
          .col-lg-4
            .row.p-3.colort3
              p Los recipientes para residuos peligrosos obligatoriamente deben tener tapa, con buen ajuste, bordes redondeados y boca ancha para facilitar su vaciado. Construidos en forma tal que, estando cerrados o tapados, no permitan la entrada de agua, insectos o roedores, ni el escape de líquidos por sus paredes o por el fondo.

              p Los residuos reciclables usan el logo de reciclaje en los recipientes y para ordinarios usan algunas veces el logo circular, pero no es necesario el logo en ordinarios. 
    p.mt-4 Los recipientes para residuos peligrosos obligatoriamente deben tener tapa, con buen ajuste, bordes redondeados y boca ancha para facilitar su vaciado. Construidos en forma tal que, estando cerrados o tapados, no permitan la entrada de agua, insectos o roedores, ni el escape de líquidos por sus paredes o por el fondo.
    p Los residuos reciclables usan el logo de reciclaje en los recipientes y para ordinarios usan algunas veces el logo circular, pero no es necesario el logo en ordinarios. 
    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema5/a1.svg', alt='Texto que describa la imagen')

          h5.text-center Papel y Cartón
          ul.lista-ul--color.lista-ul
            li.mb-0
              i.fas.fa-check
              | Papel
            li.mb-0 
              i.fas.fa-check
              | Cartón
            li.mb-0 
              i.fas.fa-check
              | Periódicos
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.bgt51
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema5/a1.svg', alt='Texto que describa la imagen')

          h5.text-center.text-white Plástico
          ul.lista-ul--color.lista-ul
            li.mb-0
              i.fas.fa-check.text-white
              p.text-white.mb-0 Envases no retornables
            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Desechables plásticos
            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Bolsas plásticos
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.bgt512
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema5/q7.svg', alt='Texto que describa la imagen')

          h5.text-center.text-white Ordinario no reciclable
          ul.lista-ul--color.lista-ul
            li.mb-0
              i.fas.fa-check.text-white
              p.text-white.mb-0 Envolturas de alimentos
            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Papel sucio
            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Papel carbón y aluminio
            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Barrido y servilletas
            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Barrido y servilletas
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.bgt513
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema5/q8.svg', alt='Texto que describa la imagen')

          h5.text-center.text-white Riesgo Biológico
          ul.lista-ul--color.lista-ul
            li.mb-0
              i.fas.fa-check.text-white
              p.text-white.mb-0 Gasas y algodones 

            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Vendas y sondas

            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Guantes de látex

            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Material de curación

            li.mb-0 
              i.fas.fa-check.text-white
              p.text-white.mb-0 Residuos contaminados que generen contagios o infecciones
    figcaption Nota. La problemática principal del manejo de las basuras. Alcaldía Santiago de Cali (2015) 
    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Bolsas
    .row.colort54.p-3
      .col-lg-5
        img(src='@/assets/curso/tema5/14.png', alt='Texto que describa la imagen')

      .col-lg-7
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | La resistencia de las bolsas debe soportar la tensión ejercida por los residuos contenidos y por su manipulación.
          li 
            i.fas.fa-check
            | El material plástico de las bolsas para residuos infecciosos, debe ser polietileno de alta densidad, o el material que se determine necesario para la desactivación o el tratamiento de estos residuos. 
          li 
            i.fas.fa-check
            | La resistencia de cada una de las bolsas no debe ser inferior a 20 kg.
          li 
            i.fas.fa-check
            | Los colores de bolsas seguirán el código establecido por la organización y/o entidad territorial, serán de alta densidad y calibre mínimo de 1.4 para bolsas pequeñas y de 1.6 milésimas de pulgada para bolsas grandes, suficiente para evitar el derrame durante el almacenamiento en el lugar de generación, recolección, movimiento interno, almacenamiento central y disposición final de los residuos que contengan.      
    figcaption.mt-2 Nota. Plan de gestión Integral de Residuos. Universidad Industrial de Santander (2013, p. 12) 
    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Recipientes para residuos cortopunzantes
    p Los recipientes para residuos cortopunzantes son desechables y deben tener las siguientes características:
    .row.colort54.p-3.align-items-center
      .col-lg-9
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Rígidos, en polipropileno de alta densidad u otro polímero que no contenga P.V.C. 
          li 
            i.fas.fa-check
            | Resistentes a ruptura y perforación por elementos cortopunzantes.
          li 
            i.fas.fa-check
            | Con tapa ajustable o de rosca, de boca angosta, de tal forma que al cerrarse quede completamente hermético.
          li 
            i.fas.fa-check
            | Rotulados de acuerdo con la clase de residuo.
          li 
            i.fas.fa-check
            | Livianos y de capacidad no mayor a 2 litros.
          li 
            i.fas.fa-check
            | Ser resistentes, desechables y de paredes gruesa 
      .col-lg-2
        img(src='@/assets/curso/tema5/15.svg', alt='Texto que describa la imagen')
    figcaption.mt-2 Nota. Plan de gestión Integral de Residuos. Universidad Industrial de Santander (2013, p.14) 
    separador
    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5 Rotulación
    p Los recipientes deben ir rotulados con el nombre del generador, departamento, área o servicio al que pertenecen, el nombre del residuo que contienen, fecha de recolección y el símbolo de peligrosidad si es residuo peligroso.
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para la rotulación de los residuos peligrosos se realiza acorde a la normativa ICONTEC (2005) Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado y el decreto 1609 de 2002 "Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera".
          br
          br
          | El etiquetado tiene como objetivo principal identificar el residuo peligroso y reconocer la naturaleza del peligro que representa, alertando a las personas involucradas en el transporte o manejo sobre las medidas de precaución y prohibiciones. La etiqueta que se utilizará para la identificación de los residuos puede ser de diferentes estilos.
    figcaption.mt-2 Nota. Material para la recogida selectiva bidones. Universidad de Cádiz (2016, p.1)
    .col-1.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 NFPA
    p.mt-3 En residuos peligrosos pueden usarse diferentes tipos de pictogramas como el del rombo NFPA
    .row.justify-content-center
      .col-lg-10
        h5 Figura 14
        p NFPA
        img(src='@/assets/curso/tema5/17.svg', alt='Texto que describa la imagen')
        figcaption.mt-2 Nota. Rombo de riesgo NFPA. Gerry Mata (2012, p.1) 
    .col-1.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 SGA
    p.mt-3 El Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos ofrece un conjunto de criterios armonizados sobre el peligro de las sustancias químicas.
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-6
            h5 Figura 15
            p Pictogramas como los del sistema globalmente armonizado
            img(src='@/assets/curso/tema5/18.png', alt='Texto que describa la imagen')
            figcaption Nota. Etiqueta SGA (Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos). MARBE Departamento químico (2016) 

          .col-lg-6
            img(src='@/assets/curso/tema5/19.png', alt='Texto que describa la imagen')
    .col-2.mt-5
      .row.colorazul.p-2
        h4.text-white.text-center.mb-0 NTC 1692
    p.mt-3 La Norma Técnica Colombia 1692 es la más usada en residuos, tal como lo muestra la tabla
    .row.justify-content-center
      .col-lg-10
        h5 Tabla 3
        p Pictogramas por medio de la NTC1692 
    .row.justify-content-center.bgp
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Nota. Manejo de residuos peligrosos y especiales IGAC (2018, p, 9)
            thead
              tr
                th Clase
                th Rótulo/etiqueta
                th.wimm División

            tbody
              tr.fondob
                td.text-center 1. Explosivo
                <td><img src='@/assets/curso/tema5/x1.svg'> </td>
                td 1.1 Sustancia y Objetos que presentan un riesgo de explosión en masa<br>1.2 Sustancias y objetos que presentan un riesgo de proyección sin riesgo de explosión en masa<br>1.3 Sustancias y objetos que presentan un riesgo de incendio y un riesgo menor de explosión u un riesgo menor de proyección, o ambos, pero no un grado de explosión en masa.<br>1.4 Sustancias y objetos que presentan un riesgo apreciable.<br>1.5 Sustancias muy insensibles; que presentan un riesgo de explosión en masa.<br>1.6 Objetos sumamente insensibles que no presentan riesgo de explosión en masa.
              tr.fondob
                td.text-center 2. Gases
                <td><img src='@/assets/curso/tema5/x2.svg'> </td>
                td 2.1 Gases inflamables<br>2.2 Gases no inflamables, no tóxicos<br>2.3 Gases tóxicos.
              tr.fondob
                td.text-center 3. Líquidos inflamables y líquidos combustibles 
                <td><img src='@/assets/curso/tema5/x3.svg'> </td>
                td 2.1 Gases inflamables<br>2.2 Gases no inflamables, no tóxicos<br>2.3 Gases tóxicos.
              tr.fondob
                td.text-center 4. Sólidos inflamables 
                <td><img src='@/assets/curso/tema5/x4.svg'> </td>
                td 4.1 Sólido Inflamable, sustancias con reacción espontánea y sólidos explosivos insensibilizados.<br>4.2 Sustancias que pueden experimentar combustión espontánea. <br>4.3 Sustancias que, en contacto con el agua, desprenden gases inflamables. 
              tr.fondob
                td.text-center 5.Oxidantes y peróxidos orgánicos 
                <td><img src='@/assets/curso/tema5/x5.svg'> </td>
                td 5.1 Sustancias comburentes<br>5.2 Peróxidos orgánico
              tr.fondob
                td.text-center 6. Sustancia toxicas 
                <td><img src='@/assets/curso/tema5/x6.svg'> </td>
                td 6.1 Sustancias Tóxicas<br>6.2 Sustancia infecciosa
              tr.fondob
                td.text-center 7.  Sustancias radiactivas 
                <td><img src='@/assets/curso/tema5/x7.svg'> </td>
                td 
              tr.fondob
                td.text-center 8. Sustancias corrosivas 
                <td><img src='@/assets/curso/tema5/x8.svg'> </td>
                td 
              tr.fondob
                td.text-center 9. Sustancias peligrosas misceláneas 
                <td><img src='@/assets/curso/tema5/x9.svg'> </td>
                td 
    p.mt-4 Para los residuos no peligrosos su rotulación es colocar el nombre del residuo, quien lo genera , fecha de recolección y el logo de reciclaje si es para reciclar y si es ordinario o común no se requiere de logo solo de la identificación del residuo, algunas veces en los rótulos se coloca el peso o volumen del residuo si este no está en el rótulo debe estar en los registros de gestión de residuos sea en el registro de recolección o de almacenamiento de residuos o de entrega de residuos para así llevar los indicadores de gestión de generación de residuos. Los ejemplos más usuales son:
    .row.justify-content-center.mt-3
      .col-lg-10
        .row
          .col-lg-6
            h5 Figura 16 
            p Etiqueta de ejemplo para residuos peligrosos
            img(src='@/assets/curso/tema5/2323.png', alt='Texto que describa la imagen')
            figcaption Nota. Plan de Gestión Integral de Residuos. IMPALA (2017, p. 14) 
          .col-lg-6
            h5 Figura 17
            p Etiqueta
            img(src='@/assets/curso/tema5/2424.png', alt='Texto que describa la imagen')
            figcaption Nota. Procedimiento para la gestión y disposición de residuos sólidos y peligrosos. Universidad de los Andes (2012, p. 18) 
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

export default {
  global: {
    componenteFormativo:
      'Gestionar integralmente el manejo de residuos según normativa vigente.',
    descripcionCurso:
      'Se orientará en la realización del plan de gestión integral de residuos con relación a la gestión, diseñando estrategias de manejo de residuos sólidos necesarias según el análisis del diagnóstico de residuos, para su adecuada minimización de residuos, aprovechamiento, tratamiento y disposición final de estos en atención a la normativa y en pro de un desarrollo sostenible en la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos generales.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Definición de compromiso organizacional, objetivos y metas.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estrategias de formación y educación.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Prevención y minimización de residuos.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Segregación en la fuente.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Código de colores en los recipientes.',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Características de los recipientes.              ',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Bolsas.',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Recipientes para residuos cortopunzantes.',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Rotulación.',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Recolección y transporte interno de residuos.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Almacenamiento de residuos.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Control de plagas y técnicas de desinfección.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Control de plagas.',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Técnicas de desinfección.              ',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo:
              'Descontaminación y limpieza cuarto de almacenamiento de residuos.',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Seguridad y Salud en el Trabajo.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo:
              'Elementos de protección personal para el manejo de residuos.',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Plan de contingencia.            ',
            hash: 't_9_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía Santiago de Cali (2015) La problemática principal del manejo de las basuras. ',
      link:
        'https://www.cali.gov.co/dagma/publicaciones/110286/la_problematica_principal_del_manejo_de_basuras/',
    },
    {
      referencia:
        'Área metropolitana del valle de aburra (2016, p. 22) Manual para el manejo integral de residuos sólidos en el valle de aburra.',
      link: 'https://asei.com.co/files/28_08_2013_02_43_59__upload.pdf',
    },

    {
      referencia: 'IGAC (2018 ) Manejo de residuos peligrosos y especiales. ',
      link:
        'http://igacnet2.igac.gov.co/intranet/UserFiles/File/procedimientos/instructivos/2018/I20604-01%2018V6%20Manejo%20de%20residuos%20pe.pdf',
    },

    {
      referencia:
        'ICONTEC (2009) GTC 24- Gestión Ambiental Residuos sólidos Guía para la separación en la fuente. ',
      link:
        'http://www.bogotaturismo.gov.co/sites/intranet.bogotaturismo.gov.co/files/GTC%2024%20DE%202009.pdf',
    },
    {
      referencia:
        'ICONTEC (2005) Norma técnica colombiana NTC1692 Transporte de mercancías peligrosas definiciones, clasificación, marcado, etiquetado y rotulado.',
      link:
        'https://web.mintransporte.gov.co/consultas/mercapeli/Reglamento/Anexos/NTC1692.pdf',
    },
    {
      referencia: 'IMPALA (2017) Plan de Gestión Integral de Residuos ',
      link:
        'https://www.impalaterminals.com/media/1355/plan-de-gesti%C3%B3n-integral-de-residuos-impala-es.pdf',
    },
    {
      referencia:
        'MARBE Departamento químico (2016) Etiqueta SGA (Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos)',
      link:
        'https://www.marbequimica.com.ar/etiqueta-sga-sistema-globalmente-armonizado-de-clasificacion-y-etiquetado-de-productos-quimicos/',
    },
    {
      referencia:
        'Minambiente (2020) Gobierno unifica el código de colores para la separación de residuos en la fuente a nivel nacional',
      link:
        'https://www.minambiente.gov.co/index.php/noticias/4595-gobierno-unifica-el-codigo-de-colores-para-la-separacion-de-residuos-en-la-fuente-a-nivel-nacional        ',
    },
    {
      referencia:
        'Universidad Industrial de Santander (2013) Plan de gestión Integral de Residuos. ',
      link:
        'https://www.uis.edu.co/webUIS/es/gestionAmbiental/documentos/capacitaciones/Manejo%20de%20Productos%20y%20Residuos%20Quimicos.pdf        ',
    },
    {
      referencia:
        'Universidad Pontificia Bolivariana y Área metropolitana del Valle de Aburrá (2008). Guía para el manejo integral de residuos.  ',
      link:
        'https://www.sabaneta.gov.co/files/doc_varios/Gu%C3%ADa%20para%20el%20Manejo%20Integral%20de%20Residuos-%20Subsector%20instituciones%20educativas.pdf',
    },
    {
      referencia:
        'Universidad de los Andes (2012) Procedimiento para la gestión y disposición de residuos sólidos y peligrosos.',
      link:
        'https://gerenciacampus.uniandes.edu.co/content/download/4106/19770/file/Procedimiento%20para%20la%20Gesti%C3%B3n%20y%20Disposici%C3%B3n%20de%20Residuos.pdf',
    },
    {
      referencia:
        'Universidad de california (2011) Manejo integrado de plagas. ',
      link:
        'https://wspehsu.ucsf.edu/wp-content/uploads/2015/10/IPM_CurriculumSpanish1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento y/o valorización',
      significado:
        'Es el proceso de recuperar el valor remanente o el poder calorífico de los materiales que componen los residuos o desechos peligrosos, por medio de la recuperación, el reciclado o la regeneración.',
    },
    {
      termino: 'Disposición final',
      significado:
        'Es el proceso de aislar y confinar los residuos o desechos peligrosos, en especial los no aprovechables, en lugares especialmente seleccionados, diseñados y debidamente autorizados, para evitar la contaminación y los daños o riesgos a la salud humana y al ambiente',
    },
    {
      termino: 'Gestión integral de residuos sólidos',
      significado:
        'Es el conjunto de operaciones y disposiciones encaminadas a dar a los residuos producidos el destino más adecuado desde el punto de vista ambiental, de acuerdo con sus características, volumen, procedencia, costos, tratamiento, posibilidades de recuperación, aprovechamiento, comercialización y disposición final. ',
    },
    {
      termino: 'Gestión Interna de residuos',
      significado:
        'Son las operaciones de manipulación, clasificación, envasado, etiquetado y traslado al almacén temporal dentro del propio lugar u organización.<br>1) Dotación de contenedores donde depositar los residuos. 2) Clasificación de estos residuos en grupos en función de su peligrosidad o posibilidad de reciclaje. <br>3) Transporte de los residuos al almacén central de residuos sanitarios del centro. <br>Área de salud de Cáceres (2015) Manual de gestión interna y externa de residuos. p.2<br>https://www.areasaludcaceres.es/docs/files/1195img.pdf.        ',
    },
    {
      termino: 'Gestión Externa de residuos',
      significado:
        'Son las operaciones realizadas fuera del centro productor; recogida, traslado al centro de tratamiento y eliminación. 4) Recogida y transporte a Plantas de Transferencia o Tratamiento. 5) Tratamiento y eliminación. Desde un punto de vista general los residuos que sufren una mala gestión, ya sea en su recogida, tratamiento o eliminación final, provocan una degradación del Medio Ambiente, por lo que resulta imprescindible un adecuado tratamiento de estos desde el momento de su generación hasta que son eliminados.         ',
    },
    {
      termino: 'Manejo integral de residuos',
      significado:
        'Es el conjunto de actividades que se realizan desde la generación hasta la eliminación del residuo o desecho sólido. Comprende las actividades de separación en la fuente, presentación, recolección, transporte, almacenamiento, tratamiento y/o la eliminación de los residuos o desechos sólidos.',
    },
    {
      termino: 'Residuo sólido o desecho',
      significado:
        'es cualquier objeto, material, sustancia o elemento sólido resultante del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales, de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. Los residuos sólidos se dividen en aprovechables y no aprovechables. Igualmente, se consideran como residuos sólidos aquellos provenientes del barrido de áreas públicas. ',
    },
    {
      termino: 'Residuo peligroso',
      significado:
        'Es aquel que, por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas puedan causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. También son residuos peligrosos aquellos que sin serlo en su forma original se transforman por procesos naturales en residuos peligrosos. Así mismo, se consideran residuos peligrosos los envases, empaques y embalajes que hayan estado en contacto con ellos.',
    },
    {
      termino: 'Residuos Especiales',
      significado:
        'Son aquellos residuos que por su naturaleza, composición, tamaño, volumen y peso no puedan ser recolectados, manejados, tratados o dispuestos normalmente por la persona prestadora del servicio. Incluye los residuos producto de las actividades de corte de césped y poda de árboles ubicados en las vías y áreas públicas; aquellos provenientes del barrido y limpieza de vías y áreas públicas, y los residuos provenientes de actividades de construcción y demás obras civiles. ',
    },
    {
      termino: 'Reciclaje',
      significado:
        'Es el proceso mediante el cual se aprovechan y transforman los residuos sólidos recuperados y se devuelve a los materiales su potencialidad de reincorporación como materia prima para la fabricación de nuevos productos. El reciclaje puede constar de varias etapas: procesos de tecnologías limpias. (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.4).',
    },
    {
      termino: 'Reutilización',
      significado:
        'Es la prolongación y adecuación de la vida útil de los residuos sólidos recuperados y que mediante procesos, operaciones o técnicas devuelven a los materiales su posibilidad de utilización en su función original o en alguna relacionada, sin que para ello requieran procesos adicionales de transformación. (Ministerio de Ambiente Vivienda y Desarrollo Territorial (2002) Decreto 1713 p.4).',
    },
    {
      termino: 'Separación en la fuente',
      significado:
        'Es la clasificación de los residuos sólidos en el sitio donde se generan para su posterior recuperación.',
    },
  ],
  complementario: [
    {
      tema: 'Programa Integral de Residuos Sólidos PGIRS en IPSE',
      referencia:
        'IPSE EnergiaZNI (2014, 19 diciembre) Programa Integral de Residuos Sólidos PGIRS en IPSE',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tidePrlbXzU',
    },
    {
      tema: '¿Cómo hacer un manejo integral de los residuos?',
      referencia:
        'Revista consultoría TV (2018, 23 octubre) ¿Cómo hacer un manejo integral de los residuos?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MUTCWejAUAw',
    },
    {
      tema: 'Campaña cero papeles SENA',
      referencia: 'SENA (2012, 16 julio) Campaña cero papel SENA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=37Y2a2R0ORg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Preguntas reales que nos hacen las parejas antes de reservar.
 * Se muestran en la home y alimentan el JSON-LD de FAQPage.
 */
export const faqs: FaqItem[] = [
  {
    question: '¿Cuándo tendremos las fotos de la boda?',
    answer:
      'Os mandamos un adelanto durante la primera semana, para que tengáis algo que enseñar mientras todavía estáis con la resaca del día. La galería completa y editada os llega entre 3 y 6 semanas después de la boda.',
  },
  {
    question: '¿Trabajáis fuera de Sevilla?',
    answer:
      'Sí. Cubrimos toda Andalucía: Cádiz, Huelva, Córdoba, Málaga, Granada, Jaén y Almería. También hacemos bodas de destino. Si vuestra finca está lejos, decídnoslo y lo hablamos sin problema.',
  },
  {
    question: '¿Hacéis también vídeo?',
    answer:
      'Sí, somos estudio de foto y vídeo. Podéis contratar solo la fotografía o las dos cosas. Si van juntas, nos coordinamos entre nosotros y no notaréis dos equipos encima.',
  },
  {
    question: '¿Nos vais a hacer posar todo el rato?',
    answer:
      'No. Trabajamos en documental: nos movemos por la boda y vamos capturando lo que pasa de verdad. Reservamos un rato corto para vosotros dos y poco más. La idea es que os olvidéis de la cámara.',
  },
  {
    question: '¿Puede salir nuestro perro o nuestro gato en las fotos?',
    answer:
      'Claro. Las mascotas son parte de la familia y nos encanta que estén. Contádnoslo antes para tenerlo previsto en el horario del día.',
  },
];

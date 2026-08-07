import type { ReactNode } from "react";

type BlogPostBody = {
  body: ReactNode;
};

export const blogPosts: Record<string, BlogPostBody> = {
  "economia-ia-estudiar-cambio-tecnologico": {
    body: (
      <>
        <p>
          La inteligencia artificial ya no es una promesa de laboratorio: es una tecnología de propósito
          general que está reorganizando tareas en casi todas las profesiones, y la economía no es la
          excepción. Para quien estudia o está por estudiar economía, la pregunta relevante no es si la IA
          va a cambiar el oficio &mdash;ya lo está haciendo&mdash;, sino qué tipo de formación sigue siendo
          valiosa cuando gran parte del cálculo, la limpieza de datos y hasta la redacción de primeros
          borradores puede delegarse a un modelo.
        </p>

        <h2>De las tareas rutinarias a las tareas de juicio</h2>
        <p>
          Un marco útil para pensar esto es el enfoque de tareas que popularizaron economistas como Autor,
          Levy y Murnane, y que luego extendieron autores como Acemoglu y Restrepo al analizar automatización
          y creación de nuevas tareas. La idea central es simple: la tecnología no sustituye profesiones
          completas, sustituye tareas específicas dentro de ellas. Las tareas rutinarias y codificables
          &mdash;correr una regresión estándar, construir una base de datos, resumir un documento&mdash; son
          las primeras en automatizarse. Las tareas de juicio &mdash;decidir qué pregunta de investigación
          importa, evaluar si un supuesto identificador es creíble, interpretar un resultado a la luz del
          contexto institucional&mdash; son mucho más difíciles de delegar.
        </p>
        <p>
          Esto no es exclusivo de la IA generativa: es la misma lógica que ya vivió la profesión con la
          calculadora, la hoja de cálculo y los paquetes estadísticos. Cada ola de automatización desplaza
          el valor agregado del economista hacia arriba en la cadena de juicio.
        </p>

        <h2>Qué cambia (y qué no) en la formación del economista</h2>
        <p>
          Lo que no cambia es la necesidad de entender teoría económica y los fundamentos de identificación
          causal. Un modelo de lenguaje puede escribir código de econometría razonablemente bien, pero no
          puede decidir si una estrategia de variables instrumentales es válida en un contexto particular, ni
          detectar cuándo un resultado estadísticamente significativo no tiene sentido económico. Esa
          capacidad de auditoría &mdash;de revisar críticamente lo que produce una herramienta automatizada&mdash;
          se vuelve, paradójicamente, más importante cuanto más se usa la IA como asistente de trabajo.
        </p>
        <p>
          Lo que sí cambia es la proporción del tiempo de estudio dedicada a cada habilidad. Programar sigue
          siendo relevante, pero cada vez menos como acto de escritura de código línea por línea y más como
          capacidad de especificar problemas con precisión, depurar resultados y validar supuestos. En
          proyectos de investigación aplicada &mdash;por ejemplo, el análisis econométrico del mercado
          laboral con microdatos de la Encuesta Nacional de Empleo, Desempleo y Subempleo (ENEMDU) en el que
          participo actualmente&mdash;, las herramientas de IA aceleran tareas de procesamiento y
          documentación, pero el diseño metodológico y la interpretación de resultados siguen exigiendo
          criterio humano formado en teoría y en conocimiento del contexto local.
        </p>

        <h2>Recomendaciones prácticas para quien estudia economía hoy</h2>
        <ul>
          <li>Dominar los fundamentos de microeconomía, macroeconomía y econometría antes de apoyarse en herramientas que automatizan el cálculo: sin ese criterio, es imposible evaluar si un resultado generado por IA es razonable.</li>
          <li>Desarrollar pensamiento causal (diseño de experimentos, variables instrumentales, diferencias en diferencias, regresión discontinua) como diferenciador frente a tareas puramente predictivas.</li>
          <li>Aprender a auditar salidas de modelos de IA: verificar fuentes, replicar cálculos clave y contrastar resultados con la teoría y con los datos originales.</li>
          <li>Combinar habilidades técnicas (Python, R, Stata) con capacidad de comunicar hallazgos a audiencias no técnicas, especialmente en contextos de política pública.</li>
          <li>Asumir la formación continua como parte del oficio: las herramientas cambian rápido, pero los fundamentos económicos y estadísticos son la base que permite adaptarse a cada nueva herramienta.</li>
        </ul>

        <h2>Una oportunidad, no solo un riesgo</h2>
        <p>
          El cambio tecnológico ha reconfigurado el mercado laboral de los economistas antes, y en cada
          ocasión la profesión terminó ocupando un lugar distinto en la cadena de valor de la producción de
          conocimiento: menos calculadora, más intérprete. La IA generativa acelera ese desplazamiento, pero
          no elimina la necesidad de criterio económico. Estudiar economía en tiempos de cambio tecnológico
          significa, sobre todo, invertir en aquello que sigue siendo escaso: la capacidad de plantear las
          preguntas correctas y de leer los resultados con rigor.
        </p>
      </>
    ),
  },
  "sobreeducacion-fenomeno-en-voga": {
    body: (
      <>
        <p>
          Cada vez es más común escuchar la palabra &ldquo;sobreeducación&rdquo; en conversaciones sobre
          empleo juvenil, migración calificada y políticas de educación superior. El fenómeno no es nuevo
          &mdash;la literatura académica lo estudia desde hace más de cuatro décadas&mdash;, pero la
          expansión acelerada del acceso a la educación superior en América Latina, junto con mercados
          laborales que no siempre generan puestos acordes a esa expansión, lo ha vuelto un tema cada vez más
          presente en la discusión pública.
        </p>

        <h2>¿Qué entendemos por sobreeducación?</h2>
        <p>
          En términos simples, un trabajador está sobreeducado cuando su nivel de instrucción formal supera
          el que su ocupación requiere objetivamente. La forma más utilizada para medirlo en la literatura
          empírica es el método ORU (Overeducation-Required-Undereducation), propuesto originalmente por
          Duncan y Hoffman (1981), que compara los años de escolaridad de cada trabajador con los años
          típicamente requeridos por su ocupación, usando esa brecha para estimar tanto la incidencia del
          fenómeno como su efecto sobre los salarios.
        </p>

        <h2>Por qué se ha vuelto un fenómeno &ldquo;en voga&rdquo;</h2>
        <p>
          Varios factores confluyen. Primero, la masificación de la educación superior: en las últimas
          décadas, la región amplió significativamente el acceso a la universidad, pero la estructura
          productiva no siempre generó, al mismo ritmo, ocupaciones que demanden esas calificaciones.
          Segundo, la llamada inflación de credenciales: cuando un título deja de ser un diferenciador
          escaso, los empleadores elevan los requisitos formales de puestos que objetivamente no los
          necesitan, usando el título como filtro de selección más que como requisito técnico. Tercero, la
          pospandemia aceleró la digitalización del trabajo y la búsqueda de empleo, lo que visibilizó con
          más claridad las brechas entre la oferta de profesionales y la demanda efectiva de las empresas.
        </p>

        <h2>Marcos teóricos en disputa</h2>
        <p>
          La teoría del capital humano clásica sugiere que toda educación es productiva y que la
          sobreeducación, si existe, es un desajuste transitorio que el mercado corrige con el tiempo, a
          medida que los trabajadores rotan hacia empleos mejor asignados. Frente a esa visión, los modelos
          de competencia por puestos (job competition) y de asignación (assignment models) sostienen que los
          empleos son relativamente fijos en el corto plazo y que el exceso de oferta de personas calificadas
          genera una &ldquo;fila&rdquo; en la que los más educados desplazan a los menos educados hacia abajo
          en la escala ocupacional, independientemente de si el puesto requiere esa calificación. La teoría
          de las señales, por su parte, plantea que el valor de un título está en la información que
          transmite sobre la capacidad del individuo; cuando el título se vuelve común, pierde poder de
          señalización y los empleadores exigen credenciales adicionales para distinguir candidatos.
        </p>

        <h2>Consecuencias económicas</h2>
        <p>
          La evidencia empírica internacional, usando variantes del método ORU, tiende a encontrar que los
          trabajadores sobreeducados ganan menos que sus pares con el mismo nivel educativo que sí están bien
          asignados a su ocupación, aunque generalmente ganan más que quienes tienen la educación
          &ldquo;correcta&rdquo; para ese mismo puesto. A esa penalización salarial se suman efectos sobre la
          satisfacción laboral, la rotación y, en casos de migración calificada, el fenómeno conocido como
          &ldquo;desperdicio de cerebros&rdquo; (brain waste), cuando profesionales altamente formados
          terminan en ocupaciones muy por debajo de su calificación en el país de destino.
        </p>

        <h2>Una agenda de investigación abierta para la región</h2>
        <p>
          En Ecuador y en gran parte de América Latina, la pregunta sobre sobreeducación está lejos de
          cerrarse: la expansión reciente del acceso a la educación superior, combinada con estructuras
          productivas que aún dependen en buena medida de sectores de baja productividad, plantea un terreno
          fértil para investigación aplicada rigurosa antes de sacar conclusiones de política. Medir bien el
          fenómeno &mdash;con metodologías como ORU aplicadas a microdatos de encuestas de empleo&mdash; es
          el primer paso necesario para diseñar respuestas de política educativa y laboral que no se basen en
          percepciones, sino en evidencia.
        </p>
      </>
    ),
  },
  "reglamentar-ia-caso-union-europea": {
    body: (
      <>
        <p>
          Pocas preguntas de política pública generan hoy tanto debate como esta: ¿debe el Estado regular el
          desarrollo y la implementación de la inteligencia artificial, o esa regulación termina frenando una
          tecnología que todavía está definiendo su propio potencial? Desde la economía, el debate no es
          ideológico sino de diseño: la pregunta no es &ldquo;regular sí o no&rdquo;, sino cuándo, cómo y con
          qué instrumentos intervenir sin destruir el valor que la tecnología puede generar.
        </p>

        <h2>El argumento económico a favor de regular</h2>
        <p>
          La justificación estándar para la intervención estatal en cualquier mercado parte de las fallas de
          mercado, y la IA presenta varias con claridad. Hay externalidades negativas no internalizadas por
          quien desarrolla o despliega un sistema &mdash;desde sesgos algorítmicos que afectan a terceros
          hasta riesgos de seguridad o desinformación a gran escala&mdash;. Hay asimetrías de información
          severas: ni los consumidores ni, en muchos casos, los propios reguladores pueden evaluar
          fácilmente cómo funciona un modelo o qué tan confiables son sus resultados, lo que dificulta que el
          mercado discipline por sí solo a los proveedores. Y hay un componente de riesgo sistémico, en la
          medida en que un número reducido de proveedores de modelos de gran escala concentra
          infraestructura de la que dependen sectores enteros de la economía.
        </p>

        <h2>El argumento en contra, o al menos de cautela</h2>
        <p>
          La regulación no es gratuita. Imponer requisitos de cumplimiento tiene costos fijos que las
          empresas grandes absorben con más facilidad que las startups, lo que puede terminar reforzando la
          posición de los actores dominantes en lugar de corregirla. La velocidad del cambio tecnológico
          también genera un problema de &ldquo;rezago regulatorio&rdquo;: normas diseñadas hoy pueden quedar
          obsoletas o mal calibradas para la siguiente generación de modelos. Y existe el riesgo, bien
          documentado en la literatura de economía de la regulación, de captura regulatoria, donde las
          propias empresas reguladas terminan influyendo de forma desproporcionada en el diseño de las
          normas que las rigen.
        </p>

        <h2>El caso de la Unión Europea: el Reglamento de IA</h2>
        <p>
          La Unión Europea ofrece hasta ahora el intento más completo de resolver esta tensión con un marco
          legal específico para IA: el Reglamento (UE) 2024/1689, conocido como AI Act, aprobado en 2024
          tras un proceso de negociación de varios años. Su rasgo distintivo es un enfoque basado en riesgo,
          no en la tecnología en sí:
        </p>
        <ul>
          <li><strong>Riesgo inaceptable:</strong> prácticas prohibidas de forma directa, como los sistemas de puntuación social por parte de autoridades públicas o ciertas formas de manipulación conductual.</li>
          <li><strong>Alto riesgo:</strong> sistemas usados en ámbitos sensibles &mdash;selección de personal, calificación crediticia, infraestructura crítica, aplicación de la ley&mdash;, sujetos a evaluaciones de conformidad, documentación técnica y supervisión humana obligatoria.</li>
          <li><strong>Riesgo limitado:</strong> obligaciones de transparencia, como informar a una persona que está interactuando con un chatbot o que un contenido fue generado por IA.</li>
          <li><strong>Riesgo mínimo:</strong> la gran mayoría de aplicaciones, sin obligaciones adicionales específicas.</li>
        </ul>
        <p>
          El reglamento incorpora además obligaciones específicas para los modelos de IA de propósito
          general, con requisitos reforzados de transparencia y evaluación de riesgo sistémico para los
          modelos más capaces. Su aplicación es escalonada, extendiéndose desde 2024 hasta 2026 y 2027 según
          el tipo de obligación, y &mdash;de forma similar a lo ocurrido con el Reglamento General de
          Protección de Datos&mdash; tiene alcance extraterritorial: afecta a cualquier proveedor que ofrezca
          sistemas de IA en el mercado europeo, sea o no una empresa europea. Ese es precisamente el
          mecanismo detrás del llamado &ldquo;efecto Bruselas&rdquo;: una norma regional que termina
          funcionando como estándar de facto global, porque a las empresas les resulta más simple cumplir un
          único estándar exigente que mantener versiones distintas de sus productos por mercado.
        </p>

        <h2>Lecciones para otras economías, incluida Ecuador</h2>
        <p>
          Copiar el modelo europeo tal cual no es necesariamente la mejor estrategia para economías con
          capacidad institucional y fiscal distinta. Lo más relevante del caso europeo no es el texto legal
          en sí, sino el principio de diseño: proporcionalidad según el riesgo, en lugar de reglas uniformes
          para toda aplicación de IA. Para países como Ecuador, eso sugiere priorizar la regulación &mdash;o,
          en una primera etapa, lineamientos y protocolos&mdash; en los usos de mayor riesgo directo sobre
          derechos de las personas: decisiones algorítmicas en el sector público, calificación crediticia,
          selección de personal y plataformas laborales digitales, antes que intentar cubrir el universo
          completo de aplicaciones de IA. Regular sin capacidad de fiscalización efectiva puede ser tan
          contraproducente como no regular en absoluto.
        </p>
        <p>
          La pregunta de si se debe reglamentar la IA, entonces, tiene una respuesta menos binaria de lo que
          parece: no es regular todo ni dejar todo al mercado, sino diseñar instrumentos proporcionales al
          riesgo real, con capacidad institucional suficiente para hacerlos cumplir.
        </p>
      </>
    ),
  },
};

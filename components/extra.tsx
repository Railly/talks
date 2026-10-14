"use client";

import { motion } from "motion/react";
import { Hub, Megaphone, Notebook, Orbit, Spark, Stack } from "./art";
import { EASE, R, Words } from "./motion";
import { Card, Eyebrow, Foot, Mark, type Slide, tone } from "./slides";

function PhotoSlot({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className="photo-slot"
      style={style}
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
    >
      <span>{label}</span>
    </motion.div>
  );
}

const reports = [
  ["#041", "Bomba P-3", "Vibración alta. Se cambió el rodamiento."],
  ["#058", "Bomba P-3", "Ruido en el eje, temperatura elevada."],
  ["#063", "Faja F-12", "Desalineada, se ajustó la tensión."],
  ["#077", "Bomba P-3", "Rodamiento dañado otra vez."],
];

const results = [
  ["Rodamiento, bomba P-3", "7", "#041 #058 #077 +4"],
  ["Desalineación, faja F-12", "4", "#063 #090 +2"],
  ["Sobrecalentamiento, motor M-2", "3", "#071 #104 #118"],
];

export const extra: Slide[] = [
  {
    id: "ingredientes",
    notes: "Para hacer bulla se necesitan tres ingredientes. Internet: imprescindible. Creérsela: mentalidad. Publicar: compartir lo que haces.",
    render: (n) => (
      <>
        <Eyebrow>Hacer bulla</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Tres ingredientes.</R>
          <div className="cards">
            <Card i={2} tone={tone.blue} num="01" title="Internet" text="Imprescindible. Te conecta con el mundo entero." art={<Hub className="icon" />} />
            <Card i={3} tone={tone.sand} num="02" title="Creérsela" text="Es mentalidad. Si tú no crees en ti, nadie lo hará primero." art={<Orbit className="icon" />} />
            <Card i={4} tone={tone.green} num="03" title="Publicar" text="Compartir lo que haces, aunque no esté perfecto." art={<Stack className="icon" />} />
          </div>
        </div>
        <Foot left="Bulla, en el buen sentido" right={n} />
      </>
    ),
  },
  {
    id: "juego",
    dark: true,
    notes: "Veo la vida como un juego. Nadie entra a un juego para perder: puedes disfrutar con tus amigos, pero el objetivo es ganar. Si antes de jugar dices 'no puedo', ya perdiste. Date permiso de ser vulnerable, conoce tus debilidades y mejora poco a poco. No necesitas pedir permiso para crear, compartir o salir de tu zona. Mejor pedir perdón que pedir permiso: eso es clave para innovar e investigar.",
    render: (n) => (
      <>
        <Eyebrow>02 / Creérsela</Eyebrow>
        <div className="body">
          <p className="quote" style={{ maxWidth: 1150 }}>
            <Words text="Nadie entra a un juego para perder." />
          </p>
          <R i={6} as="p" className="lead">
            Si antes de jugar dices «no puedo», ya perdiste el partido. <strong>No necesitas permiso</strong> para crear, para compartir ni para salir de tu zona.
          </R>
          <R i={8} className="pill">Mejor pedir perdón que pedir permiso.</R>
        </div>
        <Foot left="La vida como un juego" right={n} />
        <Orbit size={440} className="art" style={{ right: 80, top: 230, color: "#f8e9a4" }} />
      </>
    ),
  },
  {
    id: "cv",
    notes: "En esta época los agentes automatizan contenido, programación, investigación. Hay gente y agentes publicando 24/7. Si sales solo con un CV en papel, no alcanza. He conversado con reclutadores: muchos descartan por CV, y cada vez más el primer filtro es una IA. Publicar te diferencia y construye tu marca personal.",
    render: (n) => (
      <>
        <Eyebrow>03 / Publicar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Un CV ya no <Mark delay={0.9}>alcanza</Mark>.</R>
          <div className="cards">
            <Card i={2} title="Compites con muchos" text="Personas y agentes publicando 24/7." />
            <Card i={3} title="El primer filtro es IA" text="Muchos CV se descartan antes de que los lea una persona." />
            <Card i={4} tone="c-ink" title="Tu trabajo habla" text="Lo que publicas es tu marca personal." />
          </div>
        </div>
        <Foot left="Lo que reclutadores me han contado" right={n} />
        <Megaphone size={260} className="art" style={{ right: 100, top: 50, color: "var(--muted)" }} />
      </>
    ),
  },
  {
    id: "antes",
    notes: "Historia: en la universidad, con el profesor Herminio Paucar, tenía un proyecto de realidad aumentada. No tenía idea de cómo hacerlo ni sabía inglés, y todos los recursos estaban en inglés. Me tomó mes y medio, dos meses. Con marcadores, al apuntar con la cámara salía el sistema solar rotando. El profesor me mandó a ayudar a otros alumnos, incluso de ciclos superiores.",
    render: (n) => (
      <>
        <Eyebrow>Una historia · En la universidad</Eyebrow>
        <div className="body" style={{ maxWidth: 820 }}>
          <R as="h2" i={1}>Realidad aumentada, con el profesor Herminio Paucar.</R>
          <div className="stats">
            <R i={2} className="stat"><b>~2 meses</b><span>de tutoriales y prueba y error</span></R>
            <R i={3} className="stat"><b>0</b><span>inglés, y todo estaba en inglés</span></R>
          </div>
          <R i={4} as="p" className="lead">Marcadores, una cámara y el sistema solar rotando encima.</R>
        </div>
        <Foot left="Antes" right={n} />
        <PhotoSlot label="Foto o video del proyecto original" style={{ right: 96, top: 170, width: 560, height: 520 }} />
      </>
    ),
  },
  {
    id: "hoy",
    dark: true,
    notes: "Hace poco hice el ejercicio de replicarlo con las tecnologías actuales. Me tomó una hora o menos, con mucha más calidad. Corre en el navegador, sin hardware especial, y le agregué manipulación con gestos: rotas con un dedo. Lo que me tomó mes y medio como principiante, el agente lo hizo con calidad superior en una hora. Estamos viendo el futuro literalmente. (Mostrar video o link.)",
    render: (n) => (
      <>
        <Eyebrow>La misma idea · Hoy</Eyebrow>
        <div className="body" style={{ maxWidth: 820 }}>
          <h2><Words text="El mismo proyecto, en una hora." /></h2>
          <div className="stats">
            <R i={4} className="stat"><b>&lt;1 hora</b><span>con un agente</span></R>
            <R i={5} className="stat"><b>Web</b><span>sin hardware especial</span></R>
            <R i={6} className="stat"><b>Gestos</b><span>rotas con un dedo</span></R>
          </div>
          <R i={7} as="p" className="lead">Y con <span className="hl">mucha más calidad</span>.</R>
        </div>
        <Foot left="Hoy" right={n} />
        <PhotoSlot label="Video del proyecto nuevo" style={{ right: 96, top: 170, width: 560, height: 520 }} />
      </>
    ),
  },
  {
    id: "pensar",
    notes: "Hay que ver al agente como un compañero de trabajo. Por más absurdo que suene. No como tu inferior, ni como tu superior, porque tú eres el responsable humano. Como un par que te ayuda a una velocidad inhumana, pero el criterio lo pones tú. Como asistente: preguntas, copias la respuesta, no revisas nada. Como ingeniero: defines el problema, le das contexto, revisas y decides.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Un agente es un <Mark delay={0.9}>compañero de trabajo</Mark>.</R>
          <div className="cards">
            <Card i={2} title="Ni tu inferior" text="No le das órdenes sin contexto." />
            <Card i={3} title="Ni tu superior" text="El responsable eres tú." />
            <Card i={4} tone="c-ink" title="Un par" text="Trabaja a una velocidad inhumana. El criterio lo pones tú." />
          </div>
        </div>
        <Foot left="Como ingeniero: defines, das contexto, revisas, decides" right={n} />
      </>
    ),
  },
  {
    id: "criterio",
    dark: true,
    notes: "El criterio no es algo nuevo. Imagínate que fuera un compañero humano. ¿Le creerías todo lo que te dice, sin ningún criterio de tu lado? No. Siempre tienes que ser crítico, investigar y formar tu propio criterio para saber cuándo algo es correcto y argumentar por qué. Un agente puede decirte 'tienes toda la razón, eres un genio'. Convincente no es lo mismo que correcto.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar · El criterio</Eyebrow>
        <div className="body">
          <p className="quote" style={{ maxWidth: 1200 }}>
            <Words text="Si fuera una persona, ¿le creerías todo lo que te dice?" />
          </p>
          <R i={8} as="p" className="lead">
            «Tienes toda la razón» es <strong>convincente</strong>. No significa que sea <span className="hl">correcto</span>.
          </R>
        </div>
        <Foot left="Esto no es nuevo: es criterio de siempre" right={n} />
      </>
    ),
  },
  {
    id: "verificar",
    notes: "Verificación: probar que funciona antes de decir que funciona. Un agente te dice 'todo funciona'. Pídele que te lo muestre. Tests automatizados, pruebas de estrés, intentar romper la solución. Muchas veces encuentras huecos que no habías contemplado. Mientras más rigurosas las pruebas, más puedes confiar. Y no es confiar en el agente: es confiar en que tu solución es resiliente.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar · La verificación</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>«Todo funciona». <Mark delay={0.9}>Muéstramelo.</Mark></R>
          <div className="cards">
            <Card i={2} tone={tone.green} num="01" title="Pruebas automáticas" text="Que la solución se pruebe sola, cada vez." />
            <Card i={3} tone={tone.lilac} num="02" title="Intenta romperla" text="Ahí aparecen los huecos que no viste." />
            <Card i={4} tone={tone.sand} num="03" title="Resiliencia" text="Que aguante y se recupere de los errores." />
          </div>
        </div>
        <Foot left="No confías en el agente: confías en tu evidencia" right={n} />
      </>
    ),
  },
  {
    id: "construir",
    notes: "Caso concreto (datos de ejemplo). Una planta tiene 200 reportes de mantenimiento escritos a mano. Le das el objetivo al agente: encontrar las fallas que se repiten. Te propone un plan, lo revisas. Clasifica y cita el reporte original de cada falla. Y tú validas una muestra contra lo que diría el técnico. El humano siempre revisa la solución.",
    render: (n) => (
      <>
        <Eyebrow>02 / Construir · Un caso concreto</Eyebrow>
        <div className="body" style={{ gap: 32 }}>
          <R as="h2" i={1}>200 reportes de mantenimiento. ¿Qué falla se repite?</R>
          <div className="case">
            <R i={2} className="case-col">
              <span className="num">Entrada · reportes escritos a mano</span>
              {reports.map(([id, eq, t]) => (
                <div key={id} className="report"><b>{id}</b><span><strong>{eq}.</strong> {t}</span></div>
              ))}
            </R>
            <motion.div className="case-arrow" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}>
              <Spark size={36} />
            </motion.div>
            <R i={5} className="case-col out">
              <span className="num">Salida · el agente agrupa y cita</span>
              {results.map(([f, c, refs]) => (
                <div key={f} className="result"><span>{f}</span><b>{c}</b><small>{refs}</small></div>
              ))}
              <span className="check">Tú validas 20 al azar contra el técnico</span>
            </R>
          </div>
        </div>
        <Foot left="Datos de ejemplo · Tú diriges, el agente ejecuta, tú validas" right={n} />
      </>
    ),
  },
  {
    id: "investigar",
    notes: "Investigar. Primero el estado del arte: qué ya existe, qué se probó. Luego la pregunta. Después: contra qué comparas, qué mides (tiempo, aciertos, costo), reportar errores, y que otra persona pueda repetirlo. Un demo llamativo no es una contribución.",
    render: (n) => (
      <>
        <Eyebrow>03 / Investigar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>De prototipo a <Mark delay={0.9}>evidencia</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 5 }}>
            <Card i={2} tone={tone.lilac} num="01" title="Estado del arte" text="¿Qué ya existe?" />
            <Card i={3} num="02" title="Alternativa" text="¿Contra qué comparas?" />
            <Card i={4} num="03" title="Métrica" text="Tiempo, aciertos, costo." />
            <Card i={5} num="04" title="Errores" text="Reportarlos, no esconderlos." />
            <Card i={6} num="05" title="Reproducible" text="Que otro pueda repetirlo." />
          </div>
        </div>
        <Foot left="Un demo no es una contribución" right={n} />
        <Notebook size={360} className="art" style={{ right: 60, top: 40, color: "var(--lilac-ink)" }} />
      </>
    ),
  },
  {
    id: "historia-builder",
    dark: true,
    notes: "PENDIENTE confirmar nombre y detalles. Historia de un builder peruano que conocí por internet, que ganó en un reto de midudev participando globalmente desde su ciudad, ganando en dólares. Lo voy a conocer en persona por primera vez este sábado: lo invité a Lima al Hot Reload. Una persona correcta puede cambiarte el día por completo.",
    render: (n) => (
      <>
        <Eyebrow>04 / Empezar temprano · Una historia</Eyebrow>
        <div className="body" style={{ maxWidth: 900 }}>
          <h2><Words text="Desde su ciudad, compitiendo con el mundo." /></h2>
          <R i={6} as="p" className="lead">
            Un builder peruano que conocí por internet. Ganó participando globalmente. Este sábado lo conozco en persona, en Lima.
          </R>
        </div>
        <Foot left="Internet + creérsela + publicar" right={n} />
        <PhotoSlot label="Foto del builder (pendiente)" style={{ right: 110, top: 190, width: 440, height: 480 }} />
      </>
    ),
  },
];

export const ORDER = [
  "portada", "gracias", "formal", "builder", "recorrido",
  "bulla", "ingredientes", "juego", "cv",
  "ship", "antes", "hoy", "inviable",
  "pensar", "no-delega", "criterio", "verificar",
  "construir", "errores",
  "investigar", "pregunta",
  "temprano", "historia-builder", "crafter", "cierre",
];

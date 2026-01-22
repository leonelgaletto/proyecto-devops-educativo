import { useMemo, useState } from 'react'
import './App.css'

const projects = [
  {
    id: 'linux-logs',
    title: 'Proyecto 01 · Operador de logs (Linux)',
    level: 'Principiante',
    time: '30–45 min',
    outcome: 'Vas a saber leer, filtrar y reportar logs como en un trabajo real.',
    run: [
      'git clone https://github.com/leonelgaletto/proyecto-devops-educativo.git',
      'cd proyecto-devops-educativo/projects/01-linux-logs',
    ],
    practice: [
      'Leer logs con contexto (no a ciegas).',
      'Encontrar señal vs ruido.',
      'Escribir un mini reporte de incidente.',
      'Diferenciar mitigación vs fix permanente.',
    ],
    tools: ['Linux', 'Terminal', 'bash', 'grep', 'tail', 'sed'],
    nextSteps: [
      'tail -n 40 assets/service.log',
      'grep -n "ERROR" assets/service.log | tail -n 5',
      'creá report.md (4 secciones)',
      'bash scripts/verify.sh',
      '(cuando termines) leé solution.md',
    ],
  },
  {
    id: 'dockerize',
    title: 'Proyecto 02 · Dockerizá una app mínima',
    level: 'Principiante',
    time: '30–45 min',
    outcome: 'Vas a construir y correr una imagen, entendiendo puertos y contenedores.',
    run: [
      'git clone https://github.com/leonelgaletto/proyecto-devops-educativo.git',
      'cd proyecto-devops-educativo/projects/02-dockerize-minimal',
    ],
    practice: [
      'Crear un Dockerfile mínimo.',
      'Build y run de contenedores.',
      'Entender adentro vs afuera (puertos).',
    ],
    tools: ['Docker', 'Terminal'],
    nextSteps: [
      'docker --version',
      'docker build -t devops-hello .',
      'docker run --rm -p 8080:8080 devops-hello',
      'abrí http://localhost:8080',
      'bash scripts/verify.sh',
      '(cuando termines) leé solution.md',
    ],
  },
  {
    id: 'cicd',
    title: 'Proyecto 03 · CI básico que rompe y se arregla',
    level: 'Intermedio',
    time: '60–90 min',
    outcome: 'Vas a ver un pipeline fallar, interpretarlo y dejarlo verde.',
  },
]

function ProjectCard({ title, level, time, outcome, run, selected, onSelect }) {
  return (
    <button
      type="button"
      className={selected ? 'card cardButton selected' : 'card cardButton'}
      onClick={onSelect}
    >
      <div className="cardTop">
        <span className="pill">{level}</span>
        <span className="muted">{time}</span>
      </div>
      <h3 className="cardTitle">{title}</h3>
      <p className="muted">{outcome}</p>
      {run ? <div className="cardCmd">{run}</div> : null}
    </button>
  )
}

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState('linux-logs')

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId),
    [selectedProjectId]
  )

  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="brandMark" aria-hidden="true">
              🐉
            </div>
            <div>
              <div className="brandName">DevOps con proyectos reales</div>
              <div className="brandTagline">Práctica directa. Con soluciones.</div>
            </div>
          </div>
          <a className="ghostLink" href="#proyectos">
            Ver proyectos
          </a>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Aprendé DevOps haciendo trabajo real</h1>
          <p className="lead">
            Te damos prácticas cortas, concretas y realistas. Te ayudamos a lanzarte
            en el mundo DevOps con proyectos reales, entregables claros y soluciones.
          </p>

          <div className="heroGrid two">
            <div className="heroCard hoverCard">
              <div className="heroCardTitleRow">
                <div className="heroCardTitle">Cómo se usa</div>
              </div>
              <div className="heroCardBody">
                <ol className="list">
                  <li>Elegí un proyecto.</li>
                  <li>Seguí el brief (lo que te pide el “cliente”).</li>
                  <li>Compará tu entrega con la solución.</li>
                </ol>
              </div>
            </div>

            <div className="heroCard hoverCard alt">
              <div className="heroCardTitleRow">
                <div className="heroCardTitle">Cómo arrancar</div>
              </div>
              <div className="heroCardBody">
                <div className="code">
                  git clone https://github.com/leonelgaletto/proyecto-devops-educativo.git
                  {'\n'}cd proyecto-devops-educativo
                  {'\n'}cd web
                  {'\n'}npm install
                  {'\n'}npm run dev
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="sectionTitleRow">
            <h2>Proyectos</h2>
            <p className="muted">Elegí uno y arrancá. Todo es práctico.</p>
          </div>

          <div className="grid">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                level={p.level}
                time={p.time}
                outcome={p.outcome}
                run={p.run}
                selected={p.id === selectedProjectId}
                onSelect={() => setSelectedProjectId(p.id)}
              />
            ))}
          </div>

          {selectedProject ? (
            <div className="selection">
              <div className="selectionTop">
                <h3 className="selectionTitle">Seleccionado: {selectedProject.title}</h3>
                <span className="muted">{selectedProject.time} · {selectedProject.level}</span>
              </div>

              {selectedProject.run ? (
                <div className="code">
                  {Array.isArray(selectedProject.run)
                    ? selectedProject.run.join('\n')
                    : selectedProject.run}
                </div>
              ) : (
                <p className="muted">
                  Todavía no está creado el lab de este proyecto. (Lo armamos cuando
                  quieras.)
                </p>
              )}

              {selectedProject.practice ? (
                <>
                  <div className="miniTitle" style={{ marginTop: '0.9rem' }}>
                    Qué vas a practicar
                  </div>
                  <ul className="list">
                    {selectedProject.practice.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}

              {selectedProject.tools ? (
                <>
                  <div className="miniTitle" style={{ marginTop: '0.9rem' }}>
                    Herramientas
                  </div>
                  <div className="chips">
                    {selectedProject.tools.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}

              {selectedProject.nextSteps ? (
                <>
                  <div className="miniTitle" style={{ marginTop: '0.9rem' }}>
                    Primeros pasos
                  </div>
                  <ol className="list">
                    {selectedProject.nextSteps.map((step) => (
                      <li key={step}>
                        <span className="mono">{step}</span>
                      </li>
                    ))}
                  </ol>
                </>
              ) : null}

              {selectedProject.id === 'linux-logs' ? (
                <p className="muted" style={{ marginTop: '0.8rem' }}>
                  Archivos clave: <span className="mono">README.md</span>,{' '}
                  <span className="mono">assets/service.log</span>,{' '}
                  <span className="mono">solution.md</span>.
                </p>
              ) : null}
            </div>
          ) : null}
        </section>

        <section className="section">
          <div className="sectionTitleRow">
            <h2>Demo (la idea en chiquito)</h2>
            <p className="muted">
              Una práctica completa: brief → checklist → solución.
            </p>
          </div>

          <div className="panel">
            <h3 className="panelTitle">Proyecto 01 · Operador de logs (Linux)</h3>
            <p className="muted">
              Estás “on-call”. Un servicio empezó a fallar y tenés que mirar logs,
              aislar el error y escribir un mini reporte.
            </p>

            <div className="twoCols">
              <div>
                <h4 className="miniTitle">Brief (lo que te piden)</h4>
                <ol className="list">
                  <li>Encontrá el último error en logs.</li>
                  <li>Identificá la causa probable (1 frase).</li>
                  <li>Proponé 1 acción inmediata y 1 acción definitiva.</li>
                </ol>
              </div>
              <div>
                <h4 className="miniTitle">Entregable</h4>
                <div className="code">
                  Un texto corto con:
                  <br />- Error observado
                  <br />- Causa probable
                  <br />- Mitigación
                  <br />- Fix permanente
                </div>
              </div>
            </div>

            <details className="details">
              <summary className="summary">Ver solución (ejemplo)</summary>
              <div className="detailsBody">
                <div className="code">
                  Error observado:
                  <br />- "connection refused" al intentar hablar con la DB
                  <br />
                  <br />Causa probable:
                  <br />- La DB no está levantada o cambió el host/puerto
                  <br />
                  <br />Mitigación:
                  <br />- Reiniciar el servicio o apuntarlo al host correcto
                  <br />
                  <br />Fix permanente:
                  <br />- Healthcheck + alerta + config por variables de entorno
                </div>
                <p className="muted">
                  Nota: esto es un ejemplo “de forma”. En el próximo paso lo
                  hacemos real con un archivo de logs y comandos concretos.
                </p>
              </div>
            </details>
          </div>
        </section>

        <footer className="footer">
          <div className="muted">
            Hecho para practicar sin abrumarte. Iteramos de a poco.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

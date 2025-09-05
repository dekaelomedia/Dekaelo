export default function Landing() {
  return (
    <div id="inicio" className="min-h-screen bg-black text-white font-sans flex flex-col" style={{ scrollBehavior: 'smooth' }}>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg shadow-md border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide text-yellow-500">Dekaelo Media</h1>
          <ul className="hidden md:flex space-x-8 text-gray-400 text-sm">
            <li><a href="#inicio" className="hover:text-yellow-400">Inicio</a></li>
            <li><a href="#plan" className="hover:text-yellow-400" data-testid="nav-planes">Planes</a></li>
            <li><a href="#beneficios" className="hover:text-yellow-400">Beneficios</a></li>
            <li><a href="#clientes" className="hover:text-yellow-400">Clientes</a></li>
            <li><a href="#galeria" className="hover:text-yellow-400">Galería</a></li>
            <li><a href="#quienes" className="hover:text-yellow-400">Quiénes Somos</a></li>
            <li><a href="#extras" className="hover:text-yellow-400">Extras</a></li>
            <li><a href="#contacto" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-24 flex-1">
        {/* Hero */}
        <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-500">Dekaelo Media</h2>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            ¿Y si tu empresa tuviera contenido audiovisual profesional cada mes…<br />
            sin perder tiempo ni desgastarte en producción?
          </p>
<div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/uul8LNP6BbQ"
      title="Video YouTube 1"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/550zTI8nEvY"
      title="Video YouTube 2"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
        </section>

        {/* Plan (características del servicio) */}
        <section id="plan" className="py-20 px-6 max-w-6xl mx-auto" data-testid="section-plan">
          <h3 className="text-4xl font-extrabold text-center mb-14 text-blue-400">Plan Audiovisual Mensual Estratégico</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-800">
              <ul className="space-y-4 text-gray-300">
                <li>1 jornada de grabación profesional (hasta 8 horas)</li>
                <li>1 video largo institucional / YouTube / vodcast</li>
                <li>Asesoría en publicaciones + guion creativo</li>
                <li>1 ronda de revisión incluida</li>
                <li>4 a 5 reels/shorts o cápsulas</li>
                <li>Entrega optimizada por plataforma</li>
                <li>Informe mensual estratégico con ideas + análisis básico</li>
              </ul>
              <div className="mt-8 p-4 rounded-2xl bg-gray-800/70 border border-gray-700 text-sm text-gray-300">
                <span className="text-yellow-400 font-semibold">Cupos limitados:</span> máximo 5 empresas por mes para mantener calidad y personalización.
              </div>
            </div>
            <div className="flex flex-col justify-center text-gray-400 text-lg">
              <p className="mb-6 text-yellow-400 text-xl">“Ahora más que nunca, invertir en video profesional no es opcional — es estratégico.”</p>
              <p>Transformamos tu comunicación audiovisual en una herramienta de visibilidad, confianza y posicionamiento. Nos convertimos en tu aliado creativo y técnico.</p>
              <a href="#contacto" className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 text-white rounded-full shadow-xl">
                Quiero mi plan audiovisual
              </a>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="py-20 px-6 bg-gray-950">
          <h3 className="text-4xl font-extrabold text-center mb-16 text-blue-400">Beneficios para tu empresa</h3>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[{
              title: '📈 Presencia digital',
              text: 'Constante y profesional, sin esfuerzo interno.'
            },{
              title: '🧠 Asesor creativo',
              text: 'Ideas, guiones y propuestas estratégicas mes a mes.'
            },{
              title: '⏱️ Ahorro de recursos',
              text: 'Olvídate de coordinar un equipo interno.'
            },{
              title: '🎯 Objetivos reales',
              text: 'Ventas, posicionamiento, confianza o impacto humano.'
            },{
              title: '🧩 Consistencia',
              text: 'Planificación mensual sin improvisaciones.'
            },{
              title: '🏆 Posicionamiento',
              text: 'Consolida tu marca como líder en tu rubro.'
            }].map((b,i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-3xl shadow-md border border-gray-700">
                <h4 className="font-bold mb-3 text-yellow-400">{b.title}</h4>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a href="#contacto" className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 text-white rounded-full shadow-xl">
              Quiero mi plan audiovisual
            </a>
          </div>
        </section>

        {/* Clientes */}
       <section id="clientes" className="py-16 px-6 bg-gray-900">
  <h3 className="text-3xl font-extrabold text-center mb-10 text-gray-200">
    Algunos clientes y aliados
  </h3>
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
    <img src="/logo_1.png" alt="Cliente 1" className="h-16 mx-auto object-contain" />
    <img src="/logo_2.png" alt="Cliente 2" className="h-16 mx-auto object-contain" />
    <img src="/logo_3.png" alt="Cliente 3" className="h-16 mx-auto object-contain" />
    <img src="/logo_4.png" alt="Cliente 4" className="h-16 mx-auto object-contain" />
    <img src="/logo_5.png" alt="Cliente 5" className="h-16 mx-auto object-contain" />
    <img src="/logo_6.png" alt="Cliente 6" className="h-16 mx-auto object-contain" />
  </div>
  <p className="text-center text-gray-400 text-sm mt-6">
    Añade aquí tus logos en SVG/PNG para máxima nitidez.
  </p>
</section>

        {/* Galería */}
        <section id="galeria" className="py-20 px-6 max-w-6xl mx-auto">
          <h3 className="text-4xl font-extrabold text-center mb-12 text-blue-400">Galería de proyectos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-3xl aspect-video flex items-center justify-center shadow-md">
              <span className="text-gray-500">[Foto 1]</span>
            </div>
            <div className="bg-gray-800 rounded-3xl aspect-video flex items-center justify-center shadow-md">
              <span className="text-gray-500">[Foto 2]</span>
            </div>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section id="quienes" className="py-20 px-6 bg-gray-900 text-center">
          <h3 className="text-4xl font-extrabold mb-6 text-yellow-500">Quiénes Somos</h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            Más de una década creando contenido con impacto real: videos corporativos, comerciales de TV, documentales y películas para festivales y Amazon Prime.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mt-4">
            <span className="font-semibold text-blue-400">+4.000.000</span> de visualizaciones acumuladas en nuestras producciones.
          </p>
        </section>

        {/* Pricing - Reemplazado por Planes Mensuales */}
        <section id="planes" className="py-24 px-6 bg-gray-950" data-testid="section-planes">
          <h3 className="text-4xl font-extrabold text-center mb-4 text-yellow-500">Planes mensuales</h3>
          <p className="text-center text-gray-400 mb-12">Valores IVA incluido. Contrato mínimo sugerido: 3 meses.</p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Básico */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-800">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-basico">
                <h4 className="text-xl font-bold text-gray-200">Básico</h4>
                <p className="mt-1 text-sm text-gray-400">Para iniciar con presencia mensual</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold">$595.000</div>
                  <div className="text-sm text-gray-400">CLP / mes</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  <li>1 cápsula institucional (máx. 2 min)</li>
                  <li>2 reels/shorts</li>
                  <li>Grabación simple (1 cámara, hasta 3h)</li>
                  <li>Exportación para 1 plataforma</li>
                  <li>1 revisión</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition">Quiero este plan</a>
              </div>
            </div>

            {/* Estándar */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-yellow-600 to-blue-700 shadow-2xl">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-estandar">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">Recomendado</div>
                <h4 className="text-xl font-bold text-gray-200">Estándar</h4>
                <p className="mt-1 text-sm text-gray-300">Equilibrio perfecto para crecer</p>
                <div className="mt-6">
                  <div className="text-4xl font-extrabold">$952.000</div>
                  <div className="text-sm text-gray-400">CLP / mes</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-200 text-sm">
                  <li>1 jornada de grabación (8 horas)</li>
                  <li>1 video largo institucional / YouTube / vodcast</li>
                  <li>4–5 reels/shorts</li>
                  <li>Asesoría + guion creativo</li>
                  <li>Entrega optimizada por plataforma</li>
                  <li>1 revisión</li>
                  <li>Informe mensual estratégico básico</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 transition">Quiero este plan</a>
              </div>
            </div>

            {/* Premium */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-gray-700 to-gray-800">
              <div className="h-full w-full rounded-3xl bg-gray-900 border border-gray-800 p-8 flex flex-col" data-testid="card-premium">
                <h4 className="text-xl font-bold text-gray-200">Premium</h4>
                <p className="mt-1 text-sm text-gray-400">Para campañas y mayor cobertura</p>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold">$1.450.000</div>
                  <div className="text-sm text-gray-400">CLP / mes</div>
                </div>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  <li>2 jornadas de grabación (16 horas)</li>
                  <li>2 videos largos de campaña</li>
                  <li>8–10 reels/shorts</li>
                  <li>Asesoría estratégica avanzada</li>
                  <li>2 rondas de revisión</li>
                  <li>Entregas personalizadas + material adicional</li>
                  <li>Informe mensual con métricas y recomendaciones de pauta</li>
                </ul>
                <a href="#contacto" className="mt-auto inline-block w-full text-center px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition">Quiero este plan</a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">* Cupos limitados (máximo 5 empresas/mes) para mantener la calidad.</p>
        </section>

        {/* Extras */}
        <section id="extras" className="py-20 px-6 bg-gray-900 text-center">
          <h3 className="text-4xl font-extrabold mb-8 text-blue-400">Servicios Adicionales</h3>
          <p className="max-w-4xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">Potencia tu plan con opciones extra a valores preferentes.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[{
              title: '🎥 2ª cámara o dron',
              text: 'Para producciones con mayor cobertura visual (consulta valores desde $150.000).'
            },{
              title: '🎙️ Locución y subtitulado',
              text: 'Voces profesionales y subtítulos listos para RRSS o TV.'
            },{
              title: '✨ Animación gráfica',
              text: 'Motion graphics para reforzar tu mensaje (logos, datos, transiciones).'
            },{
              title: '📦 Entregas extra',
              text: 'Reels adicionales o versiones extendidas según tus objetivos.'
            }].map((s,i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-3xl shadow-md border border-gray-700">
                <h4 className="font-bold mb-3 text-yellow-400">{s.title}</h4>
                <p className="text-gray-300">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-24 px-6 bg-black">
          <h3 className="text-4xl font-extrabold text-center mb-6 text-blue-400">Contáctanos</h3>
          <div className="text-center text-gray-300 mb-8 space-y-2">
            <p>
              📧{' '}
              <a href="mailto:info@dekaelomedia.com" className="underline decoration-yellow-500/60 underline-offset-4 hover:text-yellow-400">info@dekaelomedia.com</a>
            </p>
            <p data-testid="contact-whatsapp">💬 WhatsApp: +56 9 2008 0031</p>
          </div>
          <form className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-3xl shadow-xl space-y-6 border border-gray-800">
            <input type="text" placeholder="Nombre" className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="email" placeholder="Correo" className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <textarea rows={5} placeholder="Mensaje" className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
            <button type="submit" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-yellow-600 to-blue-700 hover:opacity-90 transition duration-300">Enviar</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-center py-8 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Dekaelo Media. Todos los derechos reservados.</p>
        <p className="mt-2 text-gray-400 text-sm">Dekaelo Media es una marca creativa que forma parte de Tronx Group.</p>
        <div className="mt-3 flex items-center justify-center gap-6 text-sm">
          <a href="mailto:info@dekaelomedia.com" className="hover:text-yellow-400">info@dekaelomedia.com</a>
          <span className="text-gray-700">|</span>
          <span>WhatsApp +56 9 2008 0031</span>
          <span className="text-gray-700">|</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

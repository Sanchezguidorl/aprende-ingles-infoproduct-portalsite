"use client"

import {
  Brain,
  Compass,
  Layers,
  Puzzle,
  Volume2,
  MessageCircle,
  Scale,
  Map,
  ArrowRight,
  Rocket,
} from 'lucide-react';

// Landing tipo infografia vertical
const EnglishLearningLandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        {/* Encabezado educativo */}
        <section className="mb-10 rounded-2xl border border-neutral-200 bg-white p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-neutral-900 bg-neutral-900 p-4 text-white">
              <Brain className="h-10 w-10" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Guia educativa
              </p>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                Por que muchas personas no aprenden ingles (y como solucionarlo).
              </h1>
              <p className="mt-3 text-lg text-neutral-700 max-w-2xl">
                Este recorrido explica el problema desde la base: no es falta de capacidad,
                sino falta de estructura. Cuando el estudio no tiene orden, el cerebro no
                puede sostenerlo.
              </p>
            </div>
          </div>
        </section>

        {/* Infografia vertical */}
        <section className="relative">
          <div className="absolute left-6 top-2 h-full w-px bg-neutral-200" />

          {/* Paso 1 */}
          <div className="mb-8 flex gap-6">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white">
              <Map className="h-6 w-6" />
            </div>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-2xl font-bold">Paso 1 � Sin mapa, el aprendizaje se dispersa</h2>
              <p className="mt-2 text-neutral-700">
                Tips sueltos, clases aisladas y practica sin hilo generan una sensacion de
                avance, pero no construyen una base. El cerebro necesita un camino visible.
              </p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="mb-8 flex gap-6">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white">
              <Scale className="h-6 w-6" />
            </div>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-2xl font-bold">Paso 2 � La estructura reduce la carga mental</h2>
              <p className="mt-2 text-neutral-700">
                Cuando sabes que estudiar hoy y por que, disminuye la ansiedad y aumenta
                la retencion. Orden no es rigidez: es claridad.
              </p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="mb-8 flex gap-6">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white">
              <Layers className="h-6 w-6" />
            </div>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-2xl font-bold">Paso 3 � Base antes de velocidad</h2>
              <p className="mt-2 text-neutral-700">
                Primero se entienden patrones simples y el orden de las ideas. Sin base,
                cualquier progreso es fr�gil.
              </p>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="mb-8 flex gap-6">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white">
              <Puzzle className="h-6 w-6" />
            </div>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-2xl font-bold">Paso 4 � Practica conectada, no aislada</h2>
              <p className="mt-2 text-neutral-700">
                Ejercicios cortos y ordenados consolidan lo aprendido. Si la practica no
                sigue un hilo, el conocimiento se pierde.
              </p>
            </div>
          </div>

          {/* Paso 5 */}
          <div className="mb-8 flex gap-6">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white">
              <Volume2 className="h-6 w-6" />
            </div>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-2xl font-bold">Paso 5 � Escucha alineada al nivel</h2>
              <p className="mt-2 text-neutral-700">
                El oido se entrena con audio que coincide con lo que estas estudiando.
                Si escuchas contenido muy avanzado, aparece la frustracion.
              </p>
            </div>
          </div>

          {/* Paso 6 */}
          <div className="mb-12 flex gap-6">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-white">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-2xl font-bold">Paso 6 � Uso real para fijar el idioma</h2>
              <p className="mt-2 text-neutral-700">
                Cuando aplicas en situaciones concretas, el idioma deja de ser teoria. Esa
                es la etapa donde aparece la confianza.
              </p>
            </div>
          </div>
        </section>

        {/* Sintesis educativa */}
        <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-neutral-900 bg-neutral-900 p-2 text-white">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">El problema real</h3>
            </div>
            <p className="mt-3 text-neutral-700">
              No es tu memoria ni tu edad. Es estudiar sin un orden visible y progresivo.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-neutral-900 bg-neutral-900 p-2 text-white">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">La solucion logica</h3>
            </div>
            <p className="mt-3 text-neutral-700">
              Un sistema que ordene, conecte y guie el aprendizaje paso a paso.
            </p>
          </div>
        </section>

        {/* Producto como consecuencia */}
        <section className="rounded-2xl border border-neutral-900 bg-white p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border border-neutral-900 bg-neutral-900 p-4 text-white">
              <Rocket className="h-9 w-9" />
            </div>
            <div className="w-full">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Conclusi�n natural
              </p>
              <h2 className="mt-2 text-3xl font-extrabold">Sistema Estructural de Ingles</h2>
              <p className="mt-3 text-neutral-700">
                Este producto aplica exactamente la estructura explicada arriba: base,
                practica conectada y uso real, en un camino claro para principiantes.
              </p>
              <button className="mt-6 w-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-4 px-4 rounded-lg transition duration-300 flex items-center justify-center text-lg">
                Ver el sistema completo <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center text-gray-500 text-sm border-t">
        � 2026 Sistema Estructural de Ingles.
      </footer>
    </div>
  );
};

export default EnglishLearningLandingPage;

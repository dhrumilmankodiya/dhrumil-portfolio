export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Product Designer & AI Product Manager
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-display">Dhrumil</span>{' '}
            <span className="font-display text-accent-gold">Mankodiya</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Building an empire at 23.
          </p>
          
          {/* Ventures */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              🏛️ Golden Circle
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              👏 Party Clap
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              🛍️ Saura
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
              📈 FinFly Finance
            </span>
          </div>

          {/* CTA */}
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-black rounded-full hover:bg-gray-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-display">About Me</h2>
          <div className="prose prose-lg">
            <p>
              I'm a 23-year-old Product Designer & AI Product Manager based in India. 
              Currently building multiple ventures simultaneously — from financial technology 
              to fashion and services.
            </p>
            <p>
              My philosophy: <strong>Move fast, ship often, iterate continuously.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-display">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            Interested in working together or just want to say hi?
          </p>
          <a
            href="mailto:hello@dhrumil.com"
            className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            hello@dhrumil.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-3xl mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Dhrumil Mankodiya. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
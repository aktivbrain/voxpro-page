import Image from "next/image";
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background gradient with modern pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-voxpro-navy-light to-voxpro-navy pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
      
      <Header />

      {/* Hero Section with modern glassmorphism */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-voxpro-blue/20 via-transparent to-transparent opacity-30" />
        <div className="container mx-auto text-center relative">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-voxpro-coral/20 to-voxpro-coral-light/20 backdrop-blur-md rounded-full border border-voxpro-coral/30">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-voxpro-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3l7 7-7 7" />
              </svg>
              <span className="text-voxpro-coral font-semibold text-lg">Coming Soon to App Store</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-voxpro-light to-voxpro-coral bg-clip-text text-transparent leading-tight">
            Master Your Voice with
            <span className="text-voxpro-coral"> AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-voxpro-gray max-w-2xl mx-auto mb-12 leading-relaxed">
            Transform your voice with personalized AI-powered lessons. Meet Sky, your dedicated AI voice training companion.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-voxpro-coral/20">
              <span className="flex items-center gap-2">
                Join Early Access
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group relative border-2 border-voxpro-coral text-voxpro-coral px-8 py-4 rounded-full text-lg font-semibold hover:bg-voxpro-coral/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with modern cards */}
      <section id="features" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-voxpro-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
              Why Choose Voxpro?
            </h2>
            <p className="text-voxpro-gray text-xl max-w-2xl mx-auto">
              Experience the future of voice training with our cutting-edge AI technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Lessons",
                description: "Practice with Sky, your AI voice coach available 24/7 for personalized training.",
                icon: "🤖",
                gradient: "from-blue-400 to-purple-500"
              },
              {
                title: "Structured Learning",
                description: "Follow a carefully designed curriculum to improve your voice systematically.",
                icon: "📚",
                gradient: "from-voxpro-coral to-voxpro-coral-light"
              },
              {
                title: "Real-time Feedback",
                description: "Get instant feedback on your pitch, tone, and pronunciation.",
                icon: "🎯",
                gradient: "from-green-400 to-cyan-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-voxpro-coral/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-voxpro-coral/10">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-voxpro-gray text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section with modern timeline */}
      <section id="how-it-works" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-voxpro-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-voxpro-gray text-xl max-w-2xl mx-auto">
              Start your voice training journey in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Choose Your Focus Area",
                  description: "Select from various voice training modules tailored to your goals."
                },
                {
                  step: 2,
                  title: "Practice with Sky",
                  description: "Get real-time guidance and feedback from your AI voice coach."
                },
                {
                  step: 3,
                  title: "Track Your Progress",
                  description: "Monitor your improvement with detailed analytics and progress tracking."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-8 group">
                  <div className="relative">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-voxpro-coral to-voxpro-coral-light rounded-full flex items-center justify-center text-voxpro-navy font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-voxpro-coral/20">
                      {item.step}
                    </div>
                    {item.step < 3 && (
                      <div className="absolute w-px h-full top-16 left-1/2 bg-gradient-to-b from-voxpro-coral to-transparent" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-voxpro-coral transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-voxpro-gray text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[600px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 border border-white/10">
              <div className="absolute inset-0 bg-gradient-conic from-voxpro-coral/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Voxpro App"
                  width={250}
                  height={250}
                  className="rounded-xl shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section with modern card */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-voxpro-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
              Simple Pricing
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Join our early access program and get exclusive benefits
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-voxpro-coral to-voxpro-blue opacity-75 rounded-2xl blur"></div>
              <div className="relative bg-voxpro-navy-light/80 backdrop-blur-md p-10 rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="inline-block px-4 py-1 bg-voxpro-coral/20 rounded-full mb-6">
                    <span className="text-voxpro-coral font-semibold">Limited Time Offer</span>
                  </div>
                  <h3 className="text-3xl font-semibold mb-4 text-white">Early Access Offer</h3>
                  <div className="text-6xl font-bold mb-6 text-white">
                    $9.99
                    <span className="text-xl text-white/60">/month</span>
                  </div>
                  <p className="text-lg text-white/80 mb-10">Get unlimited access to all features</p>
                  <button className="w-full bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-voxpro-coral/20">
                    Join Waitlist
                  </button>
                </div>
                <div className="mt-12 space-y-6">
                  {[
                    "Unlimited AI voice training sessions",
                    "Access to all lesson modules",
                    "Detailed progress tracking",
                    "Priority access to new features"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-voxpro-coral/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-voxpro-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with modern design */}
      <footer className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-voxpro-navy-light to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Voxpro Logo" width={40} height={40} className="rounded-xl shadow-lg" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
                Voxpro
              </span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-voxpro-gray hover:text-voxpro-coral transition-colors text-lg">Privacy Policy</a>
              <a href="#" className="text-voxpro-gray hover:text-voxpro-coral transition-colors text-lg">Terms of Service</a>
              <a href="#" className="text-voxpro-gray hover:text-voxpro-coral transition-colors text-lg">Contact</a>
            </div>
            <div className="text-voxpro-gray text-lg">© 2025 Voxpro. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-voxpro-navy-light to-voxpro-navy pointer-events-none" />
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-voxpro-blue/20 via-transparent to-transparent opacity-30" />
        <div className="container mx-auto text-center relative">
          <div className="inline-block mb-4 px-4 py-2 bg-voxpro-coral/10 rounded-full">
            <span className="text-voxpro-coral font-semibold">Coming Soon to App Store</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
            Master Your Voice with
            <span className="text-voxpro-coral"> AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-voxpro-gray max-w-2xl mx-auto mb-12">
            Transform your voice with personalized AI-powered lessons. Meet Sky, your dedicated AI voice training companion.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Join Early Access
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-voxpro-coral text-voxpro-coral px-8 py-4 rounded-full text-lg font-semibold hover:bg-voxpro-coral/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-voxpro-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
              Why Choose Voxpro?
            </h2>
            <p className="text-voxpro-gray text-lg max-w-2xl mx-auto">
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
              <div key={index} className="group relative bg-voxpro-navy-light p-8 rounded-2xl border border-voxpro-blue/20 hover:border-voxpro-coral/50 transition-all duration-300 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-voxpro-gray">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-voxpro-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-voxpro-gray text-lg max-w-2xl mx-auto">
              Start your voice training journey in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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
                <div key={item.step} className="flex gap-6 group">
                  <div className="relative">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-voxpro-coral to-voxpro-coral-light rounded-full flex items-center justify-center text-voxpro-navy font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    {item.step < 3 && (
                      <div className="absolute w-px h-full top-12 left-1/2 bg-gradient-to-b from-voxpro-coral to-transparent" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-voxpro-coral transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-voxpro-gray">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[500px] bg-gradient-to-br from-voxpro-blue/20 to-voxpro-navy-light rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-conic from-voxpro-coral/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Voxpro App"
                  width={200}
                  height={200}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-voxpro-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
              Simple Pricing
            </h2>
            <p className="text-voxpro-gray text-lg max-w-2xl mx-auto">
              Join our early access program and get exclusive benefits
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-voxpro-coral to-voxpro-blue opacity-75 rounded-2xl blur"></div>
              <div className="relative bg-voxpro-navy-light p-8 rounded-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Early Access Offer</h3>
                  <div className="text-5xl font-bold mb-4">
                    $9.99
                    <span className="text-lg text-voxpro-gray">/month</span>
                  </div>
                  <p className="text-voxpro-gray mb-8">Get unlimited access to all features</p>
                  <button className="w-full bg-gradient-to-r from-voxpro-coral to-voxpro-coral-light text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">
                    Join Waitlist
                  </button>
                </div>
                <div className="mt-8 space-y-4">
                  {[
                    "Unlimited AI voice training sessions",
                    "Access to all lesson modules",
                    "Detailed progress tracking",
                    "Priority access to new features"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-voxpro-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-voxpro-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-voxpro-navy-light to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Voxpro Logo" width={32} height={32} className="rounded-xl" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-voxpro-light bg-clip-text text-transparent">
                Voxpro
              </span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-voxpro-gray hover:text-voxpro-coral transition-colors">Privacy Policy</a>
              <a href="#" className="text-voxpro-gray hover:text-voxpro-coral transition-colors">Terms of Service</a>
              <a href="#" className="text-voxpro-gray hover:text-voxpro-coral transition-colors">Contact</a>
            </div>
            <div className="text-voxpro-gray">© 2025 Voxpro. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

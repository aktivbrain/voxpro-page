import Image from "next/image";
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Master Your Voice with
            <span className="text-voxpro-coral"> AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            Transform your voice with personalized AI-powered lessons. Meet Sky, your dedicated AI voice training companion.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-voxpro-coral text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
              Coming Soon to App Store
            </button>
            <button className="border border-voxpro-coral text-voxpro-coral px-8 py-4 rounded-full text-lg font-semibold hover:bg-voxpro-coral/10 transition">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-voxpro-blue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Voxpro?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Lessons",
                description: "Practice with Sky, your AI voice coach available 24/7 for personalized training.",
                icon: "🤖"
              },
              {
                title: "Structured Learning",
                description: "Follow a carefully designed curriculum to improve your voice systematically.",
                icon: "📚"
              },
              {
                title: "Real-time Feedback",
                description: "Get instant feedback on your pitch, tone, and pronunciation.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-voxpro-navy p-6 rounded-2xl border border-voxpro-coral/20 hover:border-voxpro-coral/50 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-voxpro-coral rounded-full flex items-center justify-center text-voxpro-navy font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Focus Area</h3>
                  <p className="text-gray-300">Select from various voice training modules tailored to your goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-voxpro-coral rounded-full flex items-center justify-center text-voxpro-navy font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practice with Sky</h3>
                  <p className="text-gray-300">Get real-time guidance and feedback from your AI voice coach.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-voxpro-coral rounded-full flex items-center justify-center text-voxpro-navy font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
                  <p className="text-gray-300">Monitor your improvement with detailed analytics and progress tracking.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-voxpro-blue/20 rounded-2xl overflow-hidden">
              {/* Add app screenshot or illustration here */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                App Screenshot Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-voxpro-blue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="max-w-lg mx-auto bg-voxpro-navy p-8 rounded-2xl border border-voxpro-coral/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Early Access Offer</h3>
              <div className="text-5xl font-bold mb-4">$9.99<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-8">Get unlimited access to all features</p>
              <button className="w-full bg-voxpro-coral text-voxpro-navy px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
                Join Waitlist
              </button>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-voxpro-coral">✓</span>
                <span>Unlimited AI voice training sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-voxpro-coral">✓</span>
                <span>Access to all lesson modules</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-voxpro-coral">✓</span>
                <span>Detailed progress tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-voxpro-coral">✓</span>
                <span>Priority access to new features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Voxpro Logo" width={32} height={32} className="rounded-xl" />
              <span className="text-xl font-bold">Voxpro</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-voxpro-coral transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-voxpro-coral transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-voxpro-coral transition">Contact</a>
            </div>
            <div className="text-gray-400">© 2024 Voxpro. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

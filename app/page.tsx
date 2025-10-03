import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { QuickHighlights } from "@/components/quick-highlights"
import { LatestNews } from "@/components/latest-news"
import { FeaturedResearch } from "@/components/featured-research"
import { IndustryPartnerships } from "@/components/industry-partnerships"
import { CTASection } from "@/components/cta-section"
import Image from "next/image"  

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickHighlights />
      <LatestNews />
      <FeaturedResearch />
      <IndustryPartnerships />
      <CTASection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                   <Image src="/logo.png" alt="Biotech Logo" width={32} height={32} className="w-8 h-8" />
                  
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg">Biotechnology</h3>
                  <p className="text-sm text-gray-400">NIT Durgapur</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering tomorrow's innovators in biotechnology through excellence in education and research.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/about" className="hover:text-emerald-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/faculty" className="hover:text-emerald-400">
                    Faculty
                  </a>
                </li>
                <li>
                  <a href="/research" className="hover:text-emerald-400">
                    Research
                  </a>
                </li>
                <li>
                  <a href="/courses" className="hover:text-emerald-400">
                    Courses
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Students</h4>
              <ul className="space-y-2 text-sm text-gray-400">
      
                <li>
                  <a href="/placements" className="hover:text-emerald-400">
                    Placements
                  </a>
                </li>
                <li>
                  <a href="/achievements" className="hover:text-emerald-400">
                    Achievements
                  </a>
                </li>
                
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>NIT Durgapur, West Bengal</li>
                <li>+91-343-275-4200</li>
                <li>biotech@nitdgp.ac.in</li>
                <li>
                  <a href="/contact" className="hover:text-emerald-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Department of Biotechnology, NIT Durgapur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

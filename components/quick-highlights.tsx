import { Card, CardContent } from "@/components/ui/card"
import { Microscope, GraduationCap, Building2, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Microscope,
    title: "Cutting-Edge Research",
    description: "Advanced research facilities with state-of-the-art equipment for biotechnology innovation.",
    stats: "15+ Active Projects",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Comprehensive programs from BTech to PhD with industry-aligned curriculum.",
    stats: "3 Degree Programs",
  },
  {
    icon: Building2,
    title: "Industry Partnerships",
    description: "Strong collaborations with leading biotech companies and research institutions.",
    stats: "25+ Partners",
  },
  {
    icon: TrendingUp,
    title: "Career Success",
    description: "Outstanding placement record with top biotechnology and pharmaceutical companies.",
    stats: "₹12L Average Package",
  },
]

export function QuickHighlights() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Why Choose Our Department?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in shaping the future of biotechnology through excellence in education, research, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4 group-hover:bg-emerald-600 transition-colors">
                  <highlight.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{highlight.description}</p>
                <div className="text-emerald-600 font-semibold text-sm">{highlight.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

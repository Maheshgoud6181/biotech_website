import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, FlaskConical, ArrowRight } from "lucide-react"

export function CTASection() {
  const actions = [
    {
      icon: GraduationCap,
      title: "Prospective Students",
      description: "Explore our undergraduate and graduate programs",
      action: "Apply Now",
      link: "/courses",
      color: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      icon: FlaskConical,
      title: "Research Collaboration",
      description: "Partner with us on cutting-edge research projects",
      action: "Get Started",
      link: "/research",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Users,
      title: "Industry Partners",
      description: "Connect with our talent pool and research expertise",
      action: "Partner With Us",
      link: "/contact",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our community of innovators, researchers, and industry leaders in biotechnology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <button
                    className={`${item.color} text-white px-6 py-3 rounded-lg transition-colors flex items-center mx-auto`}
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

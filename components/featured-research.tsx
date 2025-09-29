import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Award } from "lucide-react"

export function FeaturedResearch() {
  const research = [
    {
      title: "CRISPR-Based Gene Therapy for Rare Diseases",
      lead: "Dr. Priya Sharma",
      funding: "₹1.8 Cr",
      status: "Ongoing",
      impact: "Clinical Trial Phase II",
      description:
        "Developing targeted gene editing solutions for treating genetic disorders affecting over 10,000 patients annually.",
    },
    {
      title: "Sustainable Biofuel Production from Algae",
      lead: "Dr. Rajesh Kumar",
      funding: "₹2.2 Cr",
      status: "Published",
      impact: "Nature Biotechnology",
      description:
        "Revolutionary approach to produce clean energy with 40% higher efficiency than conventional methods.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Research</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Groundbreaking research projects that are shaping the future of biotechnology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {research.map((project, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-emerald-600 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={project.status === "Ongoing" ? "default" : "secondary"}
                    className={project.status === "Ongoing" ? "bg-emerald-600" : "bg-blue-600"}
                  >
                    {project.status}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-1" />
                    {project.funding}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                <div className="flex items-center text-emerald-600 font-medium">
                  <Users className="w-4 h-4 mr-1" />
                  {project.lead}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">Impact: </span>
                    <span className="text-gray-600">{project.impact}</span>
                  </div>
                  <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
            View All Research Projects
          </button>
        </div>
      </div>
    </section>
  )
}

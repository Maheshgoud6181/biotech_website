import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"


export function LatestNews() {
  const news = [
    {
      title: "Department Receives ₹2.5 Cr Research Grant from DBT",
      date: "2024-01-15",
      category: "Research",
      excerpt: "Major funding approved for cancer therapeutics research project in collaboration with AIIMS Delhi.",
    },
    {
      title: "International Conference on Bioengineering 2024",
      date: "2024-02-20",
      category: "Event",
      excerpt: "Three-day conference featuring keynotes from Nobel laureates and industry leaders.",
    },
    {
      title: "Student Team Wins National Innovation Challenge",
      date: "2024-01-28",
      category: "Achievement",
      excerpt: "Biotech students develop breakthrough water purification technology using engineered bacteria.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and announcements from our department
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            View All News
          </button>
        </div> */}
      </div>
    </section>
  )
}

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Trophy, Star, Users, GraduationCap, Building2 } from "lucide-react"

const facultyAwards = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar Singh",
    award: "National Science Academy Fellow",
    year: 2024,
    category: "Research Excellence",
    description: "Recognized for outstanding contributions to genetic engineering and synthetic biology research.",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Singh",
    organization: "National Science Academy",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    award: "DBT National Bioscience Award",
    year: 2023,
    category: "Innovation",
    description: "Honored for breakthrough work in enzyme technology and industrial biotechnology applications.",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Sharma",
    organization: "Department of Biotechnology, Govt. of India",
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    award: "INSA Young Scientist Award",
    year: 2023,
    category: "Young Researcher",
    description: "Awarded for exceptional research in microbiology and fermentation technology.",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Patel",
    organization: "Indian National Science Academy",
  },
  {
    id: 4,
    name: "Dr. Sunita Gupta",
    award: "IEEE Computational Biology Award",
    year: 2024,
    category: "Technology",
    description: "Recognized for pioneering work in bioinformatics and computational biology algorithms.",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Gupta",
    organization: "IEEE Computer Society",
  },
]

const studentAwards = [
  {
    id: 1,
    name: "Ananya Reddy",
    award: "Best Student Paper Award",
    year: 2024,
    category: "Research",
    description: "Outstanding research paper on CRISPR applications in cancer therapy.",
    image: "/placeholder.svg?height=200&width=200&text=Ananya",
    event: "International Biotechnology Conference",
    batch: "Final Year B.Tech",
  },
  {
    id: 2,
    name: "Vikash Kumar",
    award: "National Innovation Challenge Winner",
    year: 2024,
    category: "Innovation",
    description: "Developed novel biosensor for early disease detection using nanotechnology.",
    image: "/placeholder.svg?height=200&width=200&text=Vikash",
    event: "Smart India Hackathon",
    batch: "M.Tech 2nd Year",
  },
  {
    id: 3,
    name: "Sneha Patel",
    award: "Outstanding Academic Performance",
    year: 2023,
    category: "Academic",
    description: "Achieved highest CGPA in the department with exceptional research contributions.",
    image: "/placeholder.svg?height=200&width=200&text=Sneha",
    event: "Annual Convocation",
    batch: "B.Tech Graduate",
  },
  {
    id: 4,
    name: "Biotech Innovation Team",
    award: "Inter-NIT Competition Winners",
    year: 2024,
    category: "Team Achievement",
    description: "Won first prize in biotechnology innovation challenge across all NITs.",
    image: "/placeholder.svg?height=200&width=200&text=Team",
    event: "Inter-NIT Technical Festival",
    batch: "Mixed Batch Team",
  },
]

const departmentalAwards = [
  {
    id: 1,
    title: "Best Department Award",
    year: 2024,
    organization: "NIT Durgapur",
    category: "Academic Excellence",
    description: "Recognized for outstanding academic performance, research output, and placement records.",
    image: "/placeholder.svg?height=300&width=400&text=Department+Award",
    metrics: ["95% Placement Rate", "150+ Research Papers", "₹12.5L Average Package"],
  },
  {
    id: 2,
    title: "Research Excellence Award",
    year: 2023,
    organization: "Ministry of Education",
    category: "Research Impact",
    description: "Honored for significant contributions to biotechnology research and innovation.",
    image: "/placeholder.svg?height=300&width=400&text=Research+Award",
    metrics: ["25+ Active Projects", "₹15 Cr Research Funding", "12 Patents Filed"],
  },
  {
    id: 3,
    title: "Industry Collaboration Award",
    year: 2023,
    organization: "CII (Confederation of Indian Industry)",
    category: "Industry Partnership",
    description: "Recognized for successful industry-academia collaborations and technology transfer.",
    image: "/placeholder.svg?height=300&width=400&text=Industry+Award",
    metrics: ["20+ Industry Partners", "50+ Internships", "15+ Joint Projects"],
  },
  {
    id: 4,
    title: "Innovation Hub Recognition",
    year: 2024,
    organization: "Department of Science & Technology",
    category: "Innovation",
    description: "Acknowledged as a leading innovation hub for biotechnology startups and research.",
    image: "/placeholder.svg?height=300&width=400&text=Innovation+Award",
    metrics: ["5 Startups Incubated", "3 Technology Transfers", "₹2 Cr Funding Raised"],
  },
]

export default function AchievementsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">Achievements & Awards</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating the outstanding accomplishments of our faculty, students, and department in advancing
              biotechnology education and research.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Faculty Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">75+</div>
              <div className="text-gray-600">Student Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Department Honors</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">National Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="faculty" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="faculty" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Faculty Awards
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Student Awards
              </TabsTrigger>
              <TabsTrigger value="department" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Department Honors
              </TabsTrigger>
            </TabsList>

            {/* Faculty Awards Tab */}
            <TabsContent value="faculty" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {facultyAwards.map((award) => (
                  <Card key={award.id} className="hover:shadow-xl transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={award.image || "/placeholder.svg"}
                          alt={award.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-emerald-100"
                        />
                        <div className="flex-1">
                          <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">{award.name}</h3>
                          <h4 className="text-emerald-600 font-semibold mb-2">{award.award}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-emerald-100 text-emerald-700">{award.category}</Badge>
                            <span className="text-sm text-gray-600">{award.year}</span>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{award.description}</p>
                      <p className="text-xs text-gray-500 italic">Awarded by: {award.organization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Student Awards Tab */}
            <TabsContent value="students" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {studentAwards.map((award) => (
                  <Card key={award.id} className="hover:shadow-xl transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={award.image || "/placeholder.svg"}
                          alt={award.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-emerald-100"
                        />
                        <div className="flex-1">
                          <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">{award.name}</h3>
                          <h4 className="text-emerald-600 font-semibold mb-2">{award.award}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-emerald-100 text-emerald-700">{award.category}</Badge>
                            <span className="text-sm text-gray-600">{award.year}</span>
                          </div>
                          <p className="text-xs text-gray-500">{award.batch}</p>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Trophy className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{award.description}</p>
                      <p className="text-xs text-gray-500 italic">Event: {award.event}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Department Awards Tab */}
            <TabsContent value="department" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {departmentalAwards.map((award) => (
                  <Card key={award.id} className="hover:shadow-xl transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Star className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-serif text-lg text-gray-900 mb-2">{award.title}</CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-emerald-100 text-emerald-700">{award.category}</Badge>
                            <span className="text-sm text-gray-600">{award.year}</span>
                          </div>
                          <p className="text-sm text-gray-600">{award.organization}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <img
                          src={award.image || "/placeholder.svg"}
                          alt={award.title}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {award.metrics.map((metric, index) => (
                            <Badge key={index} variant="outline" className="text-xs justify-start">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Recent Recognitions</h2>
            <p className="text-lg text-gray-600">Our journey of excellence continues with these recent achievements</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-emerald-200"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    National Science Academy Fellowship
                  </h3>
                  <p className="text-gray-600 text-sm">Dr. Rajesh Kumar Singh recognized for research excellence</p>
                </div>
                <div className="w-4 h-4 bg-emerald-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <span className="text-emerald-600 font-semibold">2024</span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <span className="text-emerald-600 font-semibold">2024</span>
                </div>
                <div className="w-4 h-4 bg-emerald-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">Best Department Award</h3>
                  <p className="text-gray-600 text-sm">Recognized for outstanding academic and research performance</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">Student Innovation Challenge</h3>
                  <p className="text-gray-600 text-sm">Multiple students won national-level competitions</p>
                </div>
                <div className="w-4 h-4 bg-emerald-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <span className="text-emerald-600 font-semibold">2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

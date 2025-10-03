import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Building2,
  Users,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  DollarSign,
  Target,
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
} from "lucide-react"

const placementStats = {
  currentYear: {
    year: "2024",
    placementRate: 62,
    averagePackage: 9.05,
    highestPackage: 12,
    totalOffers: 142,
    studentsPlaced: 135,
    totalStudents: 142,
    internshipRate: 65,
  },
  previousYears: [
    { year: "2023", placementRate: 64, averagePackage: 11.8, highestPackage: 14 },
    { year: "2022", placementRate: 89, averagePackage: 10.5, highestPackage: 38 },
    { year: "2021", placementRate: 87, averagePackage: 9.8, highestPackage: 35 },
  ],
}

const topRecruiters = [
  {
    id: 1,
    name: "Pfizer Inc.",
    logo: "/placeholder.svg?height=80&width=120&text=Pfizer",
    sector: "Pharmaceuticals",
    roles: ["Research Scientist", "Process Development", "Quality Assurance"],
    package: "₹15-25 LPA",
    hired: 8,
  },
  {
    id: 2,
    name: "Biocon Limited",
    logo: "/placeholder.svg?height=80&width=120&text=Biocon",
    sector: "Biotechnology",
    roles: ["Bioprocess Engineer", "R&D Associate", "Production Manager"],
    package: "₹12-20 LPA",
    hired: 12,
  },
  {
    id: 3,
    name: "Dr. Reddy's Laboratories",
    logo: "/placeholder.svg?height=80&width=120&text=Dr+Reddys",
    sector: "Pharmaceuticals",
    roles: ["Formulation Scientist", "Regulatory Affairs", "Clinical Research"],
    package: "₹10-18 LPA",
    hired: 10,
  },
  {
    id: 4,
    name: "Novartis",
    logo: "/placeholder.svg?height=80&width=120&text=Novartis",
    sector: "Pharmaceuticals",
    roles: ["Medical Affairs", "Drug Safety", "Market Access"],
    package: "₹18-30 LPA",
    hired: 6,
  },
  {
    id: 5,
    name: "Genentech",
    logo: "/placeholder.svg?height=80&width=120&text=Genentech",
    sector: "Biotechnology",
    roles: ["Computational Biology", "Protein Engineering", "Cell Therapy"],
    package: "₹25-45 LPA",
    hired: 4,
  },
  {
    id: 6,
    name: "Cipla Limited",
    logo: "/placeholder.svg?height=80&width=120&text=Cipla",
    sector: "Pharmaceuticals",
    roles: ["Manufacturing", "Supply Chain", "Business Development"],
    package: "₹8-15 LPA",
    hired: 15,
  },
]

const internshipOpportunities = [
  {
    id: 1,
    company: "Johnson & Johnson",
    role: "Summer Research Intern",
    duration: "10-12 weeks",
    stipend: "₹50,000/month",
    location: "Mumbai, India",
    deadline: "March 15, 2024",
    requirements: ["3rd/4th year students", "CGPA > 7.5", "Research experience preferred"],
  },
  {
    id: 2,
    company: "Roche",
    role: "Bioprocess Intern",
    duration: "8-10 weeks",
    stipend: "₹45,000/month",
    location: "Bangalore, India",
    deadline: "February 28, 2024",
    requirements: ["Final year students", "Bioprocess knowledge", "Lab experience"],
  },
  {
    id: 3,
    company: "Merck KGaA",
    role: "Data Science Intern",
    duration: "12 weeks",
    stipend: "₹60,000/month",
    location: "Hyderabad, India",
    deadline: "March 30, 2024",
    requirements: ["Programming skills", "Statistics background", "Bioinformatics interest"],
  },
  {
    id: 4,
    company: "Serum Institute",
    role: "Vaccine Development Intern",
    duration: "8 weeks",
    stipend: "₹40,000/month",
    location: "Pune, India",
    deadline: "April 10, 2024",
    requirements: ["Immunology knowledge", "Lab skills", "3rd year and above"],
  },
]

const careerServices = [
  {
    id: 1,
    title: "Resume Building Workshop",
    description: "Professional resume writing and optimization for biotech industry",
    type: "Workshop",
    duration: "2 hours",
    frequency: "Monthly",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Interview Preparation",
    description: "Mock interviews and technical preparation for biotech roles",
    type: "Training",
    duration: "4 hours",
    frequency: "Bi-weekly",
    icon: Users,
  },
  {
    id: 3,
    title: "Industry Mentorship",
    description: "One-on-one mentorship with industry professionals",
    type: "Mentorship",
    duration: "6 months",
    frequency: "Ongoing",
    icon: Target,
  },
  {
    id: 4,
    title: "Career Counseling",
    description: "Personalized career guidance and pathway planning",
    type: "Counseling",
    duration: "1 hour",
    frequency: "On-demand",
    icon: GraduationCap,
  },
]

export default function PlacementsPage() {
  
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">Placement & Career Support</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering our students with exceptional career opportunities and comprehensive support to excel in the
              biotechnology industry.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Placement Statistics 2025</h2>
            <p className="text-lg text-gray-600">Good placement record reflecting our academic excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-3xl text-gray-900 mb-2">
                  {placementStats.currentYear.placementRate}%
                </div>
                <div className="text-gray-600">Placement Rate</div>
                <Progress value={placementStats.currentYear.placementRate} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-3xl text-gray-900 mb-2">
                  ₹{placementStats.currentYear.averagePackage}L
                </div>
                <div className="text-gray-600">Average Package</div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-3xl text-gray-900 mb-2">
                  ₹{placementStats.currentYear.highestPackage}L
                </div>
                <div className="text-gray-600">Highest Package</div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-3xl text-gray-900 mb-2">
                  {placementStats.currentYear.studentsPlaced}
                </div>
                <div className="text-gray-600">Students Placed</div>
              </CardContent>
            </Card>
          </div>

          {/* Year-wise Trends */}
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-gray-900">Placement Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[placementStats.currentYear, ...placementStats.previousYears].map((year, index) => (
                  <div key={year.year} className="text-center">
                    <div className="font-serif font-bold text-2xl text-gray-900 mb-1">{year.year}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Placement Rate:</span>
                        <span className="font-medium">{year.placementRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Avg Package:</span>
                        <span className="font-medium">₹{year.averagePackage}L</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Highest:</span>
                        <span className="font-medium">₹{year.highestPackage}L</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="recruiters" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="recruiters" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Top Recruiters
              </TabsTrigger>
              <TabsTrigger value="internships" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Internships
              </TabsTrigger>
              <TabsTrigger value="career-services" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Career Services
              </TabsTrigger>
            </TabsList>

            {/* Top Recruiters Tab */}
            <TabsContent value="recruiters" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">
                {topRecruiters.map((recruiter) => (
                  <Card key={recruiter.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={recruiter.logo || "/placeholder.svg"}
                          alt={recruiter.name}
                          className="w-16 h-12 object-contain border rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">{recruiter.name}</h3>
                          <Badge className="bg-emerald-100 text-emerald-700 mb-2">{recruiter.sector}</Badge>
                          <p className="text-gray-600 text-sm">Package: {recruiter.package}</p>
                        </div>
                        <div className="text-center">
                          <div className="font-serif font-bold text-2xl text-emerald-600">{recruiter.hired}</div>
                          <div className="text-xs text-gray-600">Hired</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Available Roles</h4>
                        <div className="flex flex-wrap gap-1">
                          {recruiter.roles.map((role, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Internships Tab */}
            <TabsContent value="internships" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">
                {internshipOpportunities.map((internship) => (
                  <Card key={internship.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-serif text-lg text-gray-900 mb-1">{internship.role}</CardTitle>
                          <p className="text-emerald-600 font-medium">{internship.company}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Open</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                          Duration: {internship.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="h-4 w-4 mr-2 text-emerald-600" />
                          Stipend: {internship.stipend}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                          Location: {internship.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                          Deadline: {internship.deadline}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {internship.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1 h-1 bg-emerald-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Apply Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Career Services Tab */}
            <TabsContent value="career-services" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">
                {careerServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                            <div>
                              <span className="font-medium text-gray-900">Type:</span>
                              <br />
                              <Badge variant="outline" className="mt-1">
                                {service.type}
                              </Badge>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900">Duration:</span>
                              <br />
                              <span className="text-gray-600">{service.duration}</span>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 mb-4">
                            <span className="font-medium text-gray-900">Frequency:</span> {service.frequency}
                          </div>
                          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Learn More
                          </Button>
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

      {/* Placement Cell Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Placement Cell</h2>
            <p className="text-lg text-gray-600">Get in touch with our dedicated placement team</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Dr. Placement Officer</h3>
                <p className="text-gray-600 text-sm mb-4">Faculty Placement Coordinator</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    +91-343-275-4300
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    placements@nitdgp.ac.in
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">For Recruiters</h3>
                <p className="text-gray-600 text-sm mb-4">Partner with us for talent acquisition</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Contact Us</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">For Students</h3>
                <p className="text-gray-600 text-sm mb-4">Career guidance and placement support</p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent">
                  Get Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Clock, Users, BookOpen, Download, CheckCircle, Award } from "lucide-react"

const programs = {
  btech: {
    title: "Bachelor of Technology (B.Tech)",
    duration: "4 Years",
    seats: 60,
    eligibility: "JEE Main qualified candidates",
    description:
      "A comprehensive undergraduate program designed to provide strong foundation in biotechnology principles, laboratory techniques, and industry applications.",
    highlights: [
      "Industry-aligned curriculum",
      "State-of-the-art laboratories",
      "Internship opportunities",
      "Research projects",
      "Industry visits",
    ],
    semesters: [
      {
        sem: 1,
        subjects: [
          "Mathematics I",
          "Physics",
          "Chemistry",
          "Engineering Graphics",
          "Basic Electrical Engineering",
          "English",
        ],
      },
      {
        sem: 2,
        subjects: [
          "Mathematics II",
          "Biology",
          "Organic Chemistry",
          "Computer Programming",
          "Engineering Mechanics",
          "Environmental Studies",
        ],
      },
      {
        sem: 3,
        subjects: [
          "Biochemistry",
          "Microbiology",
          "Cell Biology",
          "Biostatistics",
          "Thermodynamics",
          "Technical Communication",
        ],
      },
      {
        sem: 4,
        subjects: [
          "Molecular Biology",
          "Genetics",
          "Biophysics",
          "Bioprocess Engineering",
          "Instrumentation",
          "Humanities Elective",
        ],
      },
    ],
  },
  mtech: {
    title: "Master of Technology (M.Tech)",
    duration: "2 Years",
    seats: 25,
    eligibility: "GATE qualified with B.Tech/B.E. in relevant field",
    description:
      "Advanced postgraduate program focusing on specialized areas of biotechnology with emphasis on research and innovation.",
    highlights: [
      "Research-oriented curriculum",
      "Thesis work",
      "Advanced laboratory training",
      "Industry collaborations",
      "Conference presentations",
    ],
    specializations: [
      "Bioprocess Engineering",
      "Molecular Biology & Biotechnology",
      "Environmental Biotechnology",
      "Medical Biotechnology",
    ],
    semesters: [
      {
        sem: 1,
        subjects: [
          "Advanced Biochemistry",
          "Molecular Biology Techniques",
          "Bioprocess Engineering",
          "Research Methodology",
          "Elective I",
        ],
      },
      {
        sem: 2,
        subjects: [
          "Genetic Engineering",
          "Protein Engineering",
          "Bioinformatics",
          "Industrial Biotechnology",
          "Elective II",
        ],
      },
    ],
  },
  phd: {
    title: "Doctor of Philosophy (Ph.D)",
    duration: "3-5 Years",
    seats: 15,
    eligibility: "M.Tech/M.Sc with valid GATE/NET score",
    description:
      "Doctoral program for advanced research in cutting-edge areas of biotechnology leading to original contributions to knowledge.",
    highlights: [
      "Independent research",
      "International collaborations",
      "Publication opportunities",
      "Conference participation",
      "Teaching assistantship",
    ],
    researchAreas: [
      "Synthetic Biology",
      "Computational Biology",
      "Biomedical Engineering",
      "Environmental Biotechnology",
      "Industrial Biotechnology",
      "Nanobiotechnology",
    ],
  },
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">Courses & Curriculum</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic programs designed to prepare students for successful careers in biotechnology and
              related fields.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">B.Tech Biotechnology</h3>
                <p className="text-gray-600 text-sm mb-4">4-year undergraduate program</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">4 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-medium">60</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">M.Tech Biotechnology</h3>
                <p className="text-gray-600 text-sm mb-4">2-year postgraduate program</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-medium">25</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">Ph.D Biotechnology</h3>
                <p className="text-gray-600 text-sm mb-4">Doctoral research program</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">3-5 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats:</span>
                    <span className="font-medium">15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Program Information */}
          <Tabs defaultValue="btech" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="btech">B.Tech Program</TabsTrigger>
              <TabsTrigger value="mtech">M.Tech Program</TabsTrigger>
              <TabsTrigger value="phd">Ph.D Program</TabsTrigger>
            </TabsList>

            {/* B.Tech Tab */}
            <TabsContent value="btech" className="space-y-8">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-gray-900">{programs.btech.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {programs.btech.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {programs.btech.seats} seats
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {programs.btech.eligibility}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{programs.btech.description}</p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4">Program Highlights</h4>
                      <ul className="space-y-2">
                        {programs.btech.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div>
                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4">Sample Curriculum</h4>
                      <div className="space-y-4">
                        {programs.btech.semesters.map((semester) => (
                          <div key={semester.sem} className="border rounded-lg p-4">
                            <h5 className="font-medium text-gray-900 mb-2">Semester {semester.sem}</h5>
                            <div className="grid grid-cols-1 gap-1">
                              {semester.subjects.map((subject, index) => (
                                <Badge key={index} variant="outline" className="text-xs justify-start">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>*/}
                  </div> 

                  <div className="mt-8 flex gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </Button>
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent">
                      Admission Process
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* M.Tech Tab */}
            <TabsContent value="mtech" className="space-y-8">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-gray-900">{programs.mtech.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {programs.mtech.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {programs.mtech.seats} seats
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {programs.mtech.eligibility}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{programs.mtech.description}</p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4">Specializations</h4>
                      <div className="space-y-2">
                        {programs.mtech.specializations.map((spec, index) => (
                          <Badge key={index} className="bg-emerald-100 text-emerald-700 mr-2 mb-2">
                            {spec}
                          </Badge>
                        ))}
                      </div>

                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4 mt-6">Program Highlights</h4>
                      <ul className="space-y-2">
                        {programs.mtech.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4">Course Structure</h4>
                      <div className="space-y-4">
                        {programs.mtech.semesters.map((semester) => (
                          <div key={semester.sem} className="border rounded-lg p-4">
                            <h5 className="font-medium text-gray-900 mb-2">Semester {semester.sem}</h5>
                            <div className="grid grid-cols-1 gap-1">
                              {semester.subjects.map((subject, index) => (
                                <Badge key={index} variant="outline" className="text-xs justify-start">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="border rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2">Semester 3-4</h5>
                          <Badge variant="outline" className="text-xs">
                            Dissertation/Thesis Work
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </Button>
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent">
                      GATE Requirements
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Ph.D Tab */}
            <TabsContent value="phd" className="space-y-8">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-gray-900">{programs.phd.title}</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {programs.phd.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {programs.phd.seats} seats
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {programs.phd.eligibility}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{programs.phd.description}</p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4">Research Areas</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {programs.phd.researchAreas.map((area, index) => (
                          <Badge key={index} className="bg-emerald-100 text-emerald-700 justify-start">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-semibold text-lg text-gray-900 mb-4">Program Features</h4>
                      <ul className="space-y-2">
                        {programs.phd.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Research Guidelines
                    </Button>
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 bg-transparent">
                      Application Process
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

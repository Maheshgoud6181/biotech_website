import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, FileText, Users, Award, Beaker, ExternalLink, Building2 } from "lucide-react"

const researchPapers = [
  {
    id: 1,
    title: "Novel Approaches in CRISPR-Cas9 Gene Editing for Therapeutic Applications",
    authors: ["Dr. Rajesh Kumar Singh", "Dr. Priya Sharma", "Dr. Amit Patel"],
    journal: "Nature Biotechnology",
    year: 2024,
    category: "Genetic Engineering",
    citations: 45,
    impact: 9.2,
    doi: "10.1038/nbt.2024.001",
    abstract:
      "This study presents innovative methodologies for enhancing CRISPR-Cas9 precision in therapeutic gene editing applications...",
  },
  {
    id: 2,
    title: "Sustainable Biofuel Production Using Engineered Microorganisms",
    authors: ["Dr. Amit Patel", "Dr. Meera Reddy", "Dr. Vikram Joshi"],
    journal: "Biotechnology for Biofuels",
    year: 2024,
    category: "Biofuels",
    citations: 32,
    impact: 7.8,
    doi: "10.1186/s13068-024-001",
    abstract:
      "Development of genetically modified microorganisms for enhanced biofuel production with reduced environmental impact...",
  },
  {
    id: 3,
    title: "Machine Learning Applications in Protein Structure Prediction",
    authors: ["Dr. Sunita Gupta", "Dr. Vikram Joshi"],
    journal: "Bioinformatics",
    year: 2023,
    category: "Bioinformatics",
    citations: 67,
    impact: 8.5,
    doi: "10.1093/bioinformatics/2023.001",
    abstract:
      "Novel machine learning algorithms for accurate protein structure prediction and drug discovery applications...",
  },
  {
    id: 4,
    title: "Bioremediaton of Heavy Metals Using Genetically Modified Plants",
    authors: ["Dr. Meera Reddy", "Dr. Priya Sharma"],
    journal: "Environmental Science & Technology",
    year: 2023,
    category: "Environmental Biotechnology",
    citations: 28,
    impact: 9.0,
    doi: "10.1021/acs.est.2023.001",
    abstract:
      "Innovative approaches to environmental cleanup using genetically engineered plants for heavy metal extraction...",
  },
]

const ongoingProjects = [
  {
    id: 1,
    title: "Development of Smart Drug Delivery Systems",
    pi: "Dr. Vikram Joshi",
    funding: "₹2.5 Crores",
    duration: "2023-2026",
    agency: "DST-SERB",
    status: "Active",
    description:
      "Creating intelligent drug delivery systems using nanotechnology and biomaterials for targeted therapy.",
    collaborators: ["IISc Bangalore", "AIIMS Delhi"],
  },
  {
    id: 2,
    title: "Synthetic Biology for Sustainable Chemical Production",
    pi: "Dr. Rajesh Kumar Singh",
    funding: "₹3.2 Crores",
    duration: "2022-2025",
    agency: "DBT",
    status: "Active",
    description: "Engineering microorganisms for sustainable production of high-value chemicals and pharmaceuticals.",
    collaborators: ["MIT USA", "University of Cambridge"],
  },
  {
    id: 3,
    title: "AI-Driven Genomics for Personalized Medicine",
    pi: "Dr. Sunita Gupta",
    funding: "₹1.8 Crores",
    duration: "2024-2027",
    agency: "ICMR",
    status: "Active",
    description: "Developing AI algorithms for genomic analysis to enable personalized treatment strategies.",
    collaborators: ["NCBS Bangalore", "Harvard Medical School"],
  },
]

const patents = [
  {
    id: 1,
    title: "Novel Biosensor for Real-time Glucose Monitoring",
    inventors: ["Dr. Priya Sharma", "Dr. Vikram Joshi"],
    patentNo: "IN 202341001234",
    year: 2023,
    status: "Granted",
    description: "A revolutionary biosensor technology for continuous glucose monitoring in diabetic patients.",
  },
  {
    id: 2,
    title: "Genetically Modified Microorganisms for Plastic Degradation",
    inventors: ["Dr. Meera Reddy", "Dr. Amit Patel"],
    patentNo: "IN 202341005678",
    year: 2024,
    status: "Filed",
    description: "Engineered bacteria capable of efficiently degrading various types of plastic waste.",
  },
  {
    id: 3,
    title: "CRISPR-Based Gene Therapy Vector System",
    inventors: ["Dr. Rajesh Kumar Singh", "Dr. Sunita Gupta"],
    patentNo: "US 11,234,567",
    year: 2023,
    status: "Granted",
    description: "Advanced gene therapy delivery system using modified CRISPR technology.",
  },
]

const collaborations = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    type: "Research Collaboration",
    focus: "Synthetic Biology",
    duration: "2022-2025",
    projects: 3,
  },
  {
    id: 2,
    name: "University of Cambridge",
    country: "UK",
    type: "Student Exchange",
    focus: "Biotechnology",
    duration: "2021-2026",
    projects: 2,
  },
  {
    id: 3,
    name: "Indian Institute of Science (IISc)",
    country: "India",
    type: "Joint Research",
    focus: "Biomedical Engineering",
    duration: "2023-2026",
    projects: 4,
  },
  {
    id: 4,
    name: "Harvard Medical School",
    country: "USA",
    type: "Research Collaboration",
    focus: "Genomics",
    duration: "2024-2027",
    projects: 2,
  },
]

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">Research & Publications</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge research initiatives, publications, and collaborative projects that are shaping
              the future of biotechnology.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      {/* <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search research papers, projects, or patents..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                2024
              </Button>
              <Button variant="outline" size="sm">
                2023
              </Button>
              <Button variant="outline" size="sm">
                High Impact
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Research Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="publications" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="publications" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Publications
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Beaker className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="patents" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Patents
              </TabsTrigger>
              <TabsTrigger value="collaborations" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Collaborations
              </TabsTrigger>
            </TabsList>

            {/* Publications Tab */}
            <TabsContent value="publications" className="space-y-6">
              <div className="grid gap-6">
                {researchPapers.map((paper) => (
                  <Card key={paper.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">{paper.title}</h3>
                              <p className="text-gray-600 text-sm mb-2">
                                {paper.authors.join(", ")} • {paper.journal} • {paper.year}
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">{paper.abstract}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end gap-3">
                          <Badge className="bg-emerald-100 text-emerald-700">{paper.category}</Badge>
                          <div className="flex flex-col lg:items-end text-sm text-gray-600">
                            <div>Impact Factor: {paper.impact}</div>
                            <div>Citations: {paper.citations}</div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-emerald-600 text-emerald-600 bg-transparent"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Paper
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {ongoingProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Beaker className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="font-serif text-lg text-gray-900 mb-2">{project.title}</CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {project.status}
                            </Badge>
                            <span className="text-sm text-gray-600">PI: {project.pi}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Funding:</span>
                          <br />
                          {project.funding}
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Duration:</span>
                          <br />
                          {project.duration}
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Agency:</span>
                          <br />
                          {project.agency}
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Collaborators:</span>
                          <br />
                          {project.collaborators.length}
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="font-medium text-gray-900 text-sm">Collaborators:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.collaborators.map((collab, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {collab}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Patents Tab */}
            <TabsContent value="patents" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {patents.map((patent) => (
                  <Card key={patent.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">{patent.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {patent.inventors.join(", ")} • {patent.year}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge
                              className={
                                patent.status === "Granted"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {patent.status}
                            </Badge>
                            <span className="text-sm text-gray-600">Patent No: {patent.patentNo}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{patent.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Collaborations Tab */}
            <TabsContent value="collaborations" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {collaborations.map((collab) => (
                  <Card key={collab.id} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">{collab.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{collab.country}</p>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-900">Type:</span>
                              <span className="text-gray-600">{collab.type}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-900">Focus Area:</span>
                              <span className="text-gray-600">{collab.focus}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-900">Duration:</span>
                              <span className="text-gray-600">{collab.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-900">Active Projects:</span>
                              <span className="text-emerald-600 font-semibold">{collab.projects}</span>
                            </div>
                          </div>
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

      {/* Research Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Research Impact</h2>
            <p className="text-lg text-gray-600">Our research contributions to the global scientific community</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">12</div>
              <div className="text-gray-600">Patents</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Collaborations</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

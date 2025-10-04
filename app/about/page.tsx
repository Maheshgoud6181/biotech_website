import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, History, Award, Users, BookOpen } from "lucide-react"
import Image from "next/image";
import Department from "../../public/department.png";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">About Our Department</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pioneering excellence in biotechnology education and research since 1960, shaping the future of biological
              sciences and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="font-serif font-bold text-2xl text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a globally recognized center of excellence in biotechnology education and research, fostering
                  innovation and developing skilled professionals who contribute to sustainable development and societal
                  welfare through cutting-edge biotechnological solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="font-serif font-bold text-2xl text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class education in biotechnology, conduct impactful research addressing global
                  challenges, foster industry-academia collaboration, and nurture ethical leaders who drive innovation
                  in biotechnology for the betterment of humanity and environmental sustainability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <History className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="font-serif font-bold text-3xl text-gray-900">Our History</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">1960 - Foundation</h3>
                  <p className="text-gray-600">
                    Established as part of the National Institute of Technology Durgapur, beginning our journey in
                    engineering education and research.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">
                    1995 - Biotechnology Department
                  </h3>
                  <p className="text-gray-600">
                    Launched the Department of Biotechnology to address the growing need for skilled professionals in
                    biological sciences and biotechnology.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">2010 - Research Excellence</h3>
                  <p className="text-gray-600">
                    Achieved significant milestones in research with state-of-the-art laboratories and international
                    collaborations.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-600 pl-6">
                  <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">2020 - Modern Era</h3>
                  <p className="text-gray-600">
                    Expanded programs to include cutting-edge areas like synthetic biology, bioinformatics, and
                    bioprocess engineering.
                  </p>
                </div>
              </div>
            </div>




           <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
  <Image
    src="/department.png" // Use public folder path
    alt="NIT Durgapur Campus"
    className="rounded-2xl shadow-lg object-cover"
    fill
  />
</div>





          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Accreditation & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading educational and research organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">NAAC A+</h3>
                <p className="text-gray-600 text-sm">Accredited by National Assessment and Accreditation Council</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">NBA Accredited</h3>
                <p className="text-gray-600 text-sm">National Board of Accreditation approved programs</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">AICTE Approved</h3>
                <p className="text-gray-600 text-sm">All India Council for Technical Education recognition</p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">NIRF Ranked 49th (2025)</h3>
                <p className="text-gray-600 text-sm">National Institutional Ranking Framework recognition</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

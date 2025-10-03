import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20 lg:py-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-biotech-pattern.png')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif font-bold text-4xl lg:text-6xl text-gray-900 leading-tight">
                Empowering Tomorrow's <span className="text-emerald-600">Innovators</span> in Biotechnology
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Explore our cutting-edge research, academic programs, and placement opportunities at the Department of
                Biotechnology, NIT Durgapur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Research Excellence
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-2xl text-gray-900">450+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-2xl text-gray-900">62+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="font-serif font-bold text-2xl text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Research Papers</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200">
              <img
                src="/placeholder-ao14l.png"
                alt="Biotechnology Laboratory at NIT Durgapur"
                className="w-full h-full object-cover"
              />
              
              <Image
                  src="/department.png" // Use public folder path
                  alt="Biotechnology Laboratory at NIT Durgapur"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                  fill
                />


            </div>
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">NAAC A+ Accredited</div>
                  <div className="text-sm text-gray-600">Excellence in Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

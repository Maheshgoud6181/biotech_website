import { Card, CardContent } from "@/components/ui/card"

export function IndustryPartnerships() {
  const partners = [
    { name: "Biocon", logo: "/biocon-logo.png" },
    { name: "Dr. Reddy's", logo: "/dr-reddys-logo.png" },
    { name: "Cipla", logo: "/cipla-logo.png" },
    { name: "Glenmark", logo: "/glenmark-logo.png" },
    { name: "Lupin", logo: "/lupin-pharma-logo.png" },
    { name: "Aurobindo", logo: "/generic-pharmaceutical-logo.png" },
  ]

  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Industry Partnerships</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading biotechnology and pharmaceutical companies to bridge academia and industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 flex items-center justify-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Interested in partnering with us?</p>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
            Explore Partnership Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}

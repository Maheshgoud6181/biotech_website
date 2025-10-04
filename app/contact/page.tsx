"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Building2, User, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "general",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for admissions, research collaborations, or any other inquiries. We're here to help
              you on your biotechnology journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Department of Biotechnology
                  <br />
                  National Institute of Technology
                  <br />
                  Durgapur, West Bengal 713209
                  <br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Call Us</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Office: +91-343-2754027</p>
                  <p>HOD: +91-343-2754027</p>
                  <p>Admissions: +91-343-2754027</p>
                  <p>Placements: +91-343-2754027</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Email Us</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>hod.bt@nitdgp.ac.in</p>
                  <p>surabhi.chaudhuri@bt.nitdgp.ac.in</p>
                  <p>debojyoti.de@bt.nitdgp.ac.in</p>
                  <p>sudipta.mondal@bt.nitdgp.ac.in</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Hours */}
          <Card className="border-emerald-200 mb-16">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-gray-900 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-emerald-600" />
                Office Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Administrative Office</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Faculty Consultation</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>2:00 PM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50" id="fillform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-gray-900 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-emerald-600" />
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="admissions">Admissions</option>
                        <option value="research">Research Collaboration</option>
                        <option value="placements">Placements</option>
                        <option value="events">Events</option>
                        <option value="alumni">Alumni</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Directions */}
            <div className="space-y-6">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-gray-900 flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-emerald-600" />
                    Campus Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 border-emerald-200 rounded-lg mb-4 flex items-center justify-center">
                     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.544491224983!2d87.2919848!3d23.5488803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76d91fb5b4015%3A0x6b88427e44d9245!2sDepartment%20of%20Biotechnology%2C%20NIT%20Durgapur!5e0!3m2!1sen!2sin!4v1759167100145!5m2!1sen!2sin"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
                    {/* <div className="text-center text-gray-500">
                     
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Interactive Campus Map</p>
                      <p className="text-xs">NIT Durgapur, West Bengal</p>
                    </div> */}
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">From Durgapur Railway Station:</p>
                        <p>Take Taxi or auto-rickshaw (15 minutes, ₹50-100)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">From Kolkata:</p>
                        <p>By train (2.5 hours) or by road via NH19 (3 hours)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Nearest Airport:</p>
                        <p>Kazi Nazrul Islam Airport, Durgapur (16 km)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-gray-900">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="justify-start bg-transparent" onClick={() => alert("⏳ Coming soon! We are working to make this feature available shortly.")}>
                      <User className="h-4 w-4 mr-2" />
                      Faculty
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start bg-transparent"  onClick={() => alert("⏳ Coming soon! We are working to make this feature available shortly.")}>
                      <Building2 className="h-4 w-4 mr-2" />
                      Campus Tour
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start bg-transparent"  onClick={() => alert("⏳ Coming soon! We are working to make this feature available shortly.")}>
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start bg-transparent"  onClick={() => alert("⏳ Coming soon! We are working to make this feature available shortly.")}>
                      <Mail className="h-4 w-4 mr-2" />
                      Alumni
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, GraduationCap, Search, Filter } from "lucide-react"
import Image from "next/image"

// const facultyMembers = [{
//     id: 1,
//     name: "Dr. Rajesh Kumar Singh",
//     designation: "Professor & Head",
//     qualification: "Ph.D. in Biotechnology, IIT Delhi",
//     specialization: "Molecular Biology, Genetic Engineering",
//     experience: "25 years",
//     email: "rk.singh@nitdgp.ac.in",
//     phone: "+91-343-275-4321",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Singh",
//     researchAreas: ["Genetic Engineering", "Molecular Biology", "Bioprocess Engineering"],
//     publications: 85,
// },
// {
//     id: 2,
//     name: "Dr. Priya Sharma",
//     designation: "Professor",
//     qualification: "Ph.D. in Biochemistry, JNU Delhi",
//     specialization: "Enzyme Technology, Biocatalysis",
//     experience: "20 years",
//     email: "p.sharma@nitdgp.ac.in",
//     phone: "+91-343-275-4322",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Sharma",
//     researchAreas: ["Enzyme Technology", "Biocatalysis", "Protein Engineering"],
//     publications: 72,
// },
// {
//     id: 3,
//     name: "Dr. Amit Patel",
//     designation: "Associate Professor",
//     qualification: "Ph.D. in Microbiology, BHU Varanasi",
//     specialization: "Industrial Microbiology, Fermentation",
//     experience: "15 years",
//     email: "a.patel@nitdgp.ac.in",
//     phone: "+91-343-275-4323",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Patel",
//     researchAreas: ["Industrial Microbiology", "Fermentation Technology", "Biofuels"],
//     publications: 58,
// },
// {
//     id: 4,
//     name: "Dr. Sunita Gupta",
//     designation: "Associate Professor",
//     qualification: "Ph.D. in Bioinformatics, IIIT Hyderabad",
//     specialization: "Computational Biology, Genomics",
//     experience: "12 years",
//     email: "s.gupta@nitdgp.ac.in",
//     phone: "+91-343-275-4324",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Gupta",
//     researchAreas: ["Bioinformatics", "Computational Biology", "Genomics"],
//     publications: 45,
// },
// {
//     id: 5,
//     name: "Dr. Vikram Joshi",
//     designation: "Assistant Professor",
//     qualification: "Ph.D. in Biomedical Engineering, IISc Bangalore",
//     specialization: "Tissue Engineering, Biomaterials",
//     experience: "8 years",
//     email: "v.joshi@nitdgp.ac.in",
//     phone: "+91-343-275-4325",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Joshi",
//     researchAreas: ["Tissue Engineering", "Biomaterials", "Regenerative Medicine"],
//     publications: 32,
// },
// {
//     id: 6,
//     name: "Dr. Meera Reddy",
//     designation: "Assistant Professor",
//     qualification: "Ph.D. in Environmental Biotechnology, Anna University",
//     specialization: "Environmental Biotechnology, Bioremediation",
//     experience: "6 years",
//     email: "m.reddy@nitdgp.ac.in",
//     phone: "+91-343-275-4326",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Reddy",
//     researchAreas: ["Environmental Biotechnology", "Bioremediation", "Waste Treatment"],
//     publications: 28,
// },
// {
//     id: 7,
//     name: "Dr. Amita Barik",
//     designation: "Assistant Professor",
//     qualification: "Not specified",
//     specialization: "Computational Biology, Macromolecular Interactions",
//     experience: null,
//     email: "abarik.bt@nitdgp.ac.in",
//     phone: "91-9434788033",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Amita+Barik",
//     researchAreas: ["Computational Biology", "Macromolecular Interactions"],
//     publications: null,
// },
// {
//     id: 8,
//     name: "Dr. Apurba Dey",
//     designation: "Professor (HAG), FIIChE, FIE, C.Eng (I)",
//     qualification: "Ph.D. in Microbial Desulphurisation of Coal, IIT Delhi",
//     specialization: "Biochemical Engineering, Environmental Biotechnology",
//     experience: "Joined 2008; academic career since 1994",
//     email: "adey.bt@nitdgp.ac.in",
//     phone: "9434788098",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Apurba+Dey",
//     researchAreas: ["Biochemical Engineering", "Environmental Biotechnology"],
//     publications: 63,
// },
// {
//     id: 9,
//     name: "Dr. Ashish Bhattacharjee",
//     designation: "Associate Professor",
//     qualification: "Ph.D. in Biochemistry, Calcutta University",
//     specialization: "Monocyte/Macrophage Biology, Cellular & Molecular Biology",
//     experience: "Associate Professor since October 16, 2018",
//     email: "abhattacharjee.bt@nitdgp.ac.in",
//     phone: "9434788034",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Ashish+Bhattacharjee",
//     researchAreas: ["Monocyte/macrophage biology", "Cellular and Molecular Biology"],
//     publications: null,
// },
// {
//     id: 10,
//     name: "Dr. Dalia Dasgupta Mandal",
//     designation: "Professor",
//     qualification: "Ph.D. in Biotechnology, IICB/CSIR & Jadavpur University",
//     specialization: "Drug Delivery Systems, Genotoxicity, Immunotoxicology",
//     experience: null,
//     email: "ddasguptamandal.bt@nitdgp.ac.in",
//     phone: "+91-9434788141",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Dalia+Dasgupta",
//     researchAreas: ["Drug Delivery systems", "Genotoxicity", "Immunotoxicology"],
//     publications: null,
// },
// {
//     id: 11,
//     name: "Dr. Debjani Dutta",
//     designation: "Associate Professor",
//     qualification: "Not specified",
//     specialization: "Biochemistry, Metabolomics, Food Biotechnology",
//     experience: "Joined 2007",
//     email: "ddutta.bt@nitdgp.ac.in",
//     phone: "91-3432754034",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Debjani+Dutta",
//     researchAreas: ["Biochemistry", "Metabolomics", "Food Biotechnology"],
//     publications: 130,
// },
// {
//     id: 12,
//     name: "Dr. Debojyoti De",
//     designation: "Assistant Professor",
//     qualification: "Ph.D. in Cell and Molecular Biology, Sungkyunkwan University (S. Korea)",
//     specialization: "Metabolic Disorder, AI/ML in Drug Discovery, Stem Cell Biology",
//     experience: "Joined 2019",
//     email: "dde.bt@nitdgp.ac.in",
//     phone: "91-8910827232",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Debojyoti+De",
//     researchAreas: ["Metabolic Disorder", "AI/ML in Drug Discovery", "Stem Cell Biology"],
//     publications: 23,
// },
// {
//     id: 13,
//     name: "Dr. Kaustav Aikat",
//     designation: "Professor",
//     qualification: "B.Tech (Hons), M.Tech & Ph.D., IIT Kharagpur",
//     specialization: "Microbial Biotechnology, Biofuels, Enzymes",
//     experience: "Joined 2007",
//     email: "kaikat.bt@nitdgp.ac.in",
//     phone: null,
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Kaustav+Aikat",
//     researchAreas: ["Microbial Biotechnology", "Biofuels", "Enzymes"],
//     publications: 13,
// },
// {
//     id: 14,
//     name: "Dr. Kazy Sufia Khannam",
//     designation: "Associate Professor",
//     qualification: "Not specified",
//     specialization: "Environmental Microbiology, Microbial Genomics, Bioremediation, Geomicrobiology, CO2 Capture",
//     experience: "Assistant Professor since 2008; Associate Professor since 2018",
//     email: "skkazy.bt@nitdgp.ac.in",
//     phone: "+91-9434788200",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Kazy+Sufia",
//     researchAreas: ["Environmental Microbiology", "Microbial Genomics", "Bioremediation", "Geomicrobiology", "CO2 Capture"],
//     publications: 105,
// },
// {
//     id: 15,
//     name: "Dr. Monidipa Ghosh",
//     designation: "Associate Professor",
//     qualification: "Not specified",
//     specialization: "Molecular Immunology, Nanobiotechnology, Biosensor Development",
//     experience: "Assistant Professor since 2010",
//     email: "mghosh.bt@nitdgp.ac.in",
//     phone: null,
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Monidipa+Ghosh",
//     researchAreas: ["Molecular Immunology", "Nanobiotechnology", "Biosensor Development"],
//     publications: null,
// },
// {
//     id: 16,
//     name: "Dr. Nibedita Mahata",
//     designation: "Assistant Professor",
//     qualification: "Not specified",
//     specialization: "Microbial Pathophysiology, Biochemistry",
//     experience: "Joined 2014",
//     email: "nmahata.bt@nitdgp.ac.in",
//     phone: "+91-9434789020",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Nibedita+Mahata",
//     researchAreas: ["Microbial Pathophysiology", "Biochemistry"],
//     publications: null,
// },
// {
//     id: 17,
//     name: "Dr. Oindrilla Mukherjee",
//     designation: "Assistant Professor",
//     qualification: "B.Tech (Haldia), M.Tech (IIT Kharagpur), Ph.D. (Max Planck Research School, Freiburg)",
//     specialization: "Immunology, Host-pathogen Interaction, Microbiome",
//     experience: "Joined 2018",
//     email: "omukherjee.bt@nitdgp.ac.in",
//     phone: "+91-9434789036",
//     image: "/placeholder.svg?height=300&width=300&text=Dr.+Oindrilla+Mukherjee",
//     researchAreas: ["Immunology", "Host-pathogen Interaction", "Microbiome"],
//     publications: 15,
// }
// ]


const facultyMembers = [
  {
    id: 1,
    name: "Dr. Amita Barik",
    designation: "Assistant Professor",
    qualification: "Ph.D. in Computational Biology from IIT Kharagpur",
    specialization: "Computational Biology, Macromolecular Interactions, RNA Bioinformatics",
    experience: "Joined the Institute in 2019",
    email: "abarik.bt@nitdgp.ac.in",
    phone: "91-9434788033",
    image: "/Amita.jpeg",
    researchAreas: ["Computational Biology", "Macromolecular Interactions"],
    publications: 19
  },
  {
    id: 2,
    name: "Dr. Apurba Dey",
    designation: "Professor (HAG), FIIChE, FIE, C.Eng (I)",
    qualification: "Ph.D. in Microbial Desulphurisation of Coal, IIT Delhi",
    specialization: "Biochemical Engineering, Environmental Biotechnology",
    experience: "Joined 2008; academic career since 1994",
    email: "adey.bt@nitdgp.ac.in",
    phone: "9434788098",
    image: "/apurba_dey.jpg",
    researchAreas: ["Biochemical Engineering", "Environmental Biotechnology"],
    publications: 63
  },
  {
    id: 3,
    name: "Dr. Ashish Bhattacharjee",
    designation: "Associate Professor",
    qualification: "Ph.D. in Biochemistry, Calcutta University",
    specialization: "Monocyte/Macrophage Biology, Cellular & Molecular Biology",
    experience: "Associate Professor since October 16, 2018",
    email: "abhattacharjee.bt@nitdgp.ac.in",
    phone: "9434788034",
    image: "/ashish_bhattacharjee.jpg",
    researchAreas: ["Monocyte/macrophage biology", "Cellular and Molecular Biology"],
    publications: 48
  },
  {
    id: 4,
    name: "Dr. Dalia Dasgupta Mandal",
    designation: "Professor",
    qualification: "Ph.D. in Biotechnology, IICB/CSIR & Jadavpur University",
    specialization: "Drug Delivery Systems, Genotoxicity, Immunotoxicology",
    experience: "Professor at Department of Biotechnology from 2019",
    email: "ddasguptamandal.bt@nitdgp.ac.in",
    phone: "+91-9434788141",
    image: "/Dalia.jpeg",
    researchAreas: ["Drug Delivery systems", "Genotoxicity", "Immunotoxicology"],
    publications: 55
  },
  {
    id: 5,
    name: "Dr. Debjani Dutta",
    designation: "Associate Professor",
    qualification: "Ph. D in Food Biochemistry (2007) from Jadavpur University",
    specialization: "Biochemistry, Metabolomics, Food Biotechnology",
    experience: "Joined 2007",
    email: "ddutta.bt@nitdgp.ac.in",
    phone: "91-3432754034",
    image: "/Debjani Dutta.jpg",
    researchAreas: ["Biochemistry", "Metabolomics", "Food Biotechnology"],
    publications: 131
  },
  {
    id: 6,
    name: "Dr. Debojyoti De",
    designation: "Assistant Professor",
    qualification: "Ph.D. in Cell and Molecular Biology, Sungkyunkwan University (S. Korea)",
    specialization: "Metabolic Disorder, AI/ML in Drug Discovery, Stem Cell Biology",
    experience: "Joined 2019",
    email: "dde.bt@nitdgp.ac.in",
    phone: "91-8910827232",
    image: "/debojyoti.jpg",
    researchAreas: ["Metabolic Disorder", "AI/ML in Drug Discovery", "Stem Cell Biology"],
    publications: 23
  },
  {
    id: 7,
    name: "Dr. Kaustav Aikat",
    designation: "Professor",
    qualification: "B.Tech (Hons), M.Tech & Ph.D., IIT Kharagpur",
    specialization: "Microbial Biotechnology, Biofuels, Enzymes",
    experience: "Joined 2007",
    email: "kaikat.bt@nitdgp.ac.in",
    phone: null,
    image: "kaustav_aikat1.jpg",
    researchAreas: ["Microbial Biotechnology", "Biofuels", "Enzymes"],
    publications: 13
  },
  {
    id: 8,
    name: "Dr. Kazy Sufia Khannam",
    designation: "Associate Professor",
    qualification: "Ph.D.(Microbiology, 2000) - Banaras Hindu University, Varanasi, UP, India",
    specialization: "Environmental Microbiology, Microbial Genomics, Bioremediation, Geomicrobiology, CO2 Capture",
    experience: "Assistant Professor since 2008; Associate Professor since 2018",
    email: "skkazy.bt@nitdgp.ac.in",
    phone: "+91-9434788200",
    image: "/Kazy.jpg",
    researchAreas: ["Environmental Microbiology", "Microbial Genomics", "Bioremediation", "Geomicrobiology", "CO2 Capture"],
    publications: 105
  },
  {
    id: 9,
    name: "Dr. Monidipa Ghosh",
    designation: "Associate Professor",
    qualification: "PhD (Cell Biology and Immunology) - The University of Jadavpur",
    specialization: "Molecular Immunology, Nanobiotechnology, Biosensor Development",
    experience: "Assistant Professor since 2010",
    email: "mghosh.bt@nitdgp.ac.in",
    phone: null,
    image: "/monidipa.jpg",
    researchAreas: ["Molecular Immunology", "Nanobiotechnology", "Biosensor Development"],
    publications: 26
  },
  {
    id: 10,
    name: "Dr. Nibedita Mahata",
    designation: "Assistant Professor",
    qualification: "Not specified",
    specialization: "Microbial Pathophysiology, Biochemistry",
    experience: "Joined 2014",
    email: "nmahata.bt@nitdgp.ac.in",
    phone: "+91-9434789020",
    image: "/NIbedita_Mahata.jpg",
    researchAreas: ["Microbial Pathophysiology", "Biochemistry"],
    publications: 17
  },
  {
    id: 11,
    name: "Dr. Oindrilla Mukherjee",
    designation: "Assistant Professor",
    qualification: "B.Tech (Haldia), M.Tech (IIT Kharagpur), Ph.D. (Max Planck Research School, Freiburg)",
    specialization: "Immunology, Host-pathogen Interaction, Microbiome",
    experience: "Joined 2018",
    email: "omukherjee.bt@nitdgp.ac.in",
    phone: "+91-9434789036",
    image: "/Oindrilla.jpg",
    researchAreas: ["Immunology", "Host-pathogen Interaction", "Microbiome"],
    publications: 15
  },
  {
    id: 12,
    name: "Dr. Sougata Saha",
    designation: "Assistant Professor",
    qualification: "Ph.D (Host Virus Interaction) , IISC Bangalore",
    specialization: "this needs to be checked",
    experience: "Joined 2018",
    email: "ssaha.bt@nitdgp.ac.in",
    phone: "+91-9434789049",
    image: "/Sougata.jpg",
    researchAreas: [""],
    publications: 1
  },
  {
    id: 13,
    name: "Dr. Subhankar Roy Barman",
    designation: "Associate Professor",
    qualification: "Ph.D. in Plant Molecular Genetics (2000 – 2005), MSU, Baroda & ETH, Zurich, Switzerland",
    specialization: "Molecular Plant - Pathogen Interactions",
    experience: "Joined 2018",
    email: "sroybarman.bt@nitdgp.ac.in",
    phone: "+91-9434789002",
    image: "/Subhankar.png",
    researchAreas: ["Molecular Plant - Pathogen Interactions"],
    publications: 14
  },
  {
    id: 14,
    name: "Dr. Sudip Chattopadhyay",
    designation: "Professor",
    qualification: "Ph.D, Biochemistry, Bose Institute (Calcutta University), West Bengal, India.",
    specialization: "Light signal-controlled plant growth and development using Arabidopsis and tomato plants.",
    experience: "Joined the Institute in 2009",
    email: "schattopadhyay.bt@nitdgp.ac.in",
    phone: "+91-9434788029",
    image: "/sudip_chatterjee.jpg",
    researchAreas: ["Light signal-controlled plant growth and development using Arabidopsis and tomato plants."],
    publications: 6
  },
  {
    id: 15,
    name: "Dr. Sudipta Mondal",
    designation: "Assistant Professor",
    qualification: "Ph.D. (2007-2013) Indian Institute of Technology (IIT), Kanpur",
    specialization: "Peptide self-assembly, Bionanotechnology, Amyloid aggregation and protein folding.",
    experience: "Joined the Institute in 2019",
    email: "smondal.bt@nitdgp.ac.in",
    phone: "+91-9434789057",
    image: "/Sudipta_Mondal.png",
    researchAreas: ["Peptide self-assembly", "Bionanotechnology", "Amyloid aggregation and protein folding"],
    publications: 4
  },
  {
    id: 16,
    name: "Dr. Sudit Sekhar Mukhopadhyay",
    designation: "Professor",
    qualification: "Ph.D, Biochemistry, Bose Institute (Jadavpur University), West Bengal, India.",
    specialization: "Genomic instability, DNA damage repair, and Fanconi anemia in cancer.",
    experience: "Joined the Institute in 2010",
    email: "ssmukhopadhyay.bt@nitdgp.ac.in",
    phone: "+91-9434788139",
    image: "/Sudit.jpg",
    researchAreas: ["Genomic instability, DNA damage repair, and Fanconi anemia in cancer research."],
    publications: 1
  },
  {
    id: 17,
    name: "Dr. Surabhi Chaudhuri",
    designation: "Professor",
    qualification: "Ph.D in Biochemical Engineering from Jadavpur University, Kolkata",
    specialization: "Microbial Biotechnology, Food Biotechnology, Environmental Biotechnology.",
    experience: "Joined the Institute in 2007",
    email: "schaudhuri.bt@nitdgp.ac.in",
    phone: "+91-9434788095",
    image: "/surabhi.jpg",
    researchAreas: ["Microbial Biotechnology", "Food Biotechnology", "Environmental Biotechnology"],
    publications: ""
  }
]



export default function FacultyPage() {
  

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-gray-900 mb-4">HOD & Faculty</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished faculty members who are leading experts in their respective fields, committed to
              excellence in teaching and research.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid-cols-1 lg:grid-cols-1 gap-8 place-items-center">

                <Card key="hod" className="group hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 ">
                  <div className="flex gap-4">
                  {/* Profile Image */}
                  <div className="text-center mb-2 w-1/2 p-4 pr-5 rounded">
                    {/* <Image
                      src="/public/hod.png"
                      alt="mam"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100 group-hover:border-emerald-200 transition-colors"
                    /> */}

                    <Image src="/hodman.jpg" alt="HOD" width={128} height={128} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100 group-hover:border-emerald-200 transition-colors" />

                    <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">Kazy Sufia Khannam</h3>
                    <p className="text-emerald-600 font-medium">Head of Department</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    {/* <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Qualification</h4>
                      <p className="text-gray-600 text-sm">Biotechnology</p>
                    </div> */}

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                      <p className="text-gray-600 text-sm">Environmental Microbiology and Biotechnology</p>
                    </div>

                    {/* <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Research Areas</h4>
                      <div className="flex flex-wrap gap-1">
                        {faculty.researchAreas.map((area, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div> */}

                    <div className="grid grid-cols-1 gap-4 text-sm text-gray-600">
                      
                       
                        Joined the Institute in 2008
                      
                      {/* <div>
                        <span className="font-medium">Publications:</span>
                        <br />
                        publications
                      </div> */}
                    </div>

                    {/* Contact */}
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                        <a href={`mailto:hod.bt@nitdgp.ac.in`} className="hover:text-emerald-600 transition-colors">
                          hod.bt@nitdgp.ac.in
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                        <a href={`tel:+91-343-2754027`} className="hover:text-emerald-600 transition-colors">
                         +91-343-2754027
                        </a>
                      </div>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"  onClick={() =>
    window.open(
      "https://nitdgp.ac.in/department/biotechnology/faculty-2/sufia-khannam-kazy",
      "_blank"
    )
  }>View Profile</Button>
                  </div>

                  </div>
                </CardContent>
              </Card>
             </div>
             </div>


        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search faculty by name or specialization..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                All Departments
              </Button>
              <Button variant="outline" size="sm">
                Professor
              </Button>
              <Button variant="outline" size="sm">
                Associate Professor
              </Button>
              <Button variant="outline" size="sm">
                Assistant Professor
              </Button>
            </div>
          </div>
        </div> */}
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.id} className="group hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="text-center mb-6">
                    {/* <img
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100 group-hover:border-emerald-200 transition-colors"
                    /> */}

                    <Image src={faculty.image.trimEnd()} alt={faculty.name} width={128} height={128} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100 group-hover:border-emerald-200 transition-colors" />
                    <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{faculty.name}</h3>
                    <p className="text-emerald-600 font-medium">{faculty.designation}</p>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Qualification</h4>
                      <p className="text-gray-600 text-sm">{faculty.qualification}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                      <p className="text-gray-600 text-sm">{faculty.specialization}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Research Areas</h4>
                      <div className="flex flex-wrap gap-1">
                        {faculty.researchAreas.map((area, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Experience:</span>
                        <br />
                        {faculty.experience}
                      </div>
                      <div>
                        <span className="font-medium">Publications:</span>
                        <br />
                        {faculty.publications}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                        <a href={`mailto:${faculty.email}`} className="hover:text-emerald-600 transition-colors">
                          {faculty.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                        <a href={`tel:${faculty.phone}`} className="hover:text-emerald-600 transition-colors">
                          {faculty.phone}
                        </a>
                      </div>
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" onClick={() =>
    window.open(
      "https://nitdgp.ac.in/department/biotechnology/faculty-2",
      "_blank"
    )
  }>View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-gray-900 mb-4">Department Statistics</h2>
            <p className="text-lg text-gray-600">Our faculty's collective expertise and achievements</p>
          </div>
        


          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">17+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">320+</div>
              <div className="text-gray-600">Research Publications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Avg Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

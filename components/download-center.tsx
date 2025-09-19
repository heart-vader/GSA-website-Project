import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, FileText, ImageIcon, File, Search } from "lucide-react"

const resourceCategories = [
  {
    title: "Product Catalogs",
    description: "Comprehensive catalogs with product specifications and applications",
    icon: FileText,
    resources: [
      {
        name: "Agricultural Pulleys Catalog 2024",
        type: "PDF",
        size: "12.5 MB",
        updated: "March 2024",
        downloads: 1247,
      },
      {
        name: "Precision Castings Catalog",
        type: "PDF",
        size: "18.2 MB",
        updated: "February 2024",
        downloads: 892,
      },
      {
        name: "Complete Product Portfolio",
        type: "PDF",
        size: "45.8 MB",
        updated: "January 2024",
        downloads: 2156,
      },
    ],
  },
  {
    title: "Technical Specifications",
    description: "Detailed technical drawings, specifications, and engineering data",
    icon: File,
    resources: [
      {
        name: "V-Belt Pulley Specifications",
        type: "PDF",
        size: "8.3 MB",
        updated: "March 2024",
        downloads: 756,
      },
      {
        name: "Casting Material Properties",
        type: "PDF",
        size: "5.1 MB",
        updated: "February 2024",
        downloads: 634,
      },
      {
        name: "Dimensional Tolerances Guide",
        type: "PDF",
        size: "3.7 MB",
        updated: "January 2024",
        downloads: 423,
      },
    ],
  },
  {
    title: "CAD Drawings",
    description: "2D and 3D CAD files for design and integration purposes",
    icon: ImageIcon,
    resources: [
      {
        name: "Standard Pulley CAD Library",
        type: "DWG",
        size: "156 MB",
        updated: "March 2024",
        downloads: 312,
      },
      {
        name: "Casting 3D Models",
        type: "STEP",
        size: "89 MB",
        updated: "February 2024",
        downloads: 198,
      },
      {
        name: "Assembly Drawings Package",
        type: "ZIP",
        size: "234 MB",
        updated: "January 2024",
        downloads: 145,
      },
    ],
  },
]

const featuredDownloads = [
  {
    name: "Quality Management System Overview",
    description: "Comprehensive overview of our ISO 9001:2015 certified quality processes",
    type: "PDF",
    size: "6.2 MB",
    featured: true,
  },
  {
    name: "Manufacturing Capabilities Brochure",
    description: "Detailed information about our facilities, equipment, and capabilities",
    type: "PDF",
    size: "14.8 MB",
    featured: true,
  },
  {
    name: "Custom Manufacturing Guide",
    description: "Guidelines and requirements for custom manufacturing projects",
    type: "PDF",
    size: "9.1 MB",
    featured: true,
  },
]

export function DownloadCenter() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search resources, catalogs, specifications..."
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* Featured Downloads */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDownloads.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                    <div className="text-sm text-muted-foreground">{resource.size}</div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download {resource.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resourceCategories.map((category, index) => (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-secondary" />
                    </div>
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.resources.map((resource, idx) => (
                      <Card key={idx} className="border border-border hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <div className="text-xs text-muted-foreground">{resource.size}</div>
                          </div>
                          <h4 className="font-medium text-foreground mb-1">{resource.name}</h4>
                          <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                            <span>Updated: {resource.updated}</span>
                            <span>{resource.downloads} downloads</span>
                          </div>
                          <Button size="sm" className="w-full">
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

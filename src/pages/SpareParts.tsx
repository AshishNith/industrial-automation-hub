import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Package, Truck, Clock, Shield, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

const SpareParts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "sensors", label: "Sensors & Instruments" },
    { value: "actuators", label: "Actuators & Motors" },
    { value: "plc", label: "PLC & Control Systems" },
    { value: "safety", label: "Safety Components" },
    { value: "networking", label: "Networking & Communication" },
    { value: "power", label: "Power & Electrical" },
    { value: "mechanical", label: "Mechanical Components" },
    { value: "hmi", label: "HMI & Displays" }
  ];

  const spareParts = [
    {
      id: 1,
      name: "Siemens S7-1200 CPU 1214C",
      partNumber: "6ES7214-1AG40-0XB0",
      category: "plc",
      brand: "Siemens",
      description: "Compact CPU with integrated DI/DO and analog inputs, suitable for small to medium automation tasks.",
      price: "₹25,000",
      availability: "In Stock",
      leadTime: "1-2 days",
      warranty: "2 years",
      rating: 4.8,
      features: ["24 DI/DO", "2 AI", "Ethernet Port", "Compact Design"],
      applications: ["Small automation systems", "Building automation", "Machine control"]
    },
    {
      id: 2,
      name: "ABB AC Drive ACS580",
      partNumber: "ACS580-01-04A3-4",
      category: "actuators",
      brand: "ABB",
      description: "General purpose AC drive for pump, fan and conveyor applications with built-in safety functions.",
      price: "₹45,000",
      availability: "In Stock",
      leadTime: "2-3 days",
      warranty: "3 years",
      rating: 4.9,
      features: ["Safety functions", "Easy setup", "Energy efficient", "IP21 enclosure"],
      applications: ["Pumps", "Fans", "Conveyors", "Mixers"]
    },
    {
      id: 3,
      name: "Schneider Electric Pressure Sensor",
      partNumber: "XMLP001BD21",
      category: "sensors",
      brand: "Schneider Electric",
      description: "Electronic pressure switch with digital display, configurable pressure range and output.",
      price: "₹12,500",
      availability: "In Stock",
      leadTime: "1 day",
      warranty: "2 years",
      rating: 4.6,
      features: ["Digital display", "Configurable range", "IP67 rating", "Multiple outputs"],
      applications: ["Hydraulic systems", "Pneumatic systems", "Process monitoring"]
    },
    {
      id: 4,
      name: "Pilz Safety Relay PNOZ s3",
      partNumber: "750103",
      category: "safety",
      brand: "Pilz",
      description: "Configurable safety relay for monitoring safety circuits with emergency stop and safety gate functions.",
      price: "₹18,000",
      availability: "Limited Stock",
      leadTime: "3-5 days",
      warranty: "3 years",
      rating: 4.7,
      features: ["SIL 3/PLe", "Configurable", "Diagnostic LEDs", "Compact design"],
      applications: ["Emergency stop circuits", "Safety gate monitoring", "Two-hand control"]
    },
    {
      id: 5,
      name: "Phoenix Contact Ethernet Switch",
      partNumber: "FL SWITCH SF 5TX",
      category: "networking",
      brand: "Phoenix Contact",
      description: "Unmanaged Ethernet switch for industrial applications with 5 Fast Ethernet ports.",
      price: "₹8,500",
      availability: "In Stock",
      leadTime: "1-2 days",
      warranty: "2 years",
      rating: 4.5,
      features: ["5 Fast Ethernet ports", "Industrial design", "DIN rail mounting", "Wide temperature range"],
      applications: ["Industrial networks", "Machine connectivity", "Field bus extension"]
    },
    {
      id: 6,
      name: "Omron Proximity Sensor",
      partNumber: "E2E-X5ME1 2M",
      category: "sensors",
      brand: "Omron",
      description: "Inductive proximity sensor with M18 threading and 5mm sensing distance.",
      price: "₹2,800",
      availability: "In Stock",
      leadTime: "Same day",
      warranty: "1 year",
      rating: 4.4,
      features: ["M18 threading", "5mm sensing distance", "IP67 rating", "LED indicator"],
      applications: ["Position detection", "Counting applications", "Limit switching"]
    },
    {
      id: 7,
      name: "Allen-Bradley PowerFlex 525 Drive",
      partNumber: "25B-D013N114",
      category: "actuators",
      brand: "Allen-Bradley",
      description: "Compact AC drive with integrated safety features and communication options.",
      price: "₹35,000",
      availability: "In Stock",
      leadTime: "2-3 days",
      warranty: "2 years",
      rating: 4.8,
      features: ["Integrated safety", "EtherNet/IP", "Compact design", "Easy commissioning"],
      applications: ["Material handling", "Machine automation", "HVAC systems"]
    },
    {
      id: 8,
      name: "Weidmuller Terminal Blocks",
      partNumber: "WDU 2.5/10",
      category: "power",
      brand: "Weidmuller",
      description: "Feed-through terminal blocks for 2.5mm² conductors, pack of 10 pieces.",
      price: "₹650",
      availability: "In Stock",
      leadTime: "Same day",
      warranty: "1 year",
      rating: 4.3,
      features: ["2.5mm² capacity", "Spring clamp", "Test point", "Marking option"],
      applications: ["Control panels", "Distribution boxes", "Field wiring"]
    }
  ];

  const filteredParts = spareParts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "In Stock":
        return "bg-green-100 text-green-800 border-green-200";
      case "Limited Stock":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Out of Stock":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Spare Parts & Components"
          subtitle="High-quality industrial automation spare parts from leading manufacturers"
          breadcrumb={[{ label: "Spare Parts" }]}
        />
        
        {/* Search and Filter Section */}
        <section className="py-8 bg-muted/30">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by part name, number, or brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredParts.length} of {spareParts.length} products
              </p>
            </div>
          </div>
        </section>
        
        {/* Spare Parts Grid */}
        <section className="py-16 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParts.map((part) => (
                <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{part.brand}</Badge>
                      <Badge 
                        variant="secondary" 
                        className={getAvailabilityColor(part.availability)}
                      >
                        {part.availability}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{part.name}</CardTitle>
                    <CardDescription className="font-mono text-xs">
                      Part #: {part.partNumber}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {part.description}
                    </p>
                    
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {part.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {part.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{part.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Product Details */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">{part.leadTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">{part.warranty}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs">{part.rating}/5.0</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Package className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">Original</span>
                      </div>
                    </div>
                    
                    {/* Price and Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-lg font-bold text-primary">{part.price}</p>
                        <p className="text-xs text-muted-foreground">Ex. taxes</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Quote
                        </Button>
                        <Button size="sm" className="gap-1">
                          <ShoppingCart className="w-3 h-3" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* No Results */}
            {filteredParts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No parts found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or browse all categories.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Spare Parts Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support for all your spare parts needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Same-day to 5-day delivery options available. Emergency parts delivery within 24 hours.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Genuine Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    100% original spare parts from authorized distributors with full manufacturer warranty.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Package className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Custom Sourcing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Can't find what you need? We source hard-to-find parts and provide alternatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SpareParts;
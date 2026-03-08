import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Search, ChevronDown, ArrowRight, Package } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { allParts, brands, subcategories } from "@/data/sparePartsData";

// Images for product cards
const partImages = [
  "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=300",
  "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=300",
];

function getPartImage(index: number): string {
  return partImages[index % partImages.length];
}

// ─── Component ────────────────────────────────────────────────────────────────
const SpareParts = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("ABB");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setOpenDropdown(null);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const filteredParts = allParts.filter((p) => {
    const matchesBrand = p.brand === selectedBrand;
    const matchesCat =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      !searchTerm ||
      p.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesCat && matchesSearch;
  });

  const handleBrandHover = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(name);
  };

  const handleBrandLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const selectBrandCategory = (brand: string, cat: string) => {
    setSelectedBrand(brand);
    setSelectedCategory(cat);
    setOpenDropdown(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ─── Compact Page Header ───────────────────────────────────── */}
        <section className="gradient-industrial pt-28 pb-10 md:pt-32 md:pb-12">
          <div className="container-wide text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3">
              Spare Parts & Components
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
              Genuine robot spare parts from all leading manufacturers
            </p>
          </div>
        </section>

        {/* ─── Brand Navigation Bar ──────────────────────────────────── */}
        <div className="sticky top-[64px] z-30 bg-card/95 backdrop-blur-md border-b border-border">
          <div className="container-wide">
            <div
              className="flex items-center gap-0.5 py-2 overflow-x-auto"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`.brand-scroll::-webkit-scrollbar { display: none; }`}</style>
              <div className="brand-scroll flex items-center gap-0.5 overflow-x-auto w-full" style={{ scrollbarWidth: "none" }}>
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="relative flex-shrink-0"
                    onMouseEnter={() => handleBrandHover(brand.name)}
                    onMouseLeave={handleBrandLeave}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        setSelectedBrand(brand.name);
                        setSelectedCategory("all");
                      }}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-[13px] font-medium whitespace-nowrap transition-all duration-200 ${selectedBrand === brand.name
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                        }`}
                    >
                      {brand.name}
                      <ChevronDown className="w-3 h-3 opacity-50" />
                    </button>

                    {openDropdown === brand.name && (
                      <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-2xl min-w-[200px] py-1.5 z-50 animate-fade-in">
                        <button
                          onClick={() => selectBrandCategory(brand.name, "all")}
                          className="w-full text-left px-3 py-2 text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors"
                        >
                          All {brand.name} Parts
                        </button>
                        <div className="border-t border-border/50 my-1" />
                        {subcategories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => selectBrandCategory(brand.name, cat)}
                            className={`w-full text-left px-3 py-2 text-sm transition-colors ${selectedBrand === brand.name && selectedCategory === cat
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground/70 hover:bg-muted hover:text-foreground"
                              }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Search + Filters Row ──────────────────────────────────── */}
        <div className="bg-muted/40 border-b border-border/50 py-4">
          <div className="container-wide flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by part number or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Viewing:</span>
              <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-medium text-xs">
                {selectedBrand}
              </span>
              {selectedCategory !== "all" && (
                <span className="px-2.5 py-1 rounded bg-accent/15 text-accent font-medium text-xs flex items-center gap-1">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="hover:text-foreground transition-colors font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
              <span className="text-muted-foreground text-xs">
                · {filteredParts.length} parts
              </span>
            </div>
          </div>
        </div>

        {/* ─── Spare Parts Grid ──────────────────────────────────────── */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container-wide">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              {selectedBrand}
              {selectedCategory !== "all" && (
                <span className="text-muted-foreground font-normal text-lg">
                  / {selectedCategory}
                </span>
              )}
            </h2>

            {filteredParts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredParts.map((part, index) => (
                  <div
                    key={part.id}
                    className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Image — compact square */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted/50">
                      <img
                        src={part.image || getPartImage(index)}
                        alt={part.partNumber}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 bg-white text-primary font-semibold text-xs px-4 py-2 rounded-md shadow-md hover:bg-accent hover:text-white transition-colors duration-200"
                        >
                          Get a Quote
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Part Info */}
                    <div className="p-2.5 md:p-3">
                      <p className="text-[10px] md:text-xs text-muted-foreground font-mono truncate leading-none mb-1">
                        {part.partNumber}
                      </p>
                      <h3 className="text-xs md:text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                        {part.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 px-4 max-w-lg mx-auto bg-muted/30 rounded-2xl border border-dashed border-border mt-8">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <h3 className="text-xl font-bold mb-2">Can't find what you're looking for?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  We have access to thousands of offline parts across {selectedBrand} and other major robotics manufacturers. Contact our sourcing team for immediate assistance.
                </p>
                <Link
                  to={`/contact?subject=Part Sourcing Request: ${selectedBrand} ${selectedCategory !== 'all' ? selectedCategory : ''} ${searchTerm ? '- ' + searchTerm : ''}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Contact Sourcing Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SpareParts;
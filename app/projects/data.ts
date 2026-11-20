export type Project = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  suburb: string;
  location: string;
  price: string;
  priceNote?: string;
  bedrooms: string;
  handover: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  photos: string[];
  paymentPlan?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "chelsea",
    slug: "chelsea",
    title: "Chelsea Residences",
    developer: "DAMAC Properties",
    suburb: "Dubai Maritime City",
    location: "Dubai Maritime City, Dubai, UAE",
    price: "From AED 1,300,000",
    priceNote: "1–3 BR Apartments & Duplexes",
    bedrooms: "1–3 Bedroom Apartments & Duplexes",
    handover: "Q4 2027",
    description: "A new chapter in Dubai's waterfront story. Chelsea Residences by DAMAC sits at the heart of Dubai Maritime City — a blue-chip address rising directly above the Arabian Gulf with unobstructed views across the Creek Harbour skyline.",
    longDescription: "Chelsea Residences by DAMAC Properties brings a new standard of coastal luxury to Dubai Maritime City — one of the emirate's most strategically positioned waterfront precincts.\n\nThe tower rises from the water's edge, offering a curated collection of one, two and three-bedroom apartments alongside a limited selection of full-floor duplexes. Every residence is designed around the views: floor-to-ceiling glazing frames the Arabian Gulf on one side and the towers of Dubai Creek Harbour on the other.\n\nInteriors are finished to DAMAC's signature specification: Italian stone, custom joinery, integrated German appliances and private terraces that extend the living space outdoors. Amenities include an infinity-edge rooftop pool, sky lounge, fully equipped gym, and direct waterfront promenade access.\n\nDubai Maritime City is one of the city's most anticipated urban precincts — a fully master-planned mixed-use harbour district with retail, hospitality and marine facilities. Chelsea Residences sits at its residential crown.\n\nPayment plan: 70/30 (70% during construction, 30% on handover). Handover Q4 2027.",
    features: [
      "Direct Arabian Gulf waterfront",
      "Dubai Creek Harbour skyline views",
      "Floor-to-ceiling glazing",
      "Italian stone & custom joinery",
      "Integrated German appliances",
      "Infinity-edge rooftop pool",
      "Sky lounge & residents' club",
      "Direct promenade access",
      "70/30 payment plan",
      "Handover Q4 2027",
    ],
    image: "/projects/chelsea/render-01.jpg",
    photos: [
      "/projects/chelsea/render-01.jpg",
      "/projects/chelsea/render-02.jpg",
      "/projects/chelsea/render-03.jpg",
      "/projects/chelsea/render-04.jpg",
    ],
    paymentPlan: "70/30",
  },
  {
    id: "altitude",
    slug: "altitude",
    title: "Altitude by DAMAC",
    developer: "DAMAC Properties",
    suburb: "Business Bay",
    location: "Business Bay, Dubai, UAE",
    price: "From AED 1,500,000",
    priceNote: "1–3 BR Residences",
    bedrooms: "1–3 Bedroom Residences",
    handover: "Q2 2028",
    description: "Reaching above Business Bay's dense skyline, Altitude is DAMAC's latest residential statement in the city's most dynamic mixed-use precinct — where Downtown Dubai, DIFC and the Canal converge.",
    longDescription: "Altitude by DAMAC Properties occupies a commanding position in Business Bay — the high-density commercial and residential precinct that connects Downtown Dubai to the financial district along the Dubai Canal.\n\nThe tower offers a refined selection of one, two and three-bedroom residences, each positioned to maximise views across the Canal, the Burj Khalifa, and Business Bay's dense glass skyline. Floor plans are generous by Dubai standards — with ceiling heights of 3.1 metres and deep balconies that reinforce the sense of elevated living.\n\nFinishes are drawn from DAMAC's premium palette: brushed stone flooring, bespoke fitted wardrobes, integrated smart-home technology and curated lighting design throughout. Amenities are rooftop-focused: a temperature-controlled infinity pool, residents' lounge, and a fully equipped wellness centre with Canal views.\n\nBusiness Bay consistently delivers among Dubai's strongest rental yields — typically 6–8% per annum — driven by proximity to DIFC, the Metro, and the city's major corporate towers.\n\nHandover Q2 2028. Flexible payment plan available.",
    features: [
      "Business Bay address",
      "Dubai Canal & Burj Khalifa views",
      "3.1m ceiling heights",
      "Smart home technology integrated",
      "Rooftop infinity pool",
      "Wellness centre with Canal views",
      "Residents' sky lounge",
      "Steps to Dubai Canal promenade",
      "6–8% typical rental yield",
      "Flexible payment plan",
    ],
    image: "/projects/altitude/render-01.jpg",
    photos: [
      "/projects/altitude/render-01.jpg",
      "/projects/altitude/render-02.jpg",
      "/projects/altitude/render-03.jpg",
      "/projects/altitude/render-04.jpg",
    ],
    paymentPlan: "60/40",
  },
  {
    id: "canal-heights",
    slug: "canal-heights",
    title: "Canal Heights II",
    developer: "DAMAC Properties × de Grisogono",
    suburb: "Business Bay",
    location: "Business Bay, Dubai, UAE",
    price: "From AED 1,350,000",
    priceNote: "1–3 BR Branded Residences",
    bedrooms: "1–3 Bedroom Branded Residences",
    handover: "Q1 2028",
    description: "A collaboration between DAMAC Properties and Swiss luxury jeweller de Grisogono. Canal Heights II brings the craft of high jewellery into residential architecture — interiors inspired by the facets, luminosity and precision of rare gemstones.",
    longDescription: "Canal Heights II is a branded residential tower by DAMAC Properties in partnership with de Grisogono — the renowned Swiss jewellery house known for its mastery of rare and exotic gems.\n\nThe collaboration brings the visual language of de Grisogono's atelier directly into the residential environment. Interior surfaces reference the facets, depths and luminosity of precious stones: deep emerald tones, rose-cut diamond patterning across feature walls, and bespoke hardware finished in brushed gold and black rhodium.\n\nResidences are arranged across the tower's mid and upper floors, each with views across the Dubai Canal and the Business Bay skyline. Units range from one to three bedrooms, with layout options including duplex sky suites in the upper reaches of the building.\n\nAmenities include a de Grisogono-inspired jewel pool, private cinema, rooftop lounge, and a curated wellness facility. The canal-facing podium level hosts a waterfront café and retail precinct.\n\nHandover Q1 2028. Payment plan 60/40.",
    features: [
      "DAMAC × de Grisogono branded",
      "Swiss luxury jewellery house design",
      "Gem-inspired interior language",
      "Dubai Canal waterfront views",
      "Jewel-inspired pool & spa",
      "Private cinema & rooftop lounge",
      "Gold & black rhodium hardware",
      "Sky suite duplexes available",
      "Waterfront promenade access",
      "60/40 payment plan",
    ],
    image: "/projects/canal-heights/render-01.jpg",
    photos: [
      "/projects/canal-heights/render-01.jpg",
      "/projects/canal-heights/render-02.jpg",
      "/projects/canal-heights/render-03.jpg",
      "/projects/canal-heights/render-04.jpg",
    ],
    paymentPlan: "60/40",
  },
  {
    id: "damac-islands",
    slug: "damac-islands",
    title: "DAMAC Islands",
    developer: "DAMAC Properties",
    suburb: "Dubailand",
    location: "Dubailand, Dubai, UAE",
    price: "From AED 2,250,000",
    priceNote: "4–7 BR Villas & Townhouses",
    bedrooms: "4–7 Bedroom Villas & Townhouses",
    handover: "Q4 2027–2028",
    description: "Five distinct island worlds within a single masterplanned community. DAMAC Islands recreates the atmospheres of Maldives, Bali, Hawaii, Seychelles and Fiji — each cluster a self-contained tropical living environment.",
    longDescription: "DAMAC Islands is one of the most conceptually ambitious villa communities in Dubai's history — a masterplanned development in Dubailand that recreates five distinct island holiday environments within a single address.\n\nEach of the five clusters has been designed to authentically evoke its island inspiration. The Maldives cluster features overwater-aesthetic lagoon pools and pale timber pavilion architecture; Bali brings dense tropical planting, water features and the warmth of natural wood; Hawaii delivers surf-culture communal spaces and an active, outdoor lifestyle framework; Seychelles is defined by granite boulder landscaping and crystalline blue lagoons; and Fiji introduces traditional communal architecture and a lush, verdant private retreat.\n\nVillas and townhouses across all five clusters share access to a central hub with an international school, retail precinct and waterpark. Highway access to Downtown Dubai is approximately 20 minutes.\n\nAll residences are freehold and 100% foreign ownership eligible. Payment plans from 20% on booking.\n\nHandover Q4 2027–2028.",
    features: [
      "5 island-themed villa clusters",
      "Maldives, Bali, Hawaii, Seychelles, Fiji",
      "Private lagoon pools per cluster",
      "4–7 bedroom villas & townhouses",
      "International school on masterplan",
      "Waterpark & leisure precinct",
      "Retail & F&B precinct",
      "20 min to Downtown Dubai",
      "100% freehold ownership",
      "From 20% booking payment plan",
    ],
    image: "/projects/damac-islands/render-01.jpg",
    photos: [
      "/projects/damac-islands/render-01.jpg",
      "/projects/damac-islands/render-02.jpg",
      "/projects/damac-islands/render-03.jpg",
      "/projects/damac-islands/render-04.jpg",
    ],
    paymentPlan: "20/80",
  },
  {
    id: "coral-reef",
    slug: "coral-reef",
    title: "Coral Reef by DAMAC",
    developer: "DAMAC Properties",
    suburb: "Dubai Maritime City",
    location: "Dubai Maritime City, Dubai, UAE",
    price: "From AED 1,500,000",
    priceNote: "1–4 BR Residences",
    bedrooms: "1–4 Bedroom Residences",
    handover: "Q2 2028",
    description: "An architectural landmark shaped by the natural world. Coral Reef by DAMAC is designed by Vincent Callebaut Architectures — the Belgian visionary behind some of the world's most innovative eco-towers — bringing organic, underwater-inspired forms to Dubai Maritime City.",
    longDescription: "Coral Reef by DAMAC Properties is a collaboration with Vincent Callebaut Architectures — the celebrated Belgian architect whose work is defined by its fusion of biomorphic design and environmental intelligence.\n\nThe tower takes its inspiration from the structural complexity of coral formations: the façade is articulated with layered, irregular balcony forms that echo the branching geometry of reef systems, creating a building that appears to grow organically from its waterfront site at Dubai Maritime City.\n\nResidences range from one to four bedrooms, with deep terraces on every unit that extend the living environment into the waterfront air. Interior palettes reference ocean depths — cool stone, sea-glass tile, and warm teak — with Callebaut's sustainable design principles running through the building's environmental systems.\n\nAmenities include a marine-themed infinity pool, underwater art installation, wellness spa, and direct promenade access to Dubai Maritime City's harbour front.\n\nHandover Q2 2028.",
    features: [
      "Vincent Callebaut Architectures design",
      "Biomorphic coral-inspired façade",
      "Dubai Maritime City waterfront",
      "Deep terraces on every residence",
      "Ocean-depth interior palette",
      "Marine-themed infinity pool",
      "Underwater art installation",
      "Wellness spa & gym",
      "LEED-influenced design principles",
      "Flexible payment plan",
    ],
    image: "/projects/coral-reef/render-01.jpg",
    photos: [
      "/projects/coral-reef/render-01.jpg",
      "/projects/coral-reef/render-02.jpg",
      "/projects/coral-reef/render-03.jpg",
      "/projects/coral-reef/render-04.jpg",
    ],
    paymentPlan: "60/40",
  },
  {
    id: "couture-cavalli",
    slug: "couture-cavalli",
    title: "Couture by Cavalli",
    developer: "DAMAC Properties × Roberto Cavalli",
    suburb: "Business Bay",
    location: "Business Bay, Dubai, UAE",
    price: "From AED 1,800,000",
    priceNote: "1–3 BR Residences & Penthouses",
    bedrooms: "1–3 Bedroom Residences & Penthouses",
    handover: "Q4 2028",
    description: "Fashion's most iconic Italian house steps into residential architecture. Couture by Cavalli brings Roberto Cavalli's flamboyant, nature-inspired aesthetic into a tower of branded residences set above Business Bay.",
    longDescription: "Couture by Cavalli is a collaboration between DAMAC Properties and the Roberto Cavalli fashion house — bringing the Italian brand's distinctive aesthetic vocabulary into the residential environment for the first time at scale in Dubai.\n\nRoberto Cavalli is synonymous with luxuriant natural motifs, animal prints rendered in precious materials, and an uncompromising commitment to sensory opulence. The residences translate this language into architecture: hand-painted wall treatments, bespoke Cavalli-designed hardware, custom mosaic flooring by Italian artisans, and furniture collections curated directly from the Cavalli Casa line.\n\nThe tower occupies a prime site in Business Bay, with views spanning the Dubai Canal and the Burj Khalifa skyline. One to three-bedroom residences are available, alongside a collection of full-floor penthouses that offer the full Cavalli experience — walk-in jewellery rooms, private plunge pools and bespoke terrace gardens.\n\nAmenities include a Cavalli-branded spa, fashion-inspired pool deck, private dining room and curated art installations throughout the common areas.\n\nHandover Q4 2028.",
    features: [
      "Roberto Cavalli branded residences",
      "Hand-painted Cavalli wall treatments",
      "Custom Italian mosaic flooring",
      "Cavalli Casa furniture collections",
      "Business Bay / Canal views",
      "Full-floor penthouses available",
      "Cavalli-branded spa",
      "Fashion-inspired pool deck",
      "Private dining & art installations",
      "Flexible payment plan",
    ],
    image: "/projects/couture-cavalli/render-01.jpg",
    photos: [
      "/projects/couture-cavalli/render-01.jpg",
      "/projects/couture-cavalli/render-02.jpg",
      "/projects/couture-cavalli/render-03.jpg",
      "/projects/couture-cavalli/render-04.jpg",
    ],
    paymentPlan: "60/40",
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

// Legacy compatibility
export const FAKE_LISTINGS = PROJECTS.map((p) => ({
  id: p.id,
  type: "residential-sale" as const,
  title: p.title,
  address: p.title,
  suburb: p.suburb,
  price: p.price,
  beds: 2, baths: 2, cars: 1, landSize: "",
  description: p.description,
  longDescription: p.longDescription,
  image: p.image,
  photos: p.photos,
  features: p.features,
  agent: "Jye Sanjurjo",
  agentPhone: "+61 400 000 000",
  openHome: "By appointment",
}));

export function getListingById(id: string) {
  return FAKE_LISTINGS.find((p) => p.id === id);
}

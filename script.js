// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: "BPC-157",
    category: "recovery",
    icon: "🩹",
    image: "image/bpc157.jpg",
    description: "Body Protection Compound. Widely researched for its exceptional tissue repair and gut healing properties.",
    popular: true,
    variants: [
      { size: "2mg × 10 vials",  price: 55 },
      { size: "5mg × 10 vials",  price: 65 },
      { size: "10mg × 10 vials", price: 90 },
    ]
  },
  {
    id: 3,
    name: "Semaglutide",
    category: "longevity",
    icon: "💉",
    image: "image/semaglutide.jpg",
    description: "GLP-1 receptor agonist. Clinically validated for metabolic health, blood sugar regulation, and sustained weight management with significant cardiovascular benefits.",
    popular: true,
    variants: [
      { size: "2mg × 10 vials",  price: 50 },
      { size: "5mg × 10 vials",  price: 65 },
      { size: "10mg × 10 vials", price: 75 },
      { size: "15mg × 10 vials", price: 90 },
      { size: "20mg × 10 vials", price: 100 },
      { size: "50mg × 10 vials", price: 200 },
    ]
  },
  {
    id: 4,
    name: "Tirzepatide",
    category: "longevity",
    icon: "💉",
    image: "image/tirzepatide.jpg",
    description: "Dual GIP/GLP-1 receptor agonist. Superior metabolic optimization with enhanced glycemic control, substantial weight reduction, and emerging cardiovascular and neuroprotective benefits.",
    popular: true,
    variants: [
      { size: "10mg × 10 vials",  price: 75 },
      { size: "15mg × 10 vials",  price: 85 },
      { size: "20mg × 10 vials",  price: 100 },
      { size: "30mg × 10 vials",  price: 120 },
      { size: "40mg × 10 vials",  price: 150 },
      { size: "50mg × 10 vials",  price: 180 },
      { size: "60mg × 10 vials",  price: 200 },
      { size: "100mg × 10 vials", price: 305 },
      { size: "120mg × 10 vials", price: 320 },
    ]
  },
  {
    id: 5,
    name: "Retatrutide",
    category: "longevity",
    icon: "💉",
    image: "image/retatrutide.jpg",
    description: "Triple GIP/GLP-1/Glucagon receptor agonist. Next-generation metabolic optimizer delivering unprecedented weight reduction, enhanced energy expenditure, and comprehensive cardiometabolic protection.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",   price: 75 },
      { size: "10mg × 10 vials",  price: 110 },
      { size: "15mg × 10 vials",  price: 155 },
      { size: "20mg × 10 vials",  price: 195 },
      { size: "30mg × 10 vials",  price: 220 },
      { size: "40mg × 10 vials",  price: 250 },
      { size: "60mg × 10 vials",  price: 320 },
      { size: "100mg × 10 vials", price: 450 },
    ]
  },
  {
    id: 6,
    name: "HGH",
    category: "growth",
    icon: "💪",
    image: "image/hgh.png",
    description: "Human Growth Hormone. Directly stimulates IGF-1 production, driving muscle hypertrophy, bone density, lipolysis, and systemic cellular regeneration.",
    popular: true,
    variants: [
      { size: "6iu × 10 vials",  price: 65 },
      { size: "8iu × 10 vials",  price: 70 },
      { size: "10iu × 10 vials", price: 80 },
      { size: "12iu × 10 vials", price: 90 },
      { size: "15iu × 10 vials", price: 105 },
      { size: "24iu × 10 vials", price: 120 },
      { size: "36iu × 10 vials", price: 170 },
    ]
  },
  {
    id: 7,
    name: "GHK-Cu",
    category: "longevity",
    icon: "✨",
    image: "image/ghkcu.jpg",
    description: "Copper peptide tripeptide complex. Promotes collagen synthesis, wound healing, and anti-aging skin regeneration.",
    variants: [
      { size: "50mg × 10 vials",  price: 55 },
      { size: "100mg × 10 vials", price: 68 },
    ]
  },
  {
    id: 8,
    name: "Glutathione",
    category: "longevity",
    icon: "🛡️",
    image: "image/glutathione.jpg",
    description: "Master antioxidant tripeptide. Central to cellular detoxification, immune function, and redox balance. Declines with age; supplementation supports systemic resilience.",
    variants: [
      { size: "400mg × 10 vials", price: 68 },
      { size: "600mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 9,
    name: "Cagrilintide",
    category: "longevity",
    icon: "💉",
    image: "image/cagrilintide.jpg",
    description: "Long-acting amylin analogue with C16 fatty acyl modification. Enhances satiety signaling, slows gastric emptying, and complements GLP-1 therapy for superior weight management.",
    variants: [
      { size: "5mg × 10 vials",  price: 140 },
      { size: "10mg × 10 vials", price: 220 },
    ]
  },
  {
    id: 10,
    name: "Snap-8",
    category: "longevity",
    icon: "✨",
    image: "image/snap8.jpg",
    description: "Botulinum toxin-like octapeptide. Reduces neuronal exocytosis of acetylcholine, softening expression lines and wrinkles without paralysis. Topical and injectable cosmetic longevity.",
    variants: [
      { size: "10mg × 10 vials",  price: 70 },
      { size: "100mg × 10 vials", price: 220 },
    ]
  },
  {
    id: 11,
    name: "Semax",
    category: "cognitive",
    icon: "⚡",
    image: "image/semax.jpg",
    description: "ACTH(4-7) analogue with potent nootropic effects. Enhances BDNF and cognitive performance under research conditions.",
    popular: true,
    variants: [
      { size: "5mg × 10 vials",  price: 70 },
      { size: "10mg × 10 vials", price: 90 },
    ]
  },
  {
    id: 12,
    name: "Selank",
    category: "cognitive",
    icon: "🧠",
    image: "image/selank.jpg",
    description: "Anxiolytic nootropic peptide derived from tuftsin. Research shows improved memory, focus, and stress modulation.",
    variants: [
      { size: "5mg × 10 vials",  price: 70 },
      { size: "10mg × 10 vials", price: 90 },
    ]
  },
  {
    id: 13,
    name: "KPV",
    category: "recovery",
    icon: "🩹",
    image: "image/kpv.jpg",
    description: "α-MSH-derived anti-inflammatory tripeptide. Potent modulator of immune response, gut barrier integrity, and wound healing without melanotropic side effects.",
    variants: [
      { size: "5mg × 10 vials",  price: 70 },
      { size: "10mg × 10 vials", price: 90 },
    ]
  },
  {
    id: 14,
    name: "IGF-1 LR3",
    category: "growth",
    icon: "💪",
    image: "image/igf1lr3.png",
    description: "Long-acting IGF-1 analogue with extended half-life and reduced IGFBP binding. Drives potent anabolism, hyperplasia, and nutrient partitioning for maximal tissue growth.",
    variants: [
      { size: "1mg × 10 vials", price: 280 },
    ]
  },
  {
    id: 15,
    name: "Tesamorelin",
    category: "growth",
    icon: "💪",
    image: "image/tesamorelin.jpg",
    description: "GHRH analogue with trans-3-hexenoic acid modification. Selectively stimulates endogenous GH secretion with proven efficacy in visceral adipose reduction and IGF-1 elevation.",
    variants: [
      { size: "2mg × 10 vials",  price: 70 },
      { size: "5mg × 10 vials",  price: 110 },
      { size: "10mg × 10 vials", price: 200 },
      { size: "20mg × 10 vials", price: 320 },
    ]
  },
  {
    id: 16,
    name: "Ipamorelin",
    category: "growth",
    icon: "💪",
    image: "image/ipamorelin.jpg",
    description: "Selective growth hormone secretagogue. Stimulates GH release with minimal cortisol or prolactin elevation.",
    variants: [
      { size: "2mg × 10 vials",  price: 50 },
      { size: "5mg × 10 vials",  price: 55 },
      { size: "10mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 17,
    name: "MOTS-c",
    category: "longevity",
    icon: "🔋",
    image: "image/motsc.png",
    description: "Mitochondrial-derived peptide regulating metabolic homeostasis. Enhances insulin sensitivity, promotes AMPK activation, and supports cellular energy resilience.",
    variants: [
      { size: "10mg × 10 vials", price: 80 },
      { size: "15mg × 10 vials", price: 115 },
      { size: "20mg × 10 vials", price: 150 },
      { size: "40mg × 10 vials", price: 235 },
    ]
  },
  {
    id: 18,
    name: "SLU-PP-332",
    category: "longevity",
    icon: "⚡",
    image: "image/slupp322.jpg",
    description: "Pan-ERR agonist small molecule. Amplifies oxidative metabolism, mitochondrial biogenesis, and exercise capacity by activating estrogen-related receptor pathways.",
    variants: [
      { size: "5mg × 10 vials", price: 90 },
    ]
  },
  {
    id: 19,
    name: "Epithalon",
    category: "longevity",
    icon: "⏳",
    image: "image/epithalon.jpg",
    description: "Telomerase-activating tetrapeptide. Studied for its role in extending telomere length and promoting cellular longevity.",
    variants: [
      { size: "50mg × 10 vials", price: 170 },
    ]
  },
  {
    id: 20,
    name: "PT-141",
    category: "longevity",
    icon: "🔥",
    image: "image/pt141.png",
    description: "Melanocortin receptor agonist. FDA-approved for sexual arousal dysfunction via central nervous system activation, independent of vascular mechanism.",
    variants: [
      { size: "10mg × 10 vials", price: 85 },
    ]
  },
  {
    id: 21,
    name: "DSIP",
    category: "cognitive",
    icon: "🌙",
    image: "image/dsip.png",
    description: "Delta Sleep-Inducing Peptide. Non-sedative sleep modulator that enhances REM and slow-wave sleep while reducing stress-induced cortisol and adrenaline.",
    variants: [
      { size: "2mg × 10 vials",  price: 60 },
      { size: "5mg × 10 vials",  price: 75 },
      { size: "10mg × 10 vials", price: 110 },
    ]
  },
  {
    id: 22,
    name: "Dermorphin",
    category: "recovery",
    icon: "🩹",
    image: "image/dermophin.png",
    description: "μ-Opioid receptor superagonist from amphibian origin. Exceptional analgesic potency with high selectivity, studied for pain management and tissue stress reduction.",
    variants: [
      { size: "10mg × 10 vials", price: 110 },
    ]
  },
  {
    id: 23,
    name: "Thymosin Alpha-1",
    category: "recovery",
    icon: "🛡️",
    image: "image/thymosinalpha1.png",
    description: "Immunomodulatory peptide fragment of prothymosin alpha. Enhances T-cell differentiation, dendritic cell maturation, and innate immune response for systemic defense and recovery.",
    variants: [
      { size: "5mg × 10 vials",  price: 120 },
      { size: "10mg × 10 vials", price: 180 },
    ]
  },
  {
    id: 24,
    name: "Sermorelin Acetate",
    category: "growth",
    icon: "💪",
    image: "image/sermorelinacetate.png",
    description: "GHRH 1-29 analogue with acetate stabilization. Stimulates pulsatile endogenous GH release, supporting IGF-1 elevation with natural feedback preservation.",
    variants: [
      { size: "2mg × 10 vials",  price: 70 },
      { size: "5mg × 10 vials",  price: 105 },
      { size: "10mg × 10 vials", price: 130 },
    ]
  },
  {
    id: 25,
    name: "HCG",
    category: "growth",
    icon: "⚡",
    image: "image/hcg.png",
    description: "Human Chorionic Gonadotropin. Mimics LH activity to stimulate testicular testosterone production and maintain fertility during anabolic suppression.",
    variants: [
      { size: "1000IU × 10 vials",  price: 60 },
      { size: "2000IU × 10 vials",  price: 90 },
      { size: "5000IU × 10 vials",  price: 110 },
      { size: "10000IU × 10 vials", price: 170 },
    ]
  },
  {
    id: 26,
    name: "GHRP-6 Acetate",
    category: "growth",
    icon: "🍽️",
    image: "image/ghrp6acetate.jpg",
    description: "Ghrelin receptor agonist hexapeptide. Potent GH secretagogue with pronounced appetite stimulation, supporting bulking phases and growth hormone pulsatility.",
    variants: [
      { size: "5mg × 10 vials",  price: 60 },
      { size: "10mg × 10 vials", price: 75 },
    ]
  },
  {
    id: 28,
    name: "SS-31 (Elamipretide)",
    category: "longevity",
    icon: "🔋",
    image: "image/ss31.jpg",
    description: "Mitochondria-targeted tetrapeptide. Binds cardiolipin to preserve cristae structure, enhance ATP production, and protect against oxidative damage in aging tissues.",
    variants: [
      { size: "10mg × 10 vials", price: 95 },
      { size: "50mg × 10 vials", price: 305 },
    ]
  },
  {
    id: 29,
    name: "Mazdutide",
    category: "longevity",
    icon: "💉",
    image: "image/mazdutide.png",
    description: "Dual GLP-1/GCGR agonist. Balanced metabolic optimization with substantial weight reduction, improved lipid profiles, and enhanced energy expenditure via glucagon receptor co-activation.",
    variants: [
      { size: "10mg × 10 vials", price: 240 },
    ]
  },
  {
    id: 30,
    name: "CJC-1295 (No DAC)",
    category: "growth",
    icon: "📈",
    image: "image/cjc1259withoutdac.png",
    description: "Short-acting GHRH analogue without DAC modification. Produces natural GH pulsatility with rapid clearance, ideal for multiple daily injections mimicking endogenous hypothalamic rhythm.",
    variants: [
      { size: "2mg × 10 vials",  price: 50 },
      { size: "5mg × 10 vials",  price: 90 },
      { size: "10mg × 10 vials", price: 155 },
    ]
  },
  {
    id: 31,
    name: "CJC-1295 (With DAC)",
    category: "growth",
    icon: "📈",
    image: "image/cjc1295withdac.png",
    description: "Long-acting GHRH analogue with Drug Affinity Complex. Sustained GH release over 6-8 days per dose, ideal for convenience protocols with elevated baseline IGF-1.",
    variants: [
      { size: "2mg × 10 vials", price: 80 },
      { size: "5mg × 10 vials", price: 160 },
    ]
  },
  {
    id: 32,
    name: "Hexarelin",
    category: "growth",
    icon: "❤️",
    image: "image/hexarelin.png",
    description: "Potent GHRP receptor superagonist with cardioprotective properties. Strongest GH release among GHRPs with CD36-mediated cardiac benefits and significant appetite stimulation.",
    variants: [
      { size: "2mg × 10 vials", price: 75 },
      { size: "5mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 33,
    name: "BAC Water",
    category: "recovery",
    icon: "💧",
    image: "image/bacwater.jpg",
    description: "Bacteriostatic water for injection. Essential for reconstituting lyophilized peptides. Benzyl alcohol prevents bacterial growth, enabling multi-dose vial use.",
    variants: [
      { size: "3mL × 10 vials",  price: 28 },
      { size: "10mL × 10 vials", price: 31 },
    ]
  },
  {
    id: 34,
    name: "MT1 (Melanotan I)",
    category: "longevity",
    icon: "☀️",
    image: "image/mt1.png",
    description: "α-MSH analogue for melanin stimulation. Provides systemic photoprotection, reduces UV damage, and supports skin resilience against photoaging.",
    variants: [
      { size: "10mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 36,
    name: "MT-2 (Melanotan 2)",
    category: "longevity",
    icon: "☀️",
    image: "image/mt2.jpg",
    description: "Synthetic melanocortin analogue. Studied for melanogenesis stimulation, photoprotection, libido enhancement via MC1R/MC4R activation, and appetite suppression in metabolic research.",
    variants: [
      { size: "10mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 37,
    name: "Lemon Bottle",
    category: "longevity",
    icon: "🍋",
    image: "image/lemonbottle.jpg",
    description: "Advanced lipolytic injection solution combining riboflavin, bromelain, and L-carnitine. Research focuses on targeted adipocyte metabolism disruption and localized fat reduction protocols.",
    variants: [
      { size: "10ml × 10 vials", price: 100 },
    ]
  },
  {
    id: 38,
    name: "VIP (Vasoactive Intestinal Peptide)",
    category: "recovery",
    icon: "🫁",
    description: "Endogenous neuropeptide with potent anti-inflammatory, immunomodulatory, and bronchodilatory properties. Studied extensively for pulmonary fibrosis, autoimmune conditions, and gut integrity.",
    image: "image/vip.jpg",
    variants: [
      { size: "10mg × 10 vials", price: 150 },
    ]
  },
  {
    id: 39,
    name: "GLOW — BPC-157 + GHK-Cu + TB-500",
    category: "recovery",
    icon: "🩹",
    image: "image/glow.jpg",
    description: "GLOW Triple recovery stack combining BPC-157 tissue repair, GHK-Cu collagen synthesis, and TB-500 cell migration. Comprehensive regenerative protocol for accelerated healing and anti-aging research.",
    variants: [
      { size: "70mg × 10 vials", price: 200 },
    ]
  },
  {
    id: 40,
    name: "GHK-Cu + TB-500 + BPC-157 + KPV",
    category: "recovery",
    icon: "🩹",
    image: "image/cu50tb10bc10kpv10.png",
    description: "KLOW Advanced quad recovery blend targeting tissue repair, inflammation, collagen synthesis, and gut healing simultaneously. Ideal for comprehensive regenerative and anti-inflammatory research protocols.",
    variants: [
      { size: "80mg × 10 vials", price: 235 },
    ]
  },
  {
    id: 41,
    name: "Cagrilintide 2.5mg + Semaglutide 2.5mg",
    category: "longevity",
    icon: "💉",
    image: "image/cagrilintide5mgsemaglutide5mg.png",
    description: "Synergistic amylin/GLP-1 dual agonist combination. Research demonstrates superior weight reduction and metabolic improvement compared to either agent alone, with complementary satiety mechanisms.",
    variants: [
      { size: "5mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 43,
    name: "LC120",
    category: "longevity",
    icon: "💧",
    image: "image/lc120.jpg",
    description: "Phosphatidylcholine-based lipolytic solution. Studied for non-surgical fat dissolution, adipocyte membrane disruption, and localized body contouring research applications.",
    variants: [
      { size: "10ml × 10 vials", price: 100 },
    ]
  },
  {
    id: 45,
    name: "Ara-290",
    category: "recovery",
    icon: "🧬",
    image: "image/ara290.png",
    description: "Non-erythropoietic EPO analogue targeting innate repair receptors. Studied for neuropathic pain relief, tissue protection, anti-inflammatory signaling, and metabolic repair without hematopoietic effects.",
    variants: [
      { size: "10mg × 10 vials", price: 95 },
      { size: "16mg × 10 vials", price: 140 },
    ]
  },
  {
    id: 47,
    name: "Thymalin / Thymulin",
    category: "recovery",
    icon: "🛡️",
    image: "image/thymalinthymulin.png",
    description: "Thymic peptide complex with immunomodulatory and anti-aging properties. Studied for T-cell regulation, neuroendocrine-immune axis restoration, and age-related immune decline reversal.",
    variants: [
      { size: "10mg × 10 vials", price: 100 },
    ]
  },
  {
    id: 48,
    name: "LL-37",
    category: "recovery",
    icon: "🧬",
    image: "image/ll37.png",
    description: "Human cathelicidin antimicrobial peptide. Exhibits broad-spectrum antimicrobial activity, wound healing promotion, immune modulation, and anti-biofilm properties in infection and regeneration research.",
    variants: [
      { size: "5mg × 10 vials", price: 110 },
    ]
  },
  {
    id: 49,
    name: "Survodutide",
    category: "longevity",
    icon: "💉",
    image: "image/survodutide.png",
    description: "Dual GLP-1/Glucagon receptor agonist under active clinical investigation. Demonstrates significant hepatic fat reduction, weight loss, and NASH/MAFLD improvement in metabolic disease research.",
    variants: [
      { size: "10mg × 10 vials", price: 220 },
    ]
  },
  {
    id: 50,
    name: "Pinealon",
    category: "cognitive",
    icon: "🧠",
    description: "Tripeptide of pineal gland origin. Studied for neuroprotection, circadian regulation support, retinal cell preservation, and cognitive function enhancement in aging research.",
    image: "image/pinealon.png",
    variants: [
      { size: "10mg × 10 vials", price: 115 },
    ]
  },
  {
    id: 51,
    name: "PNC-27",
    category: "longevity",
    icon: "🔬",
    description: "p53-derived anticancer peptide targeting HDM-2 on tumor cell membranes. Induces selective cancer cell necrosis without affecting normal cells — studied in oncology and targeted therapy research.",
    image: "image/pnc27.png",
    variants: [
      { size: "5mg × 10 vials", price: 105 },
    ]
  },
  {
    id: 52,
    name: "Oxytocin Acetate",
    category: "cognitive",
    icon: "❤️",
    description: "Hypothalamic nonapeptide modulating social bonding, stress response, and autonomic function. Research spans anxiety reduction, gut motility, wound healing, and neuroendocrine regulation.",
    image: "image/oxytocinacetate.png",
    variants: [
      { size: "2mg × 10 vials",  price: 60 },
      { size: "5mg × 10 vials",  price: 80 },
      { size: "10mg × 10 vials", price: 110 },
    ]
  },
  {
    id: 53,
    name: "HMG",
    category: "growth",
    icon: "⚡",
    image: "image/hmg75iu.png",
    description: "Human Menopausal Gonadotropin containing FSH and LH activity. Stimulates follicular development and testosterone production — studied in fertility, hormonal restoration, and reproductive research.",
    variants: [
      { size: "75IU × 10 vials", price: 70 },
    ]
  },
  {
    id: 54,
    name: "TB-500 (Thymosin B4)",
    category: "recovery",
    icon: "⚕️",
    description: "Thymosin Beta-4 acetate salt for enhanced stability. Promotes actin binding, cell migration, and tissue regeneration. Studied for muscle, tendon, ligament, and cardiac repair protocols.",
    image: "image/tb500.jpg",
    variants: [
      { size: "2mg × 10 vials",  price: 65 },
      { size: "5mg × 10 vials",  price: 100 },
      { size: "10mg × 10 vials", price: 150 },
    ]
  },
  {
    id: 55,
    name: "NAD+",
    category: "longevity",
    icon: "🔋",
    description: "Nicotinamide Adenine Dinucleotide coenzyme. Essential for cellular energy metabolism, DNA repair via PARP activation, sirtuin regulation, and mitochondrial biogenesis. Declines significantly with age.",
    image: "image/nad.jpg",
    variants: [
      { size: "100mg × 10 vials",  price: 60 },
      { size: "500mg × 10 vials",  price: 90 },
      { size: "1000mg × 10 vials", price: 150 },
      { size: "1500mg × 10 vials", price: 100 },
    ]
  },
  {
    id: 56,
    name: "Wolverin Blend — BPC-157 + TB-500 (10mg each)",
    category: "recovery",
    icon: "🩹",
    image: "image/wolverinblend.jpg",
    description: "High-dose synergistic recovery blend combining BPC-157 gut and tissue repair with TB-500 cell migration and regeneration. Powerful protocol for accelerated healing and systemic recovery research.",
    variants: [
      { size: "20mg × 10 vials", price: 180 },
    ]
  },
  {
    id: 57,
    name: "BPC-157 + TB-500 (5mg each)",
    category: "recovery",
    icon: "🩹",
    image: "image/bpc5mgtb5mg.png",
    description: "Entry-dose synergistic recovery combination of BPC-157 and TB-500. Complementary mechanisms of tissue protection, angiogenesis promotion, and cellular repair for comprehensive recovery research.",
    variants: [
      { size: "10mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 58,
    name: "AICAR",
    category: "longevity",
    icon: "⚡",
    image: "image/aicar.png",
    description: "AMPK-activating nucleotide analogue. Mimics exercise-induced metabolic adaptations — enhancing mitochondrial biogenesis, fatty acid oxidation, glucose uptake, and endurance capacity in metabolic research.",
    variants: [
      { size: "50mg × 10 vials",  price: 80 },
      { size: "100mg × 10 vials", price: 130 },
    ]
  },
  {
    id: 59,
    name: "FOXO4-DRI",
    category: "longevity",
    icon: "🧬",
    image: "image/fox04dri.jpg",
    description: "D-retro-inverso FOXO4 peptide designed to selectively eliminate senescent cells. Disrupts FOXO4-p53 interaction triggering apoptosis in senescent cells — studied for rejuvenation and healthspan extension.",
    variants: [
      { size: "10mg × 10 vials", price: 420 },
    ]
  },
  {
    id: 60,
    name: "Adipotide",
    category: "longevity",
    icon: "🔥",
    description: "Proapoptotic peptide targeting vasculature of white adipose tissue. Induces selective destruction of fat tissue blood supply — studied for targeted obesity treatment and body composition research.",
    image: "image/adipotide.png",
    variants: [
      { size: "2mg × 10 vials",  price: 95 },
      { size: "5mg × 10 vials",  price: 155 },
      { size: "10mg × 10 vials", price: 220 },
    ]
  },
  {
    id: 61,
    name: "Kisspeptin-10",
    category: "longevity",
    icon: "🔬",
    description: "Hypothalamic neuropeptide activating GnRH neurons. Potent stimulator of LH and FSH release, testosterone production, and reproductive axis restoration — studied in fertility and hormonal health research.",
    image: "image/kispeptin10.jpg",
    variants: [
      { size: "5mg × 10 vials",  price: 90 },
      { size: "10mg × 10 vials", price: 110 },
    ]
  },
  {
    id: 62,
    name: "AOD-9604",
    category: "longevity",
    icon: "🔥",
    description: "C-terminal fragment of HGH (176-191) regulating fat metabolism without IGF-1 elevation. Stimulates lipolysis and inhibits lipogenesis — studied for obesity, cartilage repair, and metabolic research.",
    image: "image/aod9604.jpg",
    variants: [
      { size: "2mg × 10 vials",  price: 70 },
      { size: "5mg × 10 vials",  price: 120 },
      { size: "10mg × 10 vials", price: 180 },
    ]
  },
  {
    id: 63,
    name: "5-Amino-1MQ",
    category: "longevity",
    icon: "⚡",
    description: "NNMT inhibitor small molecule promoting metabolic reprogramming. Studied for fat cell reduction, mitochondrial activation, NAD+ elevation, and reversal of metabolic dysfunction in obesity research.",
    image: "image/5amino1mq.jpg",
    variants: [
      { size: "5mg × 10 vials",  price: 70 },
      { size: "10mg × 10 vials", price: 90 },
      { size: "50mg × 10 vials", price: 115 },
    ]
  },
  {
    id: 64,
    name: "CJC-1295 (No DAC) + Ipamorelin",
    category: "growth",
    icon: "💪",
    image: "image/cjc1295withoutdac5mgipa5mg.png",
    description: "Classic GHRH/GHRP synergistic stack. CJC-1295 primes the somatotropic axis while Ipamorelin triggers selective GH pulse — the gold standard combination for natural GH optimization research.",
    variants: [
      { size: "10mg × 10 vials", price: 113 },
    ]
  },
  {
    id: 65,
    name: "Vitamin B12",
    category: "recovery",
    icon: "💊",
    image: "image/b12.jpg",
    description: "Injectable methylcobalamin formulation. Essential for neurological function, DNA synthesis, red blood cell formation, and homocysteine metabolism. Studied for energy support and neuroprotection.",
    variants: [
      { size: "10mg × 10 vials", price: 65 },
    ]
  },
  {
    id: 66,
    name: "AHK-Cu",
    category: "longevity",
    icon: "✨",
    image: "image/ahkcu.jpg",
    description: "Copper tripeptide fragment of alpha-1 antitrypsin. Stimulates collagen and glycosaminoglycan synthesis, promotes wound healing, and exhibits potent anti-inflammatory and tissue remodeling properties.",
    variants: [
      { size: "50mg × 10 vials", price: 75 },
    ]
  },
  {
    id: 67,
    name: "BPC-157 + TB-500 (15mg each)",
    category: "recovery",
    icon: "🩹",
    image: "image/bpc15mgtb15mg.jpg",
    description: "High-dose synergistic recovery stack of BPC-157 and TB-500. Enhanced tissue protection, angiogenesis, and cellular repair for comprehensive systemic recovery research protocols.",
    variants: [
      { size: "30mg × 10 vials", price: 250 },
    ]
  },
  {
    id: 68,
    name: "HGH Fragment 176-191",
    category: "longevity",
    icon: "🔥",
    image: "image/hghfragment176191.jpg",
    description: "C-terminal fragment of HGH specifically isolated for lipolytic activity. Stimulates fat breakdown and inhibits lipogenesis without affecting IGF-1 or blood sugar levels.",
    variants: [
      { size: "1mg × 10 vials",  price: 65 },
      { size: "2mg × 10 vials",  price: 80 },
      { size: "5mg × 10 vials",  price: 120 },
      { size: "10mg × 10 vials", price: 180 },
      { size: "12mg × 10 vials", price: 200 },
      { size: "15mg × 10 vials", price: 230 },
    ]
  },
  {
    id: 69,
    name: "Tesamorelin + Ipamorelin",
    category: "growth",
    icon: "💪",
    image: "image/tesamoprelin10mgipamorelin5mg.jpg",
    description: "Synergistic GHRH/GHRP combination stack. Tesamorelin stimulates sustained GH release while Ipamorelin amplifies the pulse — together delivering superior IGF-1 elevation and visceral fat reduction.",
    variants: [
      { size: "15mg × 10 vials", price: 270 },
    ]
  },
  {
    id: 70,
    name: "Triptorelin Acetate",
    category: "growth",
    icon: "⚡",
    image: "image/triptorelinacetate.jpg",
    description: "GnRH superagonist with potent LH/FSH stimulation. Used in research for HPG axis restart, testosterone recovery, and hormonal restoration protocols.",
    variants: [
      { size: "2mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 71,
    name: "GDF-8 (Myostatin)",
    category: "growth",
    icon: "💪",
    image: "image/gdf8.jpg",
    description: "Growth Differentiation Factor-8 inhibitor research compound. Studied for its role in muscle mass regulation, satellite cell activation, and skeletal muscle hypertrophy pathways.",
    variants: [
      { size: "1mg × 10 vials", price: 200 },
      { size: "5mg × 10 vials", price: 105 },
    ]
  },
  {
    id: 72,
    name: "MGF (Mechano Growth Factor)",
    category: "growth",
    icon: "💪",
    image: "image/mgf.jpg",
    description: "Splice variant of IGF-1 released in response to mechanical stress. Activates muscle satellite cells and stimulates local tissue repair — studied for muscle hypertrophy and injury recovery.",
    variants: [
      { size: "2mg × 10 vials", price: 105 },
    ]
  },
  {
    id: 73,
    name: "PEG-MGF",
    category: "growth",
    icon: "💪",
    image: "image/pegmgf.jpg",
    description: "PEGylated Mechano Growth Factor with extended half-life. Systemic muscle repair and anabolic signaling via satellite cell activation — superior bioavailability compared to standard MGF.",
    variants: [
      { size: "2mg × 10 vials", price: 90 },
    ]
  },
  {
    id: 74,
    name: "L-Carnitine",
    category: "longevity",
    icon: "🔋",
    image: "image/lcarnitine.jpg",
    description: "Essential cofactor for mitochondrial fatty acid transport. Enhances beta-oxidation, reduces fatigue, supports cardiac function, and improves exercise performance in metabolic research.",
    variants: [
      { size: "400mg × 10 vials",  price: 80 },
      { size: "600mg × 10 vials",  price: 100 },
      { size: "1200mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 75,
    name: "Retatrutide + Tirzepatide",
    category: "longevity",
    icon: "💉",
    image: "image/retatrutide20mgtirzepatide40mg.jpg",
    description: "Triple/Dual agonist combination stack. Retatrutide's GIP/GLP-1/Glucagon triple action combined with Tirzepatide's GIP/GLP-1 dual agonism for maximum metabolic optimization research.",
    variants: [
      { size: "60mg × 10 vials", price: 300 },
    ]
  },
  {
    id: 76,
    name: "Dulaglutide",
    category: "longevity",
    icon: "💉",
    image: "image/dulaglutide.jpg",
    description: "Long-acting GLP-1 receptor agonist with Fc fusion for extended half-life. Weekly dosing protocol studied for type 2 diabetes management, weight reduction, and cardiovascular risk reduction.",
    variants: [
      { size: "5mg × 10 vials",  price: 150 },
      { size: "10mg × 10 vials", price: 250 },
    ]
  },
  {
    id: 77,
    name: "EPO (Erythropoietin)",
    category: "recovery",
    icon: "🩸",
    image: "image/epo.jpg",
    description: "Endogenous glycoprotein hormone regulating red blood cell production. Studied for erythropoiesis stimulation, tissue oxygenation enhancement, and neuroprotective applications in research settings.",
    variants: [
      { size: "3000IU × 10 vials", price: 100 },
    ]
  },
  {
    id: 78,
    name: "Frag 17-23",
    category: "longevity",
    icon: "🔬",
    image: "image/frag1723.jpg",
    description: "N-terminal fragment of GH with selective receptor binding. Studied for anabolic signaling, tissue repair promotion, and growth hormone pathway modulation without full GH side effects.",
    variants: [
      { size: "10mg × 10 vials", price: 100 },
    ]
  },
  {
    id: 79,
    name: "GHRP-2",
    category: "growth",
    icon: "💪",
    image: "image/ghrp2.jpg",
    description: "Second-generation growth hormone releasing peptide. Potent ghrelin receptor agonist with strong GH pulse stimulation, appetite enhancement, and IGF-1 elevation for growth research.",
    variants: [
      { size: "5mg × 10 vials",  price: 60 },
      { size: "10mg × 10 vials", price: 75 },
      { size: "15mg × 10 vials", price: 95 },
    ]
  },
  {
    id: 80,
    name: "Gonadorelin Acetate",
    category: "growth",
    icon: "⚡",
    image: "image/gonadorelinacetate.jpg",
    description: "Synthetic GnRH decapeptide stimulating pituitary LH and FSH release. Studied for HPG axis support, testicular function maintenance, and fertility preservation in hormonal research.",
    variants: [
      { size: "2mg × 10 vials", price: 65 },
      { size: "5mg × 10 vials", price: 85 },
    ]
  },
  {
    id: 81,
    name: "Humanin",
    category: "longevity",
    icon: "🧬",
    image: "image/humanin.jpg",
    description: "Mitochondria-derived cytoprotective peptide. Inhibits neuronal apoptosis, protects against amyloid-beta toxicity, enhances insulin sensitivity, and extends lifespan in multiple research models.",
    variants: [
      { size: "10mg × 10 vials", price: 240 },
    ]
  },
  {
    id: 82,
    name: "Adamax",
    category: "cognitive",
    icon: "🧠",
    image: "image/adamax.jpg",
    description: "Novel neuropeptide analogue with enhanced cognitive and neuroprotective properties. Studied for memory consolidation, neuronal resilience, and cognitive performance under stress conditions.",
    variants: [
      { size: "5mg × 10 vials",  price: 95 },
      { size: "10mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 83,
    name: "ACE-031",
    category: "growth",
    icon: "💪",
    image: "image/ace031.jpg",
    description: "Activin receptor type IIB fusion protein blocking myostatin and related ligands. Studied for profound muscle mass increases, bone density improvement, and neuromuscular disease research.",
    variants: [
      { size: "1mg × 10 vials", price: 68 },
    ]
  },
  {
    id: 84,
    name: "ACTH 1-39",
    category: "cognitive",
    icon: "🧠",
    image: "image/acth139.jpg",
    description: "Full-length adrenocorticotropic hormone. Stimulates cortisol synthesis, modulates neuroinflammation, and supports adrenal function — studied for stress response and neuroprotection research.",
    variants: [
      { size: "5mg × 10 vials",  price: 100 },
      { size: "10mg × 10 vials", price: 210 },
    ]
  },
  {
    id: 85,
    name: "B7-33",
    category: "recovery",
    icon: "❤️",
    image: "image/b733.jpg",
    description: "Single-chain relaxin-2 mimetic targeting RXFP1 receptors. Studied for anti-fibrotic effects in cardiac, pulmonary, and renal tissue — without the systemic vasodilation of full relaxin.",
    variants: [
      { size: "2mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 86,
    name: "Bronchogen",
    category: "recovery",
    icon: "🫁",
    image: "image/bronchogen.jpg",
    description: "Tetrapeptide bioregulator for bronchial and lung tissue. Studied for respiratory epithelial cell regulation, pulmonary function support, and bronchial tissue regeneration.",
    variants: [
      { size: "20mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 87,
    name: "Cardiogen",
    category: "recovery",
    icon: "❤️",
    image: "image/cardiogen.jpg",
    description: "Tetrapeptide bioregulator for cardiac tissue. Studied for myocardial cell regulation, heart muscle function support, and cardiovascular tissue regeneration in aging research.",
    variants: [
      { size: "20mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 88,
    name: "Cartalax",
    category: "recovery",
    icon: "🦴",
    image: "image/cartalax.jpg",
    description: "Tetrapeptide bioregulator for cartilage and connective tissue. Studied for chondrocyte regulation, joint tissue repair, and cartilage regeneration in musculoskeletal research.",
    variants: [
      { size: "20mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 89,
    name: "Cortagen",
    category: "cognitive",
    icon: "🧠",
    image: "image/cortagen.jpg",
    description: "Tetrapeptide bioregulator for nervous system tissue. Studied for neuronal cell regulation, cortical function support, and neuroprotection in age-related cognitive decline research.",
    variants: [
      { size: "20mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 90,
    name: "Crystagen",
    category: "recovery",
    icon: "👁️",
    image: "image/crystagen.jpg",
    description: "Tetrapeptide bioregulator for ocular tissue. Studied for retinal cell regulation, lens crystallin support, and ocular tissue regeneration in age-related vision research.",
    variants: [
      { size: "20mg × 10 vials", price: 110 },
    ]
  },
  {
    id: 91,
    name: "Liraglutide",
    category: "longevity",
    icon: "💉",
    image: "image/liraglutide.jpg",
    description: "First-generation GLP-1 receptor agonist with fatty acid modification for extended half-life. Studied for glycemic control, cardiovascular risk reduction, weight management, and neuroprotection.",
    variants: [
      { size: "5mg × 10 vials",  price: 115 },
      { size: "10mg × 10 vials", price: 180 },
      { size: "30mg × 10 vials", price: 370 },
    ]
  },
  {
    id: 92,
    name: "FTPP Adipotide",
    category: "longevity",
    icon: "🔥",
    image: "image/ftppadipotide.jpg",
    description: "Fat tissue-targeted proapoptotic peptide. Selectively disrupts vasculature of white adipose tissue — studied for targeted fat reduction and obesity research applications.",
    variants: [
      { size: "5mg × 10 vials", price: 145 },
    ]
  },
  {
    id: 93,
    name: "Matrixyl",
    category: "longevity",
    icon: "✨",
    image: "image/matrixyl.jpg",
    description: "Palmitoyl pentapeptide-4 collagen-stimulating cosmetic peptide. Studied for dermal matrix regeneration, wrinkle reduction, and skin elasticity improvement through TGF-β pathway activation.",
    variants: [
      { size: "10mg × 10 vials", price: 80 },
    ]
  },
  {
    id: 94,
    name: "Orexin B",
    category: "cognitive",
    icon: "⚡",
    image: "image/orexinb.jpg",
    description: "Hypothalamic neuropeptide regulating arousal, wakefulness, and appetite. Studied for narcolepsy, sleep disorders, metabolic regulation, and reward pathway modulation research.",
    variants: [
      { size: "10mg × 10 vials", price: 260 },
    ]
  },
  {
    id: 95,
    name: "Orexin A",
    category: "cognitive",
    icon: "⚡",
    image: "image/orexina.jpg",
    description: "Primary hypothalamic arousal neuropeptide with higher OX1R/OX2R affinity than Orexin B. Studied for wakefulness promotion, cognitive enhancement, and energy homeostasis regulation.",
    variants: [
      { size: "10mg × 10 vials", price: 470 },
    ]
  },
  {
    id: 96,
    name: "P21",
    category: "cognitive",
    icon: "🧠",
    image: "image/p21p021.jpg",
    description: "CNTF-derived peptide with potent neurotrophic activity. Studied for neurogenesis promotion, synaptic plasticity enhancement, and cognitive improvement in neurodegeneration research models.",
    variants: [
      { size: "5mg × 10 vials", price: 305 },
    ]
  },
  {
    id: 97,
    name: "PE-22-28",
    category: "cognitive",
    icon: "🧠",
    image: "image/pe2228.jpg",
    description: "Spadin analogue targeting TREK-1 potassium channels. Studied for rapid antidepressant effects, neurogenesis, and cognitive enhancement via BDNF pathway activation.",
    variants: [
      { size: "10mg × 10 vials", price: 120 },
    ]
  },
  {
    id: 98,
    name: "Acetic Acid Water",
    category: "recovery",
    icon: "💧",
    image: "image/aceticacidwater.jpg",
    description: "Dilute acetic acid solution used as reconstitution solvent for peptides resistant to BAC water. Essential for IGF-1, GDF-8, and other acid-stable research peptides.",
    variants: [
      { size: "3ml × 10 vials", price: 35 },
    ]
  },
  {
    id: 99,
    name: "LC526 (Lipo C Plus)",
    category: "longevity",
    icon: "💧",
    image: "image/lc526.jpg",
    description: "Advanced fat-burning blend combining L-Carnitine, Methionine, Inositol, Choline, B6, B12, and NADH. Comprehensive lipolytic and energy metabolism support for body composition research.",
    variants: [
      { size: "10ml × 10 vials", price: 105 },
    ]
  },
  {
    id: 100,
    name: "SHB (Super Human Blend)",
    category: "recovery",
    icon: "💪",
    image: "image/shb.jpg",
    description: "Comprehensive amino acid complex combining L-Arginine, L-Ornithine, L-Citrulline, L-Lysine, L-Glutamine, L-Proline, L-Taurine, L-Carnitine, and NAC for complete performance support.",
    variants: [
      { size: "10ml × 10 vials", price: 105 },
    ]
  },
  {
    id: 101,
    name: "RP226 (Relaxation PM)",
    category: "cognitive",
    icon: "🌙",
    image: "image/rp226.jpg",
    description: "Relaxation and sleep support blend containing GABA, Methionine, Arginine, and Glutamine. Studied for anxiolytic effects, sleep quality improvement, and nighttime recovery optimization.",
    variants: [
      { size: "10ml × 10 vials", price: 105 },
    ]
  },
  {
    id: 102,
    name: "HHB (Hair Skin Nails Blend)",
    category: "longevity",
    icon: "✨",
    image: "image/hhb.jpg",
    description: "Comprehensive beauty blend with Niacinamide, Thiamine HCL, Pantothenic Acid, Choline, Inositol, Niacin, Biotin, and Folic Acid for hair, skin, and nail health research.",
    variants: [
      { size: "10ml × 10 vials", price: 105 },
    ]
  },
  {
    id: 103,
    name: "Lipo C with B12 Plus",
    category: "longevity",
    icon: "💧",
    image: "image/lipowithb12plus.jpg",
    description: "Enhanced lipolytic complex with L-Carnitine, L-Arginine, Methionine, Inositol, Choline, B6, B5, and B12. Complete fat metabolism and energy support blend for body composition research.",
    variants: [
      { size: "10ml × 10 vials", price: 105 },
    ]
  },
  {
    id: 104,
    name: "FOXO4",
    category: "longevity",
    icon: "🧬",
    image: "image/fox04.jpg",
    description: "FOXO4 transcription factor peptide fragment. Studied for senescent cell regulation, longevity pathway modulation, and cellular stress response in aging and rejuvenation research.",
    variants: [
      { size: "2mg × 10 vials",  price: 110 },
      { size: "10mg × 10 vials", price: 320 },
    ]
  },
];

// ========== RENDER PRODUCTS ==========
function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => {
    const hasVariants = p.variants && p.variants.length > 1;
    const singleVariant = p.variants && p.variants.length === 1;
    const priceDisplay = hasVariants
      ? `<span class="price-range">$${p.variants[0].price} <span class="price-dash">—</span> $${p.variants[p.variants.length-1].price}</span>`
      : singleVariant
        ? `$${p.variants[0].price} <small>/ ${p.variants[0].size}</small>`
        : `$${p.price} <small>/ ${p.size}</small>`;

    const variantDropdown = hasVariants ? `
      <select class="variant-select" id="variant-${p.id}" onchange="updateVariantPrice(${p.id})">
        <option value="" disabled selected>Select dose</option>
        ${p.variants.map((v, idx) => `<option value="${idx}">${v.size} — $${v.price}</option>`).join("")}
      </select>
    ` : "";

    return `
      <div class="product-card" style="animation-delay:${i * 0.07}s;position:relative" data-id="${p.id}">
        ${p.popular ? `<div style="position:absolute;top:1.2rem;right:1.2rem;font-size:0.7rem;background:rgba(0,200,255,0.15);color:var(--accent);padding:0.2rem 0.7rem;border-radius:50px;letter-spacing:1px;text-transform:uppercase;">Popular</div>` : ''}
        <span class="product-badge badge-${p.category}">${p.category}</span>
        <div class="product-img-wrap">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="product-icon" style="display:none">${p.icon}</div>`
            : `<div class="product-icon">${p.icon}</div>`
          }
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${variantDropdown}
        <div class="product-footer" style="margin-top:1rem">
          <div class="product-price" id="price-${p.id}">${priceDisplay}</div>
          <button class="add-btn" onclick="addToCart(${p.id}, event)" title="Add to cart">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// ========== SEARCH ==========
let currentFilter = "all";

function searchProducts() {
  const query = document.getElementById("product-search").value.trim().toLowerCase();
  const clearBtn = document.getElementById("search-clear");
  const countEl = document.getElementById("search-count");
  const grid = document.getElementById("product-grid");

  // Show/hide clear button
  if (clearBtn) clearBtn.style.display = query ? "flex" : "none";

  // Reset filter tabs to All when searching
  if (query) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelector(".tab[data-filter='all']").classList.add("active");
    currentFilter = "all";
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  if (countEl) {
    countEl.textContent = query
      ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`
      : "";
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:4rem 0;">
        <p style="font-size:2rem;margin-bottom:0.75rem">🔬</p>
        <p style="color:var(--text-muted);font-size:0.95rem;">No peptides found for "<strong style="color:var(--text)">${query}</strong>"</p>
        <button onclick="clearSearch()" style="margin-top:1rem;background:none;border:1px solid var(--border);color:var(--accent);font-family:var(--font-body);font-size:0.85rem;padding:0.5rem 1.2rem;border-radius:50px;cursor:pointer;">Clear Search</button>
      </div>`;
    return;
  }

  renderFilteredProducts(filtered);
}

function clearSearch() {
  const input = document.getElementById("product-search");
  const clearBtn = document.getElementById("search-clear");
  const countEl = document.getElementById("search-count");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (countEl) countEl.textContent = "";
  renderProducts(currentFilter);
}

function renderFilteredProducts(filtered) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = filtered.map((p, i) => {
    const hasVariants = p.variants && p.variants.length > 1;
    const singleVariant = p.variants && p.variants.length === 1;
    const priceDisplay = hasVariants
      ? `<span class="price-range">$${p.variants[0].price} <span class="price-dash">—</span> $${p.variants[p.variants.length-1].price}</span>`
      : singleVariant
        ? `$${p.variants[0].price} <small>/ ${p.variants[0].size}</small>`
        : `$${p.price} <small>/ ${p.size}</small>`;
    const variantDropdown = hasVariants ? `
      <select class="variant-select" id="variant-${p.id}" onchange="updateVariantPrice(${p.id})">
        <option value="" disabled selected>Select dose</option>
        ${p.variants.map((v, idx) => `<option value="${idx}">${v.size} — $${v.price}</option>`).join("")}
      </select>` : "";
    return `
      <div class="product-card" style="animation-delay:${i * 0.07}s;position:relative" data-id="${p.id}">
        ${p.popular ? `<div style="position:absolute;top:1.2rem;right:1.2rem;font-size:0.7rem;background:rgba(0,200,255,0.15);color:var(--accent);padding:0.2rem 0.7rem;border-radius:50px;letter-spacing:1px;text-transform:uppercase;">Popular</div>` : ''}
        <span class="product-badge badge-${p.category}">${p.category}</span>
        <div class="product-img-wrap">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" class="product-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="product-icon" style="display:none">${p.icon}</div>`
            : `<div class="product-icon">${p.icon}</div>`
          }
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        ${variantDropdown}
        <div class="product-footer" style="margin-top:1rem">
          <div class="product-price" id="price-${p.id}">${priceDisplay}</div>
          <button class="add-btn" onclick="addToCart(${p.id}, event)" title="Add to cart">+</button>
        </div>
      </div>`;
  }).join("");
}

// ========== FILTER TABS ==========
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    // Clear search when switching tabs
    const input = document.getElementById("product-search");
    const clearBtn = document.getElementById("search-clear");
    const countEl = document.getElementById("search-count");
    if (input) input.value = "";
    if (clearBtn) clearBtn.style.display = "none";
    if (countEl) countEl.textContent = "";
    renderProducts(currentFilter);
  });
});

// ========== VARIANT PRICE UPDATE ==========
function updateVariantPrice(id) {
  const product = products.find(p => p.id === id);
  if (!product || !product.variants) return;
  const select = document.getElementById(`variant-${id}`);
  const idx = parseInt(select.value);
  const variant = product.variants[idx];
  const priceEl = document.getElementById(`price-${id}`);
  if (priceEl) priceEl.innerHTML = `$${variant.price} <small>/ ${variant.size}</small>`;
}

// ========== CART ==========
function addToCart(id, e) {
  e.stopPropagation();
  const product = products.find(p => p.id === id);

  let cartItem;
  if (product.variants) {
    if (product.variants.length === 1) {
      // Single variant — add directly, no dropdown needed
      const variant = product.variants[0];
      cartItem = { id: product.id, name: product.name, icon: product.icon, image: product.image, category: product.category, description: product.description, price: variant.price, size: variant.size };
    } else {
      const select = document.getElementById(`variant-${id}`);
      if (!select || select.value === "") {
        showToast("Please select a dose first! 👆");
        if (select) { select.style.borderColor = "#ff5555"; setTimeout(() => select.style.borderColor = "", 2000); }
        return;
      }
      const variant = product.variants[parseInt(select.value)];
      cartItem = { id: product.id, name: product.name, icon: product.icon, image: product.image, category: product.category, description: product.description, price: variant.price, size: variant.size };
    }
  } else {
    cartItem = product;
  }

  const cart = JSON.parse(localStorage.getItem("peptidelab_cart") || "[]");
  cart.push(cartItem);
  localStorage.setItem("peptidelab_cart", JSON.stringify(cart));
  // Update nav badge
  const badge = document.getElementById("cart-badge");
  if (badge) { badge.textContent = cart.length; badge.style.display = "flex"; }
  // Update floating cart
  updateFloatingCart(cart.length);
  // Pulse animation
  const floatingCart = document.getElementById("floating-cart");
  if (floatingCart) {
    floatingCart.classList.remove("pulse");
    void floatingCart.offsetWidth;
    floatingCart.classList.add("pulse");
  }
  showToast(`${cartItem.name} (${cartItem.size}) added to cart 🧪`);
}

function showToast(message) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed; bottom:2rem; left:50%; transform:translateX(-50%) translateY(20px);
    background:var(--accent); color:var(--bg); padding:0.75rem 1.8rem;
    border-radius:50px; font-family:var(--font-body); font-size:0.9rem; font-weight:500;
    box-shadow:0 8px 30px rgba(0,200,255,0.35); z-index:999;
    opacity:0; transition:all 0.3s ease;
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ========== FAQ ACCORDION ==========
document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ========== NEWSLETTER FORM ==========
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.textContent = "✓ You're on the list! Welcome to the Lab.";
  e.target.reset();
  setTimeout(() => msg.textContent = "", 4000);
}

// ========== MOBILE NAV ==========
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// ========== COOKIE CONSENT ==========
function acceptCookies() {
  localStorage.setItem("peptidelab_cookies", "accepted");
  document.getElementById("cookie-banner").classList.add("hidden");
}
function declineCookies() {
  localStorage.setItem("peptidelab_cookies", "declined");
  document.getElementById("cookie-banner").classList.add("hidden");
}
// Check if already answered
const cookieChoice = localStorage.getItem("peptidelab_cookies");
if (cookieChoice) {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.add("hidden");
}

// ========== BACK TO TOP ==========
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 400);
  });
}

// ========== SCROLL ANIMATION ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".info-card, .faq-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

// ========== FLOATING CART ==========
function updateFloatingCart(count) {
  const btn = document.getElementById("floating-cart");
  const badge = document.getElementById("floating-badge");
  if (!btn) return;
  if (count > 0) {
    btn.classList.add("visible");
    badge.textContent = count;
    badge.classList.add("show");
  } else {
    btn.classList.remove("visible");
    badge.classList.remove("show");
  }
}

// ========== INIT ==========
renderProducts();

// Show cart badge and floating cart if items exist
const _cartOnLoad = JSON.parse(localStorage.getItem("peptidelab_cart") || "[]");
const _badge = document.getElementById("cart-badge");
if (_badge && _cartOnLoad.length > 0) { _badge.textContent = _cartOnLoad.length; _badge.style.display = "flex"; }
updateFloatingCart(_cartOnLoad.length);

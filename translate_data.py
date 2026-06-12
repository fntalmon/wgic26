import json
from pathlib import Path

ROOT = Path("c:/dev/wgic26")
PAGE = ROOT / "landing-wgic26/src/app/exhibitors/page.tsx"
DATA = ROOT / "landing-wgic26/src/data/sponsorship-data.json"

with DATA.open("r", encoding="utf-8") as f:
    data = json.load(f)

packages = data["sponsor_packages"]
addons = data["sponsor_addons"]
stands = data["exhibition"]["stands"]


def fmt_eur(n, locale):
    if locale == "en":
        return f"{n:,} €".replace(",", "X").replace(".", ",").replace("X", ".")
    return f"{n:,.0f} €".replace(",", ".")


# Translated values for data that appears in the UI
values = {
    "en": {
        "packages": {
            "diamante": {
                "name": "Diamond",
                "investment": fmt_eur(packages[0]["investment_eur"], "en"),
                "passes": str(packages[0]["full_passes"]),
                "gala": str(packages[0]["gala_entries"]),
                "speaking": "Main Conference",
                "naming": "Main Auditorium",
                "stand": f"{packages[0]['stand']['type']} {packages[0]['stand']['size']}",
            },
            "esmeralda": {
                "name": "Emerald",
                "investment": fmt_eur(packages[1]["investment_eur"], "en"),
                "passes": str(packages[1]["full_passes"]),
                "gala": str(packages[1]["gala_entries"]),
                "speaking": "Plenary Slot (30 min)",
                "naming": "Parallel Room",
                "stand": f"{packages[1]['stand']['type']} {packages[1]['stand']['size']}",
            },
            "platino": {
                "name": "Platinum",
                "investment": fmt_eur(packages[2]["investment_eur"], "en"),
                "passes": str(packages[2]["full_passes"]),
                "gala": str(packages[2]["gala_entries"]),
                "speaking": "Panelist (15 min)",
                "naming": "—",
                "stand": f"{packages[2]['stand']['type']} {packages[2]['stand']['size']}",
            },
            "oro": {
                "name": "Gold",
                "investment": fmt_eur(packages[3]["investment_eur"], "en"),
                "passes": str(packages[3]["full_passes"]),
                "gala": str(packages[3]["gala_entries"]),
                "speaking": "Workshop Slot",
                "naming": "—",
                "stand": "Digital only",
            },
        },
        "addons": [
            {"item": "Gala dinner naming rights", "price": fmt_eur(addons[0]["price_eur"], "en"), "availability": "1 (Exclusive)"},
            {"item": "Official Congress App", "price": fmt_eur(addons[1]["price_eur"], "en"), "availability": "1 (Exclusive)"},
            {"item": "Lanyards and Badges", "price": fmt_eur(addons[2]["price_eur"], "en"), "availability": "1 (Exclusive)"},
            {"item": "Coffee Break Sponsor (per day)", "price": fmt_eur(addons[3]["price_eur"], "en"), "availability": "4 available"},
            {"item": "Technical Visits (BCN or Lleida)", "price": fmt_eur(addons[4]["price_eur"], "en"), "availability": "4 available"},
            {"item": "Full-page Ad in Proceedings", "price": fmt_eur(addons[5]["price_eur"], "en"), "availability": "Unlimited"},
            {"item": "Produced Video Interview", "price": fmt_eur(addons[6]["price_eur"], "en"), "availability": "10 spots"},
        ],
        "stands": {
            "jardinGrande": {
                "name": "Large Garden",
                "category": "Premium Stand",
                "target": "Market leaders looking for maximum visibility",
                "space": stands[0]["space"],
                "format": "Fully produced turn-key solution with unified high-end design",
                "services": ["LED lights", "Information counter", "Electricity: 3.3 kW panel (1 socket available)", "High-speed Wi-Fi", "Pre-opening cleaning"],
                "branding": "Black 10 cm high letters (20 letters included). Dedicated space for logo and custom graphics.",
                "furniture": "1 meeting table and 4 chairs or bar stools",
                "investment": fmt_eur(stands[0]["investment_eur"], "en"),
                "passesIncluded": str(stands[0]["passes_included"]),
                "notes": "Final furniture to be defined. The company can upgrade basic equipment or signage directly with the venue and organizers.",
            },
            "jardinMedio": {
                "name": "Medium Garden",
                "category": "Standard Stand",
                "target": "Market leaders looking for maximum visibility",
                "space": stands[1]["space"],
                "format": "Fully produced turn-key solution with unified high-end design",
                "services": ["LED lights", "Information counter", "Electricity: 3.3 kW panel (1 socket available)", "High-speed Wi-Fi", "Pre-opening cleaning"],
                "branding": "Black 10 cm high letters (20 letters included). Dedicated space for logo and custom graphics.",
                "furniture": "1 meeting table and 2 bar stools",
                "investment": fmt_eur(stands[1]["investment_eur"], "en"),
                "passesIncluded": str(stands[1]["passes_included"]),
                "notes": "Final furniture to be defined. The company can upgrade basic equipment or signage directly with the venue and organizers.",
            },
            "flor": {
                "name": "Flower",
                "category": "Compact Stand / Pod",
                "target": "Startups and specialized companies. Efficient and cost-effective option.",
                "space": stands[2]["space"],
                "format": "Minimalist design for quick interaction",
                "services": ["Electricity (1 socket)", "High-speed Wi-Fi"],
                "branding": "Totem-style display (provided and printed by the organizer)",
                "furniture": "1 table and 2 chairs or bar stools",
                "investment": fmt_eur(stands[2]["investment_eur"], "en"),
                "passesIncluded": str(stands[2]["passes_included"]),
                "notes": "Indicative rendering. Final format to be defined.",
            },
        },
    },
    "es": {
        "packages": {
            "diamante": {
                "name": "Diamante",
                "investment": fmt_eur(packages[0]["investment_eur"], "es"),
                "passes": str(packages[0]["full_passes"]),
                "gala": str(packages[0]["gala_entries"]),
                "speaking": packages[0]["speaking_opportunity"],
                "naming": packages[0]["naming_rights"],
                "stand": f"{packages[0]['stand']['type']} {packages[0]['stand']['size']}",
            },
            "esmeralda": {
                "name": "Esmeralda",
                "investment": fmt_eur(packages[1]["investment_eur"], "es"),
                "passes": str(packages[1]["full_passes"]),
                "gala": str(packages[1]["gala_entries"]),
                "speaking": packages[1]["speaking_opportunity"],
                "naming": packages[1]["naming_rights"],
                "stand": f"{packages[1]['stand']['type']} {packages[1]['stand']['size']}",
            },
            "platino": {
                "name": "Platino",
                "investment": fmt_eur(packages[2]["investment_eur"], "es"),
                "passes": str(packages[2]["full_passes"]),
                "gala": str(packages[2]["gala_entries"]),
                "speaking": packages[2]["speaking_opportunity"],
                "naming": packages[2]["naming_rights"] or "—",
                "stand": f"{packages[2]['stand']['type']} {packages[2]['stand']['size']}",
            },
            "oro": {
                "name": "Oro",
                "investment": fmt_eur(packages[3]["investment_eur"], "es"),
                "passes": str(packages[3]["full_passes"]),
                "gala": str(packages[3]["gala_entries"]),
                "speaking": packages[3]["speaking_opportunity"],
                "naming": packages[3]["naming_rights"] or "—",
                "stand": packages[3]["brand_placement"],
            },
        },
        "addons": [
            {"item": addon["item"], "price": fmt_eur(addon["price_eur"], "es"), "availability": addon["availability"]}
            for addon in addons
        ],
        "stands": {
            "jardinGrande": {
                "name": stands[0]["name"],
                "category": stands[0]["category"],
                "target": stands[0]["target"],
                "space": stands[0]["space"],
                "format": stands[0]["format"],
                "services": stands[0]["services"],
                "branding": stands[0]["branding"],
                "furniture": stands[0]["furniture"],
                "investment": fmt_eur(stands[0]["investment_eur"], "es"),
                "passesIncluded": str(stands[0]["passes_included"]),
                "notes": stands[0]["notes"],
            },
            "jardinMedio": {
                "name": stands[1]["name"],
                "category": stands[1]["category"],
                "target": stands[1]["target"],
                "space": stands[1]["space"],
                "format": stands[1]["format"],
                "services": stands[1]["services"],
                "branding": stands[1]["branding"],
                "furniture": stands[1]["furniture"],
                "investment": fmt_eur(stands[1]["investment_eur"], "es"),
                "passesIncluded": str(stands[1]["passes_included"]),
                "notes": stands[1]["notes"],
            },
            "flor": {
                "name": stands[2]["name"],
                "category": stands[2]["category"],
                "target": stands[2]["target"],
                "space": stands[2]["space"],
                "format": stands[2]["format"],
                "services": stands[2]["services"],
                "branding": stands[2]["branding"],
                "furniture": stands[2]["furniture"],
                "investment": fmt_eur(stands[2]["investment_eur"], "es"),
                "passesIncluded": str(stands[2]["passes_included"]),
                "notes": stands[2]["notes"],
            },
        },
    },
    "ca": {
        "packages": {
            "diamante": {
                "name": "Diamant",
                "investment": fmt_eur(packages[0]["investment_eur"], "ca"),
                "passes": str(packages[0]["full_passes"]),
                "gala": str(packages[0]["gala_entries"]),
                "speaking": "Conferència Principal",
                "naming": "Auditori Principal",
                "stand": f"{packages[0]['stand']['type']} {packages[0]['stand']['size']}",
            },
            "esmeralda": {
                "name": "Esmeralda",
                "investment": fmt_eur(packages[1]["investment_eur"], "ca"),
                "passes": str(packages[1]["full_passes"]),
                "gala": str(packages[1]["gala_entries"]),
                "speaking": "Slot Plenari (30 min)",
                "naming": "Sala Paral·lela",
                "stand": f"{packages[1]['stand']['type']} {packages[1]['stand']['size']}",
            },
            "platino": {
                "name": "Platí",
                "investment": fmt_eur(packages[2]["investment_eur"], "ca"),
                "passes": str(packages[2]["full_passes"]),
                "gala": str(packages[2]["gala_entries"]),
                "speaking": "Panelista (15 min)",
                "naming": "—",
                "stand": f"{packages[2]['stand']['type']} {packages[2]['stand']['size']}",
            },
            "oro": {
                "name": "Or",
                "investment": fmt_eur(packages[3]["investment_eur"], "ca"),
                "passes": str(packages[3]["full_passes"]),
                "gala": str(packages[3]["gala_entries"]),
                "speaking": "Slot de Taller",
                "naming": "—",
                "stand": "Només Digital",
            },
        },
        "addons": [
            {"item": "Drets de nomenament per al sopar de gala", "price": fmt_eur(addons[0]["price_eur"], "ca"), "availability": "1 (Exclusiu)"},
            {"item": "Aplicació Oficial del Congrés", "price": fmt_eur(addons[1]["price_eur"], "ca"), "availability": "1 (Exclusiu)"},
            {"item": "Lanyards i Credencials", "price": fmt_eur(addons[2]["price_eur"], "ca"), "availability": "1 (Exclusiu)"},
            {"item": "Patrocinador de Pausa per a Cafè (per dia)", "price": fmt_eur(addons[3]["price_eur"], "ca"), "availability": "4 disponibles"},
            {"item": "Visites Tècniques (BCN o Lleida)", "price": fmt_eur(addons[4]["price_eur"], "ca"), "availability": "4 disponibles"},
            {"item": "Anunci de pàgina completa en Actes", "price": fmt_eur(addons[5]["price_eur"], "ca"), "availability": "Ilimitat"},
            {"item": "Entrevista en Vídeo Produïda", "price": fmt_eur(addons[6]["price_eur"], "ca"), "availability": "10 espais"},
        ],
        "stands": {
            "jardinGrande": {
                "name": "Jardín GRANDE",
                "category": "Stand Premium",
                "target": "Líders del mercat que busquen màxima visibilitat",
                "space": stands[0]["space"],
                "format": "Solució clau en mà completament produïda amb disseny unificat d'alta gamma",
                "services": ["Llums LED", "Mostrador d'informació", "Electricitat: tauler 3,3 kW (1 endoll disponible)", "Wi-Fi d'alta velocitat", "Neteja prèvia a la inauguració"],
                "branding": "Lletres negres 10 cm d'alt (20 lletres incloses). Espai dedicat per a logo i gràfics personalitzats.",
                "furniture": "1 taula de reunió i 4 cadires o tamborets de bar",
                "investment": fmt_eur(stands[0]["investment_eur"], "ca"),
                "passesIncluded": str(stands[0]["passes_included"]),
                "notes": "Mobiliari final per definir. L'empresa pot actualitzar equip bàsic o senyalització directament amb el lloc i organitzadors.",
            },
            "jardinMedio": {
                "name": "Jardín MEDIO",
                "category": "Stand Estàndard",
                "target": "Líders del mercat que busquen màxima visibilitat",
                "space": stands[1]["space"],
                "format": "Solució clau en mà completament produïda amb disseny unificat d'alta gamma",
                "services": ["Llums LED", "Mostrador d'informació", "Electricitat: tauler 3,3 kW (1 endoll disponible)", "Wi-Fi d'alta velocitat", "Neteja prèvia a la inauguració"],
                "branding": "Lletres negres 10 cm d'alt (20 lletres incloses). Espai dedicat per a logo i gràfics personalitzats.",
                "furniture": "1 taula de reunió i 2 tamborets de bar",
                "investment": fmt_eur(stands[1]["investment_eur"], "ca"),
                "passesIncluded": str(stands[1]["passes_included"]),
                "notes": "Mobiliari final per definir. L'empresa pot actualitzar equip bàsic o senyalització directament amb el lloc i organitzadors.",
            },
            "flor": {
                "name": "Flor",
                "category": "Stand Compacte / Pod",
                "target": "Startups i empreses especialitzades. Opció eficient i rendible.",
                "space": stands[2]["space"],
                "format": "Disseny minimalista per facilitar interacció ràpida",
                "services": ["Electricitat (1 endoll)", "Wi-Fi d'alta velocitat"],
                "branding": "Exhibició estil tòtem (proporcionada i impresa per l'organització)",
                "furniture": "1 taula i 2 cadires o tamborets de bar",
                "investment": fmt_eur(stands[2]["investment_eur"], "ca"),
                "passesIncluded": str(stands[2]["passes_included"]),
                "notes": "Renderització indicativa. Format final per definir.",
            },
        },
    },
}


def to_ts(obj, indent=6):
    spaces = " " * indent
    if isinstance(obj, dict):
        items = [f"{spaces}  {k}: {to_ts(v, indent + 2)}," for k, v in obj.items()]
        return "{\n" + "\n".join(items) + f"\n{spaces}}}"
    if isinstance(obj, list):
        items = [f"{spaces}  {to_ts(item, indent + 2)}," for item in obj]
        return "[\n" + "\n".join(items) + f"\n{spaces}]"
    if isinstance(obj, str):
        return json.dumps(obj, ensure_ascii=False)
    return str(obj)


content = PAGE.read_text(encoding="utf-8")

# Insert values into each locale's sponsorship object
marker = "      },\n    },\n  },"
for locale in ("en", "es", "ca"):
    block = f"""      }},
      packages: {to_ts(values[locale]["packages"], 6)},
      addons: {to_ts(values[locale]["addons"], 6)},
      stands: {to_ts(values[locale]["stands"], 6)},
    }},
  }},"""
    if marker not in content:
        print(f"WARNING: marker not found for {locale}")
        continue
    content = content.replace(marker, block, 1)

# Update titles to use dynamic names
content = content.replace(
    'partnerTitle: "Partners: Diamante, Esmeralda & Platino",',
    'partnerTitle: `Partners: ${{t.sponsorship.packages.diamante.name}}, ${{t.sponsorship.packages.esmeralda.name}} & ${{t.sponsorship.packages.platino.name}}`,',
)
content = content.replace(
    'partnerTitle: "Socios: Diamante, Esmeralda y Platino",',
    'partnerTitle: `Socios: ${{t.sponsorship.packages.diamante.name}}, ${{t.sponsorship.packages.esmeralda.name}} y ${{t.sponsorship.packages.platino.name}}`,',
)
content = content.replace(
    'partnerTitle: "Socis: Diamant, Esmeralda i Platí",',
    'partnerTitle: `Socis: ${{t.sponsorship.packages.diamante.name}}, ${{t.sponsorship.packages.esmeralda.name}} i ${{t.sponsorship.packages.platino.name}}`,',
)
content = content.replace(
    'sponsorTitle: "Sponsor: Oro",',
    'sponsorTitle: `Sponsor: ${{t.sponsorship.packages.oro.name}}`,',
)
content = content.replace(
    'sponsorTitle: "Patrocinador: Oro",',
    'sponsorTitle: `Patrocinador: ${{t.sponsorship.packages.oro.name}}`,',
)
content = content.replace(
    'sponsorTitle: "Patrocinador: Or",',
    'sponsorTitle: `Patrocinador: ${{t.sponsorship.packages.oro.name}}`,',
)
content = content.replace(
    'exhibitorsTitle: "El Jardín WGIC – Exhibition stands",',
    'exhibitorsTitle: `${{t.sponsorship.standsTitle}} – Exhibition stands`,',
)
content = content.replace(
    'exhibitorsTitle: "El Jardín WGIC – Stands de exposición",',
    'exhibitorsTitle: `${{t.sponsorship.standsTitle}} – Stands de exposición`,',
)
content = content.replace(
    'exhibitorsTitle: "El Jardín WGIC – Stands d\'exposició",',
    'exhibitorsTitle: `${{t.sponsorship.standsTitle}} – Stands d\'exposició`,',
)

# Wall titles
content = content.replace(
    'elitePartners: "Diamante Partners",',
    'elitePartners: `${{t.sponsorship.packages.diamante.name}} Partners`,',
)
content = content.replace(
    'elitePartners: "Socios Diamante",',
    'elitePartners: `Socios ${{t.sponsorship.packages.diamante.name}}`,',
)
content = content.replace(
    'elitePartners: "Socis Diamant",',
    'elitePartners: `Socis ${{t.sponsorship.packages.diamante.name}}`,',
)
content = content.replace(
    'gardenBigExhibitors: "Jardín Grande Exhibitors",',
    'gardenBigExhibitors: `${{t.sponsorship.stands.jardinGrande.name}} Exhibitors`,',
)
content = content.replace(
    'gardenBigExhibitors: "Expositores Jardín Grande",',
    'gardenBigExhibitors: `Expositores ${{t.sponsorship.stands.jardinGrande.name}}`,',
)
content = content.replace(
    'gardenBigExhibitors: "Expositors Jardín Grande",',
    'gardenBigExhibitors: `Expositors ${{t.sponsorship.stands.jardinGrande.name}}`,',
)
content = content.replace(
    'gardenMediumExhibitors: "Jardín Medio Exhibitors",',
    'gardenMediumExhibitors: `${{t.sponsorship.stands.jardinMedio.name}} Exhibitors`,',
)
content = content.replace(
    'gardenMediumExhibitors: "Expositores Jardín Medio",',
    'gardenMediumExhibitors: `Expositores ${{t.sponsorship.stands.jardinMedio.name}}`,',
)
content = content.replace(
    'gardenMediumExhibitors: "Expositors Jardín Medio",',
    'gardenMediumExhibitors: `Expositors ${{t.sponsorship.stands.jardinMedio.name}}`,',
)
content = content.replace(
    'flowerExhibitors: "Flor Exhibitors",',
    'flowerExhibitors: `${{t.sponsorship.stands.flor.name}} Exhibitors`,',
)
content = content.replace(
    'flowerExhibitors: "Expositores Flor",',
    'flowerExhibitors: `Expositores ${{t.sponsorship.stands.flor.name}}`,',
)
content = content.replace(
    'flowerExhibitors: "Expositors Flor",',
    'flowerExhibitors: `Expositors ${{t.sponsorship.stands.flor.name}}`,',
)

# Generate new data-driven block
new_block = '''            <div className="overflow-x-auto -mx-6 px-6 my-8">
              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.tableTitle}</h3>
              <table className="w-full min-w-[800px] border-collapse border border-white/20">
                <thead>
                  <tr className="bg-cactus/30">
                    <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.tableHeaders.category}</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase bg-potus/20">
                      {t.sponsorship.packages.diamante.name} <span className="ml-2 inline-flex items-center rounded-full bg-potus px-2 py-0.5 text-xs text-black uppercase">{t.sponsorship.exclusivoBadge}</span>
                    </th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase">{t.sponsorship.packages.esmeralda.name}</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase">{t.sponsorship.packages.platino.name}</th>
                    <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base uppercase">{t.sponsorship.packages.oro.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium bg-potus/10">{t.sponsorship.packages.diamante.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium">{t.sponsorship.packages.esmeralda.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium">{t.sponsorship.packages.platino.investment}</td>
                    <td className="border border-white/20 px-4 py-3 text-white text-base text-center font-medium">{t.sponsorship.packages.oro.investment}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.passes}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.passes}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.galaDinner}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.gala}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.gala}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.gala}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.gala}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.speaking}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.speaking}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.naming}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.naming}</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.tableHeaders.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center bg-potus/10">{t.sponsorship.packages.diamante.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.esmeralda.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.platino.stand}</td>
                    <td className="border border-white/20 px-4 py-3 text-white/80 text-base text-center">{t.sponsorship.packages.oro.stand}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-8">
              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.addonsTitle}</h3>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[600px] border-collapse border border-white/20">
                  <thead>
                    <tr className="bg-cactus/30">
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.addonsHeaders.item}</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.addonsHeaders.price}</th>
                      <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base uppercase">{t.sponsorship.addonsHeaders.availability}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/5 bg-potus/10">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[0].item} <span className="inline-flex items-center rounded-full bg-potus/20 border border-potus/30 px-2 py-0.5 text-potus text-sm uppercase">{t.sponsorship.exclusivoBadge}</span></td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[0].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[0].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5 bg-potus/10">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[1].item} <span className="inline-flex items-center rounded-full bg-potus/20 border border-potus/30 px-2 py-0.5 text-potus text-sm uppercase">{t.sponsorship.exclusivoBadge}</span></td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[1].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[1].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5 bg-potus/10">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[2].item} <span className="inline-flex items-center rounded-full bg-potus/20 border border-potus/30 px-2 py-0.5 text-potus text-sm uppercase">{t.sponsorship.exclusivoBadge}</span></td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[2].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[2].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[3].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[3].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[3].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[4].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[4].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[4].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[5].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[5].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[5].availability}</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[6].item}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base font-medium">{t.sponsorship.addons[6].price}</td>
                      <td className="border border-white/20 px-4 py-3 text-white/80 text-base">{t.sponsorship.addons[6].availability}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="my-8">
              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.standsTitle}</h3>
              <p className="text-white/80 mb-4 text-justify">{t.sponsorship.standsConcept}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-white uppercase">{t.sponsorship.stands.jardinGrande.name}</h4>
                    <span className="text-potus font-medium">{t.sponsorship.stands.jardinGrande.investment}</span>
                  </div>
                  <p className="text-white/70 text-sm">{t.sponsorship.stands.jardinGrande.category} · {t.sponsorship.stands.jardinGrande.target}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.space}:</span> {t.sponsorship.stands.jardinGrande.space}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.format}:</span> {t.sponsorship.stands.jardinGrande.format}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.services}:</span></p>
                  <ul className="list-disc list-inside text-white/80 text-sm flex flex-col gap-1">
                    {t.sponsorship.stands.jardinGrande.services.map((s, i) => <li key={i} className="text-white/80 text-sm">{s}</li>)}
                  </ul>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.branding}:</span> {t.sponsorship.stands.jardinGrande.branding}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.furniture}:</span> {t.sponsorship.stands.jardinGrande.furniture}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.passesIncluded}:</span> {t.sponsorship.stands.jardinGrande.passesIncluded}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-white uppercase">{t.sponsorship.stands.jardinMedio.name}</h4>
                    <span className="text-potus font-medium">{t.sponsorship.stands.jardinMedio.investment}</span>
                  </div>
                  <p className="text-white/70 text-sm">{t.sponsorship.stands.jardinMedio.category} · {t.sponsorship.stands.jardinMedio.target}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.space}:</span> {t.sponsorship.stands.jardinMedio.space}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.format}:</span> {t.sponsorship.stands.jardinMedio.format}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.services}:</span></p>
                  <ul className="list-disc list-inside text-white/80 text-sm flex flex-col gap-1">
                    {t.sponsorship.stands.jardinMedio.services.map((s, i) => <li key={i} className="text-white/80 text-sm">{s}</li>)}
                  </ul>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.branding}:</span> {t.sponsorship.stands.jardinMedio.branding}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.furniture}:</span> {t.sponsorship.stands.jardinMedio.furniture}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.passesIncluded}:</span> {t.sponsorship.stands.jardinMedio.passesIncluded}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-white uppercase">{t.sponsorship.stands.flor.name}</h4>
                    <span className="text-potus font-medium">{t.sponsorship.stands.flor.investment}</span>
                  </div>
                  <p className="text-white/70 text-sm">{t.sponsorship.stands.flor.category} · {t.sponsorship.stands.flor.target}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.space}:</span> {t.sponsorship.stands.flor.space}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.format}:</span> {t.sponsorship.stands.flor.format}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.services}:</span></p>
                  <ul className="list-disc list-inside text-white/80 text-sm flex flex-col gap-1">
                    {t.sponsorship.stands.flor.services.map((s, i) => <li key={i} className="text-white/80 text-sm">{s}</li>)}
                  </ul>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.branding}:</span> {t.sponsorship.stands.flor.branding}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.furniture}:</span> {t.sponsorship.stands.flor.furniture}</p>
                  <p className="text-white/80 text-sm"><span className="text-potus uppercase text-xs">{t.sponsorship.standsLabels.passesIncluded}:</span> {t.sponsorship.stands.flor.passesIncluded}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm italic">{t.sponsorship.standsLogisticsNote}</p>
            </div>
'''

# The new_block uses JSX expressions with {t.sponsorship...}. It is not an f-string, so no escaping needed.
# We need to replace the existing block from the package table div to the end of stands section (before venue).
start_marker = '            <div className="overflow-x-auto -mx-6 px-6 my-8">\n              <h3 className="text-xl text-white uppercase mb-4">{t.sponsorship.tableTitle}</h3>'
end_marker = '            </div>\n\n            <div className="mt-6">\n              <h4 className="text-lg text-white uppercase mb-3">\n                {t.venueTitle}'

if start_marker in content and end_marker in content:
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    content = content[:start_idx] + new_block + content[end_idx:]
else:
    print("WARNING: could not find data block markers")

# Update form options
form_old = '''                    <option value="">{t.cards.selectParticipation}</option>
                      <option value="Diamante">
                        {t.sponsorship.formOptions.diamante}
                      </option>
                      <option value="Esmeralda">
                        {t.sponsorship.formOptions.esmeralda}
                      </option>
                      <option value="Platino">
                        {t.sponsorship.formOptions.platino}
                      </option>
                      <option value="Oro">
                        {t.sponsorship.formOptions.oro}
                      </option>
                      <option value="Jardín Grande">
                        {t.sponsorship.formOptions.jardinGrande}
                      </option>
                      <option value="Jardín Medio">
                        {t.sponsorship.formOptions.jardinMedio}
                      </option>
                      <option value="Flor">
                        {t.sponsorship.formOptions.flor}
                      </option>'''

form_new = '''                    <option value="">{t.cards.selectParticipation}</option>
                      <option value="Diamante">
                        {t.sponsorship.packages.diamante.name}
                      </option>
                      <option value="Esmeralda">
                        {t.sponsorship.packages.esmeralda.name}
                      </option>
                      <option value="Platino">
                        {t.sponsorship.packages.platino.name}
                      </option>
                      <option value="Oro">
                        {t.sponsorship.packages.oro.name}
                      </option>
                      <option value="Jardín Grande">
                        {t.sponsorship.stands.jardinGrande.name}
                      </option>
                      <option value="Jardín Medio">
                        {t.sponsorship.stands.jardinMedio.name}
                      </option>
                      <option value="Flor">
                        {t.sponsorship.stands.flor.name}
                      </option>'''

if form_old in content:
    content = content.replace(form_old, form_new)
else:
    print("WARNING: form options not found")

PAGE.write_text(content, encoding="utf-8")
print("Done")

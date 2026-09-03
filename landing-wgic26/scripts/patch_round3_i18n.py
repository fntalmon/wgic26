# -*- coding: utf-8 -*-
"""Round 3 i18n patch: blog subtitle, keynote description, WGIN awards intro, seeMore."""
import json
import io
from collections import OrderedDict

LOCALES = ["en", "es", "ca", "fr", "pt"]

blog_subtitle = {
    "en": "Green roofs, flooded streets, biodiversity that doesn't add up on paper. The debates driving WGIC26, before the congress opens.",
    "es": "Cubiertas verdes, calles inundadas, biodiversidad que no cuadra sobre el papel. Los debates que impulsan el WGIC26, antes de que abra el congreso.",
    "ca": "Cobertes verdes, carrers inundats, biodiversitat que no quadra sobre el paper. Els debats que impulsen el WGIC26, abans que s'obri el congrés.",
    "fr": "Toits végétalisés, rues inondées, biodiversité qui ne s'additionne pas sur le papier. Les débats qui animent le WGIC26, avant l'ouverture du congrès.",
    "pt": "Cobertas verdes, ruas inundadas, biodiversidade que não fecha as contas no papel. Os debates que impulsionam o WGIC26, antes da abertura do congresso.",
}

keynote_description = {
    "en": "Meet the leading voices in green infrastructure: an international line-up of architects, engineers, ecologists and policymakers, each addressing the questions that matter most to the professionals shaping tomorrow's cities.",
    "es": "Conoce a las voces líderes en infraestructura verde: un elenco internacional de arquitectos, ingenieros, ecólogos y responsables de políticas, cada uno abordando las cuestiones que más importan a los profesionales que dan forma a las ciudades del mañana.",
    "ca": "Coneix les veus líders en infraestructura verda: un elenc internacional d'arquitectes, enginyers, ecòlegs i responsables de polítiques, cadascú abordant les qüestions que més importen als professionals que donen forma a les ciutats del demà.",
    "fr": "Rencontrez les voix majeures de l'infrastructure verte : une sélection internationale d'architectes, d'ingénieurs, d'écologues et de décideurs, chacun abordant les questions qui comptent le plus pour les professionnels qui façonnent les villes de demain.",
    "pt": "Conheça as vozes líderes em infraestrutura verde: um painel internacional de arquitetos, engenheiros, ecologistas e decisores políticos, cada um abordando as questões que mais importam aos profissionais que moldam as cidades de amanhã.",
}

awards_intro1 = {
    "en": "The World Green Infrastructure Awards recognise the world's best green infrastructure projects, policies and research.",
    "es": "Los World Green Infrastructure Awards reconocen los mejores proyectos, políticas e investigaciones de infraestructura verde del mundo.",
    "ca": "Els World Green Infrastructure Awards reconeixen els millors projectes, polítiques i recerques d'infraestructura verda del món.",
    "fr": "Les World Green Infrastructure Awards récompensent les meilleurs projets, politiques et recherches en infrastructure verte au monde.",
    "pt": "Os World Green Infrastructure Awards reconhecem os melhores projetos, políticas e investigações de infraestrutura verde do mundo.",
}

awards_intro2a = {
    "en": "Presented by",
    "es": "Presentados por",
    "ca": "Presentats per",
    "fr": "Présentés par",
    "pt": "Apresentados pela",
}

awards_intro2b = {
    "en": "the winners will be announced live at WGIC26.",
    "es": "los ganadores se anunciarán en directo en el WGIC26.",
    "ca": "els guanyadors s'anunciaran en directe al WGIC26.",
    "fr": "les lauréats seront annoncés en direct au WGIC26.",
    "pt": "os vencedores serão anunciados ao vivo no WGIC26.",
}

see_more = {
    "es": "Ver más",
    "ca": "Veure'n més",
}

for loc in LOCALES:
    path = f"src/messages/{loc}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=OrderedDict)

    data["blogPage"]["subtitle"] = blog_subtitle[loc]
    data["keyNoteSpeakersPage"]["description"] = keynote_description[loc]

    awards = data["wginAwardsPage"]
    new_awards = OrderedDict()
    new_awards["intro1"] = awards_intro1[loc]
    new_awards["intro2a"] = awards_intro2a[loc]
    new_awards["intro2b"] = awards_intro2b[loc]
    for k, v in awards.items():
        new_awards[k] = v
    data["wginAwardsPage"] = new_awards

    if loc in see_more:
        data["workshopsPage"]["seeMore"] = see_more[loc]

    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"patched {loc}")

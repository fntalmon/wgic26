import json, io, collections

NAV = {
"en": {"committees": "Committees", "barcelonaLleida": "Barcelona & Lleida", "congressProgramme": "Congress Programme", "ticketsUrgency": "-15% until 30/9", "stripName": "World Green Infrastructure Congress 2026"},
"es": {"committees": "Comités", "barcelonaLleida": "Barcelona & Lleida", "congressProgramme": "Programa del congreso", "ticketsUrgency": "-15% hasta el 30/9", "stripName": "World Green Infrastructure Congress 2026"},
"ca": {"committees": "Comitès", "barcelonaLleida": "Barcelona & Lleida", "congressProgramme": "Programa del congrés", "ticketsUrgency": "-15% fins al 30/9", "stripName": "World Green Infrastructure Congress 2026"},
"fr": {"committees": "Comités", "barcelonaLleida": "Barcelona & Lleida", "congressProgramme": "Programme du congrès", "ticketsUrgency": "-15% jusqu'au 30/9", "stripName": "World Green Infrastructure Congress 2026"},
"pt": {"committees": "Comités", "barcelonaLleida": "Barcelona & Lleida", "congressProgramme": "Programa do congresso", "ticketsUrgency": "-15% até 30/9", "stripName": "World Green Infrastructure Congress 2026"},
}

CP = {
"en": {
  "title": "Committees",
  "description": "The people and institutions shaping WGIC26.",
  "introP1": "WGIC26 is shaped by 27 researchers and practitioners from 17 countries, alongside the institutions hosting the congress in Barcelona and Lleida.",
  "introP2": "Researchers, designers and industry practitioners from across the world review every submission, chair the thematic sessions and shape the scientific programme. Their range — from building-integrated greenery to urban ecology, water management and public health — is what keeps the congress connected to both current research and built practice.",
  "honourTitle": "Honour Committee",
  "honourSubtitle": "The institutions hosting and supporting WGIC26",
  "organisingTitle": "Organising Committee",
  "organisingSubtitle": "The team delivering the congress",
  "scientificTitle": "Scientific Committee",
  "scientificSubtitle": "Peer review and scientific programme",
  "professionalTitle": "Professional Committee",
  "professionalSubtitle": "Industry practice and market perspective"
},
"es": {
  "title": "Comités",
  "description": "Las personas e instituciones que dan forma al WGIC26.",
  "introP1": "El WGIC26 está formado por 27 investigadores y profesionales de 17 países, junto a las instituciones que acogen el congreso en Barcelona y Lleida.",
  "introP2": "Investigadores, diseñadores y profesionales del sector de todo el mundo revisan cada propuesta, presiden las sesiones temáticas y dan forma al programa científico. Su diversidad —de la vegetación integrada en la edificación a la ecología urbana, la gestión del agua y la salud pública— es lo que mantiene al congreso conectado tanto con la investigación actual como con la práctica construida.",
  "honourTitle": "Comité de Honor",
  "honourSubtitle": "Las instituciones que acogen y apoyan el WGIC26",
  "organisingTitle": "Comité Organizador",
  "organisingSubtitle": "El equipo que hace posible el congreso",
  "scientificTitle": "Comité Científico",
  "scientificSubtitle": "Revisión por pares y programa científico",
  "professionalTitle": "Comité Profesional",
  "professionalSubtitle": "Práctica del sector y perspectiva de mercado"
},
"ca": {
  "title": "Comitès",
  "description": "Les persones i institucions que donen forma al WGIC26.",
  "introP1": "El WGIC26 està format per 27 investigadors i professionals de 17 països, juntament amb les institucions que acullen el congrés a Barcelona i Lleida.",
  "introP2": "Investigadors, dissenyadors i professionals del sector d'arreu del món revisen cada proposta, presideixen les sessions temàtiques i donen forma al programa científic. La seva diversitat —de la vegetació integrada en l'edificació a l'ecologia urbana, la gestió de l'aigua i la salut pública— és el que manté el congrés connectat tant amb la recerca actual com amb la pràctica construïda.",
  "honourTitle": "Comitè d'Honor",
  "honourSubtitle": "Les institucions que acullen i donen suport al WGIC26",
  "organisingTitle": "Comitè Organitzador",
  "organisingSubtitle": "L'equip que fa possible el congrés",
  "scientificTitle": "Comitè Científic",
  "scientificSubtitle": "Revisió per parells i programa científic",
  "professionalTitle": "Comitè Professional",
  "professionalSubtitle": "Pràctica del sector i perspectiva de mercat"
},
"fr": {
  "title": "Comités",
  "description": "Les personnes et institutions qui façonnent le WGIC26.",
  "introP1": "Le WGIC26 réunit 27 chercheurs et praticiens de 17 pays, aux côtés des institutions qui accueillent le congrès à Barcelone et Lleida.",
  "introP2": "Des chercheurs, concepteurs et professionnels du secteur du monde entier examinent chaque soumission, président les sessions thématiques et façonnent le programme scientifique. Leur diversité — du végétal intégré au bâtiment à l'écologie urbaine, en passant par la gestion de l'eau et la santé publique — maintient le congrès connecté à la recherche actuelle comme à la pratique construite.",
  "honourTitle": "Comité d'Honneur",
  "honourSubtitle": "Les institutions qui accueillent et soutiennent le WGIC26",
  "organisingTitle": "Comité d'Organisation",
  "organisingSubtitle": "L'équipe qui réalise le congrès",
  "scientificTitle": "Comité Scientifique",
  "scientificSubtitle": "Évaluation par les pairs et programme scientifique",
  "professionalTitle": "Comité Professionnel",
  "professionalSubtitle": "Pratique du secteur et perspective du marché"
},
"pt": {
  "title": "Comités",
  "description": "As pessoas e instituições que dão forma ao WGIC26.",
  "introP1": "O WGIC26 é composto por 27 investigadores e profissionais de 17 países, juntamente com as instituições que acolhem o congresso em Barcelona e Lleida.",
  "introP2": "Investigadores, designers e profissionais do setor de todo o mundo reveem cada submissão, presidem às sessões temáticas e dão forma ao programa científico. A sua diversidade — da vegetação integrada na edificação à ecologia urbana, gestão da água e saúde pública — é o que mantém o congresso ligado tanto à investigação atual como à prática construída.",
  "honourTitle": "Comité de Honra",
  "honourSubtitle": "As instituições que acolhem e apoiam o WGIC26",
  "organisingTitle": "Comité Organizador",
  "organisingSubtitle": "A equipa que realiza o congresso",
  "scientificTitle": "Comité Científico",
  "scientificSubtitle": "Revisão por pares e programa científico",
  "professionalTitle": "Comité Profissional",
  "professionalSubtitle": "Prática do setor e perspetiva de mercado"
}
}

for loc in NAV:
    path = f"src/messages/{loc}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    for k, v in NAV[loc].items():
        data["navigation"][k] = v
    data["committeesPage"] = collections.OrderedDict(CP[loc])
    with io.open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("patched", path)

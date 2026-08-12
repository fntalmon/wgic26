import json, io, collections

NAV = {
"en": {"theOrganisers": "The Organisers", "fullProgramme": "Full Programme", "news": "News"},
"es": {"theOrganisers": "Los organizadores", "fullProgramme": "Programa completo", "news": "Noticias"},
"ca": {"theOrganisers": "Els organitzadors", "fullProgramme": "Programa complet", "news": "Notícies"},
"fr": {"theOrganisers": "Les organisateurs", "fullProgramme": "Programme complet", "news": "Actualités"},
"pt": {"theOrganisers": "Os organizadores", "fullProgramme": "Programa completo", "news": "Notícias"},
}

for loc, tr in NAV.items():
    path = f"src/messages/{loc}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    nav = data["navigation"]
    nav.pop("congressProgramme", None)
    for k, v in tr.items():
        nav[k] = v
    with io.open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("patched", path)

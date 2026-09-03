import json, io, collections

T = {
"en": {
  "cataloniaTitle": "Feel our culture. Live Catalonia.",
  "cataloniaDescription": "Catalonia shapes its landscape as much as its landscape shapes Catalonia. From Gaudí's organic forms to the Mediterranean coastline, from historic urban fabric to contemporary design, tradition and innovation grow side by side here. A living heritage that keeps inspiring the way we build and imagine space.",
  "culturalTourism": "Cultural tourism in Catalonia"
},
"es": {
  "cataloniaTitle": "Siente nuestra cultura. Vive Cataluña.",
  "cataloniaDescription": "Cataluña da forma a su paisaje tanto como su paisaje da forma a Cataluña. De las formas orgánicas de Gaudí a la costa mediterránea, del tejido urbano histórico al diseño contemporáneo, tradición e innovación crecen aquí lado a lado. Un patrimonio vivo que sigue inspirando la manera en que construimos e imaginamos el espacio.",
  "culturalTourism": "Turismo cultural en Cataluña"
},
"ca": {
  "cataloniaTitle": "Senteix la nostra cultura. Viu Catalunya.",
  "cataloniaDescription": "Catalunya dona forma al seu paisatge tant com el paisatge dona forma a Catalunya. De les formes orgàniques de Gaudí a la costa mediterrània, del teixit urbà històric al disseny contemporani, tradició i innovació hi creixen costat a costat. Un patrimoni viu que continua inspirant la manera com construïm i imaginem l'espai.",
  "culturalTourism": "Turisme cultural a Catalunya"
},
"fr": {
  "cataloniaTitle": "Ressentez notre culture. Vivez la Catalogne.",
  "cataloniaDescription": "La Catalogne façonne son paysage autant que son paysage façonne la Catalogne. Des formes organiques de Gaudí au littoral méditerranéen, du tissu urbain historique au design contemporain, tradition et innovation y croissent côte à côte. Un patrimoine vivant qui continue d'inspirer notre façon de construire et d'imaginer l'espace.",
  "culturalTourism": "Tourisme culturel en Catalogne"
},
"pt": {
  "cataloniaTitle": "Sinta a nossa cultura. Viva a Catalunha.",
  "cataloniaDescription": "A Catalunha molda a sua paisagem tanto como a paisagem molda a Catalunha. Das formas orgânicas de Gaudí à costa mediterrânica, do tecido urbano histórico ao design contemporâneo, tradição e inovação crescem lado a lado. Um património vivo que continua a inspirar a forma como construímos e imaginamos o espaço.",
  "culturalTourism": "Turismo cultural na Catalunha"
}
}

for loc, tr in T.items():
    path = f"src/messages/{loc}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    pys = data["planYourStayPage"]
    pys["cataloniaTitle"] = tr["cataloniaTitle"]
    pys["cataloniaDescription"] = tr["cataloniaDescription"]
    pys["culturalTourism"] = tr["culturalTourism"]
    with io.open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("patched", path)

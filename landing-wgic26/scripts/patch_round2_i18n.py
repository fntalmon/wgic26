import json, io, collections

PHRASE = {
"en": "Register before 30 September and save 15%",
"es": "Inscríbete antes del 30 de septiembre y ahorra un 15%",
"ca": "Inscriu-te abans del 30 de setembre i estalvia un 15%",
"fr": "Inscrivez-vous avant le 30 septembre et économisez 15 %",
"pt": "Inscreva-se antes de 30 de setembro e poupe 15%",
}
TICKETS = {
"en": "Register now",
"es": "Inscríbete ahora",
"ca": "Inscriu-te ara",
"fr": "S'inscrire",
"pt": "Inscreva-se",
}
FULLPROG = {
"en": "Program",
"es": "Programa",
"ca": "Programa",
"fr": "Programme",
"pt": "Programa",
}

for loc in PHRASE:
    path = f"src/messages/{loc}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    nav = data["navigation"]
    nav["tickets"] = TICKETS[loc]
    nav["stripCta"] = PHRASE[loc]
    nav["fullProgramme"] = FULLPROG[loc]
    data["footer"]["tickets"] = TICKETS[loc]
    data["home"]["earlyBirdBanner"] = PHRASE[loc]
    data["registrationPage"]["earlyBirdBanner"] = PHRASE[loc]
    with io.open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("patched", path)

# Unify programme -> program in en.json (event-context keys only)
path = "src/messages/en.json"
with io.open(path, encoding="utf-8") as f:
    en = json.load(f, object_pairs_hook=collections.OrderedDict)

def setpath(obj, dotted, value):
    keys = dotted.split(".")
    cur = obj
    for k in keys[:-1]:
        cur = cur[k]
    cur[keys[-1]] = value

setpath(en, "home.newsletterSubtitle",
    "Program updates, keynote announcements and registration deadlines, straight to your inbox.")
faq_ans = en["registrationPage"]["faq"]["presenting"]["answer"]
en["registrationPage"]["faq"]["presenting"]["answer"] = faq_ans.replace("programme and proceedings", "program and proceedings")
setpath(en, "committeesPage.introP2",
    en["committeesPage"]["introP2"].replace("scientific programme", "scientific program"))
setpath(en, "committeesPage.scientificSubtitle", "Peer review and scientific program")
en["programmeDownload"]["buttonLabel"] = "Download Program (PDF)"
en["programmeDownload"]["footerLabel"] = "Program (PDF)"

# generic event-context replacements in remaining en.json strings
def walk(obj, trail=()):
    if isinstance(obj, dict):
        for k, v in obj.items():
            walk(v, trail + (k,))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, trail + (str(i),))
    elif isinstance(obj, str) and "programme" in obj.lower():
        print("REMAIN:", ".".join(trail), "=>", obj[:110])

with io.open(path, "w", encoding="utf-8") as f:
    json.dump(en, f, ensure_ascii=False, indent=2)
    f.write("\n")
print("patched", path)
walk(en)

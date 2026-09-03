# -*- coding: utf-8 -*-
"""Add home slider slide copy (title/subtitle/cta) to all locale messages."""
import io
import json
from collections import OrderedDict

SLIDES = {
    "en": {
        "slide1Title": "World Green Infrastructure Congress 2026",
        "slide1Subtitle": "The researchers, designers and city-makers building greener cities meet in Barcelona and Lleida. Register before September 30 and save 15%.",
        "slide1Cta": "Get your early bird ticket",
        "slide2Title": "Climate resilience. Water. Health. Biodiversity. Green jobs.",
        "slide2Subtitle": "137 papers from 31 countries, gathered around one question: how green infrastructure builds a healthier and safer urban future.",
        "slide2Cta": "Explore the main topics",
        "slide3Title": "Two days of congress, one day across Barcelona, one day of research in Lleida",
        "slide3Subtitle": "Six duet keynotes, five parallel tracks and 98 oral presentations from 31 countries.",
        "slide3Cta": "Explore the programme",
        "slide4Title": "Barcelona is the case study. Walk through it.",
        "slide4Subtitle": "Exclusive technical visits to green roofs and vertical gardens, guided by the teams that built them. Limited places.",
        "slide4Cta": "Discover the technical visits",
    },
    "es": {
        "slide1Title": "World Green Infrastructure Congress 2026",
        "slide1Subtitle": "Los investigadores, diseñadores y urbanistas que construyen ciudades más verdes se reúnen en Barcelona y Lleida. Inscríbete antes del 30 de septiembre y ahorra un 15%.",
        "slide1Cta": "Consigue tu entrada early bird",
        "slide2Title": "Resiliencia climática. Agua. Salud. Biodiversidad. Empleo verde.",
        "slide2Subtitle": "137 artículos de 31 países reunidos en torno a una pregunta: cómo la infraestructura verde construye un futuro urbano más saludable y seguro.",
        "slide2Cta": "Explora los temas principales",
        "slide3Title": "Dos días de congreso, un día por Barcelona y un día de investigación en Lleida",
        "slide3Subtitle": "Seis keynotes a dúo, cinco sesiones paralelas y 98 presentaciones orales de 31 países.",
        "slide3Cta": "Explora el programa",
        "slide4Title": "Barcelona es el caso de estudio. Recórrela.",
        "slide4Subtitle": "Visitas técnicas exclusivas a cubiertas vegetales y jardines verticales, guiadas por los equipos que los construyeron. Plazas limitadas.",
        "slide4Cta": "Descubre las visitas técnicas",
    },
    "ca": {
        "slide1Title": "World Green Infrastructure Congress 2026",
        "slide1Subtitle": "Els investigadors, dissenyadors i urbanistes que construeixen ciutats més verdes es troben a Barcelona i Lleida. Inscriu-te abans del 30 de setembre i estalvia un 15%.",
        "slide1Cta": "Aconsegueix la teva entrada early bird",
        "slide2Title": "Resiliència climàtica. Aigua. Salut. Biodiversitat. Ocupació verda.",
        "slide2Subtitle": "137 articles de 31 països reunits al voltant d'una pregunta: com la infraestructura verda construeix un futur urbà més saludable i segur.",
        "slide2Cta": "Explora els temes principals",
        "slide3Title": "Dos dies de congrés, un dia per Barcelona i un dia de recerca a Lleida",
        "slide3Subtitle": "Sis keynotes a duo, cinc sessions paral·leles i 98 presentacions orals de 31 països.",
        "slide3Cta": "Explora el programa",
        "slide4Title": "Barcelona és el cas d'estudi. Recorre-la.",
        "slide4Subtitle": "Visites tècniques exclusives a cobertes vegetals i jardins verticals, guiades pels equips que els van construir. Places limitades.",
        "slide4Cta": "Descobreix les visites tècniques",
    },
    "fr": {
        "slide1Title": "World Green Infrastructure Congress 2026",
        "slide1Subtitle": "Les chercheurs, concepteurs et bâtisseurs de villes plus vertes se retrouvent à Barcelone et Lleida. Inscrivez-vous avant le 30 septembre et économisez 15 %.",
        "slide1Cta": "Profitez du tarif early bird",
        "slide2Title": "Résilience climatique. Eau. Santé. Biodiversité. Emplois verts.",
        "slide2Subtitle": "137 articles de 31 pays réunis autour d'une question : comment l'infrastructure verte construit un avenir urbain plus sain et plus sûr.",
        "slide2Cta": "Explorez les thèmes principaux",
        "slide3Title": "Deux jours de congrès, une journée dans Barcelone et une journée de recherche à Lleida",
        "slide3Subtitle": "Six keynotes en duo, cinq sessions parallèles et 98 présentations orales de 31 pays.",
        "slide3Cta": "Explorez le programme",
        "slide4Title": "Barcelone est l'étude de cas. Parcourez-la.",
        "slide4Subtitle": "Visites techniques exclusives de toitures végétalisées et de jardins verticaux, guidées par les équipes qui les ont construits. Places limitées.",
        "slide4Cta": "Découvrez les visites techniques",
    },
    "pt": {
        "slide1Title": "World Green Infrastructure Congress 2026",
        "slide1Subtitle": "Os investigadores, designers e urbanistas que constroem cidades mais verdes encontram-se em Barcelona e Lleida. Inscreva-se antes de 30 de setembro e poupe 15%.",
        "slide1Cta": "Garanta o seu bilhete early bird",
        "slide2Title": "Resiliência climática. Água. Saúde. Biodiversidade. Empregos verdes.",
        "slide2Subtitle": "137 artigos de 31 países reunidos em torno de uma pergunta: como a infraestrutura verde constrói um futuro urbano mais saudável e seguro.",
        "slide2Cta": "Explore os temas principais",
        "slide3Title": "Dois dias de congresso, um dia por Barcelona e um dia de investigação em Lleida",
        "slide3Subtitle": "Seis keynotes em dueto, cinco sessões paralelas e 98 apresentações orais de 31 países.",
        "slide3Cta": "Explore o programa",
        "slide4Title": "Barcelona é o caso de estudo. Percorra-a.",
        "slide4Subtitle": "Visitas técnicas exclusivas a coberturas verdes e jardins verticais, guiadas pelas equipas que os construíram. Lugares limitados.",
        "slide4Cta": "Descubra as visitas técnicas",
    },
}

for loc, keys in SLIDES.items():
    p = f"src/messages/{loc}.json"
    d = json.load(io.open(p, encoding="utf-8"), object_pairs_hook=OrderedDict)
    home = d["home"]
    for k in list(keys):
        if k in home:
            del home[k]
    home.update(keys)
    io.open(p, "w", encoding="utf-8", newline="\n").write(
        json.dumps(d, ensure_ascii=False, indent=2) + "\n"
    )
    print(f"{loc}: {len(keys)} keys añadidas a home")

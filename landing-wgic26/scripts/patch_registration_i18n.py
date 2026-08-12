import json, io, collections

T = {
"en": {
  "earlyBirdTag": "-15% early bird",
  "earlyBirdUntil": "early bird · until 30 Sept",
  "bestValue": "Best value",
  "congressIncluded": "Congress access included",
  "proofEnrolment": "Proof of enrolment required",
  "galaAddon": "Add on at registration",
  "feesSelect": "Select",
  "chooseOption": "Choose your option",
  "feesIncludeNote": "All fees include access to keynotes, parallel sessions, the exhibition area, coffee breaks and the certificate of attendance.",
  "readyTitle": "Ready?",
  "readyText": "Registration takes about three minutes on our registration platform, Helice.",
  "readyButton": "Register now",
  "readyNote": "Secure payment · Invoice available · Confirmation by email",
  "legalNoticeIntro": "Registration is managed through the external Helice platform, where your personal data is collected and where you will be asked for the corresponding consents. Below you can review the data protection information.",
  "faqIncludedQ": "What's included in my registration?",
  "faqIncludedA": "All fees include access to the keynote sessions, parallel sessions, the exhibition area, coffee breaks and lunches during the congress, as well as the certificate of attendance. The gala dinner requires a separate ticket.",
  "faqPresentingQ": "I'm presenting — do I still need to register?",
  "faqPresentingA": "Yes. Authors presenting a paper or poster must register with the Oral presentation or Poster fee, which includes full congress access. At least one author per paper must register before the deadline for the paper to appear in the programme and proceedings."
},
"es": {
  "earlyBirdTag": "-15% early bird",
  "earlyBirdUntil": "early bird · hasta el 30 sept",
  "bestValue": "Mejor opción",
  "congressIncluded": "Acceso al congreso incluido",
  "proofEnrolment": "Se requiere justificante de matrícula",
  "galaAddon": "Añádelo durante la inscripción",
  "feesSelect": "Seleccionar",
  "chooseOption": "Elige tu opción",
  "feesIncludeNote": "Todas las tarifas incluyen acceso a los keynotes, sesiones paralelas, zona de exposición, coffee breaks y el certificado de asistencia.",
  "readyTitle": "¿Listo?",
  "readyText": "La inscripción lleva unos tres minutos en nuestra plataforma de registro, Helice.",
  "readyButton": "Inscríbete ahora",
  "readyNote": "Pago seguro · Factura disponible · Confirmación por email",
  "legalNoticeIntro": "La inscripción se gestiona a través de la plataforma externa Helice, donde se recogen tus datos personales y donde se te pedirán los consentimientos correspondientes. A continuación puedes consultar la información de protección de datos.",
  "faqIncludedQ": "¿Qué incluye mi inscripción?",
  "faqIncludedA": "Todas las tarifas incluyen acceso a las sesiones plenarias y paralelas, la zona de exposición, los coffee breaks y las comidas durante el congreso, además del certificado de asistencia. La cena de gala requiere una entrada aparte.",
  "faqPresentingQ": "Soy ponente, ¿tengo que inscribirme igualmente?",
  "faqPresentingA": "Sí. Los autores que presentan un paper o un póster deben inscribirse con la tarifa de Oral presentation o Poster, que incluye el acceso completo al congreso. Al menos un autor por trabajo debe estar inscrito antes de la fecha límite para que el trabajo aparezca en el programa y las actas."
},
"ca": {
  "earlyBirdTag": "-15% early bird",
  "earlyBirdUntil": "early bird · fins al 30 set",
  "bestValue": "Millor opció",
  "congressIncluded": "Accés al congrés inclòs",
  "proofEnrolment": "Cal justificant de matrícula",
  "galaAddon": "Afegeix-lo durant la inscripció",
  "feesSelect": "Seleccionar",
  "chooseOption": "Tria la teva opció",
  "feesIncludeNote": "Totes les tarifes inclouen accés als keynotes, sessions paral·leles, zona d'exposició, coffee breaks i el certificat d'assistència.",
  "readyTitle": "A punt?",
  "readyText": "La inscripció triga uns tres minuts a la nostra plataforma de registre, Helice.",
  "readyButton": "Inscriu-te ara",
  "readyNote": "Pagament segur · Factura disponible · Confirmació per correu",
  "legalNoticeIntro": "La inscripció es gestiona a través de la plataforma externa Helice, on es recullen les teves dades personals i on se't demanaran els consentiments corresponents. A continuació pots consultar la informació de protecció de dades.",
  "faqIncludedQ": "Què inclou la meva inscripció?",
  "faqIncludedA": "Totes les tarifes inclouen accés a les sessions plenàries i paral·leles, la zona d'exposició, els coffee breaks i els dinars durant el congrés, a més del certificat d'assistència. El sopar de gala requereix una entrada a part.",
  "faqPresentingQ": "Sóc ponent, he d'inscriure'm igualment?",
  "faqPresentingA": "Sí. Els autors que presenten un article o un pòster han d'inscriure's amb la tarifa d'Oral presentation o Poster, que inclou l'accés complet al congrés. Almenys un autor per treball ha d'estar inscrit abans de la data límit perquè el treball aparegui al programa i a les actes."
},
"fr": {
  "earlyBirdTag": "-15% early bird",
  "earlyBirdUntil": "early bird · jusqu'au 30 sept",
  "bestValue": "Meilleure option",
  "congressIncluded": "Accès au congrès inclus",
  "proofEnrolment": "Justificatif d'inscription requis",
  "galaAddon": "À ajouter lors de l'inscription",
  "feesSelect": "Sélectionner",
  "chooseOption": "Choisissez votre option",
  "feesIncludeNote": "Tous les tarifs incluent l'accès aux keynotes, aux sessions parallèles, à la zone d'exposition, aux pauses-café et au certificat de participation.",
  "readyTitle": "Prêt(e) ?",
  "readyText": "L'inscription prend environ trois minutes sur notre plateforme d'inscription, Helice.",
  "readyButton": "S'inscrire maintenant",
  "readyNote": "Paiement sécurisé · Facture disponible · Confirmation par email",
  "legalNoticeIntro": "L'inscription est gérée via la plateforme externe Helice, où vos données personnelles sont collectées et où les consentements correspondants vous seront demandés. Vous pouvez consulter ci-dessous les informations sur la protection des données.",
  "faqIncludedQ": "Que comprend mon inscription ?",
  "faqIncludedA": "Tous les tarifs incluent l'accès aux sessions plénières et parallèles, à la zone d'exposition, aux pauses-café et aux déjeuners pendant le congrès, ainsi qu'au certificat de participation. Le dîner de gala nécessite un billet séparé.",
  "faqPresentingQ": "Je présente un article — dois-je quand même m'inscrire ?",
  "faqPresentingA": "Oui. Les auteurs qui présentent un article ou un poster doivent s'inscrire avec le tarif Oral presentation ou Poster, qui inclut l'accès complet au congrès. Au moins un auteur par article doit être inscrit avant la date limite pour que l'article figure dans le programme et les actes."
},
"pt": {
  "earlyBirdTag": "-15% early bird",
  "earlyBirdUntil": "early bird · até 30 set",
  "bestValue": "Melhor opção",
  "congressIncluded": "Acesso ao congresso incluído",
  "proofEnrolment": "É necessário comprovativo de matrícula",
  "galaAddon": "Adicione durante a inscrição",
  "feesSelect": "Selecionar",
  "chooseOption": "Escolha a sua opção",
  "feesIncludeNote": "Todas as tarifas incluem acesso aos keynotes, sessões paralelas, zona de exposição, coffee breaks e o certificado de participação.",
  "readyTitle": "Preparado?",
  "readyText": "A inscrição demora cerca de três minutos na nossa plataforma de registo, Helice.",
  "readyButton": "Inscrever-se agora",
  "readyNote": "Pagamento seguro · Fatura disponível · Confirmação por email",
  "legalNoticeIntro": "A inscrição é gerida através da plataforma externa Helice, onde os seus dados pessoais são recolhidos e onde lhe serão pedidos os consentimentos correspondentes. Em seguida pode consultar a informação de proteção de dados.",
  "faqIncludedQ": "O que está incluído na minha inscrição?",
  "faqIncludedA": "Todas as tarifas incluem acesso às sessões plenárias e paralelas, à zona de exposição, aos coffee breaks e aos almoços durante o congresso, além do certificado de participação. O jantar de gala requer um bilhete separado.",
  "faqPresentingQ": "Vou apresentar — tenho de me inscrever na mesma?",
  "faqPresentingA": "Sim. Os autores que apresentam um artigo ou um póster devem inscrever-se com a tarifa Oral presentation ou Poster, que inclui acesso completo ao congresso. Pelo menos um autor por trabalho deve estar inscrito antes da data limite para que o trabalho conste do programa e das atas."
}
}

for loc, tr in T.items():
    path = f"src/messages/{loc}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    rp = data["registrationPage"]
    for k in ["earlyBirdTag","earlyBirdUntil","bestValue","congressIncluded","proofEnrolment",
              "galaAddon","feesSelect","chooseOption","feesIncludeNote","readyTitle","readyText",
              "readyButton","readyNote","legalNoticeIntro"]:
        rp[k] = tr[k]
    faq = rp["faq"]
    newfaq = collections.OrderedDict()
    newfaq["included"] = {"question": tr["faqIncludedQ"], "answer": tr["faqIncludedA"]}
    for k, v in faq.items():
        if k in ("included", "presenting"):
            continue
        newfaq[k] = v
    newfaq["presenting"] = {"question": tr["faqPresentingQ"], "answer": tr["faqPresentingA"]}
    rp["faq"] = newfaq
    with io.open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("patched", path)

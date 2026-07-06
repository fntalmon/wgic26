import json
import os
import time
from deep_translator import GoogleTranslator

BASE = os.path.join(os.path.dirname(__file__), "..", "src", "messages")
SOURCE = os.path.join(BASE, "en.json")


def translate_obj(obj, translator, cache, stats):
    if isinstance(obj, str):
        if not obj.strip():
            return obj
        if obj in cache:
            return cache[obj]
        try:
            translated = translator.translate(obj)
            cache[obj] = translated
            stats["translated"] += 1
            if stats["translated"] % 50 == 0:
                print(f"  ...{stats['translated']} strings translated")
            time.sleep(0.02)
            return translated
        except Exception as e:
            print(f"Error translating {obj[:80]!r}: {e}")
            stats["errors"] += 1
            return obj
    elif isinstance(obj, dict):
        return {k: translate_obj(v, translator, cache, stats) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [translate_obj(item, translator, cache, stats) for item in obj]
    else:
        return obj


def main():
    with open(SOURCE, "r", encoding="utf-8") as f:
        data = json.load(f)

    for target in ["pt", "fr"]:
        print(f"Translating to {target}...")
        translator = GoogleTranslator(source="en", target=target)
        cache = {}
        stats = {"translated": 0, "errors": 0}
        translated = translate_obj(data, translator, cache, stats)
        out = os.path.join(BASE, f"{target}.json")
        with open(out, "w", encoding="utf-8") as f:
            json.dump(translated, f, ensure_ascii=False, indent=2)
        print(f"Wrote {out} ({stats['translated']} translated, {stats['errors']} errors)")


if __name__ == "__main__":
    main()

import json
from pathlib import Path

DATA_PATH = Path(__file__).parent.parent / "data" / "gods.json"


with open(DATA_PATH, encoding="utf-8") as f:
        GODS =  json.load(f)

def load_gods():
    return GODS

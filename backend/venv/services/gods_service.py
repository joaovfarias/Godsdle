import json
from pathlib import Path

DATA_PATH = Path(__file__).parent.parent / "data" / "gods.json"

def load_gods():
    with open(DATA_PATH, encoding="utf-8") as f:
        return json.load(f)

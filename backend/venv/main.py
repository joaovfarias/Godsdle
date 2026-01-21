import os
from datetime import date, datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from routers.gods import router as gods_router
from routers.autocomplete import router as autocomplete_router
from services.gods_service import load_gods


def get_allowed_origins():
    raw = os.getenv("FRONTEND_ORIGINS", "http://localhost:5173")
    return [origin.strip() for origin in raw.split(",") if origin.strip()]


def get_start_date():
    raw = os.getenv("START_DATE", "2026-03-01")
    try:
        return datetime.fromisoformat(raw).date()
    except ValueError:
        return date(2026, 3, 1)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(gods_router)
app.include_router(autocomplete_router)

IMAGES_DIR = Path(__file__).parent / "data" / "images"
app.mount("/images", StaticFiles(directory=str(IMAGES_DIR)), name="images")

@app.get("/")
def root():
    return {"status": "funcinando"}

START_DATE = get_start_date()

@app.get("/today")
def today():
    today = date.today()
    days_since_start = (today - START_DATE).days

    gods = load_gods()
    god_of_the_day = gods[days_since_start % len(gods)]

    return {
        "date": today.isoformat(),
        "god": {
            "id": god_of_the_day["id"],
            "name": god_of_the_day["name"],
            "pantheon": god_of_the_day["pantheon"],
            "gender": god_of_the_day["gender"],
            "domain": god_of_the_day["domain"],
            "symbol": god_of_the_day["symbol"],
            "personality": god_of_the_day["personality"],
            "type": god_of_the_day["type"],
            "realm": god_of_the_day["realm"],
            "image": god_of_the_day.get("image"),
        }
    }

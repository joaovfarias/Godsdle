from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from routers.gods import router as gods_router
from routers.autocomplete import router as autocomplete_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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

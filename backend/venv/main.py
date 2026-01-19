from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.gods import router as gods_router
from routers.autocomplete import router as autocomplete_router


app = FastAPI()

app.include_router(gods_router)
app.include_router(autocomplete_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "funcinando"}

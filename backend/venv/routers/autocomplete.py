from fastapi import APIRouter, Query
from services.gods_service import load_gods

router = APIRouter(prefix="/autocomplete", tags=["Autocomplete"])

@router.get("/")
def autocomplete(query: str = Query(..., min_length=1)):
    gods = load_gods()
    q = query.lower()

    matches = [
        {"id": g["id"], "name": g["name"]}
        for g in gods
        if g["name"].lower().startswith(q)
    ]

    return matches

from fastapi import APIRouter, Query
from services.gods_service import load_gods

router = APIRouter(tags=["Autocomplete"])

@router.get("/autocomplete")
def autocomplete(query: str = Query(..., min_length=1)):
    gods = load_gods()
    q = query.lower()

    matches = []

    for g in gods:
        name = g.get("name")

        if not isinstance(name, str):
            continue

        if name.lower().startswith(q):
            matches.append({
                "id": g.get("id"),
                "name": name,
                "image": g.get("image")
            })

    return matches

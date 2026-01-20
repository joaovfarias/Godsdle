from fastapi import APIRouter
from services.gods_service import load_gods

router = APIRouter(tags=["Gods"])

@router.get("/gods")
def get_all_gods():
    return load_gods()
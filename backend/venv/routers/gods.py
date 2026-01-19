from fastapi import APIRouter
from services.gods_service import load_gods

router = APIRouter(prefix="/gods", tags=["Gods"])

@router.get("/")
def get_all_gods():
    return load_gods()
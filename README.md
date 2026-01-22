# Godsdle — Guess the Gods Game

A Wordle-style single-page game where players guess Greek/Norse gods, demigods, and titans based on hints like gender, domain, and symbols. Built with **React** (frontend) and **FastAPI** (backend).

---

## Live
* Play now: https://godsdle.vercel.app/


---

## Features

* Daily god of the day (deterministic, same for all players)
* Track guesses, wins, and games played 
---

## Tech Stack

* **Frontend:** React + Vite
* **Backend:** FastAPI 

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/joaovfarias/godsdle.git
cd godsdle
```

### 2. Backend setup

```bash
cd api
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate         # Windows

pip install -r requirements.txt
```

**Environment variables** (`.env`):

```
FRONTEND_ORIGINS=http://localhost:5173
```

### 3. Run backend locally

```bash
uvicorn index:app --reload
```

### 4. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

* Open [http://localhost:5173](http://localhost:5173) in browser

---

## Notes / Tips

* **Next god resets at 00:00 UTC**
* Stats are stored locally in the browser (`localStorage`)

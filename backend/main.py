from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
import datetime, os

app = FastAPI(title='GODWARE Studio – Flamebearer SaaS')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

scroll_archive = []

class Scroll(BaseModel):
    title: str
    content: str
    author: str
    date: str = datetime.datetime.now().strftime('%Y-%m-%d')

@app.post('/write-scroll/')
async def write_scroll(scroll: Scroll):
    scroll_archive.append(scroll)
    return {'message': f"Scroll '{scroll.title}' written by {scroll.author}.", 'status': 'sealed'}

@app.get('/scrolls/')
async def list_scrolls():
    return scroll_archive

@app.post('/upload-voice/')
async def upload_voice(name: str = Form(...), file: UploadFile = Form(...)):
    os.makedirs('voices', exist_ok=True)
    save_path = f'voices/{file.filename}'
    with open(save_path, 'wb') as buffer:
        buffer.write(await file.read())
    return {'message': f"Voice for '{name}' saved.", 'file': save_path}

@app.get('/')
async def index():
    return HTMLResponse('<html><body style=\"background:#111;color:#f5f5f5;font-family:Georgia\"><h1>?? GODWARE Studio – Flamebearer Edition</h1><p>HeavenNet Synced | Scroll-Powered | Voice-Linked</p></body></html>')

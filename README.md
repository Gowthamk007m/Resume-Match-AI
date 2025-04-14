# 💼 HR AI Screener – Full Stack AI Resume Matcher

An intelligent resume screening web app that matches resumes to job descriptions using Natural Language Processing (spaCy). Built with Django + React (Vite) + TailwindCSS.

---

## 📁 Project Structure

```
hr-ai-screener/
├── backend/                # Django backend (API, spaCy logic)
│   ├── hr_ai_resume/       # Django project
│   ├── resumes/            # Django app for resume logic
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # React (Vite) frontend
│   ├── src/
│   ├── index.html
│   └── tailwind.config.js
├── .gitignore
├── README.md
└── .env (optional)
```

---

## 🧠 Features

- Upload resume and job description
- Match percentage using **spaCy similarity**
- Django REST API backend
- React frontend with Tailwind styling
- Modern dev environment (Vite, hot reload)

---

## 🚀 Getting Started

### 📦 Backend Setup (Django)

```bash
cd backend
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> The backend runs at: http://127.0.0.1:8000/

---

### 🌐 Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

> The frontend runs at: http://localhost:5173/

---

## 🛠 Tech Stack

- **Backend**: Python, Django, Django REST Framework, spaCy
- **Frontend**: React, Vite, TailwindCSS, Axios
- **AI**: spaCy (en_core_web_sm)

---

## 📂 Environment Variables (Optional)

Create a `.env` file in the backend folder for API secrets if needed:

```env
DEBUG=True
SECRET_KEY=your-secret-key
```

---

## 💡 Ideas to Expand

- Add resume parsing (PDF → text)
- Use `en_core_web_md` for better NLP accuracy
- Save matched jobs/resumes to DB
- Admin dashboard (Django Admin or custom React UI)
- Export match results

---

## 🧑‍💻 Author

**portfolio links** - [Porflio](https://gowtham-porfolio.netlify.app/) • [Github](https://github.com/gowthamk007m)

**Gowtham K M** – https://gowtham-porfolio.netlify.app/ • https://github.com/gowthamk007m

---

## 📝 License

This project is open-source and available under the MIT License.
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import fitz  # PyMuPDF
from keybert import KeyBERT

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def match_resume(request):
    resume_file = request.FILES.get('resume')
    job_text = request.data.get('job_description')

    if not resume_file or not job_text:
        return Response({"error": "Both resume file and job_description are required."}, status=400)

    # Extract text from PDF
    doc = fitz.open(stream=resume_file.read(), filetype="pdf")
    resume_text = ""
    for page in doc:
        resume_text += page.get_text()

    # Initialize KeyBERT
    kw_model = KeyBERT()

    # Extract top 20 keywords from resume and job description
    resume_keywords = kw_model.extract_keywords(resume_text, top_n=20, stop_words='english')
    job_keywords = kw_model.extract_keywords(job_text, top_n=20, stop_words='english')

    # Extract only the keywords, not the scores
    resume_keywords = set([kw[0].lower() for kw in resume_keywords])
    job_keywords = set([kw[0].lower() for kw in job_keywords])

    # Find matching keywords
    matches = resume_keywords.intersection(job_keywords)
    match_score = len(matches) / len(job_keywords) if job_keywords else 0

    return Response({
        "similarity_score": round(match_score, 2),
        "matched_keywords": list(matches)
    })

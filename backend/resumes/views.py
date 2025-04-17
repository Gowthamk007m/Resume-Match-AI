from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import spacy
import fitz  # PyMuPDF

# Load spaCy model once
nlp = spacy.load('en_core_web_sm')

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def match_resume(request):
    resume_file = request.FILES.get('resume')
    job_text = request.data.get('job_description')

    if not resume_file or not job_text:
        return Response({"error": "Both resume file and job_description are required."}, status=400)

    # Read PDF and extract text
    doc = fitz.open(stream=resume_file.read(), filetype="pdf")
    resume_text = ""
    for page in doc:
        resume_text += page.get_text()

    # Process with spaCy
    resume_doc = nlp(resume_text)
    job_doc = nlp(job_text)

    # Calculate similarity
    similarity = resume_doc.similarity(job_doc)

    return Response({"similarity_score": round(similarity, 2)})

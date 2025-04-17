from rest_framework.decorators import api_view
from rest_framework.response import Response
import spacy

# Load spaCy model once when server starts
nlp = spacy.load('en_core_web_sm')

@api_view(['POST'])
def match_resume(request):
    resume_text = request.data.get('resume')
    job_text = request.data.get('job_description')

    if not resume_text or not job_text:
        return Response({"error": "Both resume and job_description are required."}, status=400)

    # Process with spaCy
    resume_doc = nlp(resume_text)
    job_doc = nlp(job_text)

    # Calculate similarity
    similarity = resume_doc.similarity(job_doc)

    return Response({"similarity_score": round(similarity, 2)})

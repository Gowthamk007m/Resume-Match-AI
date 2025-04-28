import React, { useState } from 'react';
import axios from 'axios';

function ResumeMatcher() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [similarityScore, setSimilarityScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile || !jobDescription) {
      alert('Please upload resume and enter job description.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('job_description', jobDescription);

    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/match/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSimilarityScore(response.data.similarity_score);
    } catch (error) {
      console.error('Error matching resume:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-md rounded bg-gradient-to-r from-[#2a8be62a] via-[#6b696a2a] to-[#74727231]">
      <h2 className="text-2xl font-bold mb-4 text-cyan-50">AI Resume Matcher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-cyan-50">Upload Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResumeFile(e.target.files[0])}
            className="border p-2 w-full text-cyan-50"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-cyan-50">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="border p-2 w-full bg-[#2a8be62a] text-cyan-50 "
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#2a8be62a] text-white px-4 py-2 rounded hover:bg-[#11416e] w-full"
          disabled={loading}
        >
          {loading ? 'Matching...' : 'Match Resume'}
        </button>
      </form>

      {similarityScore !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-cyan-50">Match Score:</h3>
          <p className="text-3xl text-green-600">{similarityScore * 100}%</p>
        </div>
      )}
    </div>
  );
}

export default ResumeMatcher;

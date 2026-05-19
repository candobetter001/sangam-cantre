import { FileText, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface Report {
  year: string;
  title: string;
  description: string;
  url?: string;
}

const REPORTS: Report[] = [
  {
    year: "2024–25",
    title: "Annual Report 2024–25",
    description: "Research activities, events hosted, publications released, and institutional partnerships over the year.",
  },
  {
    year: "2023–24",
    title: "Annual Report 2023–24",
    description: "Highlights from conferences, collaborative research output, and community engagements.",
  },
];

export default function AnnualReport() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="newspaper-heading text-4xl font-bold text-[#1e3a8a] dark:text-teal-200 mb-2">
          Annual Reports
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Transparency and accountability in our work — year by year.
        </p>

        <div className="space-y-4 mb-10">
          {REPORTS.map((report) => (
            <div
              key={report.year}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 dark:bg-teal-900 p-3 rounded-lg shrink-0">
                  <FileText className="text-teal-700 dark:text-teal-300" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#1e3a8a] dark:text-white">{report.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{report.description}</p>
                </div>
              </div>
              {report.url ? (
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Download size={16} /> Download PDF
                </a>
              ) : (
                <span className="shrink-0 text-sm text-gray-400 italic">Coming soon</span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-2">
            Media &amp; Research Requests
          </h2>
          <p className="text-teal-700 dark:text-teal-300 text-sm mb-3">
            For specific data or reports needed for research, journalism, or policy work, please reach out directly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-teal-700 dark:text-teal-300 font-medium hover:underline"
          >
            <Mail size={15} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

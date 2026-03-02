"use client"

export default function ProcessSection() {
  const radML = [
    {
      phase: "01",
      title: "Requirements Planning & Problem Framing",
      desc: "Identifikasi objective bisnis/riset, penentuan problem type (classification, regression, clustering, NLP, CV), definisi KPI, serta audit awal dataset dan sumber data.",
    },
    {
      phase: "02",
      title: "Exploratory Data Analysis (EDA)",
      desc: "Analisis distribusi data, missing values, outlier detection, correlation analysis, dan insight awal untuk memahami karakteristik dataset sebelum modeling.",
    },
    {
      phase: "03",
      title: "Data Preprocessing & Feature Engineering",
      desc: "Data cleaning, encoding categorical data, scaling/normalization, feature selection, feature engineering, handling imbalance (SMOTE/weighting), serta splitting train-validation-test.",
    },
    {
      phase: "04",
      title: "Rapid Prototyping Model",
      desc: "Pembuatan baseline model untuk validasi cepat menggunakan beberapa algoritma (Random Forest, XGBoost, Neural Network, dll).",
    },
    {
      phase: "05",
      title: "Iterative Training & Hyperparameter Tuning",
      desc: "Cross-validation, hyperparameter tuning (GridSearch/Optuna), eksperimen model comparison, dan optimasi performa sesuai KPI.",
    },
    {
      phase: "06",
      title: "Evaluation & Validation",
      desc: "Evaluasi menggunakan metrik relevan (Accuracy, F1, ROC-AUC, RMSE, dll), confusion matrix, dan error analysis.",
    },
    {
      phase: "07",
      title: "Model Packaging & Documentation",
      desc: "Export model (.pkl/.h5/.onnx), pembuatan dokumentasi penggunaan, serta panduan integrasi API jika diperlukan.",
    },
    {
      phase: "08",
      title: "Deployment (Optional)",
      desc: "Deploy model sebagai REST API (FastAPI/Flask), Docker container, atau integrasi ke sistem existing.",
    },
  ]

  const radAIWeb = [
    {
      phase: "01",
      title: "Business & System Blueprint",
      desc: "Analisis kebutuhan AI + Web/App, perancangan arsitektur sistem (AI pipeline, backend, frontend), serta perencanaan database & flow user.",
    },
    {
      phase: "02",
      title: "UI/UX Prototype & Validation",
      desc: "Pembuatan wireframe/dashboard prototype untuk validasi cepat sebelum masuk tahap development.",
    },
    {
      phase: "03",
      title: "AI Pipeline Development",
      desc: "Full ML lifecycle: EDA, preprocessing, feature engineering, model training, tuning, evaluation, dan packaging model.",
    },
    {
      phase: "04",
      title: "Backend API Development",
      desc: "Pengembangan REST API untuk integrasi model AI, autentikasi user, database integration, dan role management.",
    },
    {
      phase: "05",
      title: "Frontend Dashboard Development",
      desc: "Pembuatan web/app interface (Next.js/React) untuk input data, monitoring hasil prediksi, dan visualisasi analytics.",
    },
    {
      phase: "06",
      title: "Integration & System Testing",
      desc: "Pengujian end-to-end antara frontend, backend, dan model AI, termasuk load testing & performance optimization.",
    },
    {
      phase: "07",
      title: "Deployment & Cloud Setup",
      desc: "Deployment ke VPS / AWS / GCP, setup CI/CD, domain configuration, SSL, dan monitoring server.",
    },
    {
      phase: "08",
      title: "Monitoring & Iterative Improvement",
      desc: "Monitoring performa model (drift detection), update model berkala, dan iterative improvement sesuai feedback user.",
    },
  ]

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 overflow-hidden">

      {/* Glow Decoration */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[160px] opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[160px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Cara Kerja HINAI Tech
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Kami menggunakan pendekatan Rapid Application Development (RAD) untuk memastikan
            proses pengembangan AI berjalan cepat, iteratif, terukur, dan tetap berkualitas tinggi.
          </p>
        </div>

        {/* ML ONLY */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-center mb-12">
            🔹 Proses Lengkap Pembuatan Model Machine Learning
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {radML.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  Phase {step.phase}
                </div>

                <h4 className="mt-10 font-semibold text-lg mb-4">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI + WEB */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">
            🔹 Proses Lengkap AI + Website / Application Development
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {radAIWeb.map((step, i) => (
              <div
                key={i}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  Phase {step.phase}
                </div>

                <h4 className="mt-10 font-semibold text-lg mb-4">
                  {step.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
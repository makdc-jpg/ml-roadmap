import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "The Foundation",
    duration: "Months 1–3",
    color: "#ffd166",
    icon: "◈",
    summary: "Math, Python, and core ML theory. You can't skip this.",
    steps: [
      {
        title: "Python for Data Science",
        what: "Get fluent in Python specifically for ML work — not just syntax, but the scientific stack.",
        learn: ["NumPy — arrays, broadcasting, vectorized ops", "Pandas — data manipulation and cleaning", "Matplotlib & Seaborn — visualizing data", "Jupyter Notebooks — your main working environment"],
        practice: [
          { name: "Kaggle Learn — Python & Pandas", url: "https://www.kaggle.com/learn", type: "Free course" },
          { name: "freeCodeCamp — Data Analysis with Python", url: "https://www.freecodecamp.org", type: "Free course" },
        ],
        tip: "Do every exercise by hand first. Don't copy-paste. Understanding why NumPy is fast matters later.",
      },
      {
        title: "Linear Algebra & Statistics",
        what: "The math behind every ML model. You need enough to understand what's happening, not to prove theorems.",
        learn: ["Vectors, matrices, dot products, matrix multiplication", "Eigenvalues & eigenvectors (PCA depends on this)", "Probability distributions — normal, Bernoulli, Poisson", "Bayes' theorem, conditional probability", "Mean, variance, standard deviation, correlation"],
        practice: [
          { name: "3Blue1Brown — Essence of Linear Algebra (YouTube)", url: "https://www.youtube.com/c/3blue1brown", type: "Free video series" },
          { name: "Khan Academy — Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability", type: "Free course" },
          { name: "StatQuest with Josh Starmer (YouTube)", url: "https://www.youtube.com/@statquest", type: "Free video series" },
        ],
        tip: "3Blue1Brown's linear algebra series is the best visual intuition-builder that exists. Watch it before anything else.",
      },
      {
        title: "Core ML Theory",
        what: "Understand the fundamental algorithms and the ideas behind them.",
        learn: ["Supervised vs unsupervised vs reinforcement learning", "Linear & logistic regression", "Decision trees, random forests, gradient boosting", "Bias-variance tradeoff, overfitting, regularization", "Cross-validation and evaluation metrics (precision, recall, F1, AUC)"],
        practice: [
          { name: "Andrew Ng — ML Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction", type: "Paid / audit free" },
          { name: "fast.ai — Practical Deep Learning", url: "https://www.fast.ai", type: "Free course" },
          { name: "Scikit-learn docs + tutorials", url: "https://scikit-learn.org/stable/tutorial/", type: "Free docs" },
        ],
        tip: "Andrew Ng's course is 10 years old and still the best starting point. Don't skip the math explanations.",
      },
    ],
  },
  {
    id: 2,
    title: "Deep Learning",
    duration: "Months 3–6",
    color: "#06d6a0",
    icon: "◉",
    summary: "Neural networks, PyTorch, and building real models from scratch.",
    steps: [
      {
        title: "Neural Networks from Scratch",
        what: "Before using a framework, build a neural net manually so you actually understand backprop and gradients.",
        learn: ["Perceptrons and activation functions (ReLU, sigmoid, softmax)", "Forward pass and loss functions (MSE, cross-entropy)", "Backpropagation — chain rule, gradient flow", "Gradient descent, learning rate, batch size", "Build a small net in pure NumPy first"],
        practice: [
          { name: "Andrej Karpathy — Neural Networks: Zero to Hero (YouTube)", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", type: "Free video series" },
          { name: "Michael Nielsen — Neural Networks and Deep Learning (free book)", url: "http://neuralnetworksanddeeplearning.com", type: "Free book" },
        ],
        tip: "Karpathy's Zero to Hero series is the single best resource for understanding deep learning from first principles. Non-negotiable.",
      },
      {
        title: "PyTorch",
        what: "The dominant framework for both research and production ML. Learn it deeply.",
        learn: ["Tensors and autograd", "Building models with nn.Module", "Training loops — forward, loss, backward, optimizer.step()", "CNNs for image tasks, RNNs/LSTMs for sequences", "Saving, loading, and inspecting models"],
        practice: [
          { name: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "Free docs" },
          { name: "Andrej Karpathy — makemore & nanoGPT (GitHub)", url: "https://github.com/karpathy", type: "Free project" },
          { name: "Papers With Code — reimplement a paper", url: "https://paperswithcode.com", type: "Free resource" },
        ],
        tip: "The best PyTorch exercise: reimplement a paper you've read. Start with something simple like LeNet or Word2Vec.",
      },
      {
        title: "Transformers & Modern Architectures",
        what: "Transformers are the backbone of modern ML. You need to understand them deeply.",
        learn: ["Attention mechanism — queries, keys, values", "Self-attention and multi-head attention", "The original Transformer paper (Vaswani et al. 2017)", "BERT (encoder), GPT (decoder), T5 (encoder-decoder)", "Hugging Face ecosystem — models, tokenizers, datasets"],
        practice: [
          { name: "The Illustrated Transformer — Jay Alammar", url: "https://jalammar.github.io/illustrated-transformer/", type: "Free article" },
          { name: "Hugging Face Course", url: "https://huggingface.co/learn/nlp-course/chapter1/1", type: "Free course" },
          { name: "Andrej Karpathy — nanoGPT (build GPT from scratch)", url: "https://github.com/karpathy/nanoGPT", type: "Free project" },
        ],
        tip: "Read the Attention Is All You Need paper after watching Karpathy's nanoGPT walkthrough. The order matters — see it work before reading the theory.",
      },
    ],
  },
  {
    id: 3,
    title: "Applied ML Engineering",
    duration: "Months 6–10",
    color: "#118ab2",
    icon: "◆",
    summary: "This is what separates you from data scientists. Build real systems.",
    steps: [
      {
        title: "MLOps & Experiment Tracking",
        what: "Real ML engineering is 80% infrastructure. Learn how production ML systems are managed.",
        learn: ["Experiment tracking with Weights & Biases or MLflow", "Reproducibility — seeds, config files, versioning", "Model registries and versioning", "CI/CD for ML pipelines", "Docker basics — containerizing models"],
        practice: [
          { name: "Weights & Biases — Effective MLOps course", url: "https://www.wandb.courses/courses/effective-mlops-model-development", type: "Free course" },
          { name: "MLflow Getting Started Guide", url: "https://mlflow.org/docs/latest/getting-started/", type: "Free docs" },
          { name: "Full Stack Deep Learning (FSDL)", url: "https://fullstackdeeplearning.com", type: "Free course" },
        ],
        tip: "Full Stack Deep Learning is the best course for applied ML engineering specifically. It covers the entire lifecycle most courses ignore.",
      },
      {
        title: "Model Deployment",
        what: "A model that isn't deployed is a science project. Learn to ship.",
        learn: ["FastAPI — building REST endpoints for models", "Docker — packaging and running models anywhere", "Model optimization — quantization, ONNX export", "Latency vs throughput tradeoffs in inference", "Basic cloud deployment — AWS SageMaker or GCP Vertex AI"],
        practice: [
          { name: "FastAPI official docs + ML serving tutorial", url: "https://fastapi.tiangolo.com", type: "Free docs" },
          { name: "HuggingFace Inference API", url: "https://huggingface.co/inference-api", type: "Free tier" },
          { name: "Deploy a model on Render or Railway (free hosting)", url: "https://render.com", type: "Free tier" },
        ],
        tip: "Deploy something publicly, even if it's small. A live URL you can share in interviews is worth 10 notebook screenshots.",
      },
      {
        title: "Data Pipelines & Feature Engineering",
        what: "Good data beats better models almost every time. Learn to build reliable data pipelines.",
        learn: ["ETL pipelines — extracting, transforming, loading data", "Feature stores (Feast, Tecton concepts)", "Handling imbalanced datasets, missing data, outliers", "Data versioning with DVC", "SQL for ML — querying and aggregating training data"],
        practice: [
          { name: "DVC — Data Version Control tutorials", url: "https://dvc.org/doc/start", type: "Free docs" },
          { name: "Kaggle competitions — focus on feature engineering", url: "https://www.kaggle.com/competitions", type: "Free" },
          { name: "Mode Analytics SQL Tutorial", url: "https://mode.com/sql-tutorial/", type: "Free course" },
        ],
        tip: "On Kaggle, read the notebooks of top finishers after a competition ends. Feature engineering tricks from experts are gold.",
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio & Visibility",
    duration: "Months 8–12",
    color: "#ef476f",
    icon: "◇",
    summary: "Build projects people can see and use. This is what gets you hired.",
    steps: [
      {
        title: "Build 3 End-to-End Projects",
        what: "Each project should go from raw data all the way to a deployed, usable endpoint or app.",
        learn: ["Project 1: Classic ML — tabular prediction (house prices, churn), full pipeline with EDA, feature engineering, model selection, deployment", "Project 2: Computer Vision or NLP — image classifier or text sentiment app using PyTorch + Hugging Face", "Project 3: Ambitious — fine-tune an open-source LLM on a domain-specific task, or build a recommendation system with real data"],
        practice: [
          { name: "Kaggle Datasets — find real data for projects", url: "https://www.kaggle.com/datasets", type: "Free" },
          { name: "Hugging Face Hub — fine-tuning open models", url: "https://huggingface.co/models", type: "Free" },
          { name: "Streamlit — build fast ML demos", url: "https://streamlit.io", type: "Free tier" },
        ],
        tip: "Pick projects with a clear use case you can explain in one sentence. 'I built a model that predicts X given Y' is more compelling than 'I implemented BERT'.",
      },
      {
        title: "GitHub & Documentation",
        what: "Your GitHub is your resume. Make it look like a professional engineer's, not a student's.",
        learn: ["Every project needs a README: what it does, how to run it, what results you got", "Clean, commented code — no 500-line notebooks with no structure", "Requirements.txt or pyproject.toml for every repo", "Pinned repos on your profile showing your best 4–6 projects", "Write 2–3 technical blog posts explaining something you learned"],
        practice: [
          { name: "Medium or Substack — publish ML explainers", url: "https://medium.com", type: "Free" },
          { name: "GitHub — profile README guide", url: "https://github.com", type: "Free" },
        ],
        tip: "Writing about what you build forces you to understand it deeply. One good blog post explaining transformers clearly can get you noticed by recruiters.",
      },
      {
        title: "Kaggle Competitions",
        what: "Competitions teach iteration, real data messiness, and how to think about model improvement under pressure.",
        learn: ["Start with Getting Started competitions (Titanic, House Prices) to learn the workflow", "Move to Featured competitions — even a top-30% finish shows real skill", "Study winning solutions after competitions close", "Build a profile with medals over time"],
        practice: [
          { name: "Kaggle — Getting Started competitions", url: "https://www.kaggle.com/competitions?hostSegment=gettingStarted", type: "Free" },
          { name: "Kaggle Notebooks — read expert solutions", url: "https://www.kaggle.com/code", type: "Free" },
        ],
        tip: "Don't chase leaderboard rank early. Chase understanding. Read 5 top notebooks per competition before submitting anything.",
      },
    ],
  },
];

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const phase = phases[activePhase];
  const step = phase.steps[activeStep];

  const goNext = () => {
    if (activeStep < phase.steps.length - 1) setActiveStep(s => s + 1);
    else if (activePhase < phases.length - 1) { setActivePhase(p => p + 1); setActiveStep(0); }
  };

  const goPrev = () => {
    if (activeStep > 0) setActiveStep(s => s - 1);
    else if (activePhase > 0) { setActivePhase(p => p - 1); setActiveStep(phases[activePhase - 1].steps.length - 1); }
  };

  const isFirst = activePhase === 0 && activeStep === 0;
  const isLast = activePhase === phases.length - 1 && activeStep === phase.steps.length - 1;

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d", color: "#e8e4dc", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .phase-btn:hover { opacity: 0.85 !important; }
        .step-btn:hover { background: rgba(255,255,255,0.04) !important; }
        .resource-link:hover { opacity: 0.75; transform: translateX(3px); }
        .resource-link { transition: all 0.15s; display:flex; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.3s ease forwards; }
        @media (max-width: 600px) {
          .phase-grid { grid-template-columns: repeat(2,1fr) !important; }
          .main-grid { grid-template-columns: 1fr !important; }
          .step-sidebar { display: flex !important; flex-direction: row !important; border-right: none !important; border-bottom: 1px solid #1e1e1e !important; overflow-x: auto; padding: 0 !important; }
          .step-btn-mobile { flex-shrink: 0; border-left: none !important; border-bottom: 2px solid transparent; padding: 10px 14px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e1e1e", padding: "22px 24px 18px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 4, color: "#444", marginBottom: 6 }}>ML ENGINEERING ROADMAP</div>
          <h1 style={{ fontSize: "clamp(1.2rem,3vw,1.7rem)", fontWeight: 400, letterSpacing: -0.3 }}>
            CS Graduate → <span style={{ fontStyle: "italic", color: "#ffd166" }}>Machine Learning Engineer</span>
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", width: "100%", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Phase tabs */}
        <div className="phase-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid #1e1e1e" }}>
          {phases.map((p, i) => (
            <button key={i} className="phase-btn" onClick={() => { setActivePhase(i); setActiveStep(0); }} style={{
              background: activePhase === i ? "#111" : "transparent",
              border: "none",
              borderBottom: `2px solid ${activePhase === i ? p.color : "transparent"}`,
              borderRight: i < 3 ? "1px solid #1e1e1e" : "none",
              padding: "14px 10px",
              cursor: "pointer",
              textAlign: "left",
              opacity: activePhase === i ? 1 : 0.6,
              transition: "all 0.15s",
            }}>
              <div style={{ fontFamily: "monospace", fontSize: 9, color: p.color, letterSpacing: 2, marginBottom: 3 }}>PHASE {p.id}</div>
              <div style={{ fontSize: 12, color: "#e8e4dc", fontWeight: activePhase === i ? 600 : 400, lineHeight: 1.3 }}>{p.title}</div>
              <div style={{ fontFamily: "monospace", fontSize: 9, color: "#444", marginTop: 3 }}>{p.duration}</div>
            </button>
          ))}
        </div>

        {/* Phase summary bar */}
        <div style={{ padding: "12px 20px", background: "#0f0f0f", borderBottom: "1px solid #1e1e1e", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: phase.color, fontSize: 16 }}>{phase.icon}</span>
          <p style={{ fontSize: 13, color: "#777", fontStyle: "italic" }}>{phase.summary}</p>
        </div>

        {/* Content grid */}
        <div className="main-grid" style={{ display: "grid", gridTemplateColumns: "180px 1fr", flex: 1 }}>

          {/* Step list */}
          <div className="step-sidebar" style={{ borderRight: "1px solid #1e1e1e", padding: "16px 0" }}>
            {phase.steps.map((s, i) => (
              <button key={i} className={`step-btn step-btn-mobile`} onClick={() => setActiveStep(i)} style={{
                width: "100%",
                background: activeStep === i ? "rgba(255,255,255,0.05)" : "transparent",
                border: "none",
                borderLeft: `2px solid ${activeStep === i ? phase.color : "transparent"}`,
                padding: "13px 14px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}>
                <div style={{ fontFamily: "monospace", fontSize: 9, color: activeStep === i ? phase.color : "#3a3a3a", letterSpacing: 2, marginBottom: 3 }}>STEP {i + 1}</div>
                <div style={{ fontSize: 12, color: activeStep === i ? "#e8e4dc" : "#555", lineHeight: 1.4 }}>{s.title}</div>
              </button>
            ))}
          </div>

          {/* Step content */}
          <div key={`${activePhase}-${activeStep}`} className="fade-up" style={{ padding: "26px 24px 40px", overflowY: "auto" }}>
            <div style={{ fontFamily: "monospace", fontSize: 9, color: phase.color, letterSpacing: 3, marginBottom: 8 }}>
              PHASE {phase.id} · STEP {activeStep + 1} OF {phase.steps.length}
            </div>
            <h2 style={{ fontSize: "clamp(1.1rem,2.5vw,1.45rem)", fontWeight: 400, marginBottom: 10, letterSpacing: -0.2 }}>{step.title}</h2>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 22, fontStyle: "italic" }}>{step.what}</p>

            {/* What to learn */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 3, color: "#444", marginBottom: 10, textTransform: "uppercase" }}>What to Learn</div>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {step.learn.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: "1px solid #181818", fontSize: 13, color: "#b8b4ac", lineHeight: 1.5 }}>
                    <span style={{ color: phase.color, flexShrink: 0 }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: 3, color: "#444", marginBottom: 10, textTransform: "uppercase" }}>Where to Practice</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {step.practice.map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-link" style={{ alignItems: "center", justifyContent: "space-between", padding: "11px 14px", background: "#111", border: "1px solid #1e1e1e", borderRadius: 2, textDecoration: "none", gap: 10 }}>
                    <span style={{ fontSize: 13, color: "#e8e4dc" }}>{r.name}</span>
                    <span style={{ fontFamily: "monospace", fontSize: 9, color: phase.color, whiteSpace: "nowrap", background: `${phase.color}18`, padding: "3px 7px", borderRadius: 2, flexShrink: 0 }}>{r.type}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tip */}
            <div style={{ background: "#0f0f0f", borderLeft: `3px solid ${phase.color}`, padding: "13px 16px" }}>
              <div style={{ fontFamily: "monospace", fontSize: 9, color: phase.color, letterSpacing: 2, marginBottom: 5 }}>PRO TIP</div>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>{step.tip}</p>
            </div>

            {/* Nav */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, paddingTop: 18, borderTop: "1px solid #181818" }}>
              <button onClick={goPrev} disabled={isFirst} style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, padding: "9px 16px", background: "transparent", border: "1px solid #222", color: "#555", cursor: isFirst ? "default" : "pointer", borderRadius: 2, opacity: isFirst ? 0.2 : 1 }}>← PREV</button>
              <button onClick={goNext} disabled={isLast} style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1, padding: "9px 16px", background: isLast ? "#1a1a1a" : phase.color, border: "none", color: isLast ? "#444" : "#0d0d0d", cursor: isLast ? "default" : "pointer", fontWeight: 700, borderRadius: 2, opacity: isLast ? 0.3 : 1 }}>NEXT →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
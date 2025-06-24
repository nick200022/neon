import React, { useState } from "react";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";

const languages = [
  { label: "JavaScript", value: "javascript", runnable: true },
  { label: "TypeScript", value: "typescript", runnable: true },
  { label: "Python", value: "python", runnable: false },
  { label: "Java", value: "java", runnable: false },
  { label: "C", value: "c", runnable: false },
  { label: "C++", value: "cpp", runnable: false },
  { label: "HTML", value: "markup", runnable: false },
];

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState<string | null>(null);

  const highlighted = Prism.highlight(code, Prism.languages[language], language);

  const isRunnable = languages.find((l) => l.value === language)?.runnable;

  const runCode = () => {
    setOutput(null);
    try {
      if (language === "javascript") {
        // eslint-disable-next-line no-eval
        const result = eval(code);
        setOutput(String(result));
      } else if (language === "typescript") {
        // Para TypeScript, solo soportamos JS válido (sin transpilación)
        // eslint-disable-next-line no-eval
        const result = eval(code);
        setOutput(String(result));
      } else {
        setOutput("La ejecución solo está disponible para JavaScript y TypeScript en el navegador.");
      }
    } catch (err: any) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Editor de Código</h2>
      <div>
        <label>
          Lenguaje:&nbsp;
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <textarea
        style={{ width: "100%", height: 120, marginTop: 10 }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Escribe tu código aquí..."
      />
      <h3>Vista previa con resaltado:</h3>
      <pre style={{ background: "#f5f5f5", padding: 10 }}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
      {isRunnable && (
        <div>
          <button onClick={runCode} style={{ marginTop: 10 }}>
            Ejecutar código
          </button>
          {output !== null && (
            <div style={{ marginTop: 10 }}>
              <strong>Salida:</strong>
              <pre style={{ background: "#eaeaea", padding: 10 }}>{output}</pre>
            </div>
          )}
        </div>
      )}
      {!isRunnable && (
        <div style={{ marginTop: 10, color: "#888" }}>
          <em>La ejecución solo está disponible para JavaScript y TypeScript.</em>
        </div>
      )}
    </div>
  );
}

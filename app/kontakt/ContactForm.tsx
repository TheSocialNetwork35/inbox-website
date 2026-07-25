"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const topics = [
  { value: "Idee & Feedback", label: "Idee", icon: "✦" },
  { value: "Frage zur App", label: "Frage", icon: "?" },
  { value: "Technisches Problem", label: "Problem", icon: "↗" },
  { value: "Schule vorschlagen", label: "Schule", icon: "+" },
];

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xzdnkjqd");
  const [topic, setTopic] = useState("Idee & Feedback");

  useEffect(() => {
    const requestedTopic = new URLSearchParams(window.location.search).get("thema");
    const matchingTopic = topics.find(
      (item) => item.value.toLowerCase() === requestedTopic?.toLowerCase(),
    );
    if (!matchingTopic) return;
    const updateTopic = window.setTimeout(() => setTopic(matchingTopic.value), 0);
    return () => window.clearTimeout(updateTopic);
  }, []);

  if (state.succeeded) {
    return (
      <div className="contact-success" role="status">
        <span aria-hidden="true">✓</span>
        <p className="contact-form-kicker">NACHRICHT ANGEKOMMEN</p>
        <h2>Danke, dass du Inbox mitgestaltest.</h2>
        <p>
          Deine Nachricht ist bei uns. Wir lesen jedes Feedback und melden uns
          in der Regel innerhalb von 1–3 Werktagen.
        </p>
        <button className="button button-dark" type="button" onClick={reset}>
          Noch etwas senden
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value={`Inbox Kontakt: ${topic}`} />
      <input type="hidden" name="Quelle" value="inbox-website.ch/kontakt" />

      <div className="contact-form-heading">
        <div>
          <p className="contact-form-kicker">DEINE NACHRICHT</p>
          <h2>Was möchtest du uns sagen?</h2>
        </div>
        <span>Alle Felder mit * sind erforderlich.</span>
      </div>

      <fieldset className="topic-picker">
        <legend>Worum geht es?</legend>
        <div>
          {topics.map((item) => (
            <label
              className={topic === item.value ? "is-selected" : ""}
              key={item.value}
            >
              <input
                checked={topic === item.value}
                name="Thema"
                onChange={() => setTopic(item.value)}
                type="radio"
                value={item.value}
              />
              <i aria-hidden="true">{item.icon}</i>
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-row">
        <label>
          <span>Name <small>optional</small></span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Wie dürfen wir dich nennen?"
            type="text"
          />
        </label>
        <label>
          <span>E-Mail *</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="du@beispiel.ch"
            required
            type="email"
          />
          <ValidationError
            className="form-error"
            errors={state.errors}
            field="email"
          />
        </label>
      </div>

      <label className="message-field">
        <span>Nachricht *</span>
        <textarea
          name="message"
          placeholder={
            topic === "Schule vorschlagen"
              ? "Wie heisst deine Schule und in welchem Ort ist sie?"
              : "Erzähl uns von deiner Idee, Frage oder dem Problem …"
          }
          required
          rows={7}
        />
        <ValidationError
          className="form-error"
          errors={state.errors}
          field="message"
        />
      </label>

      <div className="contact-form-footer">
        <p>
          Beim Absenden werden deine Angaben zur Bearbeitung über Formspree
          übertragen. Bitte sende keine Passwörter oder besonders
          schützenswerten Daten. Mehr dazu im{" "}
          <a href="/datenschutz">Datenschutz</a>.
        </p>
        <button
          className="contact-submit"
          disabled={state.submitting}
          type="submit"
        >
          <span>{state.submitting ? "Wird gesendet …" : "Nachricht senden"}</span>
          <i aria-hidden="true">↗</i>
        </button>
      </div>

      <ValidationError
        className="form-error form-error-global"
        errors={state.errors}
      />
    </form>
  );
}

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "17732eb4-4aca-4106-b5c0-6706375eeb26");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thanks for reaching out! I'll get back to you soon.");
        event.target.reset();
        
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("Something went wrong. Please try again or contact me directly.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-4 rounded-3xl bg-white/5 p-8 border border-white/10 backdrop-blur-sm"
      onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-400">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-400">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="type" className="text-sm font-medium text-zinc-400">
          Project Type
        </label>
        <select
          id="type"
          name="type"
          required
          className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors [&>option]:text-black">
          <option>Short-Form Editing</option>
          <option>Long-Form Editing</option>
          <option>Thumbnail Design</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
          placeholder="Tell me about your project..."></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-white text-black font-bold py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {result && (
        <p
          className={`text-sm text-center ${
            result.includes("Thanks") ? "text-green-400" : "text-red-400"
          }`}>
          {result}
        </p>
      )}
    </form>
  );
}
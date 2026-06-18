import { Mail } from "lucide-react";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import ContactForm from "./utils/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-zinc-950 border-t border-white/[0.02]">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-zinc-800/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column Text */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white mb-6 leading-tight">
              Let's create something <br /><span className="font-semibold">viral together.</span>
            </h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Ready to take your content to the next level? Drop me a message and let's discuss your custom project pipeline.
            </p>

            {/* Social Channels */}
            <div className="space-y-4 max-w-xs">
              <a
                href="mailto:khababwork@gmail.com"
                className="flex items-center gap-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase hover:text-white transition-colors duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.02] border border-white/5">
                  <Mail size={14} />
                </div>
                <span>khababwork@gmail.com</span>
              </a>
              <a
                href="https://www.youtube.com/@249edit"
                className="flex items-center gap-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.02] border border-white/5">
                  <FaYoutube size={14} />
                </div>
                <span>Youtube</span>
              </a>
              <a
                href="https://discord.com/users/1344494795338547201"
                className="flex items-center gap-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.02] border border-white/5">
                  <FaDiscord size={14} />
                </div>
                <span>Discord</span>
              </a>
              <a
                href="https://www.instagram.com/249edit"
                className="flex items-center gap-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.02] border border-white/5">
                  <FaInstagram size={14} />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Right Column Form */}
          <div className="bg-zinc-900/10 border border-white/[0.02] p-8 rounded-2xl shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

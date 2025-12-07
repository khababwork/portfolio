import { Mail } from "lucide-react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ContactForm from "./utils/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's create something <br /> viral together.
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Ready to take your content to the next level? Drop me a message
              and let's discuss your project.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:khababwork@gmail.com"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Mail size={18} />
                </div>
                <span>khababwork@gmail.com</span>
              </a>
              <a
                href="https://www.youtube.com/@249edit"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                target="_blank">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FaYoutube size={18} />
                </div>
                <span>Youtube</span>
              </a>
              <a
                href="https://discord.com/users/1344494795338547201"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                target="_blank">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FaDiscord size={18} />
                </div>
                <span>Discord</span>
              </a>
              <a
                href="https://x.com/249edit"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                target="_blank">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FaTwitter size={18} />
                </div>
                <span>
                  X{" "}
                  <span className="text-stone-400 text-xs">
                    (formerly twitter)
                  </span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/249edit"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors"
                target="_blank">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FaInstagram size={18} />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default Contact;

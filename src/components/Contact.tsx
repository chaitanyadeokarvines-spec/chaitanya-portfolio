import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { StarDoodle, ScratchDoodle, SmileyDoodle } from './Doodles';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${name || 'a new client'}`);
    const body = encodeURIComponent(`Hi Chaitanya,\n\n${message}\n\n— ${name}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const cards = [
    {
      key: 'email',
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      bg: '#FF6418',
      copyValue: PERSONAL_INFO.email
    },
    {
      key: 'phone',
      icon: <Phone className="w-6 h-6" />,
      label: 'Call',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phoneRaw}`,
      bg: '#3467FF',
      copyValue: PERSONAL_INFO.phone
    },
    {
      key: 'whatsapp',
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
        "Hi Chaitanya, I'd like to discuss a project."
      )}`,
      bg: '#FFD329',
      external: true
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-10 left-8 opacity-20 pointer-events-none hidden md:block">
        <StarDoodle size={46} fill="#FFD329" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-25 pointer-events-none hidden md:block">
        <ScratchDoodle size={50} color="#FF6418" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border-2 border-[#111111] font-mono text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#111111] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6418]" />
            <span>Contact</span>
          </div>
          <h2 className="font-display font-black tracking-tight leading-[0.95] text-4xl sm:text-6xl">
            Let's <span className="streetwear-bubble-orange italic">talk.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#111111]/75 leading-relaxed">
            Got a video, channel or campaign in mind? Drop a message — I usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: contact cards */}
          <div className="lg:col-span-5 space-y-5">
            {cards.map((c, i) => (
              <Reveal key={c.key} delay={i * 0.08}>
                <div className="sticker-card bg-white border-2 border-[#111111] rounded-2xl p-4 flex items-center gap-4">
                  <a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 flex-1 min-w-0"
                  >
                    <span
                      className="shrink-0 w-12 h-12 rounded-xl border-2 border-[#111111] flex items-center justify-center text-[#111111]"
                      style={{ backgroundColor: c.bg }}
                    >
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-[#111111]/55">
                        {c.label}
                      </span>
                      <span className="block font-display font-extrabold text-base sm:text-lg truncate">
                        {c.value}
                      </span>
                    </span>
                  </a>
                  {c.copyValue && (
                    <button
                      type="button"
                      onClick={() => copy(c.key, c.copyValue!)}
                      aria-label={`Copy ${c.label}`}
                      className="shrink-0 p-2 rounded-lg border-2 border-[#111111] hover:bg-[#FFD329] transition-colors"
                    >
                      {copied === c.key ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 pt-1 text-xs font-mono font-semibold text-[#111111]/75">
                <span className="inline-flex items-center gap-1.5 bg-[#EAE8E3] border border-[#111111]/20 rounded-full px-3 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6418]" /> Navi Mumbai, India
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#EAE8E3] border border-[#111111]/20 rounded-full px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#3467FF]" /> Remote · Worldwide
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: message form */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white border-3 border-[#111111] rounded-3xl p-6 sm:p-8 shadow-[8px_10px_0px_#111111] space-y-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display font-black text-2xl">Send a message</h3>
                <SmileyDoodle size={30} color="#FF6418" />
              </div>

              <label className="block">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Your name</span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-2 w-full rounded-xl border-2 border-[#111111] bg-[#F5F3EE] px-4 py-3 font-medium outline-none focus:bg-white focus:shadow-[3px_3px_0px_#FF6418] transition-all"
                />
              </label>

              <label className="block">
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  What do you need?
                </span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your video, channel or campaign…"
                  className="mt-2 w-full rounded-xl border-2 border-[#111111] bg-[#F5F3EE] px-4 py-3 font-medium outline-none resize-none focus:bg-white focus:shadow-[3px_3px_0px_#FF6418] transition-all"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-[#FF6418] px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider sticker-btn border-2 border-[#111111] transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#111111]/55 font-mono">
                Opens your email app with the message ready to send.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

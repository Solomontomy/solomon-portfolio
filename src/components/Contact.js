import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    // Full width background
    <section className="w-full bg-[#1a1a1a] text-gray-200 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4">contact me</h2>
      <div className="w-16 h-1 bg-gray-400 mx-auto mb-8"></div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl mb-8">
        <a
          href="https://www.linkedin.com/in/solomon-tomy-a4a024210"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-sky-600 hover:border-sky-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Solomontomy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700 hover:border-gray-700 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/solo_m_e_n?igsh=MWY1OHpuemx3anBv"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 hover:bg-pink-500 hover:border-pink-500 transition"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-400">design & coding by me</p>
    </section>
  );
}

export default function Header() {
  return (
    <header className="relative pt-6 pb-8 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-elevated to-transparent opacity-50" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="w-24 h-24 mb-3 rounded-full overflow-hidden neon-glow-subtle">
          <img
            src="/jomtienSaunaLogo.jpg"
            alt="Jomtien Sauna & Gym"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl tracking-wider text-white mb-1">
          JOMTIEN SAUNA
        </h1>
        <p className="text-text-muted text-sm tracking-widest uppercase">
          Food & Drinks Menu
        </p>
      </div>
    </header>
  );
}

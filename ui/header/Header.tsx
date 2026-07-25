export default function Header() {
  return (
    <header className="nav-blur mb-16 md:mb-24 sticky top-0 left-0">
      <div className="wrapper mb-0! flex items-center justify-between pt-5 pb-10 z-10">
        <h2 className="text-2xl font-bold font-mono tracking-widest text-(--primary)">
          Sizan
        </h2>
        <nav className="flex gap-6">
          <p className="nav-link">Projects</p>
          <p className="nav-link">Skills</p>
          <p className="nav-link">Connect</p>
        </nav>
      </div>
    </header>
  );
}

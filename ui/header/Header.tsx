"use client";

export default function Header() {
  const navLinks = [
    {
      id: 1,
      name: "Projects",
    },
    {
      id: 2,
      name: "Skills",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];

  return (
    <header className="nav-blur mb-16 md:mb-24 sticky top-0 left-0">
      <div className="wrapper mb-0! flex items-center justify-between pt-5 pb-10 z-10">
        <h2 className="text-2xl font-bold font-mono tracking-widest text-(--primary)">
          Sizan
        </h2>

        <nav className="flex gap-6">
          {navLinks?.map(({ id, name }) => (
            <button className="nav-link" key={id}>
              {name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

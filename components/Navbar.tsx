export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md">
      <div className="text-xl font-bold text-green-700">Lacrei Saúde</div>
      <nav className="flex gap-6 text-sm">
        <a href="/">Quem Somos</a>
        <a href="/sobre">Ajuda</a>
        <button className="bg-green-700 text-white px-4 py-1 rounded">Entrar</button>
      </nav>
    </header>
  );
}

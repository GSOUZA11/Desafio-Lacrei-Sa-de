export default function Home() {
  return (
    <section className="text-center px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Olá, você está na Lacrei Saúde!
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto">
        Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.
      </p>

      <div className="mt-10">
        <img
          src="/stetoscopio.png.png"
          alt="Estetoscópio com bandeira LGBTQIAPN+"
          className="mx-auto w-full max-w-5xl rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

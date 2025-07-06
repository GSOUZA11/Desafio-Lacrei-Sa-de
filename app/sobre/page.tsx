export default function Sobre() {
  return (
    <section className="space-y-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Atendimento qualificado, seguro e inclusivo</h2>
          <p>
            Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo...
          </p>
        </div>
        <img
          src="/pessoa-sorrindo.png.png"
          alt="Pessoa com maquiagem arco-íris"
          className="rounded-lg w-60 h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Nosso propósito</h2>
          <p>
            A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico...
          </p>
        </div>
        <img
          src="/bandeira.png.png"
          alt="Bandeira LGBTQIAPN+"
          className="rounded-lg w-60 h-auto"
        />
      </div>
    </section>
  );
}

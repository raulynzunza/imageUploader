import ReactLoading from "react-loading";

const Charging = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center">
      <article className="bg-white rounded-lg p-4 w-[25rem] h-[9.375rem] flex flex-col items-center justify-center gap-4">
        <h2>Uploading...</h2>
        <ReactLoading type="spin" color="blue" height={50} width={50} />
      </article>
    </section>
  );
};

export default Charging;

export default function ModalPurchase({ cost, state }) {
  return (
    <div
      className={
        "opacity-0 text-lg flex fixed top-0 w-full h-full bg-black/35 z-3 " +
        (state[0] ? "opacity-100" : "hidden")
      }
      style={{ transition: "opacity 0.3s" }}
    >
      <div
        className="flex flex-col gap-4 rounded-lg w-80 mx-auto self-center p-5"
        style={{ background: "var(--background1)" }}
      >
        <p className="text-center" style={{ color: "var(--color1)" }}>
          Purchased Succesfully!
        </p>
        <button
          onClick={() => {
            state[1](false);
          }}
          className="cursor-pointer flex-1 bg-[var(--background3)] text-white p-2 px-5 rounded"
        >
          Okay
        </button>
      </div>
    </div>
  );
}

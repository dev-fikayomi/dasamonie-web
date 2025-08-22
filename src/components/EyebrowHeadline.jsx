function Dot({ small = false }) {
    return (
      <span
        className={`inline-block rounded-full bg-emerald-600 ${
          small ? "w-1.5 h-1.5" : "w-2.5 h-2.5"
        }`}
      />
    );
  }
  
  export default function EyebrowHeadline() {
    return (
      <section className="py-12">
       <div className="max-w-6xl mx-auto px-4 text-center font-nunito font-bold">
  <p className="inline-flex items-center gap-3 text-[54px] leading-tight">
    Financial Freedom, 
    <span className="text-slate-700">From Dawn</span>
    <img
      src="/Frame 1000009732.svg"
      alt="sunrise icon"
      className="h-12 w-auto inline-block"
    />
    <span>to Dusk</span> 
    <img
      src="/Frame 1000009733.svg"
      alt="sunset icon"
      className="h-12 w-auto inline-block"
    />
  </p>
</div>

      </section>
    );
  }
  
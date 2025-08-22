
export default function FeatureCard({ title, desc, cta }){
  return (
    <div className="card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-slate-600 mt-2">{desc}</p>
      {cta && <div className="mt-4">{cta}</div>}
    </div>
  )
}

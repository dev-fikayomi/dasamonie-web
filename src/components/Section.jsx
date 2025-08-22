
export default function Section({ eyebrow, title, children, className='' }) {
  return (
    <section className={"py-14 md:py-20 " + className}>
      <div className="container-desktop">
        {eyebrow && <p className="badge mb-3">{eyebrow}</p>}
        {title && <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

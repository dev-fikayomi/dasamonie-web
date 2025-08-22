// src/components/FeatureBlock.jsx
export default function FeatureBlock3({
    title,
    desc,
    bgImage = "/ThirdPix.png",
    ctaText = "Download App",
    onCtaClick = (e) => e.preventDefault(),
  }) {
    return (
        <section
        className="relative bg-cover bg-center bg-no-repeat mx-6 lg:mx-16 rounded-2xl  mb-12 rounded-3xl lg:rounded-[40px]"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      >
      
        {/* Use flex to align text left */}
        <div className="flex items-center min-h-[600px]">
          <div className="max-w-6xl mx-auto px-6 py-24 flex-1">
            <div className="max-w-lg">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-snug text-gray-900">
                {title}
              </h3>
              <p className="mt-4 text-slate-700">{desc}</p>
  
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-[600px]"
                  style={{
                    background: "#031E3C",
                    boxShadow: "0 0 16px 0 rgba(255, 255, 255, 0.25) inset",
                  }}
                  onClick={onCtaClick}
                >
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
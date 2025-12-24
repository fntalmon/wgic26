import Image from "next/image";

type Props = {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
  priority?: boolean;
};

export default function TextImage({
  title,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  children,
  priority = false,
}: Props) {
  const isLeft = imagePosition === "left";

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="flex flex-col gap-6">
        {title && <h2 className="text-lg text-white uppercase mb-2">{title}</h2>}

        <div
          className={`w-full grid gap-6 items-center ${
            isLeft ? "lg:grid-cols-[40%_60%]" : "lg:grid-cols-[60%_40%]"
          }`}
        >
          {isLeft ? (
            <>
              <figure className="w-full h-64 sm:h-80 md:h-96 lg:h-64 relative rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  style={{ objectFit: "cover" }}
                  priority={priority}
                />
              </figure>

              <div className="text-white/90 text-sm leading-relaxed">
                {children}
              </div>
            </>
          ) : (
            <>
              <div className="text-white/90 text-sm leading-relaxed">
                {children}
              </div>

              <figure className="w-full h-64 sm:h-80 md:h-96 lg:h-64 relative rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  style={{ objectFit: "cover" }}
                  priority={priority}
                />
              </figure>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

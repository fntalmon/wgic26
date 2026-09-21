import Image from "next/image";

export interface CollaboratorLogo {
  name: string;
  file: string;
  width: number;
  height: number;
}

interface CollaboratorLogosProps {
  logos: CollaboratorLogo[];
  /** Fixed height of each white tile (Tailwind class). */
  tileClassName?: string;
  /** Logo image height inside the tile, in rem. Width follows the natural aspect ratio. */
  imageHeightRem?: number;
  /** Maximum logo width in rem (wide logos get capped). */
  maxImageWidthRem?: number;
}

const CollaboratorLogos = ({
  logos,
  tileClassName = "h-20",
  imageHeightRem = 2.5,
  maxImageWidthRem = 10,
}: CollaboratorLogosProps) => (
  <div className="flex flex-wrap items-center gap-3">
    {logos.map((logo) => {
      const aspect = logo.width / logo.height;
      const widthRem = Math.min(imageHeightRem * aspect, maxImageWidthRem);
      return (
        <div
          key={logo.file}
          title={logo.name}
          className={`flex items-center justify-center rounded-lg bg-white px-4 ${tileClassName}`}
        >
          <div
            className="relative"
            style={{ height: `${imageHeightRem}rem`, width: `${widthRem}rem` }}
          >
            <Image
              src={logo.file}
              alt={logo.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      );
    })}
  </div>
);

export default CollaboratorLogos;

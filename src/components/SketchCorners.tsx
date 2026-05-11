import tr from "@/assets/flowers/corner-tr-sketch.png";
import bl from "@/assets/flowers/corner-bl-sketch.png";

type Props = {
  /** Tailwind size for top-right ornament */
  trSize?: string;
  /** Tailwind size for bottom-left ornament */
  blSize?: string;
  opacity?: number;
  corners?: Array<"tr" | "bl">;
};

/**
 * Decorative botanical sketch corners (top-right & bottom-left),
 * placed fully inside the section bounds — never cropped.
 */
export function SketchCorners({
  trSize = "w-40 sm:w-56 md:w-72 lg:w-80",
  blSize = "w-44 sm:w-60 md:w-80 lg:w-96",
  opacity = 0.85,
  corners = ["tr", "bl"],
}: Props) {
  return (
    <>
      {corners.includes("tr") && (
        <img
          src={tr}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`pointer-events-none absolute top-0 right-0 select-none z-0 ${trSize}`}
          style={{ opacity }}
        />
      )}
      {corners.includes("bl") && (
        <img
          src={bl}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`pointer-events-none absolute bottom-0 left-0 select-none z-0 ${blSize}`}
          style={{ opacity }}
        />
      )}
    </>
  );
}

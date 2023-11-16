import { Parallax } from "react-parallax";
const PageCover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <section
        className="h-[800px] grid place-items-center">
          <div className="w-9/12 p-10 md:p-20 bg-black/50 text-neutral-content text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-5">{title}</h2>
            <p className="text-xl md:text-2xl">Would you like to try a dish?</p>
          </div>
      </section>
    </Parallax>
  );
};

export default PageCover;

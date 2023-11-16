import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -25, max: 25 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <section
        className="h-[700px] grid place-items-center">
          <div className="max-w-5xl p-10 md:p-20 bg-black/50 text-neutral-content text-center">
            <h2 className="text-5xl font-semibold mb-5">{title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
      </section>
    </Parallax>
  );
};

export default Cover;

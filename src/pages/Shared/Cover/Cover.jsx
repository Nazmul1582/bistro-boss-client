import image from "../../../assets/home/chef-service.jpg";
const Cover = () => {
  return (
    <section
      className="py-24 bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="max-w-5xl mx-auto p-10 md:p-20 bg-white text-center">
        <h2 className="text-5xl font-semibold mb-5">Bistro Boss</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  );
};

export default Cover;

export const TopicCard = (props) => {
  const { name, desc } = props.details;
  return (
    <div class="w-20% rounded-md shadow-lg mx-8 mb-8 bg-slate-50 sm:h-auto lg:h-64 transition duration-100 ease-in-out transform  hover:scale-105">
      <div class="text-pijet-blue text-3xl font-semibold text-center mb-4 py-6">
        {name}
      </div>
      <p class="text-black text-md text-center text-justify mx-10 mb-6 pb-6">
        {desc}
      </p>
    </div>
  );
};

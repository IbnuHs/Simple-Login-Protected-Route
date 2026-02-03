import img from "../assets/notfound.png";

export const NotFounPages = () => {
  return (
    <div className="flex items-center justify-center h-full flex-col px-5">
      <img src={img} alt="" className="max-w-96 w-full" />
      <h5 className="font-poetson-one text-3xl text-gray-500">
        Page Not Found
      </h5>
    </div>
  );
};

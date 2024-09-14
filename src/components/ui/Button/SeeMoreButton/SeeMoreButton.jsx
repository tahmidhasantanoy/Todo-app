/* eslint-disable react/prop-types */


const SeeMoreButton = ({ children, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="font-semibold bg-cyan-600 duration-500 hover:bg-cyan-800 text-white text-center btn-xs md:btn-md lg:btn-md xl:btn-md normal-case rounded-md .btn-grad"
      >
        {children}
      </button>
    </div>
  );
};
export default SeeMoreButton;

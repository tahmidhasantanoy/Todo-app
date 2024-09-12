/* eslint-disable react/prop-types */

const Container = ({children}) => {
  return (
    <div
      className="max-w-7xl w-full h-screen mx-auto 
              "
    >
      {children}
    </div>
  );
};

export default Container;

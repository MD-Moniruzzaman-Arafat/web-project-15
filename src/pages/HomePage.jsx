import Category from "../components/category/Category";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="lg:col-span-1 px-5">
          <Category />
        </div>
        <div className="lg:col-span-2 bg-amber-950">a</div>
        <div className="lg:col-span-1 bg-blue-600">d</div>
      </div>
    </>
  );
};

export default HomePage;

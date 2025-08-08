import { CiCalendarDate } from "react-icons/ci";

const SmallCard = ({ img }) => {
  return (
    <>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure className="p-2">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="card-actions items-center gap-5 my-3">
            <span className="font-semibold text-xs">Sports</span>
            <span className="text-xs flex items-center gap-1">
              <CiCalendarDate className="text-sm" /> Jan 4, 2022
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;

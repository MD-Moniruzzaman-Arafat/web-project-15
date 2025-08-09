import newsImg from "../../assets/editorsInsight1.png";
import { GoArrowLeft } from "react-icons/go";
import EditorsInsight from "../editorsInsight/EditorsInsight";

const NewsDetails = () => {
  return (
    <>
      <div className="lg:col-span-3 px-5 h-[2400px] lg:h-[1350px]">
        <h1 className="font-semibold py-3 text-gray-400">Dragon News</h1>
        <div className="border border-base-300 my-5">
          <div className="p-5">
            <img src={newsImg} alt="" className="w-full my-3" />
            <h1 className="font-bold text-3xl">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </h1>
            <p className="text-[#706F6F] text-sm text-justify my-3">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military aid for
              Kyiv as Ukraine marked its independence day six months after
              Russia invaded the country.'The United States of America is
              committed to supporting the people of Ukraine as they continue the
              fight to defend their sovereignty. As part of that commitment, I
              am proud to announce our biggest tranche of security assistance to
              date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud
              Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia,
              Security, UK, Ukraine, United States, Worthy News (Worthy News) –
              U.S. President Joe Biden has announced nearly $3 billion in new
              U.S. military aid for Kyiv as Ukraine marked its independence day
              six months after Russia invaded the country.'The United States of
              America is committed to supporting the people of Ukraine as they
              continue the fight to defend their sovereignty. As part of that
              commitment, I am proud to announce our biggest tranche of security
              assistance to date: approximately $2.
            </p>
            <button className="btn bg-[#D72050] text-white">
              <GoArrowLeft />
              All news in this category
            </button>
          </div>
        </div>
        <EditorsInsight />
      </div>
    </>
  );
};

export default NewsDetails;

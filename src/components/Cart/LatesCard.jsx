import React, { useEffect, useState } from "react";
import { useAxiosData } from "../../Hooks/DataFetch";
import { Link } from "react-router";

const LatesCard = () => {
  const [card, setCard] = useState([]);

  const apise = useAxiosData();
  useEffect(() => {
    apise.get("letes").then((result) => {
      console.log(result.data);
      setCard(result.data);
    });
  }, [apise]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
      {card.map((job) => (
        <div
          //   data-aos="fade-up"
          className="group relative bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
        >
          {/* Cover Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={
                job.coverImage ||
                "https://via.placeholder.com/600x300?text=Job+Image"
              }
              alt={job.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow-md">
                {job.category}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
              {job.title}
            </h3>

            <div className="flex items-center mt-3 text-sm text-gray-600">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold shadow-md">
                {job.postedBy.charAt(0)}
              </div>
              <span className="ml-3 font-medium">{job.postedBy}</span>
            </div>

            <p className="mt-4 text-gray-600 line-clamp-3 text-sm leading-relaxed">
              {job.summary}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Posted by:{" "}
                <span className="font-medium">
                  {job.userEmail.split("@")[0]}
                </span>
              </span>

              <Link
                to={`/detlise/${job._id}`}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium text-sm rounded-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatesCard;

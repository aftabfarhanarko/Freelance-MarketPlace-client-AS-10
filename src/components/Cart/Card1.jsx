import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router";

const Card1 = ({ job }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  const { title, postedBy, category, summary, coverImage, userEmail, _id } =
    job;

  return (
    <div
      data-aos="fade-up"
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Cover Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={
            coverImage || "https://via.placeholder.com/600x300?text=Job+Image"
          }
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>

        <div className="flex items-center mt-3 text-sm text-gray-600">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold shadow-md">
            {postedBy.charAt(0)}
          </div>
          <span className="ml-3 font-medium">{postedBy}</span>
        </div>

        <p className="mt-4 text-gray-600 line-clamp-3 text-sm leading-relaxed">
          {summary}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Posted by:{" "}
            <span className="font-medium">{userEmail.split("@")[0]}</span>
          </span>

          <Link
            to={`/detlise/${_id}`}
            className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium text-sm rounded-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card1;

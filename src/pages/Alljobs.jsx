import React, { useEffect, useRef, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LodingSpinner from "../components/LodingSpinner";
import Card1 from "../components/Cart/Card1";
import JobNotFound from "../components/JobNotFound";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "Content Writing",
  "Video Editing",
  "UI/UX Design",
];

const Alljobs = () => {
  const [alljob, setAlljob] = useState([]);
  const [loding, setLoding] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [value, setValue] = useState("");
  const apiData = useAxiosData();
  const scrollRef = useRef(null);

  useEffect(() => {
    setLoding(true);
    apiData.get("jobs").then((result) => {
      setAlljob(result.data);
      setLoding(false);
    });
  }, [apiData]);

  const handleSelect = (cat) => {
    if (cat === "All") {
      setLoding(true);
      apiData.get("jobs").then((result) => {
        setAlljob(result.data);
        setLoding(false);
      });
    }

    setLoding(true);
    setSelectedCategory(cat);
    apiData.get(`filtersOn?filter=${cat}`).then((result) => {
      console.log("respon for server", result.data);
      setAlljob(result.data);
      setLoding(false);
    });
  };

  const haldelSort = () => {
    if (value === "Sort ascending") {
      apiData.get("sorting").then((result) => {
        // console.log("Sorting data", result.data);
        setAlljob(result.data);
      });
      console.log("Data");
    } else if (value === "Sort descending") {
      apiData.get("sorting2").then((result) => {
        // console.log("Sorting data", result.data);
        setAlljob(result.data);
      });
      console.log(value);
    }
  };

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-11/12 mx-auto mb-25 ">
        {/* Catagory Data Fetch */}
        <div className="pt-5">
          <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg">
            <h3 className="text-xl font-semibold ">
              Chougs Your <span className="text-orange-400">Favorite Jobs</span>
            </h3>
            <div className=" flex flex-col gap-3">
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={() =>
                    scrollRef.current.scrollBy({
                      left: -200,
                      behavior: "smooth",
                    })
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 px-2 py-2 bg-white shadow rounded-full z-10 md:hidden"
                >
                  ◀
                </button>

                {/* Category Slider */}
                <div
                  ref={scrollRef}
                  className="flex gap-3 px-11 md:px-0 py-5 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleSelect(cat)}
                      className={`px-5 py-2 border-orange-400 whitespace-nowrap rounded-full text-sm font-medium border transition
          ${
            selectedCategory === cat
              ? "bg-orange-500 text-white border-orange-600"
              : "bg-gray-100 border-gray-300 hover:bg-gray-200 dark:text-black"
          }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() =>
                    scrollRef.current.scrollBy({
                      left: 200,
                      behavior: "smooth",
                    })
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-2 bg-white shadow rounded-full z-10 md:hidden"
                >
                  ▶
                </button>
              </div>
              <h1 className="text-md font-medium -mt-3">Sorting Now</h1>
              <div onClick={haldelSort}>
                <select
                  onChange={(e) => setValue(e.target.value)}
                  defaultValue="Sort Now Any Type"
                  className="dark:bg-white select w-full max-w-xs focus:outline-none rounded-xl  backdrop-blur shadow-lg border border-gray-200 
               focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-black/86"
                >
                  <option disabled> Sort</option>
                  <option className=" "> Sort ascending</option>
                  <option> Sort descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 ">
          {alljob.length === 0 ? (
            <JobNotFound></JobNotFound>
          ) : (
            alljob.map((job) => <Card1 job={job} key={job._id}></Card1>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Alljobs;

import React, { useEffect, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LodingSpinner from "../components/LodingSpinner";
import Card1 from "../components/Cart/Card1";

const Alljobs = () => {
  const [alljob, setAlljob] = useState([]);
  const [loding, setLoding] = useState(false);
  const apiData = useAxiosData();

  useEffect(() => {
    setLoding(true);
    apiData.get("jobs").then((result) => {
      console.log("Api Fetch Data Now", result.data);
      setAlljob(result.data);
      setLoding(false);
    });
  }, [apiData]);

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }

  return (
    <div className="w-11/12 mx-auto mb-25">
      <h1 className="text-3xl font-semibold text-center mb-25 mt-10 text-gray-800">
        {" "}
        All Jobes Scroll Now
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-7 ">
        {alljob.map((job) => (
          <Card1 job={job} key={job._id}></Card1>
        ))}
      </div>
    </div>
  );
};

export default Alljobs;

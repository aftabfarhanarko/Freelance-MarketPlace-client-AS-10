import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import usePrivetApi from "../Hooks/PriverAPI";
import { useAuth } from "../Hooks/UseAuth";
import LodingSpinner from "../components/LodingSpinner";

const MyAcceptedTasks = () => {
  const [loding, setLoding] = useState(false);
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const apies = usePrivetApi();

  useEffect(() => {
    setLoding(true);
    apies.get(`task?email=${user?.email}`).then((result) => {
      console.log("Data is Sccepts", result.data);
      setJobs(result.data);
      setLoding(false);
    });
  }, [apies, user]);

  const iosTime = jobs.create_at;
  const time = new Date(iosTime).toLocaleTimeString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }
  return (
    <div className=" w-11/12 mx-auto min-h-screen">
      <div className="  overflow-hidden mt-25 rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Posted By
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Summary
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Applied On
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No job applications found.
                  </td>
                </tr>
              ) : (
                jobs.map((job, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Cover Image + Title */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        {job?.coverImage ? (
                          <img
                            src={job?.coverImage}
                            alt={job?.title}
                            className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-lg" />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {job?.title}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Posted By */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {job?.postedBy}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-600">
                        {job?.category}
                      </span>
                    </td>

                    {/* Applicant Email */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {job?.acceptsUserEmail}
                    </td>

                    {/* Summary */}
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                      <p className="line-clamp-2">{job?.summary}</p>
                    </td>

                    {/* Applied Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {time}
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <div className="flex items-center justify-center space-x-3">
                        {/* Done Button */}
                        <button
                          onClick={() =>
                            console.log("Done:", job?.acceptsUserEmail)
                          }
                          className="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                        >
                          <CheckCircleIcon className="w-4 h-4 mr-1" />
                          Done
                        </button>

                        {/* Clear Button */}
                        <button
                          onClick={() =>
                            console.log("Clear:", job?.acceptsUserEmail)
                          }
                          className="inline-flex items-center px-3 py-2 border border-transparent text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                        >
                          <XCircleIcon className="w-4 h-4 mr-1" />
                          Clear
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAcceptedTasks;

import React, { useEffect, useState } from "react";
import ShowStudents from "./ShowStudents";
import axios from "axios";

export const App = () => {
  const [students, setStudents] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [limit, setLimit] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://100090.pythonanywhere.com/training_test/", {
        params: {
          type: "get_data",
          limit: limit,
          offset: offSet,
        },
      })
      .then((response) => {
        setLoading(false);
        setStudents(response.data.response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);

  const handleNext = () => {
    setLoading(true);
    console.log("the function is clicked");

    const nextoffSet = offSet + limit;
    axios
      .get("https://100090.pythonanywhere.com/training_test/", {
        params: {
          type: "get_data",
          limit: limit,
          offset: nextoffSet,
        },
      })
      .then((response) => {
        setLoading(false);
        setOffSet(nextoffSet);
        setStudents(response.data.response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const handlePrev = () => {
    setLoading(true);
    console.log("the function is clicked");

    const nextoffSet = offSet - limit;
    axios
      .get("https://100090.pythonanywhere.com/training_test/", {
        params: {
          type: "get_data",
          limit: limit,
          offset: nextoffSet,
        },
      })
      .then((response) => {
        setLoading(false);
        setOffSet(nextoffSet);
        setStudents(response.data.response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div className="my-14">
      {students && !loading ? (
        <div className="w-8/12  mx-auto">
          <ShowStudents students={students} />
        </div>
      ) : (
        <p className="text-2xl text-sky-800 text-center font-bold ">Loading</p>
      )}

      <div className="flex justify-evenly my-5">
        {offSet > 0 && (
          <button
            onClick={handlePrev}
            className="px-8 cursor-pointer rounded-md py-2 text-white bg-sky-700"
          >
            Previous
          </button>
        )}
       {offSet < 10 && <button
          onClick={handleNext}
          className=" px-8 cursor-pointer rounded-md py-2 text-white bg-sky-700"
        >
          Next
        </button>}
      </div>
    </div>
  );
};

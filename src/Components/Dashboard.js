import Axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
import "./Dashboard.css";
import CollegeTile from "./CollegeTile";

function App() {
  const [collegeList, setcollegeList] = useState([]);
  const [index, setindex] = useState(0);
  const [loading, setloading] = useState(true);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    setloading(true);
    Axios.get("./colleges.json").then(
      (res) =>
        setcollegeList((prevCollegeList) => {
          return [
            ...prevCollegeList,
            res.data.colleges.slice(index, index + 10),
          ];
        }),
      sethasMore(index < 41),
      setloading(false)
    );
  }, [index]);
  const observer = useRef();
  const lastCollegeElementRef = useCallback(node =>{
      if(loading) return
      if(observer.current) observer.current.disconnect()
      observer.current= new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting && hasMore){
           setindex(prevIndex => prevIndex+10)
        }
      })
      if(node) observer.current.observe(node)
  },[loading , hasMore]);

  return (
    <>
      <ul>
        {collegeList.map((college, index) =>
          college.map((element) => {
            if (collegeList.length === index + 1) {
              return (
                <li ref={lastCollegeElementRef}>
                  <CollegeTile
                    data={college}
                    index={index}
                    
                  />
                </li>
              );
            } else {
              return (
                <li>
                  <CollegeTile data={college} index={index} />
                </li>
              );
            }
          })
        )}
      </ul>
    </>
  );
}

export default App;

// "use client";
// import React, { useEffect, useState } from "react";

// const Test2 = () => {
//   const [component, setComponent] = useState(null);

//   useEffect(() => {
//     // Fetch the serialized component from the API
//     fetch("/api/template1")
//       .then((res) => res.json())
//       .then((data) => {
//         // Deserialize the JSON data back into a React component
//         const deserializedComponent = JSON.parse(data).component;
//         setComponent(deserializedComponent);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Test2 Page</h1>
//       <div>
//         {/* Render the component */}
//         {component && <component name="Example Name" />}
//       </div>
//     </div>
//   );
// };

// export default Test2;
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

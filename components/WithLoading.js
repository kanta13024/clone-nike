import { useEffect, useState } from "react";

function WithLoading(WrappedComponent, fetchData) {
  return () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };

    const Loading = (
      <div className="bg-white flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );

    return data ? <WrappedComponent data={data} /> : Loading;
  };
}

export default WithLoading;

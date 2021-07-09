import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Loading from "./pages/Loading";
import { onSmartContractLoad } from "./redux/reducer/smartContractReducer";
const Home = React.lazy(() => import("./pages/Home"));

const BlankPage = styled.div`
  color: #fff;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.background} !important;
  min-height: 100vh;
`;

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onSmartContractLoad({ param1: "param1", param2: "param2" }));
  }, [dispatch]);
  
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1700);
  }, []);

  return (
    <React.Fragment>
      <Suspense fallback={<BlankPage />}>
        {!pageLoading && <Home />}
        {pageLoading && <Loading />}
      </Suspense>
    </React.Fragment>
  );
}

export default App;

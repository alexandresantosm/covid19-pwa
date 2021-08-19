import { memo, useCallback, useEffect, useState } from "react";

import { getCountry } from "../../services/api";
import { ContainerStyled } from "./style";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");

  const getCovidData = useCallback((country) => {
    getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  return (
    <ContainerStyled>
      <div className="mb-2">Main</div>
    </ContainerStyled>
  );
}

export default memo(Main);

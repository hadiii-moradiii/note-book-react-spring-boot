import SampleMaterial from "./SampleMaterial";
import SampleReactQuery from "./SampleReactQuery";
import SampleReacti18next from "./SampleReacti18next";
import SampleReducer from "./SampleReducer";
import SampleRouting from "./SampleRouting";
import ZustandSample from "./ZustandSample";
import SampleContext from "./contextSample/SampleContext";
import SampleCustomProvider from "./contextSample/SampleCustomProvider";

const SampleApp2 = () => {
  return (
    <div>
      reducer:
      <SampleReducer />
      <hr />
      Material iu:
      <SampleMaterial />
      <hr />
      React Query:
      <SampleReactQuery />
      <hr />
      Context:
      <SampleContext />
      <hr />
      Custom Provider :
      <SampleCustomProvider />
      <hr />
      Zustand :
      <ZustandSample />
      <hr />
      i18next:
      <br />
      <SampleReacti18next />
    </div>
  );
};

export default SampleApp2;

import React from "react";
import Message from "./Message";
import StateSample from "./StateSample";
import RefSample from "./RefSample";
import UseFormSample from "./UseFormSample";
import ZodSample from "./ZodSample";
import EffectSample from "./EffectSample";
import AxoisSample from "./AxiosSample";
const SampleApp = () => {
  return (
    <>
      <Message message="hadi"> this body</Message>
      <hr />
      <StateSample name="test"></StateSample>
      <hr />
      <RefSample></RefSample>
      <hr />
      <UseFormSample></UseFormSample>
      <hr />
      <ZodSample></ZodSample>
      <hr />
      <EffectSample></EffectSample>
      <hr />
      <AxoisSample></AxoisSample>
    </>
  );
};

export default SampleApp;

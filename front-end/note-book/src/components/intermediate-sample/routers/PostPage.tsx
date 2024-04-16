import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  console.log(params);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      Posts
      <br />
      params: {params?.id}
      <br />
      searchParams: {searchParams.toString()}
      <br />
      name : {searchParams.get("name")}
      <br />
      location.pathname:{location.pathname}
      <br />
      location.search:{location.search}
    </div>
  );
};

export default PostPage;

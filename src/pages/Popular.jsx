import React, { useEffect, useState } from "react";

export default function Popular() {
  const [repos, setRepos] = useState([]);

  const fetchRepos = () => {
    fetch(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
    )
      .then((res) => res.json())
      .then((jsonData) => setRepos(jsonData.items));
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const repoList = repos.map((repo) => {
    return <li key={repo.id}>{repo.name}</li>;
  });

  return (
    <>
      <h1>Popular</h1>
      {repoList.length > 0 ? repoList : "Loading...."}
    </>
  );
}

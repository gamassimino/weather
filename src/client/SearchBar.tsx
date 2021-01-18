import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import "./app.css";
import SearchResult from "./SearchResult";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar(props: Props) {
  const [text, setText] = useState("");
  const [cities, setCities] = useState([]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  const onKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key == "Enter") {
      props.onSearch(text);
      setText("");
    } else {
      fetch("/api/cities?q=" + encodeURIComponent(text))
        .then((res) => res.json())
        .then((data) => {
          setCities(data);
        });
    }
  };

  const onSearchDone = (city: String) => {
    props.onSearch(city);
    setText("");
    setCities([]);
  };

  return (
    <div className="search">
      Enter a city or zip code: &nbsp;
      <input
        type="text"
        value={text}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {cities.length >= 1 && (
        <SearchResult cities={cities} onSearchDone={onSearchDone} />
      )}
    </div>
  );
}

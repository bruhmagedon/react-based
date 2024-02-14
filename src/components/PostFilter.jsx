import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder={"Поиск..."}
      />
      <MySelect
        options={[
          // title - название полей, по которым будем сортировать массив
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={filter.sort} // выбранная сортировка
        defaultValue={"Сортировка"}
        // непосредственно сортируем
        onChangeSelect={(selectedSort) => {
          setFilter({ ...filter, sort: selectedSort });
        }}
      />
    </div>
  );
};

export default PostFilter;

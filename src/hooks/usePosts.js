import { useMemo } from "react";

// Кастомный хук сортировки
export const usePost = (posts, sort) => {
  // чтобы массив не сортировался при каждом ререндере useMemo
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [
        // сравниваем поле из объекта a с полем из b, на этом основании сортируем массив posts, не мутируя его
        ...posts.sort((a, b) => a[sort].localeCompare(b[sort])),
      ];
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  // *Сортировка
  const sortedPosts = usePost(posts, sort);
  // *Поиск
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.includes(query));
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};

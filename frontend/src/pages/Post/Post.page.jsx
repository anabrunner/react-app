import { Suspense } from "react";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { SimpleGrid, Container, Loader } from "@mantine/core";
import { Await, defer, useLoaderData } from "react-router-dom";

function renderPosts(arrayOfPosts) {
  console.log(arrayOfPosts)
  return (
    arrayOfPosts.map((post) => (
      <ArticleCardImage key={post.title}{...post} />
    ))
  );
};

export const PostPage = () => {
  const data = useLoaderData();
  return (
    <Container>
      <SimpleGrid cols={3}>
        <Suspense 
          fallback={
            <Container>
              <Loader color="blue" type="dots" />
            </Container>
          }>
          <Await resolve={data.posts}>
            {(posts) => renderPosts(posts.data)}
          </Await>
        </Suspense>
      </SimpleGrid>
    </Container>
  );
};

export const postsLoader = async () => {
  const res = axios.get(`${DOMAIN}/api/posts`);
  console.log("I ran!");
  return defer({ 
    posts: res });
};

import { Container, Grid, SimpleGrid, rem } from '@mantine/core';

export function PostGrid({ postInfo }) {
  const { user, post } = postInfo;
  const author = user.email;
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <img src={post.image} alt={post.title} />
        <Grid gutter="md">
          <Grid.Col>
            <h1>"{post.title}"</h1>
          </Grid.Col>
          <Grid.Col>
            <h2>by: {author.slice(0, author.lastIndexOf('@'))}</h2>
          </Grid.Col>
          <Grid.Col>
            <p>{post.content}</p>
          </Grid.Col>
          <Grid.Col>
            <p>Category: {post.category}</p>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

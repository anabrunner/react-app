import { Link, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Modal, TextInput, Group, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PostGrid } from "../../components/misc/PostGrid";
import useBoundStore from "../../store/Store";
import { useForm } from "@mantine/form";

function PostDetailsPage() {
  const post = useLoaderData();
  const session = useBoundStore((state) => state);
  const checkPostOwnership = (sessionInfo, postData) => {
    const loggedUser = sessionInfo.user.email;
    const postOwner = postData.user.email;
    if (loggedUser === postOwner) {
      const [opened, { open, close }] = useDisclosure(false);
      const form = useForm({
        initialValues: {
          title: post.post.title,
          category: post.post.category,
          image: post.post.image,
          content: post.post.content,
        },
      });
      const updatePost = (values) => {
        post.post = values;
        close();
        return post;
      }
      return (
        <>
          <Modal opened={opened} onClose={close} title="Edit Post" centered>
            <Box maw={300} mx="auto">
              <form onSubmit={form.onSubmit(updatePost)}>
                <TextInput
                  label="Title"
                  placeholder="Enter a Title"
                  {...form.getInputProps("title")}
                />

                <TextInput
                  label="Category"
                  placeholder="Enter a Category"
                  {...form.getInputProps("category")}
                />
                <TextInput
                  label="Image"
                  placeholder="Enter an Image"
                  {...form.getInputProps("image")}
                />

                <TextInput
                  label="Content"
                  placeholder="Enter some content"
                  {...form.getInputProps("content")}
                />

                <Group position="right" mt="md">
                  <Button type="submit">Update</Button>
                </Group>
              </form>
            </Box>
          </Modal>
          <Button onClick={open}>Edit</Button>
        </>
      )
    }
  };
  return (
    <>
      <Container>
        <PostGrid postInfo={post} />
        <Button>
          <Link to="/posts">Back to Posts</Link>
        </Button>
        {checkPostOwnership(session, post)}
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  console.log("I also ran!");
  return res.data;
};

export default PostDetailsPage;

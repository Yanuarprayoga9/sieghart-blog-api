import Post from '../model/post.model.js';
import postData from '../utils/dummy-post.js';

export async function getPost(req, res) {
  const { slug } = req.query;
  let postDoc;
  if (slug !== '') {
    postDoc = await Post.find({ slug });
    return res.json(postDoc);
  }
  postDoc = await Post.find({});
  return res.json(postDoc);
}

export async function generate(req, res) {
  try {
    const postDoc = await Post.create(postData);
    res.json(postDoc);
  } catch (error) {
    res.json('error');
  }
}
import { getPosts } from '../../firebase';

export default async function handler(req, res) {
  const { page } = req.query;
  const pageNum = page * 1;
  const result = await getPosts(pageNum);
  res.status(200).json({ result })
}


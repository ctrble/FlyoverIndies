import getSheets from 'src/lib/getSheets';

export default async (req, res) => {
  const people = await getSheets();
  res.status(200).json(people);
};

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const createSlugFromMd = (filename) => filename.replace('.md', '');

export const fileContent = (directory, file) => {
  const filePath = path.resolve(`./public/content/${directory}/${file}`);

  try {
    // retrieve content from file
    const markdownWithMetadata = fs.readFileSync(filePath).toString();

    // parse markdown and format date
    const { data, content } = matter(markdownWithMetadata);
    const frontmatter = {
      ...data,
    };

    // use the filename as the slug and return the content
    return {
      slug: createSlugFromMd(file),
      frontmatter,
      content,
    };
  } catch (error) {
    return null;
  }
};

export const directoryContent = (directory, fullPath = '') => {
  // search for the given directory, and accept an override if needed
  const directoryPath =
    fullPath === '' ? `${process.cwd()}/public/content/${directory}` : fullPath;

  // get files from content directory
  try {
    const files = fs.readdirSync(directoryPath, 'utf8');
    return files.map((file) => fileContent(directory, file));
  } catch (error) {
    return [];
  }
};

export const directorySlugs = (directory) => {
  const filesPath = path.resolve(`./public/content/${directory}`);

  try {
    const files = fs.readdirSync(filesPath);
    return files.map((file) => createSlugFromMd(file));
  } catch (error) {
    return [];
  }
};

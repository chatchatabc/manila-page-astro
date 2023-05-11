# Manila Page <!-- omit in toc -->

Feel free to read the documentation if you have any problems or questions that you need to know about the project. The information here has been divided into multiple sections, in which explains all the necessary information that are needed for the project.

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Tech Stack](#tech-stack)
- [🚀 Project Directories](#-project-directories)
  - [**Directory Definitions**](#directory-definitions)
- [🧞 Commands](#-commands)
- [👀 Want to learn more?](#-want-to-learn-more)

# Tech Stack

Here lies all the tools and libraries that are used to develop and build the Davao Page website.

- Astro: https://astro.build
- TailwindCSS: https://tailwindcss.com
- Astro-ImageTools: https://github.com/RafidMuhymin/astro-imagetools
- @astrojs/sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astro-Robots-Txt: https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt
- NodeJS: https://nodejs.org/en/
- TypeScript and JavaScript

# 🚀 Project Directories

The development project consists a lot of files in order to make the whole website. Each files are been stored appropriately in different directories, so that it would be easily understand the purpose of the file based on the directories name. Therefore, understanding the directory names would make it easier to browse through in this project.

```zsh
/
├── data/
|   └── ...
├── public/
|   ├── images/
|   |   └── ...
|   └── ...
├── src/
|   ├── components/
|   |   └── ...
|   ├── content/
|   |   └── ...
|   ├── layouts/
|   |   └── ...
|   ├── pages/
|   |   └── ...
|   ├── styles/
|   |   └── ...
│   └── utils/
|       └── ...
└── ...
```

## **Directory Definitions**

- data/
  - This directory holds all JSON data that are useful to store information for the website.
- public/
  - This directory holds all files, images, etc. that are accessible to the public or to the users of the website.
- src/
  - This directory holds all files that are related to the development of the website, such as the components, html documents, css styles, etc.
- src/components/
  - This directory holds all of the specialized or reusable components that are being used to develop the website.
- src/content/

  - This directory holds all of markdown files that are being used to store robust information for the website.

- src/layouts/
  - This directory holds all of the layout files and is responsible for consistent layout of the web page.
- src/pages/
  - This directory holds all of the website pages and is also responsible for the url paths for each content of the website.
- src/styles/
  - This directory holds all files that are related to the styling of the website.
- src/utils/
  - This directory holds all of the utility functions that are useful in making the project.

# 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

# 👀 Want to learn more?

Feel free to contact [BoJoNVi](https://github.com/BoJoNVi) (me) through DingTalk or visit me at the workplace to have a thorough discussion about this project.

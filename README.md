<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<div align="center">

<h3 align="center">Mission 4</h3>

  <p align="center">
    Use MongoDB and create a CLI to seed cars into a database. These cars can then be used to find matches for the matching service.
    <br />
    <a href="https://github.com/windsywinds/mission4/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://delightful-island-0f7ba390f.4.azurestaticapps.net/">Demo</a>
    ·
    <a href="https://github.com/windsywinds/mission4/issues">Report Bug</a>
    ·
    
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A service that can be called to analyse an image of a car and return a description of the vehicle.

### Built With

- React JS
- MongoDB
- Express JS
- Tailwind CSS
- Microsoft Azure

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Clone repo

```sh
gitclone https://github.com/windsywinds/mission4.git
```

2. <h2>Install packages</h2>

```sh
npm i
```

3. Create .env file, add your Azure variables

```sh
VITE_API_KEY=< API_KEY >
VITE_ENDPOINT_NAME=< https://your-end-point.cognitiveservices.azure.com >
```
4. Start MongoDB Compass and seed the database via the CLI with the below command in vscode terminal. Alternatively you can use the "seedPath" command to define your own path. A full list of commands can be found using "node server/cli/commands.cjs help", or you can use the short cut "npm cli < command >"

```sh
npm run seed
```
or
```sh
node server/cli/commands.cjs seed ./server/data/seed.json
```

5. Run the API to access the database

```sh
npm run server
```

6. Run the Vite developement server in a new terminal and open your browser to the directed localhost address to interact with the front end car recognition and database matching service

```sh
npm run dev
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[vite-url]: https://vitejs.dev/
[contributors-shield]: https://img.shields.io/github/contributors/windsywinds/mission4.svg?style=for-the-badge
[contributors-url]: https://github.com/windsywinds/mission4/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/windsywinds/mission4.svg?style=for-the-badge
[forks-url]: https://github.com/windsywinds/mission4/network/members
[stars-shield]: https://img.shields.io/github/stars/windsywinds/mission4.svg?style=for-the-badge
[stars-url]: https://github.com/windsywinds/mission4/stargazers
[issues-shield]: https://img.shields.io/github/issues/windsywinds/mission4.svg?style=for-the-badge
[issues-url]: https://github.com/windsywinds/mission4/issues
[license-shield]: https://img.shields.io/github/license/windsywinds/mission4.svg?style=for-the-badge
[license-url]: https://github.com/windsywinds/mission4/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/windsor-sam/
[product-screenshot]: https://github.com/windsywinds/mission4/blob/main/src/assets/screenshot.jpg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwindcss-url]: https://tailwindcss.com
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
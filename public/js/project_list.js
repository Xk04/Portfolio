// ==== Personal Projects ====

let personalProjects = [
  // jAI
  new Preview(
    "public/images/preview/jAI.png",
    "AI package - jAI",
    "Project in progress...",
    "~ /2026",
    "Alone",
  ),
  new Project(
    "AI package - jAI",
    `
      <p>

      </p>
    `,
    `
    <a class="repo"  target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>The repository is not available yet</p>
    </a>
    `,
  ),

  // Tank
  new Preview(
    "public/images/preview/tank.png",
    "Autonomous Robot v.2",
    "",
    "01/2026",
    "Fabrication Lab",
  ),
  new Project(
    "Autonomous Robot — Yahboom Tank",
    `
      <p>
      </p>
    `,
    `
    <a class="repo" href="https://github.com/Xk04/Autonomous-Robot-Yahboom-Tank" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    `,
  ),

  // Tiny Bot
  new Preview(
    "public/videos/preview/tiny_bot.gif",
    "Autonomous Robot v.1",
    "Able to make choices based on signage",
    "06/2025",
    "Fabrication Lab",
  ),
  new Project(
    "Autonomous Robot — Yahboom Tiny Bot",
    `
    <iframe src="https://www.youtube.com/embed/4n_6p8l14WA" title="Yahboom Tiny Bot - Test phase" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>
        My first project at the Fabrication Laboratory (with two teammates mentionned in the slides) was a Tiny bot from the Yahboom company.<br>
        This autonomous robot was pretty good to understand minimal IoTs' architecture.<br>
        We also discovered the <a href="https://docs.ultralytics.com/" target="_blank" rel="noopener">You Only Look Once</a> CNN model from ultralytics.<br>
        As you can see, this robot is really tiny. Then I decided to continue with a v.2 the "Yahboom G1 AI vision - Tank".
    </p>
    `,
    `
      <a href="https://www.canva.com/design/DAGojOKnQJc/a5PDoHsTN3Pe8AiHZA6tEQ/view?utm_content=DAGojOKnQJc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7383905023" target="_blank" rel="noopener">Explanations in few slides (french version)</a>
    `,
  ),
];

// ==== College Projects ====

let collegeProjects = [
  // Compiler
  new Preview(
    "public/images/preview/mycompiler.png",
    "Creating a Compiler",
    `
      Project in progress...
    `,
    "~ /2026",
    "Compilation course",
  ),
  new Project(
    "Creating a Compiler - MyCompiler",
    `
      <p>

      </p>
    `,
    `
    <a class="repo" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>The repository is not available yet</p>
    </a>
    `,
  ),

  // Game Engine
  new Preview(
    "public/images/preview/game_engine2.png",
    "Game Engine in Java",
    `
    MVC/EC structure to create platformer games.
    `,
    "01/2026",
    "OOP course",
  ),
  new Project(
    "Game Engine in Java",
    `
      <p>
          During one semester we create a simple 2D Game Engine for plateformer games.<br>
          We didn't have to build a video game, we needed to create the simplest possible structure in order to welcome any projects.<br>
          Then I did the software design with UML, the structure, the window creation/management, models, and many controllers, (+ docs).<br>
          This Game Engine helps us to practice what we saw in Object Oriented Programming and Design.<br>
          It improved drastically my design software thinking. Nowadays I can organize more properly my new projects.
      </p>
    `,
    `
    <a class="repo" href="https://github.com/Xk04/Game-Engine" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    `,
  ),

  // Sport betting website
  new Preview(
    "public/videos/preview/lose1max.gif",
    "Sport Betting website",
    "",
    "06/2025",
    "Web dev course",
  ),
  new Project(
    "Sport Betting website — Lose1Max",

    `
        <iframe
            data-src="https://www.youtube.com/embed/VskOuPR4LbY" src="about:blank"
            title="L2 informatique - Projet Web : Lose1Max"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
        </iframe>
        <p>
        During one semester we learned how to build a website in PHP, MySql (+ Ajax system).<br>
        Then we understood backend, security mecanisms, database and frontend in order to create a sport betting app.<br>
        I implemented the backend, security methods, an admin panel and many frontend pages.<br>
        For more details you can watch the youtube video in which my teammate present the website in the 1st part.
        And I talk about my work in the 2nd part. You can also visit the public repository on GitHub !<br>
        </p>
    `,

    `
    <a class="repo" href="https://github.com/Xk04/Sport-bettings-website-Lose1Max" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    <p>
      This project allows me to think about scalablity, security, and data management.<br>
      I have learned a lot of mecanisms at this moment. I'm glad to have discovered the different processes involved in building a website.
    </p>
    `,
  ),

  // Polynomial manipulation
  new Preview(
    "public/images/preview/R.png",
    "Polynomial Manipulation",
    `
            Polynomial algorithms & tests automation
        `,
    "12/2024",
    "R programming course",
  ),
  new Project(
    "Polynomial Manipulation in R",
    `
      <img src="public/images/repo/schema_tests.png">
      <p>
      This 1 month project provides 23 polynomial functions for a R library:<br>
          - Tools,<br>
          - Builders,<br>
          - Addition, Substraction, Multiplications,<br>
          - Integrals and Derivatives for polynomials,<br>
          - Single point evaluation<br>
      The most meaningful part was the test framework creation.
      It was my first software design ! Since this project I started to understand why
      frameworks and library structures are so important.
      </p>
    `,
    `
    <a class="repo" href="https://github.com/Xk04/Polynomial-manipulation-in-R-programming" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    `,
  ),
];

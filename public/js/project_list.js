// ==== Personal Projects ====

let personalProjects = [
  // jAI
  new Preview(
    "public/images/preview/jAI.png",
    "AI package",
    "Project in progress...",
    "~ /2026",
    "Alone",
  ),
  new Project(
    "AI package - jAI",
    `
      <p>
          jAI is an AI package to create ML/DL systems in Java.<br>
          <br>
          Why am I building this project ?<br>
          - I don't want to only use libraries, I would like understand deeply what AI really means.<br>
          - It's a challenging project.<br>
          - This project could be a nice test to apply all my knowledge.<br>
          <br>
          Why in Java ?<br>
          - Java is a verbose language, then classes, methods and functions can make more sens in order to understand AI systems.<br>
          - More educational.<br>
          - Object programming is easier in Java than Python on huge packages.<br>
          - To prototype easily.<br>
          <br>
          The repository will be available soon !<br>
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
    "public/images/preview/tank.jpg",
    "Autonomous Robot v.2",
    "Motorization in progress...",
    "~ /2026",
    "Fabrication Lab",
  ),
  new Project(
    "Autonomous Robot — Yahboom Tank",
    `
      <img src="public/images/repo/tank.png">
      <p>
          During one semester I had the opportunity to develop the software part for a robot with the Fablab of Nice Côte d'Azur University.<br>
          Then I worked on a <a href="https://www.yahboom.net/study/G1-T-PI" target="_blank" rel="noopener">Yahboom G1 AI vision</a> bot.<br>
          I had to deal with network conditions, and the robot performances. This robot is equipped with a Raspberry Pi (Pi OS) and WiFi connection.<br>
          For more mobility, I choose to create a web interface (secured with <a href="https://tailscale.com/" target="_blank" rel="noopener">Tailscale</a>).
          Thanks to this interface the user and the robot can communicate !
      </p>
    `,
    `
    <a class="repo" href="https://github.com/Xk04/Autonomous-Robot-Yahboom-Tank" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    <p>
        However the robot need to send an image of his own view. Next I can send a video stream treated with a Convolutional Neural Network model
        made by <a href="https://www.ultralytics.com/" target="_blank" rel="noopener">ultralytics</a> (version: YOLO26n) in order to detect objects around it.<br>
        This AI model need to be isolated in a thread for more performance. And after an object recognition we could send the data to the user thanks to a web socket.<br>
        <br>
        This semester, I'm working on the robot motorization to control it with a remote controller (the web interface).<br>
        With these technologies it will be possible to automate the robot depending on his environnement (the signage, the road, walls, ...) like the v.1 of my autonomous robot in a near future.
    </p>
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
        My first project at the Fabrication Laboratory (with two teammates mentionned in the slides) was a Tiny bot from the <a href="https://www.yahboom.net/home" target="_blank" rel="noopener">Yahboom company</a>.<br>
        This autonomous robot was pretty good to understand minimal IoTs' architecture.<br>
        We also discovered the <a href="https://docs.ultralytics.com/" target="_blank" rel="noopener">You Only Look Once</a> model, a Convolutional Neural Network made by <a href="https://www.ultralytics.com/" target="_blank" rel="noopener">ultralytics</a>.<br>
        As you can see, this robot is really tiny. Then I decided to continue with a v.2 the "<a href="https://www.yahboom.net/study/G1-T-PI" target="_blank" rel="noopener">Yahboom G1 AI vision</a> - Tank".
    </p>
    `,
    `
      <a class="repo" href="https://www.canva.com/design/DAGojOKnQJc/a5PDoHsTN3Pe8AiHZA6tEQ/view?utm_content=DAGojOKnQJc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7383905023" target="_blank" rel="noopener">Explanations in few slides (french version)</a>
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
          My teammate and I are currently building a compiler for a sublanguage of C.<br>
          The goal is to apply and understand the concepts seen in lectures.<br>
          We are also using Lex and Yacc tools for the code analysis.<br>
          The project will be available on a public repository soon.
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
    "Game Engine",
    `
    MVC/EC structure for platformer games.
    `,
    "01/2026",
    "OOP course",
  ),
  new Project(
    "Game Engine in Java",
    `
      <iframe width="1527" height="859" src="https://www.youtube.com/embed/OO4BtQbZAjs" title="Game Engine for platformers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>
          During one semester we created a 2D Game Engine for plateformer games.<br>
          We didn't have to build a video game, we needed to create a structure capable of accommodating any kind of project.<br>
          My role was to create the software design with UML, the structure, the window creation & management, models, and many controllers (ex: LevelManager).<br>
          This Game Engine helps us to practice what we learned in Object Oriented Programming and Design course.<br>
          The project has drastically helped me to improve my design software thinking.<br>
      </p>
    `,
    `
    <a class="repo" href="https://github.com/Xk04/Game-Engine" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    <p>
        Now thanks to OOP course I can easily organize my projects, in particular thanks to design patterns understanding.<br>
        I would like to mention <a href="https://refactoring.guru/" target="_blank" rel="noopener">refactoring.guru</a> website, a useful tool for developping !
    </p>
    `,
  ),

  // Sport betting website
  new Preview(
    "public/videos/preview/lose1max.gif",
    "Sport Betting website",
    "PHP, MySql",
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
        During one semester we learned how to build a website in PHP, MySql, and Ajax (asynchronous calls).<br>
        Then we understood backend, security mechanisms, database and frontend in order to create a sport betting app.<br>
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

        We also created a test interface with log option. This system can generate millions of unit tests.
        And it improves the bug detection.
      </p>
    `,
    `
    <a class="repo" href="https://github.com/Xk04/Polynomial-manipulation-in-R-programming" target="_blank" rel="noopener">
      <img src="public/images/icons/github.png" alt="">
      <p>For more details, go to the repository here</p>
    </a>
    <p>
        In my opinion, the most meaningful part in this package was the test framework creation.<br>
        It was my first software design, and I did not create any test framework before.<br>
        Therefore I started to understand why frameworks and library structures are so important.
    </p>
    `,
  ),
];

import { ProjectDisplay } from "@/components/home/ProjectDisplay";
import Link from "next/link";
import Image from "next/image";

export function Works() {
  return (
    <div className="grid gap-4 grid-cols-3 min-[578px]:max-lg:grid-cols-2 min-[0px]:max-[578px]:grid-cols-1">
      <ProjectDisplay.Card
        site="https://infinitegiving.com"
        title="Infinite Giving"
        description="An investment platform that modernizes investing and asset giving for nonprofits."
        poster="/works/infinitegiving/1.png"
      >
        <ProjectDisplay.Carousel
          images={[
            "/works/infinitegiving/1.png",
            "/works/infinitegiving/2.png",
            "/works/infinitegiving/3.png",
          ]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[{ name: "Quasar (VueJS)", color: "bg-blue-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Infinite Giving is the first investment platform created for
              nonprofits, modernizing investing and asset giving.
            </p>

            <br />

            <p>
              My role at Infinite Giving is to lead construction of the platform
              frontend. This includes constructing the user interface by closely
              following design handoffs and integrating the Infinite Giving API
              to add functionality to all operations. Throughout my time at
              Infinite Giving, I have created over 220 components across 28
              screens for a platform that now manages over $16 million in
              assets.
            </p>

            <br />

            <p>
              Ive had the pleasure of working at Infinite Giving since the
              summer of 2021, where Ive worked alonside Karen Houghton, Seth
              Radman, and Connor Ford. Infinite Giving is based in Atlanta.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        site="https://ioda.inetintel.cc.gatech.edu/"
        title="IODA"
        description="A Georgia Tech platform that tracks Internet outages around the world."
        poster="/works/ioda/1.png"
      >
        <ProjectDisplay.Carousel
          images={["/works/ioda/1.png", "/works/ioda/2.png"]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[{ name: "React", color: "bg-blue-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              The Georgia Tech IODA platform tracks Internet outages globally
              and is used by activists and researchers everywhere.
            </p>

            <br />

            <p>
              In the beginning of 2023, I joined{" "}
              <Link
                href="https://inetintel.notion.site/Internet-Intelligence-Research-Lab-d186184563d345bab51901129d812ed6"
                target="_blank"
              >
                Georgia Tech's Internet Intelligence Research Lab
              </Link>{" "}
              as a graduate research assistant under Dr. Alberto Dainotti and
              Dr. Amanda Meng. My work at the lab involved maintaining the React
              frontend for IODA, a platform used by activists and researchers
              around the world to track Internet outages. I was with the lab for
              a total of three semesters, from Spring 2023 to Fall 2023
              (including the summer). During this time, I introduced a
              historical time slicer for charts, fully-featured chart markups
              and exporting, and a link sharing feature.
            </p>

            <br />

            <p>
              Additionally, I took on the effort of refactoring the entire
              frontend, which included consolidating 3 UI libraries down to one,
              removing over 16 dependency packages, and clearing out thousands
              of lines of code. This refactor significantly improved platform
              performance, maintainability, and robustness.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        site="https://www.filio.io/"
        title="Filio"
        description="A visual asset management startup for projects in many industries."
        poster="/works/filio/1.png"
      >
        <ProjectDisplay.Carousel
          images={["/works/filio/1.png", "/works/filio/2.png"]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[{ name: "Quasar (VueJS)", color: "bg-blue-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Filio is a platform that helps project managers easily document
              and store visual assets (pictures and videos) from their projects.
              The platform has applications in construction, inspection, and
              several engineering fields.
            </p>

            <br />

            <p>
              When I first began working for Filio, my job was to redesign their
              landing page and overhaul their platform from Bootstrap to
              in-house designs. As I later became more involved, I worked in the
              construction of new features.
            </p>

            <br />

            <p>
              My most recent work for Filio has been rebuilding the entire
              platform's frontend (originally built with HTML, CSS, and jQuery)
              in Quasar, a Vue framework. The success of this rebuild has
              allowed for the addition of several new features, performance
              improvements, and an overall more maintainable code base.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="AngioCloud"
        description="A web-based medical platform for the analysis and treatment of aneurysms by physicians."
        poster="/works/angiocloud.png"
      >
        <ProjectDisplay.Carousel images={["/works/angiocloud.png"]} />
        <div>
          <ProjectDisplay.TechStack
            items={[{ name: "VueJS", color: "bg-emerald-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              AngioCloud is a web based platform that allows physicians to
              analyze and treat aneurysms using data from medical imagery. It
              allows physicians to inspect 3D medical imagery using a myriad of
              utilities, along with capabilties for sharing and managing cases
              (all HIPPA compliant).
            </p>

            <br />

            <p>
              My role in this project was to construct the frontend of this
              application. This involved consuming APIs built by the team to
              display and manipulate data, integrating authentication services,
              and implementing a variety of complex functionalities to let the
              user interact with medical imagery (such as measurements, level
              thresholds, etc).
            </p>

            <br />

            <p>
              This is my first work that involved interaction with 3D models. As
              such, many of the challenges I faced involved the loading,
              manipulation, and analysis of 3D imagery of arteries, along with
              the precision demanded to medically inspect them. My role also
              involved working alongside physicians and researchers from Emory
              University to design and build features that were optimal for
              usage by doctors in the field.
            </p>

            <p>AngioCloud is a product of 11Ten Innovation Partners</p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="Stryker Foosball"
        description="Hackathon project that brings advanced computer vision to foosball. 1st Prize Winner."
        poster="/works/stryker.png"
        site="https://devpost.com/software/stryker"
      >
        <iframe
          className="w-full"
          height="400"
          src="https://www.youtube.com/embed/DJMc6ZnWa5U?si=rzZ1q0p37SNSi7tl"
          title="Stryker Foosball Demo - YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "Vue", color: "bg-emerald-500" },
              { name: "OpenCV", color: "bg-amber-400" },
              { name: "Python", color: "bg-blue-500" },
              { name: "Firebase", color: "bg-rose-600" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Stryker was our team's entry for the Flowers Invention Studio 2020
              Hackathon, Georgia Tech's mechanical engineering hackathon. The
              theme of this hackathon was "Internet of Things," so we decided
              our project would be adding some "smart" capabilities to our
              apartment's foosball table. The result was Stryker, a system that
              mounts to a foosball table and uses computer vision to provide
              realtime game statistics, scoring, and even replays. The system
              uses OpenCV to track the foosball's position and Pyrebase to
              update stats in realtime. These stats are reflected in a web
              portal that users can watch during the game.
            </p>
            <br />
            <p>
              My job in this project was to build the base-level Python code
              (built on top of OpenCV) to track the foosball position, along
              with constructing the web application that displays the game
              statistics and scores from Firebase.
            </p>
            <br />
            <p>Stykyer won the best overall project award in the hackathon.</p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="Templit"
        description="A collaborative markdown document editor, built for the TAs of Georgia Tech's CS 1301."
        poster="/works/templit/1.png"
      >
        <ProjectDisplay.Carousel
          images={["/works/templit/1.png", "/works/templit/2.png"]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "VueJS", color: "bg-blue-500" },
              { name: "Firebase", color: "bg-rose-600" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              I previously worked as a Teaching Assistant for Georgia Tech's CS
              1301 Intro to Computing class. Initially, we would write all
              homework assignments in Google Docs. However, this posed multiple
              issues. First, TAs would have issues with formatting code
              snippets. Second, students had a difficult time copying/pasting
              given code snippets for code. The lack of a design system also
              made it difficult to maintain a consistent look and feel between
              homework assignments.
            </p>

            <br />

            <p>
              To solve these problems, I created Templit, a collaborative
              Markdown editor that renders document previews in realtime and
              enables PDF/Markdown exports. With Templit, TAs can create
              homework assignments with code snippets (syntax highlighting
              supported) and consistent document formatting. Multiple TAs can
              also work together at the same time, making it easy to collaborate
              on homework assignments. Lastly, the consistent formatting of
              documents makes it easy for students to scan through homework
              assignments and find the information they need.
            </p>

            <br />

            <p>
              Templit is built with Quasar, using Firepad and Firebase as
              realtime document storage. This means that the app itself is
              entirely clientside, requiring no backend costs to maintain (one
              of the most important considerations during the construction of
              this project).
            </p>

            <p>
              After its release, Templit remains as the defacto document editor
              for CS 1301, used for homeworks, labs, and recitation worksheets.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="Musicbuk"
        description="A platform that pairs students with top music instructors for virtual lessons."
        poster="/works/musicbuk/1.png"
      >
        <ProjectDisplay.Carousel
          images={["/works/musicbuk/1.png", "/works/musicbuk/2.png"]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "Quasar (VueJS)", color: "bg-emerald-500" },
              { name: "Firebase", color: "bg-rose-600" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Musicbuk is a company that pairs students with elite musicians for
              premium music lessons. The company is an alumni of the presitgious
              Techstars program.
            </p>

            <br />

            <p>
              Initially, I was Musicbuk's sole frontend developer. My work at
              involved constructing the user interface from design handoffs, and
              integrating the Musicbuk API to add functionality to all
              operations. The biggest challenges that came with this were
              ensuring a seamless cross-browser experience, and perfectly
              implementing a design that encourages visitors to convert to
              customers. Any mistake or bug during the user's path on the site
              could result in a lost conversion. Later, I also constructed the
              admin portal for the website, along with an instructor portal.
            </p>

            <br />

            <p>
              Musicbuk is the first project I've worked on that includes any
              form of commerce - one where users shop for a product and purchase
              it.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="CS1301 Queue"
        description="A realtime queuing system for managing students at Georgia Tech's CS 1301 Help Desk."
        poster="/works/queue/1.png"
      >
        <ProjectDisplay.Carousel
          images={[
            "/works/queue/1.png",
            "/works/queue/2.png",
            "/works/queue/3.png",
          ]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "Quasar (VueJS)", color: "bg-blue-500" },
              { name: "Firebase", color: "bg-rose-600" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              I previously worked as a Teaching Assistant for Georgia Tech's CS
              1301 Intro to Computing class. One of the problems faced by the
              TAs of this class is efficiently and fairly helping students
              during office hours. When dozens of students are at our help desk,
              it can be hard to remember who should be helped first.
            </p>
            <br />
            <p>
              This queue system solves this problem by providing an easy way for
              students to check in. When a student scans their BuzzCard at a
              kiosk, the queue will automatically sign them in with a static
              animal alias (for protecting their identity). Having this order
              allows TAs to help students based on who checked in first. TAs can
              sign in with their IDs at the same kiosk to remove people from the
              queue, alter the queue order, or view the students' actual names.
              The system features multiple security checks to ensure only TAs
              have authorization to conduct admin operations, while students can
              only add themselves to the bottom of the queue.
            </p>
            <br />
            <p>
              The queue order and student/TA sign in is powered by Firestore.
              This means that any computer can be turned into a kiosk and
              connect to the same concurrent queue. As a result, students can
              sign in from multiple places, and all kiosks will update at the
              same time. This also lets students monitor the queue from their
              phone, without needing to be present at the help desk.
            </p>
            <br />
            <p>And of course, it comes with a Dark Mode.</p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="Countable"
        description="Developed web platform & API for Countable Technolgies, a crowd metrics data company."
        poster="/works/countable/1.png"
      >
        <ProjectDisplay.Carousel
          images={["/works/countable/1.png", "/works/countable/2.png"]}
        />
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "Vue", color: "bg-emerald-500" },
              { name: "Python", color: "bg-blue-600" },
              { name: "Docker", color: "bg-blue-600" },
              { name: "AWS", color: "bg-amber-500" },
              { name: "Shell", color: "bg-slate-600" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Countable was a company I cofounded in Georgia Tech's Create-X
              program. Our platform counted passive Wi-Fi signals from
              cellphones to deliver foot traffic data to retailers and venues.
            </p>
            <br />
            <p>
              My largest role in Countable was constructing the frontend for our
              web platform. I was in charge of building our landing page,
              dashboard, and all other platform features (campaign management,
              settings, etc). Our product was originally written with Vanilla
              JavaScript and PHP, but I eventually ported it over to VueJS.
              Handling dates and presenting multiple metrics was especially
              challenging on the dashboard.
            </p>
            <br />
            <p>
              I also worked with another developer to create our sensors, which
              collected and processed the Wi-Fi signals before sending them to
              our database. This involved establishing secure and reliable
              communication with our database, handling recovery for dropped
              Internet connection or power failures, and automaticaly updating
              the sensor software. Most of this was done with extensive Shell
              scripts and Docker (which allowed us to deploy automatic updates),
              which housed our sensor code (written in Python).
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="Rotations"
        description="COVID Hackathon project to bring people back to in-person facilities. 1st Prize Winner."
        poster="/works/rotations.png"
        site="https://youtu.be/zUh7lRvyOQc"
      >
        <iframe
          className="w-full"
          height="400"
          src="https://www.youtube.com/embed/zUh7lRvyOQc?si=SI200blWUa_TU-_x"
          title="Rotations Demo - YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div>
          <ProjectDisplay.TechStack
            items={[{ name: "Vue", color: "bg-emerald-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Rotations was our team's entry for the2021 EGHI/GT HACK COVID-19
              Hackathon, a joint hackathon between Georgia Tech and the Emory
              Global Health Institute. The theme of this hackathon was utilities
              for helping students and employees gradually get back to school
              and work. We decided to create Rotations, an automatic schedule
              generator that splits people into groups that alternate between
              working at home and coming into the office. The project accounts
              for the latest research in COVID prevention, along with office
              specifications, to create optimized seating charts and groupings.
              Furthermore, Rotations includes basic contact tracing features and
              safety scores, making it easy for admins to manage how people
              return to in-person activities.
            </p>
            <br />
            <p>
              My role in this project was to construct the application
              front-end, along with the grouping algorithms and calendar
              integrations.
            </p>
            <br />
            <p>Rotations won the 1st place prize in this hackathon.</p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="VueStream"
        description="Hackathon project to deliver optimized streaming recommendations. Best UI/UX Design Winner."
        poster="/works/vuestream.png"
        site="https://devpost.com/software/streamtaste"
      >
        <iframe
          className="w-full"
          height="400"
          src="https://www.youtube.com/embed/P4V9NawfYBc?si=T6CPhJSENxewMGF6"
          title="VueStream Demo - YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div>
          <ProjectDisplay.TechStack
            items={[{ name: "Vue", color: "bg-emerald-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              VueStream was our team's entry for HackGT 6, Georgia Tech's annual
              hackathon with ~1500 attendees. VueStream is a web app that
              aggregates viewing data from multiple of your (or your friends')
              streaming accounts. Based on what each account has watched, it
              provides tailored recommendations that take everyone's interests
              into account. View the video above to see it in action!
            </p>
            <br />
            <p>
              My job in this project was to design and build the frontend of the
              application, which I chose to do with Vue. This project went on to
              win the Best UI/UX Award by BNY Mellon.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="JA3Sentry"
        description="Browser extension that detects malicious client behavior with JA3 fingerprinting."
        poster="/works/ja3sentry/poster.png"
        site="https://github.com/arvinpoddar/ja3sentry"
      >
        <iframe
          className="w-full"
          height="400"
          src="https://www.youtube.com/embed/5o7Syx5caB4?si=iM3o6jMJ1-GPWSta"
          title="JA3Sentry Demo - YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "Vue", color: "bg-emerald-500" },
              { name: "Firebase", color: "bg-rose-600" },
              { name: "AWS", color: "bg-amber-400" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              JA3Sentry was built for my semester project for CS 6675 (Advanced
              Internet Systems & Applications) at Georgia Tech. It aims to
              detect malicious client behavior by automatically analyzing the
              <Link
                className="text-indigo-400 hover:underline"
                href="https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967/"
                target="_blank"
              >
                {" "}
                JA3 fingerprint
              </Link>{" "}
              of the client and matching suspicious JA3 parameters to a database
              of known malicious fingerprints. JA3Sentry is the first tool of
              its kind to actively monitor for threats using JA3 fingerprinting.
              See a video demo above.
            </p>
            <br />
            <p>
              JA3Sentry is a complex project with many components, requiring an
              in-depth understanding of the TLS handshake. To get the client's
              JA3, I had to use a socket server to rebound the client's TLS
              handshake information, since the browser itself cannot access this
              data. I then built a Lambda function to analyze blocks of JA3s and
              check them against a database of aggregated threats. Finally, I
              created a Firefox extension that automates this entire process of
              periodically fetching JA3s and verifying them, all while
              displaying the results to the user.
            </p>
            <Image
              src="/works/ja3sentry/architecture.png"
              className="w-full object-cover object-top mt-4"
              width={600}
              height={600}
              alt="JA3Sentry Architecture"
            />
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="SignalRx"
        description="Platform for pharmacies to automatically text prescription reminders to patients."
        poster="/works/signalrx/poster.png"
        site="https://www.youtube.com/watch?v=jurlVNI9ecY"
      >
        <iframe
          className="w-full"
          height="400"
          src="https://www.youtube.com/embed/jurlVNI9ecY?si=IyQmDyniv3lkc1Ai"
          title="SignalRx Demo - YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <ProjectDisplay.TechStack
            items={[
              { name: "Vue", color: "bg-emerald-500" },
              { name: "PostgreSQL", color: "bg-blue-700" },
              { name: "Express", color: "bg-emerald-500" },
              { name: "AWS", color: "bg-amber-400" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              SignalRx was built for my semester project for CS 6440 (Intro to
              Health Informatics) at Georgia Tech. There are dozens of
              medication reminders apps available today, but they all make some
              assumptions about the user. For example, they assume that the user
              has a smartphone, and that they are tech-savvy enough to correctly
              enter prescription information. These assumptions don't always
              hold true, especially with older patients (which make up the
              largest demographic of prescription users).
            </p>
            <br />
            <p>
              SignalRx aims to solve this problem by having the pharmacy enroll
              patients for prescription reminders when they pick up a
              medication. This way, the patient doesn't have to do anything to
              receive reminders (or even own a smartphone!). SignalRx stores
              both patient and prescription data using FHIR, the industry
              standard for transacting healthcare data.
            </p>
            <br />
            <p>
              SignalRx is built with a VueJS frontend that interfaces with a
              Lambda/Express backend API. The backend API transacts with a
              PostgreSQL database. At the same time, a recurring Lambda function
              combs the database for upcoming reminders to send to patients with
              Twilio.
            </p>
            <Image
              src="/works/signalrx/architecture.png"
              className="w-full object-cover object-top mt-4"
              width={600}
              height={600}
              alt="SignalRx Architecture"
            />
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="Cinemiss"
        description="Calculates how much of a movie's budget you miss by blinking while watching."
        poster="/works/cinemiss.gif"
        site="https://arvinpoddar.com/cinemiss/#/"
      >
        <div>
          <ProjectDisplay.Carousel images={["/works/cinemiss.gif"]} />
          <ProjectDisplay.TechStack
            items={[{ name: "Vue", color: "bg-emerald-500" }]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              Cinemiss is a unique way to visualize how expensive it is to make
              a movie. Simply search a movie title, and Cinemiss can tell you
              how much of the movie's budget (in dollars) you miss just by
              blinking during the movie. This project is powered by the TMDB
              API.
            </p>
            <br />
            <p>
              This was one of my very first web development projects, and I
              originally built it with PHP. When I first started learning Vue, I
              decided to port over Cinemiss from PHP into Vue (I added movie
              search results and a style overhaul as well.)
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="animals"
        description="NPM package to add animal avatars to any Vue or React project. Inspired by Google Docs icons."
        poster="/works/vue-animals.png"
        site="https://www.npmjs.com/package/vue-animals"
      >
        <div>
          <ProjectDisplay.Carousel images={["/works/vue-animals.png"]} />
          <ProjectDisplay.TechStack
            items={[
              { name: "Vue", color: "bg-emerald-500" },
              { name: "React", color: "bg-blue-500" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              After adding these animal avatars to my CS1301 Queue project (see
              it in the Work Section), a friend of mine said it might be a fun
              NPM package. I thought that was a good idea, and decided to create
              and publish them as a Vue component that can be easily customized
              with multiple props and added to any project. This was my first
              NPM package! Later, that same friend helped me publish a React
              equivalent (available{" "}
              <Link
                className="text-indigo-400 hover:underline"
                href="https://www.npmjs.com/package/react-animals"
                target="_blank"
              >
                here
              </Link>
              )
            </p>
            <br />
            <p>
              These avatars are inspired by the "Anonymous Animals" avatars on
              Google Docs. The images were pulled from a repo from{" "}
              <Link
                className="text-indigo-400 hover:underline"
                href="https://github.com/wayou/anonymous-animals"
                target="_blank"
              >
                wayou
              </Link>
              . All images were designed by{" "}
              <Link
                className="text-indigo-400 hover:underline"
                href="https://jeffersoncheng.com/Anonymous-Animals"
                target="_blank"
              >
                Jefferson Cheng
              </Link>
              . I do not claim ownership for these images, I just developed the
              component itself.
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>

      <ProjectDisplay.Card
        title="ColorMatch"
        description="JavaScript game where players try to match the colors of the two halves of the screen."
        poster="/works/color.png"
        site="https://arvinpoddar.com/colormatch/"
      >
        <div>
          <ProjectDisplay.Carousel images={["/works/color.png"]} />
          <ProjectDisplay.TechStack
            items={[
              { name: "JavaScript", color: "bg-yellow-500" },
              { name: "HTML", color: "bg-rose-500" },
              { name: "CSS", color: "bg-blue-500" },
            ]}
          />
          <div className="mt-3 text-md font-medium">
            <p>
              ColorMatch is a game I made when I first started learning
              JavaScript. When you first load the game, a random color appears
              in the top half of the screen. The player's goal is to use the RGB
              sliders to match the color of the bottom half of the screen to the
              top half's as closely as possible. The lower the score, the better
              (I've never managed to get a perfect score of 0).
            </p>
          </div>
        </div>
      </ProjectDisplay.Card>
    </div>
  );
}

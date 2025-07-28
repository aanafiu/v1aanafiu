import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <section className="">
      <div className="text-3xl font-bold mb-8 flex items-center gap-2">
        <h2>🚀 Projects</h2>
        <h3 className="hidden md:flex text-[12px] font-extralight font-mono text-chart-4">
          /-Place Mouse On Projects
        </h3>
        <h3 className="flex md:hidden text-[12px] font-extralight font-mono text-chart-4">
          /-Click Mouse On Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TinyTask Project - New Top Card */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full h-fit perspective mx-auto"
        >
          <div className="relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180 focus:rotate-y-180 active:rotate-y-180">
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden rounded-xl glass p-6 border border-chart-4 shadow-md">
              <h3 className="text-xl font-bold mb-4">TinyTask</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>Full-Stack Educational Platform:</strong> Complete
                  tasks, earn coins.
                </li>
                <li>
                  <strong>Three Admin Types:</strong> Super admin, task creator,
                  and player roles.
                </li>
                <li>
                  <strong>Task Types:</strong> Four categories for diverse
                  challenges.
                </li>
                <li>
                  <strong>Real-Time Updates:</strong> Tasks and ranking update
                  dynamically.
                </li>
                <li>
                  <strong>Dashboard:</strong> Role & profile-based dynamic UI.
                </li>
                <li>
                  <strong>Tech Stack:</strong> React, Node, Express, MongoDB,
                  SSLCommerz, Tailwind.
                </li>
                <li>
                  <strong>Rank Charts:</strong> Leaderboard-based engagement
                  system.
                </li>
              </ul>
            </div>

            {/* Back Side - Live Preview */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-chart-4">
              <iframe
                src="https://tinytask-mern.web.app/"
                title="TinyTask Preview"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            <a
              href="https://tinytask-mern.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/aanafiu/tinytask-mern-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              GitHub Repo <FaGithub />
            </a>
          </div>
        </div>

        {/* Medicamp Project Card */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full h-fit perspective mx-auto"
        >
          <div className="relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180 focus:rotate-y-180 active:rotate-y-180">
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden rounded-xl glass p-6 border border-chart-4 shadow-md">
              <h3 className="text-xl font-bold mb-4">Medicamp</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>Full-Stack MERN Application:</strong> Built using
                  MongoDB, Express.js, React, and Node.js.
                </li>
                <li>
                  <strong>Authentication:</strong> Implements JWT and Firebase
                  login.
                </li>
                <li>
                  <strong>Payments:</strong> Integrated with Stripe.
                </li>
                <li>
                  <strong>Role-Based Dashboards:</strong> Admin & User UI.
                </li>
                <li>
                  <strong>User Experience:</strong> Dark mode, Lottie, feedback
                  system.
                </li>
                <li>
                  <strong>Performance:</strong> Real-time updates & pagination.
                </li>
                <li>
                  <strong>Design:</strong> ShadCN/UI + Tailwind CSS.
                </li>
              </ul>
            </div>

            {/* Back Side - Iframe */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-chart-4">
              <iframe
                src="https://mongo-medicamp.web.app/"
                title="Medicamp Preview"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://mongo-medicamp.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/aanafiu/mongo-medicamp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              GitHub Repo <FaGithub />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full h-fit perspective mx-auto"
        >
          <div className="relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180 focus:rotate-y-180 active:rotate-y-180">
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden rounded-xl p-6 border border-chart-4 shadow-md">
              <h3 className="text-xl font-bold mb-4">Volunteer Lagbe</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>Frontend:</strong> Built with React, Tailwind CSS, and
                  DaisyUI.
                </li>
                <li>
                  <strong>Firebase Integration:</strong> Authentication, Hosting
                  & Firestore DB.
                </li>
                <li>
                  <strong>Role Management:</strong> Admin and Volunteer
                  dashboards with restricted routes.
                </li>
                <li>
                  <strong>Volunteer Booking:</strong> Users can post and manage
                  volunteer requests.
                </li>
                <li>
                  <strong>Real-Time Feedback:</strong> Reviews and request
                  management in dashboards.
                </li>
                <li>
                  <strong>UI/UX:</strong> Responsive layout with mobile-first
                  design principles.
                </li>
                <li>
                  <strong>Routing:</strong> Protected Routes using React Router
                  DOM.
                </li>
              </ul>
            </div>

            {/* Back Side - Live Preview */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-chart-4">
              <iframe
                src="https://mongo-volunteer-lagbe.web.app/"
                title="Volunteer Lagbe Preview"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://mongo-volunteer-lagbe.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/aanafiu/firebase-volunteer-lagbe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              GitHub Repo <FaGithub />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full h-fit  perspective mx-auto"
        >
          <div className="relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180 focus:rotate-y-180 active:rotate-y-180">
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden rounded-xl p-6 border border-chart-4 shadow-md">
              <h3 className="text-xl font-bold mb-4">Coupon Letters</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>Purpose:</strong> Manage and distribute promotional
                  coupon letters via a clean UI.
                </li>
                <li>
                  <strong>React + Firebase:</strong> Authentication, Firestore
                  data, and hosting.
                </li>
                <li>
                  <strong>Role-Based Access:</strong> Admin dashboard with
                  letter sending & review features.
                </li>
                <li>
                  <strong>Live Tracking:</strong> View sent coupons, responses,
                  and detailed statistics.
                </li>
                <li>
                  <strong>Security:</strong> Firebase auth and secure Firestore
                  rules for data protection.
                </li>
                <li>
                  <strong>Minimal UI:</strong> Elegant and focused user
                  interface with Tailwind CSS.
                </li>
              </ul>
            </div>

            {/* Back Side - Live Preview */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-chart-4">
              <iframe
                src="https://reactfirebase-coupon-letters.web.app/"
                title="Coupon Letters Preview"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://reactfirebase-coupon-letters.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/aanafiu/reactfirebase-coupon-letters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              GitHub Repo <FaGithub />
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-full h-fit perspective mx-auto"
        >
          <div className="relative w-full h-[500px] transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180 focus:rotate-y-180 active:rotate-y-180">
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden rounded-xl glass p-6 border border-chart-4 shadow-md">
              <h3 className="text-xl font-bold mb-4">To-Do Latest</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>React + Firebase:</strong> A modern task management
                  app using React and Firebase.
                </li>
                <li>
                  <strong>Authentication:</strong> Firebase login and secure
                  Firestore storage.
                </li>
                <li>
                  <strong>Features:</strong> Add, edit, delete, complete, and
                  organize tasks with priority.
                </li>
                <li>
                  <strong>Drag and Drop:</strong> Task reordering using
                  beautiful dnd support.
                </li>
                <li>
                  <strong>Responsive UI:</strong> Mobile-friendly interface with
                  smooth transitions.
                </li>
                <li>
                  <strong>Animations:</strong> Engaging Lottie files for UI
                  delight and user feedback.
                </li>
              </ul>
            </div>

            {/* Back Side - Live Preview */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-chart-4">
              <iframe
                src="https://r7t4d5-kikikorbo.web.app/"
                title="To-Do App Preview"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://r7t4d5-kikikorbo.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/aanafiu/TO-DO-Latest-Client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chart-4 font-semibold hover:underline flex items-center gap-1"
            >
              GitHub Repo <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

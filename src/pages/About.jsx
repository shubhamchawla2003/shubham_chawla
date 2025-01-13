
const About = () => {
  const card = [
    {
      id: 1,
      src: "https://ru.w3docs.com/uploads/media/book_gallery/0001/02/849d4286475e04155fd5f21861f16f53db95ac72.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://logospng.org/download/javascript/logo-javascript-icon-256.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
      title: "Vite",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10">
      
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-indigo-500">
            About Me
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="text-lg md:text-xl text-gray-300 space-y-6">
          <p>
            I'm <span className="text-pink-400 font-bold">Shubham Chawla</span>,
            a passionate frontend developer from Rajasthan, India. Currently, I
            am studying at <span className="text-indigo-400">IIT Delhi</span>.
            I'm available to take on exciting new projects, so feel free to
            contact me for collaborations.
          </p>
          <p>
            With professional expertise in frontend development, I bring a mix
            of creativity and technical skill to every project. My enthusiasm
            and dedication ensure top-notch results for clients and projects.
          </p>
        </div>
      </div>

     
      <div className="mt-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-indigo-500">
            Skills
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4">
            Technologies I've worked with
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {card.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-lg hover:scale-105 transform transition-all duration-300 rounded-lg py-6 flex flex-col items-center justify-center bg-gray-800 ${style}`}
              >
                <img
                  src={src}
                  alt={title}
                  className="w-20 h-20 object-contain"
                />
                <p className="mt-4 text-lg font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


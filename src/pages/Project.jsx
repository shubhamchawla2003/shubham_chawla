
import { NavLink } from "react-router-dom";
import quiz from "../pages/quiz.png";
import meal_search from "../pages/meal_search.png";
import cart from "../pages/cart.png";
//import curd from "../pages/curd.png";
import weather from "../pages/weather.png";
import Todo from "../pages/todo.png"
import AI1 from "../pages/AI1.png"


const Project = () => {
  const card = [
    {
      id:1,
      src:AI1,
      src2:"https://react-ai-neon.vercel.app/",
    },
    {
      id:2,
      src:weather,
      src2:"https://weather-app-4as6.vercel.app/",
    },
    {
      id: 3,
      src: Todo,
      src2: "https://my-todo-app-sooty-seven.vercel.app/",
    },
    {
      id: 4,
      src: cart,
      src2: "https://add-to-cart-blue-ten.vercel.app/",
    },
    {
      id: 5,
      src: quiz,
      src2: "https://quiz-app-6sy9.vercel.app/",
    },
    {
      id: 6,
      src: meal_search,
      src2: "https://meal-search-azure.vercel.app/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white py-10">
      
      <div className="text-center mb-10">
        <h1 className="text-indigo-500 font-extrabold text-4xl md:text-5xl">
          My Projects
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          A collection of my best work showcasing creativity and functionality.
        </p>
        <div className="w-20 h-1 bg-yellow-300 mx-auto mt-4 rounded-full"></div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {card.map(({ id, src, src2 }) => (
          <div
            key={id}
            className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
          >
            
            <NavLink to={src2} target="_blank" rel="noopener noreferrer">
              <img
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
                src={src}
                alt={`Project ${id}`}
              />
            </NavLink>

           
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-indigo-400">
                Project {id}
              </h3>
             
              <NavLink
                to={src2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
              >
                View Project
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;


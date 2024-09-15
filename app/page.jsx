import Feed from "@/Components/Feed"
import "@/styles/global.css"

const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
   <h1 className="head_text text-center">Disover & Share
   <br className="max-md:hidden"/>
   <span className="orange_gradient text-center">AI-Powered Prompts</span>
   </h1>
   <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a recusandae debitis inventore earum unde praesentium! Illum fugiat, excepturi, nisi quaerat, laborum similique ea sed debitis ut tempora laudantium explicabo!</p>
   <Feed/>
   </section>
  )
}

export default Home
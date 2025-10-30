import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import './App.css';
import Card from './Card/Card.tsx';
// import Background from './Background/Background.tsx';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Project {
  id: number;
  title: string;
  date: string;
  content: string;
  tags?: string[];
  link?: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
        return;
      }

      setProjects(data || []);
    }

    loadProjects();
  }, []);

  let projectElements: React.ReactElement[] = [];
  for (let i = 0; i < projects.length; i++) {
    projectElements.push(<Card key={i} {...projects[i]} />);
  }

  return(
    <>
    {/* <Background></Background> */}
      <div className="cardContainer">
        {projectElements}
        {/* <Card title="Project 1" content="Description"></Card>
        <Card title="Project 2" content="Description" tags={["HTML", "CSS", "JavaScript"]}></Card>
        <Card title="Project 3" content="Description"></Card> */}
      </div>
    </>
  )
}

export default Projects;

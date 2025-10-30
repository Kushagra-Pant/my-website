import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import './App.css';
import Card from './Card/Card.tsx';
import WideCard from "./Card/WideCard.tsx";
import TagRow from "./TagRow/TagRow.tsx";
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
  let alltags: string[] = [];

  for (let i = 0; i < projects.length; i++) {
    projectElements.push(<Card key={i} {...projects[i]} />);

    for (let t = 0; t < (projects[i].tags?.length ?? 0); t++) {
      const tag = projects[i].tags![t];
      if (!alltags.includes(tag)) {
        alltags.push(tag);
      }
    }
  }

  return(
    <>
    {/* <Background></Background> */}
      <WideCard title="Projects" content="Over the years, I have aquired many skills that are demonstrated through my extensive projects. This page details each of them, with the more impressive projects being found towards the top. \n Each project has specific tags that allow you to see which skill I demonstrated in building the project. Here are a list of all my skills, and you can Ctrl+F them in case you want to find projects with the specific skill.">
        <TagRow tags={alltags.sort()}></TagRow>
      </WideCard>
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

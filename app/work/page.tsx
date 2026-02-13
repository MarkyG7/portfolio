import ProjectGrid from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <main>
      <ProjectGrid projects={projects} />
    </main>
  );
}

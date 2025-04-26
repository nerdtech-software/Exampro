import { Route, Routes } from 'react-router-dom';
import BootcampCard from './BootcampCard';
import CourseCard from './CourseCard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Main() {
  const courses = [
    { title: "GenAI Essentials", imgSrc: "/genai-badge.png" },
    { title: "Solutions Architect Professional", imgSrc: "/aws-badge.png" },
    { title: "KCNA", imgSrc: "/kubernetes-badge.png" },
    { title: "Terraform", imgSrc: "/terraform-badge.png" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar stays always */}
      <Sidebar /> 

      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Main Right Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            {/* Home */}
            <Route path="/main" element={<Home courses={courses} />} />

            {/* Sidebar Pages */}
            <Route path="/amazon" element={<PageTemplate title="Amazon Web Services" />} />
            <Route path="/azure" element={<PageTemplate title="Azure" />} />
            <Route path="/comptia" element={<PageTemplate title="CompTIA" />} />
            <Route path="/github" element={<PageTemplate title="GitHub" />} />
            <Route path="/google" element={<PageTemplate title="Google Cloud" />} />
            <Route path="/hashicorp" element={<PageTemplate title="HashiCorp" />} />
            <Route path="/kubernetes" element={<PageTemplate title="Kubernetes (CNCF)" />} />
            <Route path="/lpi" element={<PageTemplate title="LPI" />} />
            <Route path="/oracle" element={<PageTemplate title="Oracle Cloud" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function Home({ courses }: { courses: { title: string, imgSrc: string }[] }) {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming Bootcamps</h2>
        <BootcampCard 
          title="GenAI Bootcamp" 
          imgSrc="/genai-badge.png" 
          tier="Free Tier"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Most Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} title={course.title} imgSrc={course.imgSrc} />
          ))}
        </div>
      </section>
    </>
  );
}

function PageTemplate({ title }: { title: string }) {
  return (
    <div className="text-2xl font-bold text-gray-800">
      {title} Page Coming Soon!
    </div>
  );
}

export default Main;

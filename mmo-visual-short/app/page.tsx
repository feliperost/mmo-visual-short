import Sidebar from "./components/sidebar";
import RightSidebar from "./components/rightSidebar";

export default function Home() {
  return (
    <main>
      <Sidebar/>
        {/* make this \/ change with the sidebar navigation */}
        <p>Welcome to Deadwell!</p>
      <RightSidebar/>
    </main>
  );
}

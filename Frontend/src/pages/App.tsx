import Lead from "./Lead";
import AppSidebar from "@/components/common/AppSideBar";

const App = () => {
  return (
    <div className='flex h-screen w-full p-2 md:p-5'>
      <AppSidebar />
      <main className='flex-1 overflow-y-auto'>
        <Lead />
      </main>
    </div>
  );
};

export default App;

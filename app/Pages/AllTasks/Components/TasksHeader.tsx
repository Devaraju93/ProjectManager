import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from '@mui/icons-material/Menu';

function TasksHeader() {
  return (
    <div className=" flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center">
      <div className="border-b-2  border-orange-600 h-[39px] w-11 justify-center flex items-center">
        <SearchIcon
          className="text-slate-400 outline-none"
          sx={{ fontSize: "26px" }}
        />
      </div>

      <div className="border-b-2 border-slate-200">
        <input
          placeholder="search a task..."
          className="p-2 bg-transparent text-[14px] outline-none"
        />
      </div>
    </div>
  );
}

function AddProjectButton() {
  return (
    <div className="flex gap-3 items-center ">
    <button className="bg-orange-600 text-white p-2 text-[14px] rounded-md  flex gap-1 items-center">
      <AddIcon className="mt-[2px]" sx={{ fontSize: "22px" }} />
      <span className="max-sm:hidden pr-2">New Task</span>
    </button>
    <MenuIcon
    className="text-slate-400 h-9 cursor-pointer hidden max-sm:block"
    />
    </div>
  );
}

export default TasksHeader;

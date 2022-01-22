function UserProfile() {
  return <div className="border p-3 pr-6 w-max overflow-x-hidden font-readex bg-white shadow-lg rounded-md absolute -top-14 xl:top-5 right-0 flex flex-col gap-4 z-30 hover:z-50">
      <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-slate-300"></div>
          <div>
              <h3 className="text-sm md:text-lg font-bold">Akhil Raj</h3>
              <p className="text-xs">akhilrajktt@gmail.com</p>
          </div>
      </div>
  </div>;
}

export default UserProfile;
